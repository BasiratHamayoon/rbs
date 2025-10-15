"use client"
import { motion } from 'framer-motion';
import { FaAward, FaLightbulb, FaUsers } from 'react-icons/fa';

const MissionSection = () => {
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
      y: 40 
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

  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
      {/* Background Image with 80% White Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Whyus/mbg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/50 to-white/70"></div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-10 left-10 opacity-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-16 h-16 border-4 border-[#001C73] rounded-full"></div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 right-10 opacity-10"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-12 h-12 border-4 border-[#001C73] transform rotate-45"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-[#001C73]">Mission</span> & Values
            </h2>
            
            <div className="w-20 h-1 bg-[#001C73] rounded-full mx-auto mb-8"></div>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl leading-relaxed text-gray-700 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            "To build not just structures, but lasting relationships. To deliver not just projects, 
            but promises. To create not just spaces, but experiences that inspire and endure."
          </motion.p>

          {/* Values Section - Reduced to 2 cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {[
              {
                title: "Quality First",
                description: "Uncompromising commitment to quality in every aspect of our work.",
                icon: <FaAward className="w-8 h-8" />
              },
              {
                title: "Innovation Driven",
                description: "Embracing new technologies and methods to deliver better results.",
                icon: <FaLightbulb className="w-8 h-8" />
              }
            ].map((value, index) => (
              <motion.div 
                key={value.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-[#001C73] mb-4 flex justify-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;