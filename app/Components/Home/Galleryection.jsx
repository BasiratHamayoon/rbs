"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTimes, FaSpinner, FaExpand, FaArrowRight } from "react-icons/fa";

// Import your images
import image1 from '../../../public/Home/1.jpg'
import image2 from '../../../public/Home/2.jpg'
import image3 from '../../../public/Home/3.jpg'
import image4 from '../../../public/Home/4.jpg'

// Sample gallery images - you can use the same images from your gallery page
const galleryImages = [
  { id: 1, src: image1, alt: "Modern Residential Complex" },
  { id: 2, src: image2, alt: "Commercial Office Tower" },
  { id: 3, src: image3, alt: "Hospitality Resort Project" },
  { id: 4, src: image4, alt: "Educational Campus" },
];

function GallerySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImageLoading(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsImageLoading(false);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
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
              Project <span className="text-[#001C73]">Gallery</span>
            </motion.h2>
            <motion.p 
              className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8'
              variants={titleVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              A glimpse into our exceptional construction projects. Explore our complete portfolio showcasing innovative designs and quality craftsmanship.
            </motion.p>
          </div>

          {/* Gallery Grid */}
          <motion.div 
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className='relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg'
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onClick={() => handleImageClick(image)}
              >
                {/* Gallery Image */}
                <div className='aspect-square relative overflow-hidden rounded-2xl'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center'>
                    <motion.div
                      className='bg-white/90 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaExpand className="text-[#001C73] text-lg" />
                    </motion.div>
                  </div>
                </div>

                {/* Project Type Badge */}
                <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full'>
                  <span className='text-sm font-semibold text-[#001C73]'>
                    {image.alt.split(' ')[0]}
                  </span>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-[#001C73] rounded-2xl blur-md opacity-0 group-hover:opacity-20 -z-10 transition-opacity duration-300"
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
                Explore Our Complete Portfolio
              </motion.h3>
              <motion.p 
                className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1 }}
              >
                Discover our full range of construction projects including residential complexes, commercial towers, healthcare facilities, and infrastructure developments.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/Pages/gallery" 
                  className="inline-flex items-center gap-3 bg-white text-[#001C73] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View Full Gallery
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative bg-black rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh]"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="text-xl" />
              </motion.button>

              {/* Explore More Button */}
              <motion.div
                className="absolute top-4 left-4 z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link 
                  href="/Pages/gallery"
                  className="bg-[#001C73] hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2"
                  onClick={handleCloseModal}
                >
                  Explore More
                  <FaArrowRight className="text-xs" />
                </Link>
              </motion.div>

              {/* Image Container */}
              <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                {isImageLoading && (
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center bg-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <FaSpinner className="text-white text-4xl" />
                    </motion.div>
                    <motion.p 
                      className="absolute bottom-10 text-white text-lg font-semibold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Loading image...
                    </motion.p>
                  </motion.div>
                )}
                
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  onLoad={handleImageLoad}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold text-lg mb-1">{selectedImage.alt}</h3>
                <p className="text-gray-300 text-sm">Click navigation arrows to browse more projects</p>
              </div>

              {/* Navigation Arrows */}
              <motion.button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                  const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                  handleImageClick(galleryImages[prevIndex]);
                }}
              >
                ‹
              </motion.button>

              <motion.button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                  const nextIndex = (currentIndex + 1) % galleryImages.length;
                  handleImageClick(galleryImages[nextIndex]);
                }}
              >
                ›
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default GallerySection