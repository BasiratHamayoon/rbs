"use client";
import { motion } from 'framer-motion';

const ContactHeading = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="text-center w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div 
        className="inline-flex items-center gap-3 mb-4"
        variants={itemVariants}
      >
        <div className="w-6 lg:w-8 h-0.5 bg-[#001C73] rounded-full"></div>
        <span className="text-sm font-semibold text-[#001C73] tracking-widest uppercase">
          Get In Touch
        </span>
        <div className="w-6 lg:w-8 h-0.5 bg-[#001C73] rounded-full"></div>
      </motion.div>

      <motion.h1 
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2"
        variants={itemVariants}
      >
        Contact <span className="text-[#001C73]">Our Team</span>
      </motion.h1>
      
      <motion.div 
        className="w-16 lg:w-20 h-1 bg-[#001C73] rounded-full mx-auto mb-6"
        variants={itemVariants}
      />
      
      <motion.p 
        className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6"
        variants={itemVariants}
      >
        Ready to start your next construction project? Get in touch with our expert team for consultations, quotes, and professional guidance.
      </motion.p>
    </motion.div>
  );
};

export default ContactHeading;