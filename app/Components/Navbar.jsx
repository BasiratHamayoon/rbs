"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaBars, FaTimes, FaHome, FaInfoCircle, FaStar, FaBuilding } from 'react-icons/fa';
import Loader from './Loader';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);
  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
    if (href !== window.location.pathname) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {isLoading && <Loader />}
      
      <header className={`fixed top-0 left-0 w-full z-50 ${isScrolled ? 'bg-white shadow-sm' : 'bg-white'}`}>
        <div className="bg-[#001C73] text-white py-1 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center gap-20 items-center h-8">
              <div className="flex items-center space-x-6 text-xs">
                <span className="flex items-center">support@rbsconstruction.co.uk</span>
                <span className="flex items-center">+44 (0) 161 123 4567</span>
                <span className="flex items-center">Manchester, England</span>
              </div>
              <div className="flex items-center space-x-3">
                <a href="#" className="text-white hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                  <FaFacebook className="w-3 h-3" />
                </a>
                <a href="#" className="text-white hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                  <FaTwitter className="w-3 h-3" />
                </a>
                <a href="#" className="text-white hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                  <FaLinkedin className="w-3 h-3" />
                </a>
                <a href="#" className="text-white hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                  <FaInstagram className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav className="bg-white py-2 px-6 lg:px-30 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center h-16">
              <Link 
                href="/" 
                className='flex items-center group cursor-pointer'
                onClick={() => handleLinkClick('/')}
              >
                <div className="flex items-center transition-all duration-300 group-hover:scale-105">
                  <span className="text-4xl font-black text-black leading-none tracking-tighter">R</span>
                  <span className="text-4xl font-black text-[#001C73] leading-none tracking-tighter">B</span>
                  <span className="text-4xl font-black text-black leading-none tracking-tighter">S</span>
                </div>
              </Link>
              <div className="hidden md:flex items-center lg:ml-6 space-x-8">
                <Link 
                  href="/" 
                  onClick={() => handleLinkClick('/')}
                  className={`text-[18px] font-medium transition-all duration-300 py-2 cursor-pointer ${
                    activeLink === '/' 
                      ? 'text-[#001C73] border-b-2 border-[#001C73]' 
                      : 'text-gray-700 hover:text-[#001C73] hover:border-b-2 hover:border-[#001C73]'
                  }`}
                >
                  Home
                </Link>
                
                <Link 
                  href="/Pages/about" 
                  onClick={() => handleLinkClick('/Pages/about')}
                  className={`text-[18px] font-medium transition-all duration-300 py-2 cursor-pointer ${
                    activeLink === '/Pages/about' 
                      ? 'text-[#001C73] border-b-2 border-[#001C73]' 
                      : 'text-gray-700 hover:text-[#001C73] hover:border-b-2 hover:border-[#001C73]'
                  }`}
                >
                  About
                </Link>
                
                <Link 
                  href="/Pages/whyUs" 
                  onClick={() => handleLinkClick('/Pages/whyUs')}
                  className={`text-[18px] font-medium transition-all duration-300 py-2 cursor-pointer ${
                    activeLink === '/Pages/whyUs' 
                      ? 'text-[#001C73] border-b-2 border-[#001C73]' 
                      : 'text-gray-700 hover:text-[#001C73] hover:border-b-2 hover:border-[#001C73]'
                  }`}
                >
                  Why Us
                </Link>
                
                <Link 
                  href="/Pages/projects" 
                  onClick={() => handleLinkClick('/Pages/projects')}
                  className={`text-[18px] font-medium transition-all duration-300 py-2 cursor-pointer ${
                    activeLink === '/Pages/projects' 
                      ? 'text-[#001C73] border-b-2 border-[#001C73]' 
                      : 'text-gray-700 hover:text-[#001C73] hover:border-b-2 hover:border-[#001C73]'
                  }`}
                >
                  Projects
                </Link>
              </div>

              {/* Desktop Contact Button - Larger */}
              <div className="hidden md:block">
                <Link href="/Pages/contactus">
                  <button 
                    onClick={() => handleLinkClick('/Pages/contactus')}
                    className="bg-[#001C73] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#0038FF] transition-all duration-300 hover:shadow-lg transform hover:scale-105 cursor-pointer"
                  >
                    Contact Us
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="menu-button p-2 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  {isMobileMenuOpen ? (
                    <FaTimes className="w-5 h-5" />
                  ) : (
                    <FaBars className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-white/20 backdrop-blur-[1px] z-40 md:hidden transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        <div className={`mobile-menu fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-lg shadow-2xl z-50 transform transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <span className="text-xl font-bold text-[#001C73]">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
              >
                <FaTimes className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-4">
                {[
                  { href: "/", label: "Home", icon: <FaHome className="w-5 h-5" /> },
                  { href: "/Pages/about", label: "About", icon: <FaInfoCircle className="w-5 h-5" /> },
                  { href: "/Pages/whyUs", label: "Why Us", icon: <FaStar className="w-5 h-5" /> },
                  { href: "/Pages/projects", label: "Projects", icon: <FaBuilding className="w-5 h-5" /> },
                ].map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div
                      onClick={() => handleLinkClick(item.href)}
                      className={`flex items-center space-x-4 py-4 px-4 rounded-lg transition-all duration-300 cursor-pointer ${
                        activeLink === item.href
                          ? 'bg-blue-50 text-[#001C73] border-l-4 border-[#001C73]'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-[#001C73]'
                      }`}
                    >
                      <div className="text-[#001C73]">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-6 border-t border-gray-200">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-3 cursor-pointer">
                    <FaFacebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </div>
                  <div className="flex items-center space-x-3 cursor-pointer">
                    <FaTwitter className="w-4 h-4" />
                    <span>Twitter</span>
                  </div>
                  <div className="flex items-center space-x-3 cursor-pointer">
                    <FaLinkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </div>
                  <div className="flex items-center space-x-3 cursor-pointer">
                    <FaInstagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <Link href="/Pages/contactus">
                <button 
                  onClick={() => handleLinkClick('/Pages/contactus')}
                  className="w-full bg-[#001C73] text-white py-4 rounded-lg text-base font-semibold hover:bg-[#0038FF] transition-all duration-300 shadow-lg cursor-pointer"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;