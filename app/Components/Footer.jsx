"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaHardHat, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
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

  const slideUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 80 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const textRevealVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      filter: "blur(10px)"
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

  const iconHoverVariants = {
    hover: {
      scale: 1.3,
      rotate: 360,
      color: "#ffffff",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      y: -5,
      backgroundColor: "#001C73",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-[#001C73] to-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-10 right-10 w-24 h-24 bg-white/3 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div 
        className="absolute top-1/2 left-1/4 w-3 h-3 bg-white/10 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* First Row - Logo, Description, Social Icons */}
        <motion.div 
          className="grid lg:grid-cols-3 grid-cols-1 gap-8 mb-16 pb-12 border-b border-white/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Logo Column */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaHardHat className="text-3xl text-[#001C73]" />
              </motion.div>
              <motion.h2 
                className="text-3xl font-bold text-white"
                variants={textRevealVariants}
              >
                RBS Construction
              </motion.h2>
            </motion.div>
          </motion.div>

          {/* Description Column */}
          <motion.div 
            className="flex items-center"
            variants={itemVariants}
          >
            <motion.p 
              className="text-gray-300 leading-relaxed text-lg text-center lg:text-left"
              variants={textRevealVariants}
            >
              Building dreams with precision and excellence. We are committed to delivering exceptional construction services with unmatched quality.
            </motion.p>
          </motion.div>

          {/* Social Icons Column */}
          <motion.div 
            className="flex justify-center lg:justify-end items-center"
            variants={itemVariants}
          >
            <motion.div 
              className="flex gap-4"
              variants={containerVariants}
            >
              {[
                { icon: <FaFacebook className="text-xl" />, label: "Facebook" },
                { icon: <FaTwitter className="text-xl" />, label: "Twitter" },
                { icon: <FaLinkedin className="text-xl" />, label: "LinkedIn" },
                { icon: <FaInstagram className="text-xl" />, label: "Instagram" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-white backdrop-blur-sm border border-white/10"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Second Row - Location, Working Hours, Call, Email */}
        <motion.div 
          className="grid lg:grid-cols-4 grid-cols-1 gap-8 lg:gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Location Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center lg:text-left"
          >
            <motion.div 
              className="flex flex-col items-center lg:items-start gap-3 mb-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm"
                variants={iconHoverVariants}
                whileHover="hover"
                animate={floatingAnimation}
              >
                <FaMapMarkerAlt className="text-white text-xl" />
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-white"
                variants={textRevealVariants}
              >
                Our Location
              </motion.h3>
            </motion.div>
            <motion.div 
              className="space-y-2"
              variants={textRevealVariants}
            >
              <p className="text-gray-300">Unit 10 Beckford Street</p>
              <p className="text-gray-300">Manchester, England</p>
              <p className="text-gray-300">M40 5AE</p>
              <p className="text-gray-300 text-sm mt-3">
                Private Limited Company • Status: Active
              </p>
              <p className="text-gray-300 text-sm">
                Serving clients across Manchester and surrounding areas with premium construction services.
              </p>
            </motion.div>
          </motion.div>

          {/* Working Hours Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center lg:text-left"
          >
            <motion.div 
              className="flex flex-col items-center lg:items-start gap-3 mb-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm"
                variants={iconHoverVariants}
                whileHover="hover"
                animate={floatingAnimation}
              >
                <FaClock className="text-white text-xl" />
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-white"
                variants={textRevealVariants}
              >
                Working Hours
              </motion.h3>
            </motion.div>
            <motion.div 
              className="space-y-2"
              variants={textRevealVariants}
            >
              <p className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-300">Saturday: 9:00 AM - 2:00 PM</p>
              <p className="text-gray-300">Sunday: Closed</p>
              <p className="text-gray-300 text-sm mt-3">
                24/7 emergency services available for urgent construction needs.
              </p>
            </motion.div>
          </motion.div>

          {/* Call Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center lg:text-left"
          >
            <motion.div 
              className="flex flex-col items-center lg:items-start gap-3 mb-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm"
                variants={iconHoverVariants}
                whileHover="hover"
                animate={floatingAnimation}
              >
                <FaPhone className="text-white text-xl" />
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-white"
                variants={textRevealVariants}
              >
                Call Us
              </motion.h3>
            </motion.div>
            <motion.div 
              className="space-y-2"
              variants={textRevealVariants}
            >
              <p className="text-gray-300">+44 (0) 161 123 4567</p>
              <p className="text-gray-300">+44 (0) 161 123 4568</p>
              <p className="text-gray-300 text-sm mt-3">
                Ready to start your project? Call us for a free consultation and quote.
              </p>
            </motion.div>
          </motion.div>

          {/* Email Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center lg:text-left"
          >
            <motion.div 
              className="flex flex-col items-center lg:items-start gap-3 mb-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm"
                variants={iconHoverVariants}
                whileHover="hover"
                animate={floatingAnimation}
              >
                <FaEnvelope className="text-white text-xl" />
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-white"
                variants={textRevealVariants}
              >
                Email Us
              </motion.h3>
            </motion.div>
            <motion.div 
              className="space-y-2"
              variants={textRevealVariants}
            >
              <p className="text-gray-300">info@rbsconstruction.co.uk</p>
              <p className="text-gray-300">projects@rbsconstruction.co.uk</p>
              <p className="text-gray-300">quotes@rbsconstruction.co.uk</p>
              <p className="text-gray-300 text-sm mt-3">
                Send us your project details and we'll get back to you within 24 hours with a detailed quote.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-white/10"
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-gray-400 text-center lg:text-left"
              variants={textRevealVariants}
            >
              © 2024 RBS Construction Ltd. All rights reserved. Private Limited Company • Company Status: Active
            </motion.p>
            <motion.div 
              className="flex gap-6 text-gray-400"
              variants={containerVariants}
            >
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating construction elements */}
      <motion.div 
        className="absolute bottom-20 left-20 w-4 h-4 bg-white/20 rounded-full"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          scale: [1, 1.8, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute top-20 right-32 w-3 h-3 bg-white/15 rounded-full"
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
          scale: [1, 1.6, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </footer>
  );
}

export default Footer;