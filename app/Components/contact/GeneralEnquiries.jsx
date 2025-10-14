"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaComments, FaUser, FaEnvelope, FaPhone, FaEdit, FaPaperPlane, FaCheck } from 'react-icons/fa';

const GeneralEnquiries = () => {
  const [enquiryType, setEnquiryType] = useState('');
  const [phoneCountryCode, setPhoneCountryCode] = useState('+1');
  const [preferredContact, setPreferredContact] = useState('email');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const enquiryTypes = [
    'General Inquiry',
    'Project Consultation',
    'Partnership Opportunity',
    'Career Opportunities',
    'Media Inquiry',
    'Technical Support',
    'Other'
  ];

  const countryCodes = [
    '+1', '+44', '+91', '+86', '+81', '+49', '+33', '+39', '+34', '+7'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      enquiryType,
      phoneCountryCode,
      preferredContact,
      acceptTerms
    });
  };

  const CustomRadio = ({ value, label, checked, onChange, icon: Icon }) => (
    <motion.label 
      className={`flex items-center space-x-2 sm:space-x-3 cursor-pointer p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 ${
        checked 
          ? 'border-[#001C73] bg-[#001C73]/10 shadow-md' 
          : 'border-gray-200 bg-white hover:border-[#001C73]/30 hover:bg-[#001C73]/5'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative flex-shrink-0">
        <input
          type="radio"
          name="preferredContact"
          value={value}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          checked ? 'border-[#001C73] bg-[#001C73]' : 'border-gray-400'
        }`}>
          {checked && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-2 h-2 bg-white rounded-full"
            />
          )}
        </div>
      </div>
      <div className="flex items-center space-x-1 sm:space-x-2 min-w-0 flex-1">
        {Icon && <Icon className={`w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 ${checked ? 'text-[#001C73]' : 'text-gray-500'}`} />}
        <span className={`font-medium transition-colors duration-300 text-xs sm:text-sm truncate ${
          checked ? 'text-[#001C73]' : 'text-gray-700'
        }`}>
          {label}
        </span>
      </div>
    </motion.label>
  );

  const CustomCheckbox = () => (
    <motion.label 
      className="flex items-start space-x-3 sm:space-x-4 cursor-pointer p-3 sm:p-4 rounded-xl border-2 border-gray-200 bg-white hover:border-[#001C73]/30 hover:bg-[#001C73]/5 transition-all duration-300"
      whileHover={{ scale: 1.01 }}
    >
      <div className="relative flex-shrink-0 mt-0.5 sm:mt-1">
        <input
          type="checkbox"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
          className="sr-only"
        />
        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
          acceptTerms ? 'border-[#001C73] bg-[#001C73]' : 'border-gray-400 bg-white'
        }`}>
          {acceptTerms && (
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-3 h-3 sm:w-4 sm:h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </motion.svg>
          )}
        </div>
      </div>
      <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">
        I agree that by submitting this form, I accept your website terms of use, privacy notice and cookie policy. You must accept our website terms of use, privacy notice and cookie policy.
      </span>
    </motion.label>
  );

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg border border-gray-200 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative overflow-hidden w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="relative z-10 w-full">
        <motion.h3 
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3"
          variants={itemVariants}
        >
          <div className="p-2 bg-[#001C73] text-white rounded-lg">
            <FaComments className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          General Enquiries
        </motion.h3>
        <motion.p 
          className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8"
          variants={itemVariants}
        >
          Please fill out the form below if you have any enquiries regarding our business
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 w-full">
          {/* Name & Email */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" variants={itemVariants}>
            <div className="w-full">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <FaUser className="w-3 h-3 sm:w-4 sm:h-4 text-[#001C73]" />
                Full Name *
              </label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#001C73] focus:ring-4 focus:ring-[#001C73]/20 transition-all duration-300 bg-white text-gray-700 font-medium placeholder-gray-400 shadow-sm text-sm sm:text-base"
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="w-full">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4 text-[#001C73]" />
                Email Address *
              </label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#001C73] focus:ring-4 focus:ring-[#001C73]/20 transition-all duration-300 bg-white text-gray-700 font-medium placeholder-gray-400 shadow-sm text-sm sm:text-base"
                placeholder="your.email@example.com"
              />
            </div>
          </motion.div>

          {/* Enquiry Type & Phone */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" variants={itemVariants}>
            <div className="w-full">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Enquiry Type *
              </label>
              <motion.select 
                value={enquiryType}
                onChange={(e) => setEnquiryType(e.target.value)}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#001C73] focus:ring-4 focus:ring-[#001C73]/20 transition-all duration-300 bg-white text-gray-700 font-medium shadow-sm text-sm sm:text-base"
              >
                <option value="" className="text-gray-400">Select Enquiry Type</option>
                {enquiryTypes.map((type, index) => (
                  <option key={index} value={type} className="py-2">{type}</option>
                ))}
              </motion.select>
            </div>
            
            <div className="w-full">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <FaPhone className="w-3 h-3 sm:w-4 sm:h-4 text-[#001C73]" />
                Phone Number
              </label>
              <div className="flex gap-2 sm:gap-3">
                <motion.select 
                  value={phoneCountryCode}
                  onChange={(e) => setPhoneCountryCode(e.target.value)}
                  whileFocus={{ scale: 1.02 }}
                  className="w-20 sm:w-28 px-2 sm:px-3 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#001C73] focus:ring-4 focus:ring-[#001C73]/20 transition-all duration-300 bg-white text-gray-700 font-medium shadow-sm text-xs sm:text-sm"
                >
                  {countryCodes.map((code, index) => (
                    <option key={index} value={code}>{code}</option>
                  ))}
                </motion.select>
                <motion.input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  whileFocus={{ scale: 1.02 }}
                  className="flex-1 px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#001C73] focus:ring-4 focus:ring-[#001C73]/20 transition-all duration-300 bg-white text-gray-700 font-medium placeholder-gray-400 shadow-sm text-sm sm:text-base"
                  placeholder="Phone number"
                />
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <FaEdit className="w-3 h-3 sm:w-4 sm:h-4 text-[#001C73]" />
              Your Message *
            </label>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              whileFocus={{ scale: 1.01 }}
              className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#001C73] focus:ring-4 focus:ring-[#001C73]/20 transition-all duration-300 bg-white text-gray-700 font-medium placeholder-gray-400 shadow-sm resize-none text-sm sm:text-base"
              placeholder="Please describe your enquiry in detail..."
            />
          </motion.div>

          {/* Preferred Contact Method */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-3 sm:mb-4 flex items-center gap-2">
              <FaPhone className="w-3 h-3 sm:w-4 sm:h-4 text-[#001C73]" />
              How would you like us to respond?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <CustomRadio
                value="email"
                label="Email"
                icon={FaEnvelope}
                checked={preferredContact === 'email'}
                onChange={(e) => setPreferredContact(e.target.value)}
              />
              <CustomRadio
                value="phone"
                label="Phone"
                icon={FaPhone}
                checked={preferredContact === 'phone'}
                onChange={(e) => setPreferredContact(e.target.value)}
              />
              <CustomRadio
                value="write"
                label="Write"
                icon={FaEdit}
                checked={preferredContact === 'write'}
                onChange={(e) => setPreferredContact(e.target.value)}
              />
              <CustomRadio
                value="do not"
                label="Do Not Contact"
                icon={FaUser}
                checked={preferredContact === 'do not'}
                onChange={(e) => setPreferredContact(e.target.value)}
              />
            </div>
          </motion.div>

          {/* Terms and Conditions */}
          <motion.div variants={itemVariants}>
            <CustomCheckbox />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(0, 28, 115, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            disabled={!acceptTerms}
            className="w-full bg-[#001C73] text-white py-4 sm:py-5 px-6 sm:px-8 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-lg relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
              <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              Send Message
              <motion.div
                animate={{ x: acceptTerms ? [0, 5, 0] : 0 }}
                transition={{ duration: 1.5, repeat: acceptTerms ? Infinity : 0 }}
              >
                <FaCheck className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
              </motion.div>
            </span>
            <motion.div 
              className="absolute inset-0 bg-[#001C73]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default GeneralEnquiries;