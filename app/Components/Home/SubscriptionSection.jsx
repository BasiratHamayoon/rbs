"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { LuInstagram } from "react-icons/lu";
import { CgFacebook } from "react-icons/cg";
import { FaTiktok } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import Image from 'next/image';
import image1 from '../../../public/Home/img1.jpg';
import image2 from '../../../public/Home/img2.jpg';

function SubscriptionSection() {
  const socialLinks = [
    {
      icon: <LuInstagram className="text-2xl lg:text-3xl" />,
      href: "https://instagram.com/yourprofile",
      label: "Instagram"
    },
    {
      icon: <CgFacebook className="text-2xl lg:text-3xl" />,
      href: "https://facebook.com/yourprofile",
      label: "Facebook"
    },
    {
      icon: <FaTiktok className="text-2xl lg:text-3xl" />,
      href: "https://tiktok.com/yourprofile",
      label: "TikTok"
    },
    {
      icon: <BsWhatsapp className="text-2xl lg:text-3xl" />,
      href: "https://wa.me/yournumber",
      label: "WhatsApp"
    },
  ];

  const cards = [
    {
      type: "Residential",
      title: "Residential Construction",
      image: image1,
      description: "Residential construction projects such as the building of Houses, flats, bungalow, cottage, and other residential facilities.",
      bgColor: "bg-white",
    },
    {
      type: "Commercial",
      title: "Commercial Construction",
      image: image2,
      description: "Commercial construction projects such as the building of Offices, industrial facilities and other business establishments.",
      bgColor: "bg-white",
    },
  ];

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
      y: 80,
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

  const socialIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        type: "spring",
        stiffness: 200
      }
    }),
    hover: {
      scale: 1.3,
      rotate: 360,
      backgroundColor: "#001C73",
      color: "#ffffff",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -15,
      scale: 1.02,
      boxShadow: "0 35px 60px -12px rgba(0, 28, 115, 0.25)",
      borderColor: "#001C73",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.15,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.08,
      backgroundColor: "#001C73",
      color: "#ffffff",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
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

  const staggerTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const paragraphVariants = {
    hidden: { 
      opacity: 0,
      y: 40,
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

  const pulseGlow = {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
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

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-20 bg-white overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 bg-[#001C73]/10 rounded-full blur-3xl"
        animate={pulseGlow}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-40 h-40 bg-[#001C73]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating particles */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#001C73]/30 rounded-full"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#001C73]/40 rounded-full"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 1.8, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Enhanced Header Section */}
        <motion.div 
          className="text-center mb-20"
          variants={slideUpVariants}
        >
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold text-[#001C73] mb-6 relative"
              variants={textRevealVariants}
            >
              Our Services
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#001C73] to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.h2>
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
            Connect with us and explore our comprehensive construction solutions
          </motion.p>
        </motion.div>

        {/* Enhanced Social Icons */}
        <motion.div 
          className="flex justify-center items-center gap-8 lg:gap-12 mb-20"
          variants={containerVariants}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="bg-white p-5 rounded-3xl text-[#001C73] cursor-pointer relative overflow-hidden group shadow-2xl border-2 border-[#001C73]/20 hover:border-[#001C73] transition-all duration-300"
              custom={index}
              variants={socialIconVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              animate={floatingAnimation}
            >
              <div className="relative z-10">
                {social.icon}
              </div>
              
              {/* Enhanced Tooltip */}
              <motion.div
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-[#001C73] text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 whitespace-nowrap shadow-lg"
                initial={{ y: 20, scale: 0.8 }}
                whileHover={{ y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {social.label}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#001C73] rotate-45" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Enhanced Cards Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 grid-cols-1 justify-center items-stretch gap-12 lg:gap-16 w-full"
          variants={containerVariants}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white px-10 py-10 flex flex-col gap-10 justify-between text-gray-800 rounded-3xl shadow-2xl relative overflow-hidden group h-full border-2 border-gray-100 hover:border-[#001C73] transition-all duration-500"
              variants={index % 2 === 0 ? slideInLeftVariants : slideInRightVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Enhanced Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/80 to-white" />
              
              {/* Enhanced Header */}
              <motion.div 
                className="text-center relative z-10"
                variants={staggerTextVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-2xl font-light mb-3 text-gray-600"
                  variants={textRevealVariants}
                >
                  We Provide
                </motion.h3>
                <motion.span 
                  className="block font-bold text-3xl mb-3 text-[#001C73] bg-gradient-to-r from-[#001C73] to-[#0026A3] bg-clip-text text-transparent"
                  variants={textRevealVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {card.title}
                </motion.span>
                <motion.p 
                  className="text-xl font-medium text-gray-500"
                  variants={textRevealVariants}
                >
                  Solutions & Services
                </motion.p>
              </motion.div>

              {/* Enhanced Image Section */}
              <motion.div 
                className="w-full overflow-hidden rounded-2xl flex-1 min-h-[250px] max-h-[280px] relative"
                whileHover="hover"
              >
                <motion.div
                  variants={imageHoverVariants}
                  className="w-full h-full"
                >
                  <Image
                    src={card.image}
                    alt={`${card.type} Construction`}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                
                {/* Enhanced Type Badge */}
                <motion.div 
                  className="absolute top-6 left-6 bg-gradient-to-br from-[#001C73] to-[#0026A3] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: 0.8 + index * 0.2
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {card.type}
                </motion.div>
              </motion.div>

              {/* Enhanced Description with Black Text */}
              <motion.div 
                className="text-center flex-1 px-4"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-black text-lg lg:text-xl leading-relaxed font-medium">
                  {card.description}
                </p>
              </motion.div>

              {/* Enhanced Button */}
              <motion.button
                className="border-2 border-[#001C73] px-4 py-2 rounded-xl cursor-pointer text-lg  relative overflow-hidden group/btn text-[#001C73] hover:text-white transition-colors duration-300"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <span className="relative z-10">REQUEST A QUOTE</span>
                <motion.div
                  className="absolute inset-0 bg-[#001C73] transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"
                />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SubscriptionSection;