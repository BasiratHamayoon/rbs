"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function SafetySection() {
  // New stunning animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        duration: 1.2
      }
    }
  };

  const slideUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInLeftVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      rotate: -5
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const slideInRightVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      rotate: 5
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const pulseScaleAnimation = {
    scale: [1, 1.05, 1],
    rotate: [0, 1, -1, 0],
    transition: {
      scale: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      },
      rotate: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowAnimation = {
    boxShadow: [
      "0 0 0px rgba(0, 28, 115, 0.1)",
      "0 0 30px rgba(0, 28, 115, 0.4)",
      "0 0 60px rgba(0, 28, 115, 0.2)",
      "0 0 0px rgba(0, 28, 115, 0.1)"
    ],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingOrbits = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textRevealVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const staggerTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const paragraphVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      filter: "blur(5px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-white">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-[#001C73]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-[#001C73]/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Floating particles */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#001C73]/20 rounded-full"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#001C73]/30 rounded-full"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div 
        className="relative z-10 lg:px-20 px-6 max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Header Section with stunning entrance */}
        <motion.div 
          className="text-center mb-20"
          variants={slideUpVariants}
        >
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-[#001C73] mb-6 relative"
              variants={textRevealVariants}
            >
              SITE SAFETY
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#001C73] to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.h1>
          </motion.div>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-[#001C73] to-[#001C73]/50 mx-auto mb-8 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 128, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          />
          
          <motion.p 
            className="text-2xl text-gray-600 max-w-2xl mx-auto font-light"
            variants={textRevealVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Building with <span className="font-semibold text-[#001C73]">Safety</span> as our Foundation
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-20 lg:gap-24">
          {/* Image Section with enhanced animations */}
          <motion.div 
            className="relative flex justify-center items-center"
            variants={slideInLeftVariants}
          >
            <motion.div
              className="relative"
              animate={pulseScaleAnimation}
              whileHover={{ scale: 1.05 }}
            >
              {/* Glow effect container */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-br from-[#001C73]/20 to-[#001C73]/5 rounded-3xl blur-xl"
                animate={glowAnimation}
              />
              
              {/* Main Image Container */}
              <motion.div 
                className="relative bg-white rounded-3xl p-6 border-2 border-[#001C73]/20 shadow-2xl hover:shadow-3xl transition-all duration-500"
                whileHover={{ 
                  borderColor: "#001C73/40",
                  y: -5
                }}
              >
                <Image 
                  src={'/Home/safty.png'} 
                  alt='Safety Image' 
                  className="rounded-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  width={600}
                  height={500}
                  priority
                />
                
                {/* Animated Safety Badge */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-[#001C73] to-[#0026A3] text-white px-5 py-3 rounded-full font-bold text-sm shadow-2xl"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: 1.2
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                   SAFE
                </motion.div>
              </motion.div>

              {/* Orbiting elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-12 h-12 bg-[#001C73]/10 rounded-full border-2 border-[#001C73]/20"
                variants={floatingOrbits}
                animate="animate"
              />
              <motion.div 
                className="absolute -bottom-8 -right-8 w-10 h-10 bg-[#001C73]/15 rounded-full border-2 border-[#001C73]/25"
                variants={floatingOrbits}
                animate="animate"
                transition={{ delay: 1 }}
              />
            </motion.div>
          </motion.div>

          {/* Text Content Section with enhanced animations */}
          <motion.div 
            className="space-y-8"
            variants={slideInRightVariants}
          >
            <motion.div 
              className="space-y-8 text-gray-700 leading-relaxed text-lg"
              variants={staggerTextVariants}
            >
              <motion.div 
                className="relative"
                variants={paragraphVariants}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.span 
                  className="font-bold text-[#001C73] text-2xl block mb-4 relative"
                  whileHover={{ scale: 1.02 }}
                >
                  At RBS Construction,
                  <motion.div 
                    className="absolute -left-4 top-0 w-1 h-full bg-[#001C73] rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </motion.span>
                <motion.p 
                  className="text-justify text-gray-600 text-lg leading-8"
                  whileHover={{ scale: 1.01 }}
                >
                  we prioritize the health and safety of all individuals involved in the construction process. From employers to employees, subcontractors to vendors, every person on-site is integral to the successful and safe completion of each project.  Our team follows strict safety protocols and regulations to minimize risks and ensure a secure working environment. We believe that a safe workplace fosters productivity and ensures that every individual can contribute to the project without fear of injury. Regular safety training and audits are conducted to stay compliant with the latest industry standards. We are committed to continuous improvement in safety practices to protect the well-being of our workforce.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default SafetySection;