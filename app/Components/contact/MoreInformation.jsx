"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaExclamationTriangle, FaUserTie, FaEnvelope, FaBook, FaChevronDown } from 'react-icons/fa';

const MoreInformation = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const informationSections = [
    {
      icon: FaExclamationTriangle,
      title: "FCA warning to shareholders",
      content: "We have been made aware of a number of entities falsely claiming to be, or to be affiliated with, our company. These entities are using our name and branding without authorization to solicit investments. Please be cautious and verify any communication through our official channels."
    },
    {
      icon: FaUserTie,
      title: "Recruitment scam",
      content: "We have become aware of fraudulent job offers and recruitment scams falsely claiming to be from our company. Please note that all legitimate job opportunities will be posted on our official careers page and we will never ask for payment during the recruitment process."
    },
    {
      icon: FaEnvelope,
      title: "Fraudulent email orders",
      content: "There have been reports of fraudulent emails claiming to be from our company requesting orders or payments. Please verify all purchase orders and invoices through our official contact channels. We will never request payment to personal accounts or through unverified channels."
    }
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

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8 my-12 lg:my-20 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3 
        className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="p-2 bg-[#001C73] text-white rounded-lg">
          <FaBook className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        More Information
      </motion.h3>
      
      <div className="space-y-3 sm:space-y-4">
        {informationSections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <motion.div 
              key={index}
              className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white hover:border-[#001C73]/30 transition-all duration-300 hover:shadow-md w-full"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left bg-gray-50 hover:bg-[#001C73]/5 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                  <div className="p-2 bg-[#001C73]/10 text-[#001C73] rounded-lg flex-shrink-0">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-semibold text-gray-800 group-hover:text-[#001C73] transition-colors duration-300 text-sm sm:text-base truncate">
                    {section.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: expandedSections[index] ? 180 : 0 }}
                  className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#001C73] group-hover:text-white transition-colors duration-300 flex-shrink-0 ml-2"
                >
                  <FaChevronDown className="w-2 h-2 sm:w-3 sm:h-3" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {expandedSections[index] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-t border-gray-100">
                      <motion.p 
                        className="text-gray-600 leading-relaxed text-sm sm:text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {section.content}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MoreInformation;