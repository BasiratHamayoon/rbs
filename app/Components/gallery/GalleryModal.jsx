"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryImageGrid from './GalleryImageGrid';

const GalleryModal = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 400);
  };

  // Mobile responsive variants
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const backdropVariants = {
    hidden: { 
      opacity: 0,
      backdropFilter: "blur(0px)"
    },
    visible: { 
      opacity: 1,
      backdropFilter: "blur(8px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: isMobile ? 0.9 : 0.8,
      y: isMobile ? 20 : 50,
      rotateX: isMobile ? 0 : 10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: isMobile ? 0.5 : 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        scale: {
          duration: isMobile ? 0.5 : 0.8,
          ease: "backOut"
        }
      }
    },
    exit: {
      opacity: 0,
      scale: isMobile ? 0.95 : 0.9,
      y: isMobile ? -10 : -30,
      rotateX: isMobile ? 0 : -5,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const staggerItem = {
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

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden relative border border-white/20 mx-2 sm:mx-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
          >
            {/* Header */}
            <motion.div 
              className="relative p-4 sm:p-6 md:p-8 border-b border-gray-100 bg-gradient-to-r from-white to-gray-50/80"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                onClick={handleClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg border border-gray-200/50 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 90,
                  backgroundColor: "rgba(255,255,255,1)"
                }}
                whileTap={{ scale: 0.9 }}
                variants={staggerItem}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              
              <div className="pr-12 sm:pr-16 md:pr-20">
                <motion.div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4" variants={staggerItem}>
                  <motion.h2 
                    className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 line-clamp-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h2>
                  <motion.span 
                    className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-[#001C73] text-white text-xs sm:text-sm font-medium rounded-full whitespace-nowrap self-start"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {project.images.length} Photos
                  </motion.span>
                </motion.div>
                
                <motion.p 
                  className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl line-clamp-3 sm:line-clamp-none"
                  variants={staggerItem}
                >
                  {project.description}
                </motion.p>
              </div>
            </motion.div>

            {/* Content */}
            <div className="h-[calc(95vh-140px)] sm:h-[calc(95vh-180px)]">
              <motion.div 
                className="h-full p-3 sm:p-4 md:p-8 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >

                {/* Image Content */}
                <motion.div 
                  className="h-[calc(100%-60px)] sm:h-[calc(100%-80px)] overflow-y-auto pr-2 sm:pr-4 no-scrollbar image-grid-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="custom-scrollbar">
                    <GalleryImageGrid items={project.images} />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;