"use client"
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { videoOptimizer } from '@/../utils/videoOptimization.js';
import Loader from '@/components/Loader';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingType, setLoadingType] = useState(''); // 'projects' or 'contact'
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

  const handleButtonClick = (type) => {
    setIsLoading(true);
    setLoadingType(type);
    // Set a timeout to hide the loader in case navigation fails
    setTimeout(() => {
      setIsLoading(false);
      setLoadingType('');
    }, 3000); // Hide loader after 3 seconds if still showing
  };

  // Animation variants
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
    <>
      {isLoading && <Loader />}
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8 md:pt-20 md:pb-12">
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
        
        {/* Main Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col items-end justify-center text-right space-y-6 md:space-y-8 lg:space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >

            {/* Heading - Adjusted size and alignment */}
            <motion.div 
              className="w-full space-y-4 md:space-y-6"
              variants={itemVariants}
            >
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight md:leading-tight lg:leading-tight text-center"
              >
                Building Your Dreams <br className="hidden sm:block" /> With Precision
              </motion.h1>
            </motion.div>

            {/* Description - Responsive text */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl md:max-w-3xl mx-auto px-2 sm:px-0 text-center"
            >
              We transform visions into reality with innovative construction solutions, 
              unmatched expertise, and commitment to excellence in every project we undertake.
            </motion.p>

            {/* CTA Buttons - Responsive layout */}
            <motion.div 
              variants={itemVariants}
              className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
                <Link 
                  href="/Pages/projects" 
                  onClick={() => handleButtonClick('projects')}
                  className="flex-1 min-w-[200px] sm:min-w-0"
                >
                  <motion.button 
                    className="w-full bg-[#001C73] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#0026A3] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group cursor-pointer text-sm sm:text-base"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Explore Our Projects</span>
                    <motion.svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2" 
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
                </Link>
                
                <Link 
                  href="/Pages/contactus" 
                  onClick={() => handleButtonClick('contact')}
                  className="flex-1 min-w-[200px] sm:min-w-0"
                >
                  <motion.button 
                    className="w-full border-2 border-white text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-[#001C73] transform hover:scale-105 transition-all duration-300 backdrop-blur-sm flex items-center justify-center group cursor-pointer text-sm sm:text-base"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#ffffff",
                      color: "#001C73"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </motion.svg>
                    <span>Contact Us</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
