"use client";
import { motion } from 'framer-motion';
import React from 'react';

function ValuesStatement() {
  // Fast falling down animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: -100,
      filter: "blur(10px)",
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.6
      }
    }
  };

  const backgroundVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-60 h-60 bg-[#001C73]/5 rounded-full blur-2xl"
        variants={backgroundVariants}
        animate="animate"
      />
      
      <motion.div 
        className="absolute bottom-10 right-10 w-80 h-80 bg-[#0026A3]/5 rounded-full blur-2xl"
        variants={backgroundVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#001C73]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto flex flex-col gap-8 justify-center items-center text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Main Heading with Falling Animation */}
        <motion.h1 
          className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#001C73] leading-tight"
          variants={textVariants}
        >
          We are a people-orientated, progressive business, driven by our values to deliver lasting change for our stakeholders and the communities we work in.
        </motion.h1>

        {/* Description with Falling Animation */}
        <motion.p 
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl"
          variants={textVariants}
        >
          We are passionate about our role in providing vital buildings and infrastructure across the country, committed to the idea that what we do makes a real difference to people's lives. Our purpose, vision and values shape our culture, proactively guiding our day-to-day activities and keeping us focused on what's important to us.
        </motion.p>

        {/* Decorative Elements */}
        <motion.div 
          className="flex gap-4 mt-4"
          variants={textVariants}
        >
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-[#001C73] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ValuesStatement;