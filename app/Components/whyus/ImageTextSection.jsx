"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Loader from '../Loader';


const ImageTextSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    // The navigation will happen automatically via Link component
    // We'll set a timeout to hide the loader in case navigation fails
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Hide loader after 3 seconds if still showing
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 1.05 
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const statItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
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

  const floatingCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.2
      }
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Left Content */}
            <motion.div 
              className="flex-1 flex items-center"
              variants={containerVariants}
            >
              <div className="w-full space-y-8">
                <motion.div variants={itemVariants}>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Why <span className="text-[#001C73]">Choose</span> RBS?
                  </h2>
                  
                  <motion.div 
                    className="w-20 h-1 bg-[#001C73] rounded-full mb-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  />
                </motion.div>

                <motion.div 
                  className="space-y-6"
                  variants={containerVariants}
                >
                  <motion.div 
                    className="flex items-start gap-4"
                    variants={statItemVariants}
                  >
                    <motion.div 
                      className="w-14 h-14 bg-[#001C73] rounded-full flex items-center justify-center text-white flex-shrink-0 p-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      whileInView={{ 
                        scale: [1, 1.1, 1],
                        transition: { duration: 0.6, delay: 0.5 }
                      }}
                      viewport={{ once: true }}
                    >
                      <span className="text-lg font-bold">25+</span>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Years of Excellence</h3>
                      <p className="text-gray-600">
                        Quarter-century of delivering exceptional construction projects with unwavering quality standards.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4"
                    variants={statItemVariants}
                  >
                    <motion.div 
                      className="w-14 h-14 bg-[#001C73] rounded-full flex items-center justify-center text-white flex-shrink-0 p-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      whileInView={{ 
                        scale: [1, 1.1, 1],
                        transition: { duration: 0.6, delay: 0.7 }
                      }}
                      viewport={{ once: true }}
                    >
                      <span className="text-lg font-bold">500+</span>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Successful Projects</h3>
                      <p className="text-gray-600">
                        Diverse portfolio spanning residential, commercial, and infrastructure projects.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4"
                    variants={statItemVariants}
                  >
                    <motion.div 
                      className="w-14 h-14 bg-[#001C73] rounded-full flex items-center justify-center text-white flex-shrink-0 p-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      whileInView={{ 
                        scale: [1, 1.1, 1],
                        transition: { duration: 0.6, delay: 0.9 }
                      }}
                      viewport={{ once: true }}
                    >
                      <span className="text-lg font-bold">99%</span>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Client Satisfaction</h3>
                      <p className="text-gray-600">
                        Unmatched commitment to client satisfaction with proven track record of excellence.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="pt-4"
                  variants={itemVariants}
                >
                  <Link href="/Pages/about" onClick={handleButtonClick}>
                    <motion.button 
                      className="bg-[#001C73] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0026A3] transform transition-all duration-300 shadow-lg cursor-pointer"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(0, 28, 115, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      viewport={{ once: true }}
                    >
                      Learn More About Our Process
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="flex-1 flex items-center justify-center"
              variants={imageVariants}
            >
              <div className="relative w-full max-w-lg">
                <motion.img
                  src="/Whyus/whyChoose.jpg"
                  alt="RBS Construction Site"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                
                {/* Floating Stats Card */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 border border-gray-200"
                  variants={floatingCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#001C73] mb-1">A+</div>
                    <div className="text-sm text-gray-600 font-medium">Safety Rating</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ImageTextSection;