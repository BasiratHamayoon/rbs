"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaHouse, FaAngleRight, FaPaintRoller, FaCampground } from "react-icons/fa6";
import { GiDefensiveWall, GiBrickWall, GiWoodenFence, GiKitchenScale } from "react-icons/gi";
import { MdBathroom } from "react-icons/md";

const servicesData = [
    { 
        icon: <FaHouse className="text-4xl" />, 
        title: "EXTENSIONS", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna", 
        specialization: "Sed do eiusmod tempor incididunt ut labore et dolore magna" 
    },
    { 
        icon: <GiDefensiveWall className="text-4xl" />, 
        title: "PLESTERING", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna", 
        specialization: "Sed do eiusmod tempor incididunt ut labore et dolore magna" 
    },
    { 
        icon: <GiBrickWall className="text-4xl" />, 
        title: "TILING", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna", 
        specialization: "Sed do eiusmod tempor incididunt ut labore et dolore magna" 
    },
    { 
        icon: <FaPaintRoller className="text-4xl" />, 
        title: "PAINTING & DECORATING", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna", 
        specialization: "Sed do eiusmod tempor incididunt ut labore et dolore magna" 
    },
    { 
        icon: <GiWoodenFence className="text-4xl" />, 
        title: "FENCING", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna", 
        specialization: "Sed do eiusmod tempor incididunt ut labore et dolore magna" 
    },
    { 
        icon: <FaCampground className="text-4xl" />, 
        title: "GROUND WORKS", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna", 
        specialization: "Sed do eiusmod tempor incididunt ut labore et dolore magna" 
    },
    { 
        icon: <GiKitchenScale className="text-4xl" />, 
        title: "KITCHENS", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna", 
        specialization: "Sed do eiusmod tempor incididunt ut labore et dolore magna" 
    },
    { 
        icon: <MdBathroom className="text-4xl" />, 
        title: "BATHROOMS", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna", 
        specialization: "Sed do eiusmod tempor incididunt ut labore et dolore magna" 
    },         
]

function WhatWeDo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const titleVariants = {
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
  }

  const cardVariants = {
    front: {
      rotateY: 0,
      transition: {
        duration: 0.4, // Faster animation
        ease: "easeInOut"
      }
    },
    back: {
      rotateY: 180,
      transition: {
        duration: 0.4, // Faster animation
        ease: "easeInOut"
      }
    }
  }

  return (
     <section 
        ref={ref}
        className='py-20 bg-[#001C73]' 
     >
        <div className='max-w-7xl mx-auto px-8 lg:px-20'>
            {/* Section Title */}
            <motion.h1 
                className='text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16'
                variants={titleVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                WHAT WE DO
            </motion.h1>

            {/* Services Grid */}
            <motion.div 
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        className='relative h-80 cursor-pointer'
                        variants={itemVariants}
                    >
                        {/* 3D Flip Card Container */}
                        <div className='relative w-full h-full' style={{ perspective: '1000px' }}>
                            <motion.div
                                className='relative w-full h-full'
                                style={{ 
                                    transformStyle: 'preserve-3d'
                                }}
                                initial="front"
                                whileHover="back"
                                variants={cardVariants}
                            >
                                {/* Front of Card */}
                                <div 
                                    className='absolute inset-0 bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center text-center'
                                    style={{ backfaceVisibility: 'hidden' }}
                                >
                                    {/* Icon */}
                                    <motion.div 
                                        className='text-[#001C73] mb-4'
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {service.icon}
                                    </motion.div>
                                    
                                    {/* Title */}
                                    <h3 className='text-xl font-bold text-gray-800 mb-3'>
                                        {service.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className='text-gray-600 text-sm leading-relaxed'>
                                        {service.description}
                                    </p>

                                    {/* Hover Indicator */}
                                    <motion.div 
                                        className="absolute bottom-4 text-[#001C73] text-sm font-semibold flex items-center gap-1"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span>Hover for details</span>
                                        <FaAngleRight className="text-xs" />
                                    </motion.div>
                                </div>

                                {/* Back of Card */}
                                <div 
                                    className='absolute inset-0 bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center text-center'
                                    style={{ 
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)'
                                    }}
                                >                                   
                                    <p className='text-gray-600 text-sm leading-relaxed mb-6'>
                                        {service.specialization}
                                    </p>

                                    {/* More Details Button */}
                                    <motion.button
                                        className='bg-[#001C73] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 group'
                                        whileHover={{ 
                                            scale: 1.05,
                                            boxShadow: "0 10px 25px -5px rgba(0, 28, 115, 0.4)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span>More Details</span>
                                        <motion.span
                                            animate={{ x: 0 }}
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <FaAngleRight className="w-4 h-4" />
                                        </motion.span>
                                    </motion.button>

                                    {/* Service Title on Back */}
                                    <motion.p 
                                        className='absolute bottom-4 text-gray-400 text-sm font-medium'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {service.title}
                                    </motion.p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Card Glow Effect */}
                        <motion.div
                            className="absolute inset-0 bg-[#001C73] rounded-2xl blur-md opacity-0 -z-10"
                            whileHover={{ opacity: 0.3 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
     </section>
  )
}

export default WhatWeDo