"use client";
import { motion } from 'framer-motion';
import { FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: FaPhone,
      title: "Phone Support",
      description: "Speak directly with our team",
      details: "+1 (555) 123-4567",
      timing: "Mon-Fri: 8:00 AM - 6:00 PM",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      description: "Send us your queries",
      details: "info@construction.com",
      timing: "Response within 24 hours",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Our Office",
      description: "Come meet us in person",
      details: "123 Construction Ave, City, State 12345",
      timing: "Mon-Fri: 9:00 AM - 5:00 PM",
      color: "from-purple-500 to-purple-600"
    },
  ];

  const containerVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3 
        className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3"
      >
        <div className="p-2 bg-[#001C73] text-white rounded-lg">
          <FaClock className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        Contact Information
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg"
      >
        Multiple ways to get in touch with our team. We're here to help you with your construction needs.
      </motion.p>

      <div className="grid gap-4 sm:gap-6">
        {contactDetails.map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer w-full"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div 
                  className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${contact.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                  whileHover={{ rotate: 5 }}
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#001C73] transition-colors duration-300 truncate">
                    {contact.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2">
                    {contact.description}
                  </p>
                  <p className="text-gray-800 font-medium text-sm sm:text-base mb-1 break-words">
                    {contact.details}
                  </p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <FaClock className="w-3 h-3 flex-shrink-0" />
                    <span className="break-words">{contact.timing}</span>
                  </div>
                </div>
                
                <motion.div 
                  className="opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#001C73] rounded-full flex items-center justify-center">
                    <FaArrowRight className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Stats */}
      <motion.div 
        className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gray-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
          <div className="bg-[#001C73]/5 rounded-lg p-3 sm:p-4">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#001C73]">24/7</div>
            <div className="text-xs sm:text-sm text-gray-600">Support Available</div>
          </div>
          <div className="bg-[#001C73]/5 rounded-lg p-3 sm:p-4">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#001C73]">30min</div>
            <div className="text-xs sm:text-sm text-gray-600">Avg Response Time</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;