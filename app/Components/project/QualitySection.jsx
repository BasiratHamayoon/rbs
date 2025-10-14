"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const QualitySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-6 h-6 bg-[#001C73]/10 rounded-full"
        variants={floatAnimation}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-16 w-8 h-8 bg-[#0038FF]/10 rounded-full"
        variants={floatAnimation}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#001C73]/15 rounded-full"
        variants={floatAnimation}
        animate="animate"
        transition={{ delay: 2 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Heading with Enhanced Animation */}
          <motion.div
            className="mb-8"
            variants={cardVariants}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Five-star quality, as our standard. Take a look at some of our recent projects.
            </motion.h2>
          </motion.div>
          
          {/* Animated Divider */}
          <motion.div 
            className="w-16 h-1.5 bg-gradient-to-r from-[#001C73] to-[#0038FF] rounded-full mx-auto mb-8 shadow-lg"
            variants={itemVariants}
            whileHover={{ scaleX: 1.2 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* First Paragraph with Card Effect */}
          <motion.div
            className="mb-8"
            variants={cardVariants}
          >
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-sm"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 28, 115, 0.1)",
                borderColor: "rgba(0, 28, 115, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              We're passionate about the work we do, and when we achieve results like this, it's no wonder we are genuinely proud of our reputation!
            </motion.p>
          </motion.div>
          
          {/* Second Paragraph with Card Effect */}
          <motion.div
            className="mb-12"
            variants={cardVariants}
          >
            <motion.p 
              className="text-base sm:text-lg text-gray-600 mb-12 leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-sm"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 28, 115, 0.1)",
                borderColor: "rgba(0, 28, 115, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              Whether you're seeking ideas and inspiration or simply want reassurance that you've found the right building company, feel free to browse through our portfolio of client projects.
            </motion.p>
          </motion.div>
          
          {/* Animated Button */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/Pages/contactus">
              <motion.button
                className="bg-gradient-to-r from-[#001C73] to-[#0038FF] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0, 28, 115, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get In Touch
                  <FaArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#0038FF] to-[#001C73] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Additional Quality Indicators */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            { title: "Premium Quality", description: "Uncompromising standards in every project" },
            { title: "Expert Craftsmanship", description: "Skilled professionals with years of experience" },
            { title: "Client Satisfaction", description: "Proven track record of happy customers" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 text-center"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 28, 115, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#001C73] to-[#0038FF] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QualitySection;