"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function OwnerSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        duration: 1
      }
    }
  };

  const leftContentVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.9
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

  const rightContentVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.9
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

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section 
      ref={ref}
      className='text-black grid lg:grid-cols-2 grid-cols-1 lg:px-40 px-8 py-20 gap-12 lg:gap-20 justify-center items-center bg-gray-50 min-h-[80vh]'
    >
      {/* Left Content - Owner Image */}
      <motion.div 
        className='flex flex-col items-center lg:items-start h-full justify-center'
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className='w-full'>
          <motion.div
            className='relative'
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover="hover"
          >
            {/* Taller Image - Height larger than width */}
            <div className="w-full max-w-lg">
              <Image 
                src="/Whyus/owner.jpg" 
                alt="RBS Construction Owner"
                width={400}
                height={700}
                className='w-full h-[500px] object-cover rounded-2xl shadow-xl transition-all duration-500'
              />
            </div>
            
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-4 -left-4 w-16 h-16 border-4 border-[#001C73] rounded-xl opacity-30"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 0.3, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 w-12 h-12 border-4 border-[#001C73] rounded-lg opacity-40"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 0.4, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Content - Text */}
      <motion.div 
        className='flex flex-col h-full justify-center'
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className='space-y-8'>
          <motion.div 
            className='space-y-6'
            variants={rightContentVariants}
          >
            <motion.h1 
              className='text-2xl font-bold text-[#001C73] leading-tight tracking-wide uppercase'
              variants={rightContentVariants}
            >
              Our Founder's Vision
            </motion.h1>
            
            <motion.h2 
              className='text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight'
              variants={rightContentVariants}
            >
              Building excellence and trust through decades of construction expertise
            </motion.h2>
          </motion.div>

          {/* Single Large Text Description */}
          <motion.div 
            variants={rightContentVariants}
          >
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={rightContentVariants}
            >
              "At RBS Construction, we believe that every building tells a story. For over 25 years, 
              we've been crafting stories of excellence and innovation. Our commitment to 
              quality isn't just about bricks it's about building relationships that 
              stand the test of time. We combine traditional craftsmanship with modern technology 
              to deliver projects that exceed expectations while maintaining the personal touch 
              that has been our hallmark since day one, ensuring that every structure we build 
              not only meets but exceeds the highest standards of quality ."
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default OwnerSection;