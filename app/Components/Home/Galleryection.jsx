"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTimes, FaSpinner, FaArrowRight } from "react-icons/fa";
import Loader from '../Loader';


// Sample project data matching your ProjectCard structure
const projectData = [
  {
    id: 1,
    title: "Modern Residential Complex",
    description: "A luxurious residential complex featuring contemporary architecture and sustainable design principles",
    category: "Residential",
    image: "/Projects/house1.jpg",
    duration: "18 months",
    size: "25,000 sq ft"
  },
  {
    id: 2,
    title: "Commercial Office Tower",
    description: "45-story commercial tower with state-of-the-art facilities and eco-friendly infrastructure",
    category: "Commercial",
    image: "/Projects/buil1.jpg",
    duration: "24 months",
    size: "180,000 sq ft"
  },
  {
    id: 3,
    title: "Luxury Hotel Resort",
    description: "Premium beachfront resort with world-class amenities and sustainable tourism features",
    category: "Hotels",
    image: "/Projects/resturent1.jpg",
    duration: "30 months",
    size: "50,000 sq ft"
  },
  {
    id: 4,
    title: "Healthcare Facility",
    description: "Advanced medical center with specialized treatment areas and patient-friendly design",
    category: "Hospitals",
    image: "/Projects/hos1.jpg",
    duration: "28 months",
    size: "120,000 sq ft"
  }
];

function GallerySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsImageLoading(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsImageLoading(false);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleViewMoreProjects = () => {
    // Close the modal first
    setSelectedProject(null);
    setIsImageLoading(false);
    
    // Then show loading and redirect
    setIsPageLoading(true);
    setTimeout(() => {
      window.location.href = '/Pages/projects';
    }, 1000);
  };

  const handleViewMoreFromModal = () => {
    // Close the modal and redirect to projects page
    handleCloseModal();
    setIsPageLoading(true);
    setTimeout(() => {
      window.location.href = '/Pages/projects';
    }, 1000);
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
  };

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
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const ctaVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {isPageLoading && <Loader />}
      
      <section 
        id="gallery"
        ref={ref}
        className='py-20 bg-gradient-to-b from-white to-gray-50 scroll-mt-20'
      >
        <div className='max-w-7xl mx-auto px-8 lg:px-20'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <motion.h2 
              className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'
              variants={titleVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Featured <span className="text-[#001C73]">Projects</span>
            </motion.h2>
            <motion.p 
              className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8'
              variants={titleVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              Explore our handpicked selection of exceptional construction projects showcasing innovative designs and quality craftsmanship.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <motion.div 
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {projectData.map((project, index) => (
              <motion.div
                key={project.id}
                className='group relative bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden cursor-pointer w-full'
                variants={itemVariants}
                whileHover={{ 
                  y: -12,
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(0, 28, 115, 0.25)",
                  transition: {
                    duration: 0.4,
                    ease: "easeOut"
                  }
                }}
                onClick={() => handleProjectClick(project)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                  {/* Project Image */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Category Badge */}
                  <motion.div 
                    className="absolute top-3 left-3 bg-gradient-to-r from-[#001C73] to-[#0038FF] text-white px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20 shadow-lg z-20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.category}
                  </motion.div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-500 ease-out flex items-end p-4 sm:p-6 z-10">
                    <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 w-full transition-all duration-500 ease-out">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-white font-bold text-lg sm:text-xl line-clamp-1">
                          {project.title}
                        </h3>
                        <div className="bg-white/90 rounded-full p-2 shadow-lg backdrop-blur-sm">
                          <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#001C73]" />
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm line-clamp-2 mb-3">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-300">
                        <span>{project.duration}</span>
                        <span>{project.size}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                      {project.title}
                    </h3>
                    <span className="text-sm text-[#001C73] font-medium bg-[#001C73]/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{project.duration}</span>
                    <span>{project.size}</span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-xl sm:rounded-2xl pointer-events-none"
                  whileHover={{
                    borderColor: "rgba(0, 28, 115, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action Section */}
          <motion.div 
            className="text-center"
            variants={ctaVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-gradient-to-r from-[#001C73] to-blue-800 rounded-2xl p-8 md:p-12 shadow-2xl">
              <motion.h3 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
              >
                Discover More Amazing Projects
              </motion.h3>
              <motion.p 
                className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1 }}
              >
                Explore our complete portfolio featuring residential complexes, commercial towers, healthcare facilities, and innovative infrastructure projects.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  onClick={handleViewMoreProjects}
                  className="inline-flex items-center gap-3 bg-white text-[#001C73] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  View More Projects
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh]"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 bg-gray-800 hover:bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="text-xl" />
              </motion.button>

              {/* Project Content */}
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section */}
                <div className="lg:w-1/2 relative">
                  <div className="relative w-full h-64 lg:h-full">
                    {isImageLoading && (
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center bg-gray-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <FaSpinner className="text-[#001C73] text-4xl" />
                        </motion.div>
                      </motion.div>
                    )}
                    
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      onLoad={handleImageLoad}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    {/* Category Badge */}
                    <span className="inline-block bg-[#001C73] text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {selectedProject.category}
                    </span>

                    {/* Project Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {selectedProject.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-500 mb-1">Duration</div>
                        <div className="font-semibold text-gray-900">{selectedProject.duration}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-500 mb-1">Size</div>
                        <div className="font-semibold text-gray-900">{selectedProject.size}</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button 
                      onClick={handleViewMoreFromModal}
                      className="flex-1 bg-[#001C73] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 text-center"
                    >
                      View More Projects
                    </button>
                    <button 
                      onClick={handleCloseModal}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default GallerySection