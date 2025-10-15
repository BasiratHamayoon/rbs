"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheck, FaPaperPlane } from 'react-icons/fa';
import backgrounImage from '../../../public/Home/bg.jpg';

function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    telephone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  // Enhanced Animation variants
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
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInLeftVariants = {
    hidden: { 
      opacity: 0, 
      x: -150,
      rotate: -10,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.4,
        ease: "easeOut"
      }
    }
  };

  const slideInRightVariants = {
    hidden: { 
      opacity: 0, 
      x: 150,
      rotate: 10,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.4,
        ease: "easeOut"
      }
    }
  };

  const textRevealVariants = {
    hidden: { 
      opacity: 0,
      y: 60,
      filter: "blur(15px)"
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

  const inputFocusVariants = {
    focus: {
      scale: 1.03,
      borderColor: "#001C73",
      boxShadow: "0 0 0 4px rgba(0, 28, 115, 0.15)",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.08,
      backgroundColor: "#0026A3",
      boxShadow: "0 15px 40px rgba(0, 28, 115, 0.4)",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const glowAnimation = {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const featureItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.8
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

  const formElementVariants = {
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
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="request-quote-section" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgrounImage}
          alt="Construction Background"
          className="w-full h-full object-cover"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80" />
      </div>

      {/* Enhanced Decorative Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-[#001C73]/15 rounded-full blur-3xl"
        animate={glowAnimation}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-[#001C73]/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#001C73]/30 rounded-full"
        animate={{
          y: [0, -60, 0],
          x: [0, 40, 0],
          scale: [1, 1.8, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#001C73]/40 rounded-full"
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          scale: [1, 2, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div 
        className="absolute top-2/3 left-1/3 w-2 h-2 bg-[#001C73]/25 rounded-full"
        animate={{
          y: [0, -40, 0],
          x: [0, 25, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div 
        className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={slideInLeftVariants}
          >
            <motion.div
              className="inline-block relative mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-[#001C73] mb-6 relative"
                variants={textRevealVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                Request A Quote
                <motion.div 
                  className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#001C73] via-[#001C73]/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </motion.h1>
            </motion.div>

            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-[#001C73] to-[#001C73]/30 mb-8 lg:mx-0 mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            />

            <motion.p 
              className="text-2xl text-gray-700 leading-relaxed mb-8 font-light"
              variants={textRevealVariants}
              whileHover={{ 
                x: 10,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              Let's transform your vision into reality with our expert construction services. Share your project details and we'll provide a comprehensive proposal.
            </motion.p>

            <motion.div 
              className="space-y-4 text-left"
              variants={staggerChildrenVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: <FaCheck className="text-sm" />, text: "Professional consultation and detailed proposal" },
                { icon: <FaCheck className="text-sm" />, text: "Expert project management and planning" },
                { icon: <FaCheck className="text-sm" />, text: "Premium quality workmanship guarantee" },
                { icon: <FaCheck className="text-sm" />, text: "On-time project delivery commitment" }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4"
                  variants={featureItemVariants}
                  whileHover={{ 
                    x: 15,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-br from-[#001C73] to-[#0026A3] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: 360,
                      boxShadow: "0 0 20px rgba(0, 28, 115, 0.5)"
                    }}
                    transition={{ duration: 0.5 }}
                    animate={pulseAnimation}
                  >
                    {feature.icon}
                  </motion.div>
                  <span className="text-gray-700 text-lg font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#001C73]/20 shadow-lg"
              variants={slideUpVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 28, 115, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3 
                className="text-xl font-bold text-[#001C73] mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                Contact Information
              </motion.h3>
              <motion.div 
                className="space-y-3 text-gray-700"
                variants={staggerChildrenVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center gap-3"
                  variants={featureItemVariants}
                  whileHover={{ x: 5 }}
                >
                  <FaPhone className="text-[#001C73] text-lg" />
                  <p>+1 (555) 123-4567</p>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  variants={featureItemVariants}
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="text-[#001C73] text-lg" />
                  <p>info@rbsconstruction.com</p>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  variants={featureItemVariants}
                  whileHover={{ x: 5 }}
                >
                  <FaMapMarkerAlt className="text-[#001C73] text-lg" />
                  <p>Unit 10 Beckford Street, Manchester, England, M40 5AE</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-[#001C73]/10"
            variants={slideInRightVariants}
            whileHover={{ 
              y: -5,
              boxShadow: "0 30px 60px rgba(0, 28, 115, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={staggerChildrenVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl font-bold text-[#001C73] text-center mb-8"
                variants={textRevealVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Request Your Proposal
              </motion.h3>

              {/* Name Field */}
              <motion.div 
                className="relative"
                variants={formElementVariants}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all duration-300 bg-white/80 text-gray-900 placeholder-gray-500"
                  variants={inputFocusVariants}
                  whileFocus="focus"
                  placeholder="Enter your full name"
                />
              </motion.div>

              {/* Telephone Field */}
              <motion.div 
                className="relative"
                variants={formElementVariants}
              >
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telephone *
                </label>
                <motion.input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all duration-300 bg-white/80 text-gray-900 placeholder-gray-500"
                  variants={inputFocusVariants}
                  whileFocus="focus"
                  placeholder="Enter your phone number"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div 
                className="relative"
                variants={formElementVariants}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all duration-300 bg-white/80 text-gray-900 placeholder-gray-500"
                  variants={inputFocusVariants}
                  whileFocus="focus"
                  placeholder="Enter your email address"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div 
                className="relative"
                variants={formElementVariants}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all duration-300 bg-white/80 text-gray-900 placeholder-gray-500 resize-none"
                  variants={inputFocusVariants}
                  whileFocus="focus"
                  placeholder="Describe your project requirements, timeline, and any specific needs..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#001C73] to-[#0026A3] text-white py-4 px-6 rounded-xl font-bold text-lg cursor-pointer relative overflow-hidden group flex items-center justify-center gap-3 shadow-2xl"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                animate={floatingAnimation}
              >
                <span className="relative z-10">SUBMIT REQUEST</span>
                <motion.div
                  className="relative z-10"
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaPaperPlane className="text-lg" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0026A3] to-[#001C73] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                />
                
                {/* Button Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
              </motion.button>

              {/* Privacy Note */}
              <motion.p 
                className="text-center text-gray-500 text-sm mt-4"
                variants={textRevealVariants}
              >
                We value your privacy and will keep your information confidential.
              </motion.p>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default RequestQuote;