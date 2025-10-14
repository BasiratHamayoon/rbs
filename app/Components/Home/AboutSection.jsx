"use client"
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAngleRight } from "react-icons/fa6";
import image from '../../../public/Home/image.jpg'

function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
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

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: 10 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      y: 50 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#001C73",
      color: "#ffffff",
      boxShadow: "0 10px 25px -5px rgba(0, 28, 115, 0.4)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.section 
      ref={ref}
      className='grid lg:grid-cols-2 grid-cols-1 py-20 justify-center items-center text-[#001C73] lg:px-40 px-8 gap-12 lg:gap-20 bg-white'
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Left Content - Text */}
      <motion.div 
        className='space-y-6'
      >
        <motion.h1 
          className='text-5xl font-bold leading-tight py-2'
          variants={textVariants}
        >
          Constructions 
          <motion.span 
            className='lg:block text-[#001C73] pl-2'
            variants={textVariants}
          >
             & Renovations
          </motion.span>
        </motion.h1>

        <motion.p 
          className='text-gray-700 text-[16px] lg:text-[18px] leading-relaxed'
          variants={textVariants}
        >
          We are a construction company based in Manchester, we undertake all aspects of construction on domestic buildings from designing to completion. We provide a professional renovation and installation services with a real focus on customer satisfaction. Our installations are carried out by fully trained staff to the highest professional standards.
        </motion.p>

        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover="hover"
          whileTap="tap"
          className='border-2 border-[#001C73] text-[#001C73] px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer flex items-center gap-3 group'
        >
          <span>More Details</span>
          <motion.span
            animate={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <FaAngleRight className="w-5 h-5" />
          </motion.span>
          <motion.div
            className="absolute inset-0 rounded-full bg-[#001C73] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          />
        </motion.button>
      </motion.div>

      {/* Right Content - Image */}
      <motion.div 
        className='flex flex-col justify-center items-center relative'
        variants={imageVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          className='relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer'
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            rotateX: mousePosition.y * -0.5,
            rotateY: mousePosition.x * 0.5,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <Image 
            src={image} 
            alt="Construction Project"
            className='w-full max-w-md h-[400px] lg:h-[450px] object-cover rounded-2xl'
            width={400}
            height={450}
          />
          
          {/* Hover Overlay Effect */}
          <motion.div
            className="absolute inset-0 bg-[#001C73] opacity-0 rounded-2xl"
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform scale-150 opacity-0"
            whileHover={{ 
              opacity: 1,
              x: ["0%", "100%"]
            }}
            transition={{
              x: {
                duration: 0.8,
                ease: "easeInOut"
              },
              opacity: {
                duration: 0.3
              }
            }}
          />
        </motion.div>

        {/* 25+ Years Badge */}
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover="hover"
          className='absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-[#001C73] text-white text-[18px] lg:text-[20px] px-6 lg:px-8 py-2 lg:py-3 rounded-xl lg:rounded-2xl font-bold shadow-2xl cursor-pointer z-10'
        >
          25+ Years
          {/* Glow Effect */}
          <motion.div
            className="absolute -inset-2 bg-[#001C73] rounded-xl lg:rounded-2xl blur-md opacity-50 -z-10"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default AboutSection;
