"use client"
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const GalleryCard = ({ project, onClick, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Pre-optimized image URLs with multiple sizes
  const optimizedImage = useMemo(() => {
    const originalImage = project.image;
    
    // If using Next.js Image Optimization, you can add quality parameters
    if (originalImage?.includes('your-cdn.com')) {
      return `${originalImage}?w=400&h=300&q=80&format=webp`;
    }
    
    return originalImage;
  }, [project.image]);

  // Fallback construction images (should be pre-optimized)
  const fallbackImages = {
    Residential: "/Gallery/1.jpg",
    Commercial: "/Gallery/5.jpg",
    Hospitality: "/Gallery/8.jpg",
    Institutional: "/Gallery/12.jpg",
    Healthcare: "/Gallery/16.jpg",
    Infrastructure: "/Gallery/20.jpg"
  };

  const getFallbackImage = (category) => {
    return fallbackImages[category] || "/Gallery/1.jpg";
  };

  // Preload image on component mount
  useState(() => {
    const img = new Image();
    img.src = optimizedImage;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  });

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1, ease: "easeOut" }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  // Mobile optimized variants
  const mobileCardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: index * 0.08, ease: "easeOut" }
    },
    hover: {
      y: -4,
      scale: 1.01,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  // Content animation variants for group hover
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const variants = isMobile ? mobileCardVariants : cardVariants;

  return (
    <motion.div 
      className="group relative bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer border border-gray-100 w-full"
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-60 md:h-80">
        {/* Loading Skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="w-6 h-6 border-2 border-[#001C73] border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-xs text-gray-500">Loading image...</p>
            </div>
          </div>
        )}
        
        {/* Optimized Image */}
        <motion.img
          src={imageError ? getFallbackImage(project.category) : optimizedImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            console.warn(`Failed to load image: ${optimizedImage}`);
            setImageError(true);
          }}
          loading="lazy"
          decoding="async"
        />
        
        {/* Overlay with group hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-500 ease-out flex flex-col justify-end p-4 md:p-6">
          {/* Content Container - Hidden by default, shown on group hover */}
          <div className="transform translate-y-6 md:translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="space-y-2 md:space-y-4"
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 line-clamp-2">
                {project.title}
              </h3>
              
              <p className="text-gray-200 text-xs md:text-sm line-clamp-2 md:line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between pt-2 md:pt-4 border-t border-white/20">
                <span className="text-white text-xs md:text-sm font-medium">View Gallery</span>
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* View Icon - Shows on group hover */}
        <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
          <div className="bg-white/90 rounded-full p-2 md:p-3 shadow-lg backdrop-blur-sm">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#001C73]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;