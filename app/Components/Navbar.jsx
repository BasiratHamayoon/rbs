"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [isWhyUsOpen, setIsWhyUsOpen] = useState(false);

  // Set active link based on current path
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
    if (currentHash) {
      setActiveLink(currentHash);
    } else {
      setActiveLink(currentPath);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function (only for home page sections)
  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMobileMenuOpen(false);
    setActiveLink(`#${sectionId}`);
  };

  // Handle hash links on page load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && window.location.pathname === '/') {
        const sectionId = hash.replace('#', '');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
        setActiveLink(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Handle link click
  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
    setIsWhyUsOpen(false);
  };

  // Why Us dropdown items
  const whyUsItems = [
    { href: "/Pages/whyUs/listening", label: "Listening" },
    { href: "/Pages/whyUs/projects", label: "Projects" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white backdrop-blur-lg shadow-lg py-2' 
          : 'py-4 bg-white'
      }`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center'>
            {/* Logo Section */}
            <Link 
              href="/" 
              className='flex items-center space-x-3 group cursor-pointer'
              onClick={() => handleLinkClick('/')}
            >
              <div className={`relative transition-all duration-300 group-hover:scale-110 ${
                isScrolled ? 'w-10 h-10' : 'w-12 h-12'
              }`}>
                <div className='absolute inset-0 bg-gradient-to-br from-[#001C73] to-[#00072D] rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 shadow-lg'></div>
                <div className='absolute inset-1 bg-white rounded-lg flex items-center justify-center shadow-inner'>
                  <span className='text-[#001C73] font-bold text-lg'>
                    N
                  </span>
                </div>
              </div>
              <div>
                <h1 className={`font-bold text-[#001C73] transition-all duration-300 ${
                  isScrolled ? 'text-2xl' : 'text-3xl'
                } group-hover:scale-105`}>
                  NovaWave
                </h1>
                <p className='text-xs text-gray-500 -mt-1 hidden sm:block'>
                  Innovations
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-1'>
              <ul className='flex items-center space-x-1'>
                {[
                  { href: "/", label: "Home", section: null },
                  { href: "/Pages/about", label: "About", section: null },
                  { 
                    href: "/Pages/why-us", 
                    label: "Why Us", 
                    section: null,
                    hasDropdown: true 
                  },
                  { href: "/Pages/gallery", label: "Gallery", section: null }, // Changed to page navigation
                  { href: "/Pages/contactus", label: "Contact", section: null },
                ].map((item) => (
                  <li key={item.href} className='relative'>
                    {item.section ? (
                      <button
                        onClick={() => scrollToSection(item.section)}
                        className={`relative flex items-center px-4 py-2 transition-all duration-300 font-medium group ${
                          activeLink === item.href
                            ? 'text-[#001C73]'
                            : isScrolled 
                              ? 'text-gray-700 hover:text-[#001C73]' 
                              : 'text-[#001C73] hover:text-[#001C73]'
                        } cursor-pointer`}
                      >
                        <span className='relative'>
                          {item.label}
                          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#001C73] transition-all duration-300 ${
                            activeLink === item.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`}></span>
                        </span>
                      </button>
                    ) : item.hasDropdown ? (
                      <div className='relative'>
                        <button
                          onClick={() => setIsWhyUsOpen(!isWhyUsOpen)}
                          className={`relative flex items-center px-4 py-2 transition-all duration-300 font-medium group ${
                            activeLink.startsWith('/Pages/why-us')
                              ? 'text-[#001C73]'
                              : isScrolled 
                                ? 'text-gray-700 hover:text-[#001C73]' 
                                : 'text-[#001C73] hover:text-[#001C73]'
                          }`}
                        >
                          <span className='relative flex items-center'>
                            {item.label}
                            <svg 
                              className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                                isWhyUsOpen ? 'rotate-180' : ''
                              }`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#001C73] transition-all duration-300 ${
                            activeLink.startsWith('/Pages/why-us') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`}></span>
                        </button>
                        
                        {/* Dropdown Menu */}
                        {isWhyUsOpen && (
                          <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                            {whyUsItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                onClick={() => handleLinkClick(dropdownItem.href)}
                                className={`block px-4 py-2 transition-all duration-200 ${
                                  activeLink === dropdownItem.href
                                    ? 'bg-blue-50 text-[#001C73] font-medium'
                                    : 'text-gray-700 hover:bg-blue-50 hover:text-[#001C73]'
                                }`}
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link href={item.href}>
                        <span 
                          onClick={() => handleLinkClick(item.href)}
                          className={`relative flex items-center px-4 py-2 transition-all duration-300 font-medium group ${
                            activeLink === item.href
                              ? 'text-[#001C73]'
                              : isScrolled 
                                ? 'text-gray-700 hover:text-[#001C73]' 
                                : 'text-[#001C73] hover:text-[#001C73]'
                          }`}
                        >
                          <span className='relative'>
                            {item.label}
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#001C73] transition-all duration-300 ${
                              activeLink === item.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                            }`}></span>
                          </span>
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* CTA Button - Changed to Outline */}
              <div className='ml-4 pl-4 border-l border-gray-300'>
                <button className='border-2 border-[#001C73] text-[#001C73] px-6 py-2 rounded-full font-semibold hover:bg-[#001C73] hover:text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105'>
                  Search
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-[#001C73] hover:bg-gray-100'
                }`}
              >
                <div className='w-6 h-6 flex flex-col justify-center space-y-1'>
                  <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}></span>
                  <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 bg-white/95 backdrop-blur-lg border-t border-gray-200' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className='px-4 py-6 space-y-2'>
            {[
              { href: "/", label: "Home", section: null },
              { href: "/Pages/about", label: "About", section: null },
              { 
                href: "/Pages/why-us", 
                label: "Why Us", 
                section: null,
                hasDropdown: true 
              },
              { href: "/Pages/gallery", label: "Gallery", section: null }, // Changed to page navigation
              { href: "/Pages/contactus", label: "Contact", section: null },
            ].map((item) => (
              <div key={item.href}>
                {item.section ? (
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className={`relative flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300 font-medium group text-left ${
                      activeLink === item.href
                        ? 'bg-blue-50 text-[#001C73]'
                        : 'text-[#001C73] hover:bg-blue-50'
                    }`}
                  >
                    <span className='relative'>
                      {item.label}
                      <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#001C73] transition-all duration-300 group-hover:w-full'></span>
                    </span>
                  </button>
                ) : item.hasDropdown ? (
                  <div className='space-y-2'>
                    <button
                      onClick={() => setIsWhyUsOpen(!isWhyUsOpen)}
                      className={`relative flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300 font-medium group ${
                        activeLink.startsWith('/Pages/why-us')
                          ? 'bg-blue-50 text-[#001C73]'
                          : 'text-[#001C73] hover:bg-blue-50'
                      }`}
                    >
                      <span className='relative'>
                        {item.label}
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#001C73] transition-all duration-300 group-hover:w-full'></span>
                      </span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isWhyUsOpen ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mobile Dropdown */}
                    {isWhyUsOpen && (
                      <div className="ml-4 space-y-1 bg-gray-50 rounded-lg p-2">
                        {whyUsItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            onClick={() => handleLinkClick(dropdownItem.href)}
                            className={`block px-4 py-2 rounded transition-all duration-200 ${
                              activeLink === dropdownItem.href
                                ? 'bg-blue-100 text-[#001C73] font-medium'
                                : 'text-gray-700 hover:bg-blue-100 hover:text-[#001C73]'
                            }`}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href}>
                    <span 
                      onClick={() => handleLinkClick(item.href)}
                      className={`relative flex items-center px-4 py-3 rounded-lg transition-all duration-300 font-medium group ${
                        activeLink === item.href
                          ? 'bg-blue-50 text-[#001C73]'
                          : 'text-[#001C73] hover:bg-blue-50'
                      }`}
                    >
                      <span className='relative'>
                        {item.label}
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#001C73] transition-all duration-300 group-hover:w-full'></span>
                      </span>
                    </span>
                  </Link>
                )}
              </div>
            ))}
            <div className='pt-4 border-t border-gray-200'>
              <button className='w-full border-2 border-[#001C73] text-[#001C73] px-6 py-3 rounded-full font-semibold hover:bg-[#001C73] hover:text-white transition-all duration-300'>
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className='h-20'></div>

      {/* Close dropdown when clicking outside */}
      {isWhyUsOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsWhyUsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;