"use client"
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { videoOptimizer, getVideoQuality } from '@/../utils/videoOptimization.js';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRefs = useRef([]);

  // Original video URLs
  const originalVideos = [
    "/Home/video1.mp4",
    "/Home/video2.mp4",
    "/Home/video3.mp4",
    "/Home/video4.mp4"
  ];

  // Get optimized video sources based on device and connection
  const [optimizedVideos, setOptimizedVideos] = useState(originalVideos);

  useEffect(() => {
    // Set optimized videos after component mounts (client-side only)
    setOptimizedVideos(
      videoOptimizer.getOptimizedVideoSources(originalVideos)
    );
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (optimizedVideos.length === 0) return;

    // Preload first video
    videoOptimizer.preloadVideo(optimizedVideos[0])
      .then(() => {
        setIsVideoLoaded(true);
        // Start video carousel after first video is loaded
        startVideoCarousel();
      })
      .catch(console.warn);

    // Preload next videos
    videoOptimizer.preloadNextVideos(0, optimizedVideos);

    return () => {
      videoOptimizer.cleanup();
    };
  }, [optimizedVideos]);

  const startVideoCarousel = () => {
    const videoInterval = setInterval(() => {
      setCurrentVideo((prev) => {
        const next = (prev + 1) % optimizedVideos.length;
        // Preload next videos when changing
        videoOptimizer.preloadNextVideos(next, optimizedVideos);
        return next;
      });
    }, 5000);

    return () => clearInterval(videoInterval);
  };

  const handleVideoLoad = (index) => {
    if (index === currentVideo) {
      setIsVideoLoaded(true);
    }
  };

  const handleVideoError = (index, fallbackSrc) => {
    console.warn(`Failed to load video ${optimizedVideos[index]}, using fallback`);
    if (videoRefs.current[index]) {
      videoRefs.current[index].src = fallbackSrc;
    }
  };

  // Animation variants (same as your original)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatDelayedVariants = {
    animate: {
      y: [0, -25, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    }
  };

  const statsVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3 + 1.2,
        duration: 0.6,
        ease: "backOut"
      }
    })
  };

  const videoVariants = {
    enter: {
      opacity: 0,
      scale: 1.1
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Loading State */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 z-20 bg-gray-900 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-[#001C73] border-t-transparent rounded-full mx-auto mb-4"
            />
            <p>Loading experience...</p>
          </motion.div>
        </div>
      )}

      {/* Background Video Carousel */}
      <div className="absolute inset-0 z-0">
        {optimizedVideos.map((video, index) => (
          <motion.video
            key={index}
            ref={el => videoRefs.current[index] = el}
            className={`absolute inset-0 w-full h-full object-cover ${index === currentVideo ? 'block' : 'hidden'}`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            initial="enter"
            animate={index === currentVideo ? "center" : "exit"}
            variants={videoVariants}
            onLoadedData={() => handleVideoLoad(index)}
            onError={() => handleVideoError(index, originalVideos[index])}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <motion.div 
        className="absolute bottom-40 left-10 z-10 opacity-20"
        variants={floatDelayedVariants}
        animate="animate"
      >
        <div className="w-16 h-16 border-4 border-[#001C73] transform rotate-45"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-[#001C73]/20 backdrop-blur-sm rounded-full border border-[#001C73]/30"
          >
            <motion.span 
              className="w-2 h-2 bg-[#001C73] rounded-full mr-2"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.span>
            <span className="text-white text-sm font-medium">Leading Construction Company Since 1998</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Building Your Dreams<br />With Precision
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
          >
            We transform visions into reality with innovative construction solutions, 
            unmatched expertise, and commitment to excellence in every project we undertake.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 justify-center"
            variants={containerVariants}
          >
            {[{ number: '250+', label: 'Projects Completed' }, { number: '15+', label: 'Years Experience' }, { number: '98%', label: 'Client Satisfaction' }].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-white"
                variants={statsVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="text-3xl font-bold text-[#ffffff]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: index * 0.3 + 1.5,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-8 justify-center"
          >
            <motion.button 
              className="bg-[#001C73] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0026A3] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Your Project</span>
              <motion.svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.button>
            
            <motion.button 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#001C73] transform hover:scale-105 transition-all duration-300 backdrop-blur-sm flex items-center justify-center group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#001C73"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </motion.svg>
              <span>Contact Us Today</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;