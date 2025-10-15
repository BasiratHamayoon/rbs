"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Loader from '@/components/Loader';

const PartnershipSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingType, setLoadingType] = useState(''); // 'projects' or 'partnership'

  const handleButtonClick = (type) => {
    setIsLoading(true);
    setLoadingType(type);
    // Set a timeout to hide the loader in case navigation fails
    setTimeout(() => {
      setIsLoading(false);
      setLoadingType('');
    }, 3000); // Hide loader after 3 seconds if still showing
  };

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
      x: -40 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 40,
      scale: 1.1 
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left Image */}
            <motion.div 
              className="flex-1 flex items-center justify-center"
              variants={imageVariants}
            >
              <div className="relative w-full max-w-lg">
                <motion.img
                  src="/Whyus/t.jpg"
                  alt="RBS Construction Partnership"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Partnership Badge */}
                <motion.div 
                  className="absolute -top-4 -left-4 bg-[#001C73] text-white px-4 py-2 rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm font-medium">Trusted Partners</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              className="flex-1 flex items-center justify-center"
              variants={containerVariants}
            >
              <div className="w-full space-y-8">
                <motion.div variants={itemVariants}>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Strategic <span className="text-[#001C73]">Partnerships</span>
                  </h2>
                  
                  <div className="w-20 h-1 bg-[#001C73] rounded-full mb-6"></div>
                </motion.div>

                <motion.p 
                  className="text-lg text-gray-600 leading-relaxed"
                  variants={itemVariants}
                >
                  We work closely with third sector partners to focus on issues that are important to 
                  our business and our people. Our collaborative approach ensures that we deliver 
                  comprehensive solutions that benefit all stakeholders.
                </motion.p>

                <motion.div 
                  className="space-y-4"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-8 h-8 bg-[#001C73] rounded-full flex items-center justify-center text-white flex-shrink-0"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <span className="text-gray-700">Community Development Initiatives</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-8 h-8 bg-[#001C73] rounded-full flex items-center justify-center text-white flex-shrink-0"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <span className="text-gray-700">Sustainable Construction Practices</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-8 h-8 bg-[#001C73] rounded-full flex items-center justify-center text-white flex-shrink-0"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <span className="text-gray-700">Industry-leading Technology Partners</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="pt-4 flex flex-col sm:flex-row gap-4"
                  variants={itemVariants}
                >
                  <Link 
                    href="/Pages/projects" 
                    onClick={() => handleButtonClick('projects')}
                    className="flex-1"
                  >
                    <motion.button 
                      className="w-full bg-[#001C73] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0026A3] transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center group cursor-pointer text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Our Projects</span>
                      <motion.svg 
                        className="w-4 h-4 ml-2" 
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
                    onClick={() => handleButtonClick('partnership')}
                    className="flex-1"
                  >
                    <motion.button 
                      className="w-full border-2 border-[#001C73] text-[#001C73] px-6 py-3 rounded-full font-semibold hover:bg-[#001C73] hover:text-white transform hover:scale-105 transition-all duration-300 text-sm cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Partnership
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PartnershipSection;