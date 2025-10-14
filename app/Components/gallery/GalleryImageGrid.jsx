"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryImageGrid = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadingImages, setLoadingImages] = useState({});
  const [viewerLoading, setViewerLoading] = useState(false);

  const handleImageLoad = (index) => {
    setLoadingImages(prev => ({ ...prev, [index]: false }));
  };

  const handleImageClick = async (item, index) => {
    setViewerLoading(true);
    setSelectedImage({ item, index });
    
    // Preload the image for viewer
    const img = new Image();
    img.src = item;
    img.onload = () => setViewerLoading(false);
    img.onerror = () => setViewerLoading(false);
  };

  const handleNavigation = (newIndex) => {
    setViewerLoading(true);
    setSelectedImage(prev => ({ ...prev, index: newIndex }));
    
    const img = new Image();
    img.src = items[newIndex];
    img.onload = () => setViewerLoading(false);
    img.onerror = () => setViewerLoading(false);
  };

  if (items.length === 0) {
    return (
      <motion.div 
        className="flex items-center justify-center h-48 sm:h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl border-2 border-dashed border-gray-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center text-gray-500">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-base sm:text-lg font-medium text-gray-600">No images available</p>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Check back later for project updates</p>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
            onClick={() => handleImageClick(item, index)}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg border border-gray-200/50 bg-white">
              {/* Loading Spinner */}
              {loadingImages[index] !== false && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10 rounded-lg sm:rounded-xl">
                  <div className="text-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 sm:border-3 border-[#001C73] border-t-transparent rounded-full animate-spin mx-auto mb-1 sm:mb-2"></div>
                    <p className="text-xs text-gray-500">Loading...</p>
                  </div>
                </div>
              )}
              
              {/* Image */}
              <motion.img
                src={item}
                alt={`Construction project ${index + 1}`}
                className="w-full h-48 sm:h-64 object-cover transition-all duration-500"
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageLoad(index)}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                loading="lazy"
                decoding="async"
              />
              
              {/* Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4 sm:pb-6"
                initial={{ opacity: 0 }}
              >
                <motion.div 
                  className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ y: 20, opacity: 0 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-2xl border border-white/50">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#001C73]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM15 10l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>

              {/* Image Number Badge */}
              <motion.div 
                className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-black/80 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-white/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
              >
                #{index + 1}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 z-70 border border-white/20"
              whileHover={{ 
                scale: 1.1, 
                rotate: 90,
                backgroundColor: "rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Navigation Arrows */}
            {items.length > 1 && (
              <>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    const newIndex = (selectedImage.index - 1 + items.length) % items.length;
                    handleNavigation(newIndex);
                  }}
                  className="absolute left-2 sm:left-8 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 z-70 border border-white/20"
                  whileHover={{ 
                    scale: 1.1, 
                    x: -5,
                    backgroundColor: "rgba(255,255,255,0.2)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    const newIndex = (selectedImage.index + 1) % items.length;
                    handleNavigation(newIndex);
                  }}
                  className="absolute right-2 sm:right-8 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 z-70 border border-white/20"
                  whileHover={{ 
                    scale: 1.1, 
                    x: 5,
                    backgroundColor: "rgba(255,255,255,0.2)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </>
            )}

            {/* Image Content */}
            <div className="max-w-5xl max-h-full w-full relative flex items-center justify-center">
              {/* Loading Spinner for Viewer */}
              {viewerLoading && (
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 border-3 sm:border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-3 sm:mb-4"></div>
                    <p className="text-white text-sm font-medium">Loading Image...</p>
                  </div>
                </motion.div>
              )}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <motion.img
                  key={selectedImage.index}
                  src={items[selectedImage.index]}
                  alt={`Construction project ${selectedImage.index + 1}`}
                  className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: viewerLoading ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              {/* Counter */}
              <motion.div 
                className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                {selectedImage.index + 1} of {items.length}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryImageGrid;