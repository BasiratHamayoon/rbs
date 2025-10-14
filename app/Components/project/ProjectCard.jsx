"use client"
import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaClock, FaRulerCombined } from 'react-icons/fa';

const ProjectCard = ({ project, onClick, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Pre-optimized image URLs
  const optimizedImage = useMemo(() => {
    return project.image;
  }, [project.image]);

  // Fallback images using your naming convention
  const fallbackImages = {
    Bathrooms: "/Projects/bath1.jpg",
    Kitchens: "/Projects/kitchen1.jpg",
    Stores: "/Projects/store1.jpg",
    Restaurants: "/Projects/resturent1.jpg",
    Buildings: "/Projects/buil1.jpg",
    Houses: "/Projects/house1.jpg",
    Hospitals: "/Projects/hos1.jpg",
    Hotels: "/Projects/resturent1.jpg",
    default: "/Projects/house1.jpg"
  };

  const getFallbackImage = (category) => {
    return fallbackImages[category] || fallbackImages.default;
  };

  // Preload image on component mount
  useEffect(() => {
    const img = new Image();
    img.src = optimizedImage;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, [optimizedImage]);

  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9,
      rotateX: 10 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -12,
      scale: 1.03,
      rotateX: 5,
      boxShadow: "0 25px 50px -12px rgba(0, 28, 115, 0.25)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.15 + 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.15 + 0.5,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: index * 0.15 + 0.7
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const floatAnimation = {
    hover: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    hover: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="group relative bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden cursor-pointer w-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
        {/* Loading Skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center z-10">
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-3 border-[#001C73] border-t-transparent rounded-full mx-auto mb-2"
              />
              <p className="text-xs text-gray-500">Loading...</p>
            </div>
          </div>
        )}
        
        {/* Project Image */}
        <motion.img
          src={imageError ? getFallbackImage(project.category) : optimizedImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
          decoding="async"
        />
        
        {/* Category Badge */}
        <motion.div 
          className="absolute top-3 left-3 bg-gradient-to-r from-[#001C73] to-[#0038FF] text-white px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20 shadow-lg z-20"
          variants={badgeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={pulseAnimation}
        >
          {project.category}
        </motion.div>

        {/* Hover Overlay - Only shows on group hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-500 ease-out flex items-end p-4 sm:p-6 z-10">
          <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 w-full transition-all duration-500 ease-out">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-bold text-lg sm:text-xl line-clamp-1">
                {project.title}
              </h3>
              <div className="bg-white/90 rounded-full p-2 shadow-lg backdrop-blur-sm">
                <FaEye className="w-4 h-4 sm:w-5 sm:h-5 text-[#001C73]" />
              </div>
            </div>
            <p className="text-gray-200 text-sm line-clamp-2 mb-3">
              {project.description}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-300">
              <span className="flex items-center gap-1">
                <FaClock className="w-3 h-3" />
                {project.duration}
              </span>
              <span className="flex items-center gap-1">
                <FaRulerCombined className="w-3 h-3" />
                {project.size}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content - Always visible without hover */}
      <motion.div 
        className="p-4 sm:p-6"
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-3">
          <motion.h3 
            className="text-lg font-bold text-gray-900 line-clamp-1"
            whileHover={{ color: "#001C73" }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>
          <motion.span 
            className="text-sm text-[#001C73] font-medium bg-[#001C73]/10 px-3 py-1 rounded-full"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(0, 28, 115, 0.15)"
            }}
            transition={{ duration: 0.2 }}
          >
            {project.category}
          </motion.span>
        </div>
        
        <motion.p 
          className="text-gray-600 text-sm mb-4 line-clamp-2"
          whileHover={{ color: "#374151" }}
          transition={{ duration: 0.2 }}
        >
          {project.description}
        </motion.p>
        
        <motion.div 
          className="flex items-center justify-between text-sm text-gray-500"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-1">
            <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
              <FaClock className="w-4 h-4" />
            </motion.div>
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
              <FaRulerCombined className="w-4 h-4" />
            </motion.div>
            <span>{project.size}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Hover Border Effect */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-xl sm:rounded-2xl pointer-events-none"
        whileHover={{
          borderColor: "rgba(0, 28, 115, 0.3)",
          transition: { duration: 0.3 }
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;