"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaBolt, FaAward, FaUsers, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import backgroundImage from '../../../public/About/1.jpg';

const AboutHeroSection = () => {
  // Enhanced animation variants with staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative pt-20 md:pt-24 h-96 sm:h-[500px] lg:h-[600px] ">
      {/* Background Image with White Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="RBS Construction - Building Excellence"
          className="w-full h-full object-cover"
          fill
          priority
          quality={100}
        />
        {/* White Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-[1px]"></div>
        
        {/* Subtle Blue Tint for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001C73]/10 via-[#001C73]/5 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div 
          className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Premium Header Design with increased top spacing */}
          <motion.div
            className="inline-flex items-center gap-4 mb-8 mt-8 md:mt-12"
            variants={itemVariants}
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#001C73] to-[#0038FF] rounded-full"></div>
            <span className="text-sm font-bold text-[#001C73] tracking-widest uppercase bg-[#001C73]/10 px-4 py-2 rounded-full border border-[#001C73]/20">
              About RBS Construction
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-[#001C73] to-[#0038FF] rounded-full"></div>
          </motion.div>

          {/* Stunning Main Heading with responsive sizing */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">
              Building
            </span>
            {' '}
            <motion.span 
              className="bg-gradient-to-r from-[#001C73] to-[#0038FF] bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Excellence
            </motion.span>
          </motion.h1>
          
          {/* Premium Divider */}
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-[#001C73] to-[#0038FF] rounded-full mx-auto mb-6 md:mb-8 shadow-lg"
            variants={itemVariants}
          />
          
          {/* Elegant Description with responsive sizing */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-semibold mb-6 md:mb-8"
            variants={itemVariants}
          >
            Transforming visions into <span className="text-[#001C73] font-bold">iconic structures</span> with innovation and quality craftsmanship
          </motion.p>
          {/* Premium Quality Indicators - Only first two remain */}
          <motion.div 
            className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-6"
            variants={containerVariants}
          >
            {[
              { text: "Premium Quality", icon: <FaStar className="w-3 h-3" /> },
              { text: "Innovative Design", icon: <FaBolt className="w-3 h-3" /> }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-gray-200/50 z-10"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 15px 30px rgba(0, 28, 115, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#001C73] to-[#0038FF] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {item.icon}
                </div>
                <span className="text-gray-800 font-semibold text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      {/* Floating Elements for Visual Interest */}
      <motion.div
        className="absolute top-1/4 left-10 w-4 h-4 bg-[#001C73]/20 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-16 w-6 h-6 bg-[#0038FF]/15 rounded-full"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-20 w-3 h-3 bg-[#001C73]/25 rounded-full"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </section>
  );
};

export default AboutHeroSection;