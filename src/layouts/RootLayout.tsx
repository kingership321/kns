import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, ChevronRight, Bell, Clock, XCircle, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Award, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import logo from '../assets/schoollogo-3.png'
// import path from "path";

export default function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [isNoticeOpen, setIsNoticeOpen] = useState(true);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
    setIsAchievementsOpen(false);
    setIsGalleryOpen(false);
  }, [location]);

  // Handle scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  // Close all dropdowns
  const closeAllDropdowns = () => {
    setIsAboutOpen(false);
    setIsAchievementsOpen(false);
  };


  const contactDetails = {
    name: "Kathmandu National School",
    address: "Old Baneshwor-34, Kathmandu, Nepal",
    telephone: "+977 4490821",
    fax: "+977 4490821",
    email: "info@kns.edu.np",
    officeHours: "Sunday-Friday: 9:00 AM - 4:00 PM"
  };

  const aboutSubmenuItems = [
    { 
      path: '/about/introduction', 
      name: 'Introduction',
      description: 'Overview of our school'
    },
    { 
      path: '/about/governing-body-message', 
      name: 'Message from Governing Body',
      description: 'Leadership perspectives'
    },
    { 
      path: '/about/founder-principal-message', 
      name: 'Founder Principal\'s Message',
      description: 'Founding vision and values'
    },
    { 
      path: '/about/vice-principal-message', 
      name: 'Vice Principal\'s Message',
      description: 'Academic leadership insights'
    },
    { 
      path: '/about/examinations', 
      name: 'Examinations',
      description: 'Assessment and evaluation system'
    },
    { 
      path: '/about/rules-discipline', 
      name: 'Rules and Discipline',
      description: 'Code of conduct and policies'
    },
    { 
      path: '/about/facilities', 
      name: 'Facilities',
      description: 'Campus infrastructure and resources'
    },
    { 
      path: '/about/extra-curricular', 
      name: 'Extra Curricular Activities',
      description: 'Beyond classroom learning'
    }

  ];

  const gallerySubmenuItems = [
    {
      path: '/gallery/photos',
      name: 'Photo Gallery',
      description: 'Collection of memorable moments and events'
    },
    {
      path: '/gallery/videos',
      name: 'Video Gallery',
      description: 'Highlights and events in video format'
    }
  ];

  const achievementsSubmenuItems = [
    { 
      path: '/achievements/recent', 
      name: 'Recent Achievements',
      description: 'Latest accomplishments and awards'
    },
    { 
      path: '/achievements/co-curricular', 
      name: 'Co-curricular',
      description: 'Achievements in arts and activities'
    },
    { 
      path: '/achievements/disciplinary-action', 
      name: 'Disciplinary Action',
      description: 'Standards and conduct records'
    },
    { 
      path: '/achievements/recommendations', 
      name: 'Recommendations',
      description: 'Feedback and endorsements'
    }
  ];

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about/introduction", hasDropdown: true },
    { title: "Achievements", path: "/achievements/recent", hasDropdown: true },
    { title: "Gallery", path: "/gallery", hasDropdown: true },
    { title: "Salient Features", path: "/policy" },
    { title: "News & Events", path: "/newsandevents" },
    { title: "Calendar", path: "/calendar" },
    { title: "Contact", path: "/contact" }
  ];

  // Scrolling messages for notice bar
  const scrollingMessages = [
    "🎓 Admissions Open for Academic Year 2024-25 | Apply Online Now!",
    "📅 Winter Vacation: School closed from Dec 20 to Jan 5",
    "📚 SEE Exam Preparation Classes start from Jan 10, 2024",
    "🏆 Annual Sports Day on Jan 25 - All parents invited!",
    "📢 PTA Meeting on Jan 15 at 10 AM in School Auditorium"
  ];

  const isAboutPageActive = location.pathname.startsWith('/about');
  const isAchievementsPageActive = location.pathname.startsWith('/achievements');
  const isGalleryPageActive = location.pathname.startsWith('/gallery');
  
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* React 19 SEO Metadata */}
      <title>Kathmandu National School | Education · Civilization · Humanization</title>
      <meta name="description" content="Premier educational institution in Nepal with 45+ years of academic excellence. Cultivating future leaders through holistic education." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-red-600/95 backdrop-blur-md border-b border-gray-100 shadow-lg' 
            : 'bg-red-600/90 backdrop-blur-sm'
        }`}
      >
        <div className="w-full mx-auto px-2.5 sm:px-4 md:px-5 lg:px-8 bg-white">
          <div className="flex items-center justify-between h-11 sm:h-12 md:h-14 lg:h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-1.5 group"
              aria-label="Kathmandu National School Home"
              onClick={closeAllDropdowns}
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                className="relative"
              >
                {/* Logo Container */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 border-primary bg-white-400 overflow-hidden flex items-center justify-center flex-shrink-0">
                  {/* Actual Logo Image */}
                  <img 
                    src={logo}
                    alt="Kathmandu National School Logo" 
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-14 lg:h-14 object-contain"
                  />
                </div>
              </motion.div>
              
              {/* School Name - Desktop */}
              <div className="hidden lg:block">
                <div className="font-bold text-red-500 mb-0 text-lg lg:text-xl xl:text-2xl font-serif">KATHMANDU <span className="text-blue-900">NATIONAL SCHOOL</span></div>
                <div className="font-bold text-red-500 mb-0 text-lg lg:text-xl xl:text-2xl font-serif"></div>
                <div className="font-bold text-blue-900 text-sm lg:text-md xl:text-lg mb-0.5 font-serif">"A Grade Coeducational School"</div>
              </div>
              
              {/* School Name - Mobile */}
              <div className="lg:hidden">
                <div className="font-bold font-serif text-red-500 text-xl">Kathmandu <span className="font-bold font-serif text-blue-900 text-xl">National School</span></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-0.5">
              {navItems.map((item) => {
                if (item.title === "About") {
                  return (
                    // About Dropdown
                    <div key={item.path} className="relative group">
                      <button
                        className={`flex items-center gap-0.5 px-1.5 py-1 md:px-2 md:py-1 text-xs md:text-sm lg:text-sm font-serif transition-colors rounded-sm md:rounded-md ${
                          isAboutPageActive
                            ? 'text-white bg-red-500'
                            : 'text-red-500 hover:text-yellow-500'
                        }`}
                        onClick={() => {
                          setIsAboutOpen(!isAboutOpen);
                          setIsAchievementsOpen(false);
                        }}
                        aria-label="About menu dropdown"
                      >
                        About
                        <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 ${
                          isAboutOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute left-0 top-full mt-0.5 w-40 md:w-48 lg:w-56 bg-white rounded-sm shadow-xl border border-gray-200 py-1 transition-all duration-200 z-50 ${
                        isAboutOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}>
                        
                        <div className="max-h-64 overflow-y-auto">
                          {aboutSubmenuItems.map((subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.path}
                              className={`block px-2.5 py-1.5 hover:bg-gray-50 transition-colors ${
                                location.pathname === subItem.path ? 'bg-red-50 border-l-3 border-red-500' : ''
                              }`}
                              onClick={() => setIsAboutOpen(false)}
                            >
                              <div className="flex items-center gap-1.5">
                                <div className={`w-1 h-1 rounded-full ${
                                  location.pathname === subItem.path ? 'bg-red-500' : 'bg-gray-300'
                                }`} />
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900 text-xs">{subItem.name}</h4>
                                  <p className="text-xs text-gray-500 mt-0.5">{subItem.description}</p>
                                </div>
                                <ChevronRight className="w-2.5 h-2.5 text-gray-400" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                } else if (item.title === "Achievements") {
                  return (
                    // Achievements Dropdown
                    <div key={item.path} className="relative group">
                      <button
                        className={`flex items-center gap-0.5 px-1.5 py-1 md:px-2 md:py-1 text-xs md:text-sm lg:text-sm font-serif transition-colors rounded-sm md:rounded-md ${
                          isAchievementsPageActive
                            ? 'text-white bg-red-500'
                            : 'text-red-500 hover:text-yellow-500'
                        }`}
                        onClick={() => {
                          setIsAchievementsOpen(!isAchievementsOpen);
                          setIsAboutOpen(false);
                          setIsGalleryOpen(false);
                        }}
                        aria-label="Achievements menu dropdown"
                      >
                        Achievements
                        <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 ${
                          isAchievementsOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute left-0 top-full mt-0.5 w-40 md:w-44 lg:w-48 bg-white rounded-sm shadow-xl border border-gray-200 py-1 transition-all duration-200 z-50 ${
                        isAchievementsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}>
                        
                        <div className="max-h-64 overflow-y-auto">
                          {achievementsSubmenuItems.map((subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.path}
                              className={`block px-2.5 py-1.5 hover:bg-gray-50 transition-colors ${
                                location.pathname === subItem.path ? 'bg-red-50 border-l-3 border-red-500' : ''
                              }`}
                              onClick={() => setIsAchievementsOpen(false)}
                            >
                              <div className="flex items-center gap-1.5">
                                <div className={`w-1 h-1 rounded-full ${
                                  location.pathname === subItem.path ? 'bg-red-500' : 'bg-gray-300'
                                }`} />
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900 text-xs">{subItem.name}</h4>
                                  <p className="text-xs text-gray-500 mt-0.5">{subItem.description}</p>
                                </div>
                                <ChevronRight className="w-2.5 h-2.5 text-gray-400" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }else if (item.title === "Gallery") {
                  return (
                    // Achievements Dropdown
                    <div key={item.path} className="relative group">
                      <button
                        className={`flex items-center gap-0.5 px-1.5 py-1 md:px-2 md:py-1 text-xs md:text-sm lg:text-sm font-serif transition-colors rounded-sm md:rounded-md ${
                          isGalleryPageActive
                            ? 'text-white bg-red-500'
                            : 'text-red-500 hover:text-yellow-500'
                        }`}
                        onClick={() => {
                          setIsGalleryOpen(!isGalleryOpen);
                          setIsAboutOpen(false);
                          setIsAchievementsOpen(false);
                        }}
                        aria-label="Gallery menu dropdown"
                      >
                        Gallery
                        <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 ${
                          isGalleryOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute left-0 top-full mt-0.5 w-40 md:w-44 lg:w-48 bg-white rounded-sm shadow-xl border border-gray-200 py-1 transition-all duration-200 z-50 ${
                        isGalleryOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}>
                        
                        <div className="max-h-64 overflow-y-auto">
                          {gallerySubmenuItems.map((subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.path}
                              className={`block px-2.5 py-1.5 hover:bg-gray-50 transition-colors ${
                                location.pathname === subItem.path ? 'bg-red-50 border-l-3 border-red-500' : ''
                              }`}
                              onClick={() => setIsGalleryOpen(false)}
                            >
                              <div className="flex items-center gap-1.5">
                                <div className={`w-1 h-1 rounded-full ${
                                  location.pathname === subItem.path ? 'bg-red-500' : 'bg-gray-300'
                                }`} />
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900 text-xs">{subItem.name}</h4>
                                  <p className="text-xs text-gray-500 mt-0.5">{subItem.description}</p>
                                </div>
                                <ChevronRight className="w-2.5 h-2.5 text-gray-400" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    // Regular Nav Items
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`px-1.5 py-1 md:px-2 md:py-1 text-xs md:text-sm lg:text-sm font-serif transition-colors rounded-sm md:rounded-md ${
                        location.pathname === item.path
                          ? 'text-white bg-red-500'
                          : 'text-red-500 hover:text-yellow-500'
                      }`}
                      aria-label={`Navigate to ${item.title}`}
                    >
                      {item.title}
                    </Link>
                  );
                }
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1 rounded-sm text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* DESKTOP SCROLLING NOTICE BAR - Very compact */}
          <AnimatePresence>
            {isNoticeOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="hidden lg:block border-t border-white/20"
              >
                <div className="py-0.5 overflow-hidden z-50 bg-gradient-to-r from-primary/95 to-primary/90 rounded-md backdrop-blur-sm">
                  <div className="flex items-center">
                    {/* Notice Icon */}
                    <div className="flex items-center gap-1 pr-1.5 border-r border-white/30 mr-1.5">
                      <div className="w-3.5 h-3.5 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center ml-1.5">
                        <Bell className="w-2 h-2 text-white" />
                      </div>
                      <span className="text-white text-xs font-medium">Notice:</span>
                    </div>
                    
                    {/* Scrolling Messages */}
                    <div className="flex-1 overflow-hidden">
                      <div className="animate-marquee whitespace-nowrap">
                        {scrollingMessages.map((message, index) => (
                          <span key={index} className="inline-block text-white text-xs mr-4">
                            {message} • 
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Close Button */}
                    <button
                      onClick={() => setIsNoticeOpen(false)}
                      className="ml-1.5 mr-1.5 text-white/70 hover:text-white transition-colors"
                      aria-label="Close notice bar"
                    >
                      <XCircle className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Navigation Menu - UPDATED: Higher z-index and better positioning */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 bg-white shadow-xl"
              style={{ 
                position: 'fixed',
                top: '44px', // Height of the navbar (h-11 = 44px)
                left: 0,
                right: 0,
                zIndex: 60, // Higher than notice bar (z-50)
                maxHeight: 'calc(100vh - 44px)', // Full height minus navbar
                overflowY: 'auto'
              }}
            >
              <div className="px-2.5 sm:px-4 py-2 space-y-1">
                {navItems.map((item) => {
                  if (item.title === "About") {
                    return (
                      <div key={item.path} className="space-y-0.5">
                        <button
                          onClick={() => {
                          setIsAboutOpen(!isAboutOpen);
                          setIsAchievementsOpen(false);
                          setIsGalleryOpen(false);
                        }}
                          className={`w-full flex items-center justify-between px-2.5 py-1.5 text-sm font-bold rounded-sm transition-colors ${
                            isAboutPageActive
                              ? 'text-red-600 bg-red-50'
                              : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                          }`}
                        >
                          <span>About</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isAboutOpen ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {/* Mobile About Submenu */}
                        <div className={`overflow-hidden transition-all duration-200 ml-2.5 ${
                          isAboutOpen ? 'max-h-[400px]' : 'max-h-0'
                        }`}>
                          
                          {aboutSubmenuItems.map((subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.path}
                              className={`block px-2.5 py-1 hover:bg-gray-50 rounded-sm mb-0.5 ${
                                location.pathname === subItem.path ? 'bg-red-50' : ''
                              }`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsAboutOpen(false);
                              }}
                            >
                              <div className="flex items-center gap-1.5">
                                <div className={`w-1 h-1 rounded-full ${
                                  location.pathname === subItem.path ? 'bg-red-500' : 'bg-gray-400'
                                }`} />
                                <div>
                                  <h4 className="font-medium text-gray-900 text-xs">{subItem.name}</h4>
                                  <p className="text-xs text-gray-500 mt-0.5">{subItem.description}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  } else if (item.title === "Gallery") {
                    return (
                      <div key={item.path} className="space-y-0.5">
                        <button
                          onClick={() => {
                          setIsGalleryOpen(!isGalleryOpen);
                          setIsAboutOpen(false);
                          setIsAchievementsOpen(false);
                        }}
                          className={`w-full flex items-center justify-between px-2.5 py-1.5 text-sm font-bold rounded-sm transition-colors ${
                            isGalleryPageActive
                              ? 'text-red-600 bg-red-50'
                              : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                          }`}
                        >
                          <span>Gallery</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isGalleryOpen ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {/* Mobile Gallery Submenu */}
                        <div className={`overflow-hidden transition-all duration-200 ml-2.5 ${
                          isGalleryOpen ? 'max-h-[240px]' : 'max-h-0'
                        }`}>
                          
                          {gallerySubmenuItems.map((subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.path}
                              className={`block px-2.5 py-1 hover:bg-gray-50 rounded-sm mb-0.5 ${
                                location.pathname === subItem.path ? 'bg-red-50' : ''
                              }`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsGalleryOpen(false);
                              }}
                            >
                              <div className="flex items-center gap-1.5">
                                <div className={`w-1 h-1 rounded-full ${
                                  location.pathname === subItem.path ? 'bg-red-500' : 'bg-gray-400'
                                }`} />
                                <div>
                                  <h4 className="font-medium text-gray-900 text-xs">{subItem.name}</h4>
                                  <p className="text-xs text-gray-500 mt-0.5">{subItem.description}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  } else if (item.title === "Achievements") {
                    return (
                      <div key={item.path} className="space-y-0.5">
                        <button
                          onClick={() => {
                          setIsAchievementsOpen(!isAchievementsOpen);
                          setIsAboutOpen(false);
                          setIsGalleryOpen(false);
                        }}
                          className={`w-full flex items-center justify-between px-2.5 py-1.5 text-sm font-bold rounded-sm transition-colors ${
                            isAchievementsPageActive
                              ? 'text-red-600 bg-red-50'
                              : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                          }`}
                        >
                          <span>Achievements</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isAchievementsOpen ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {/* Mobile Achievements Submenu */}
                        <div className={`overflow-hidden transition-all duration-200 ml-2.5 ${
                          isAchievementsOpen ? 'max-h-[240px]' : 'max-h-0'
                        }`}>
                          
                          {achievementsSubmenuItems.map((subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.path}
                              className={`block px-2.5 py-1 hover:bg-gray-50 rounded-sm mb-0.5 ${
                                location.pathname === subItem.path ? 'bg-red-50' : ''
                              }`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsAchievementsOpen(false);
                              }}
                            >
                              <div className="flex items-center gap-1.5">
                                <div className={`w-1 h-1 rounded-full ${
                                  location.pathname === subItem.path ? 'bg-red-500' : 'bg-gray-400'
                                }`} />
                                <div>
                                  <h4 className="font-medium text-gray-900 text-xs">{subItem.name}</h4>
                                  <p className="text-xs text-gray-500 mt-0.5">{subItem.description}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-2.5 py-1.5 text-sm font-bold rounded-sm transition-colors ${
                          location.pathname === item.path
                            ? 'text-red-600 bg-red-50'
                            : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    );
                  }
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* MOBILE SCROLLING NOTICE BAR - Fixed positioning and lower z-index */}
      <AnimatePresence>
        {isNoticeOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="lg:hidden fixed top-0 left-0 right-0 z-40" // Changed from sticky to fixed
            style={{ top: '44px' }} // Position below navbar
          >
            <div className="bg-gradient-to-r from-primary/95 to-primary/90 backdrop-blur-sm border-b border-white/20">
              <div className="px-2 py-0.5">
                <div className="flex items-center">
                  {/* Notice Icon */}
                  <div className="flex items-center gap-0.5 pr-1 border-r border-white/30 mr-1 flex-shrink-0">
                    <div className="w-3.5 h-3.5 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center">
                      <Bell className="w-1.5 h-1.5 text-white" />
                    </div>
                    <span className="text-white text-xs font-medium">Notice:</span>
                  </div>
                  
                  {/* Scrolling Messages */}
                  <div className="flex-1 overflow-hidden">
                    <div className="animate-marquee whitespace-nowrap">
                      {scrollingMessages.map((message, index) => (
                        <span key={index} className="inline-block text-white/90 text-xs mr-3">
                          {message} • 
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setIsNoticeOpen(false)}
                    className="ml-1 text-white/70 hover:text-white transition-colors flex-shrink-0"
                    aria-label="Close notice bar"
                  >
                    <XCircle className="w-2 h-2" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Adjusted padding based on notice bar */}
      <main className="flex-grow">
        <div className={`
          ${isNoticeOpen ? 'pt-[74px] lg:pt-24' : 'pt-[44px] lg:pt-0'} 
          transition-all duration-300
        `}>
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white relative rounded-t-2xl">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {/* School Info */}
            <div className="space-y-4 sm:space-y-5">
              <Link to="/" className="inline-flex items-center gap-3 sm:gap-4 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                  <img
                    src={logo}
                    alt="Kathmandu National School Logo"
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
                  />
                </div>
                <div>
                  <div className="font-light text-white/90 sm:text-lg lg:text-xl">Kathmandu</div>
                  <div className="font-bold text-white text-base sm:text-lg lg:text-xl font-serif">National School</div>
                  <p className="text-white/90 text-xs italic font-serif text-left">
                    Education · Civilization · Humanization
                  </p>
                </div>
              </Link>
              
              <div className="space-y-2.5 sm:space-y-3">
                
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                  <a 
                    href="https://www.facebook.com/KathmanduNationalSchool" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-md bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                    aria-label="Visit our Facebook page"
                  >
                    <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-md bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                    aria-label="Visit our Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-md bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                    aria-label="Visit our YouTube channel"
                  >
                    <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="sm:mx-auto lg:mx-0">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="h-6 w-0.5 sm:w-1 bg-red-500 rounded-full"></div>
                <h3 className="text-white font-bold text-sm sm:text-base font-serif">
                  Quick Links
                </h3>
              </div>
              
              <ul className="space-y-1.5 sm:space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="group flex items-center gap-2 text-white/80 hover:text-white text-xs sm:text-sm transition-all duration-300 py-1 sm:py-1.5"
                    >
                      <ChevronRight className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academics */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="h-6 w-0.5 sm:w-1 bg-blue-500 rounded-full"></div>
                <h3 className="text-white font-bold text-sm sm:text-base font-serif">
                  Academics
                </h3>
              </div>
              
              <ul className="space-y-1.5 sm:space-y-2">
                {['Montessori', 'Primary Education (1-5)', 'Basic Education (6-8)', 'Secondary Education (9-10)', 'Extra Curricular Activities'].map((program) => (
                  <li key={program}>
                    <a 
                      href="#" 
                      className="group flex items-center gap-2 text-white/80 hover:text-white text-xs sm:text-sm transition-all duration-300 py-1 sm:py-1.5"
                    >
                      <Award className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-red-400 opacity-70 group-hover:opacity-100 flex-shrink-0" />
                      <span>{program}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="h-6 w-0.5 sm:w-1 bg-green-500 rounded-full"></div>
                <h3 className="text-white font-bold text-sm sm:text-base font-serif">
                  Contact Us
                </h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-md bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white mb-0.5 sm:mb-1 text-xs sm:text-sm">Address</div>
                    <div className="text-white/80 text-xs sm:text-sm leading-relaxed">
                      {contactDetails.name}<br />
                      {contactDetails.address}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-md bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white mb-0.5 sm:mb-1 text-xs sm:text-sm">Phone & Fax</div>
                    <a href={`tel:${contactDetails.telephone}`} className="text-white/80 hover:text-white text-xs sm:text-sm transition-colors block mb-0.5">
                      Telephone: {contactDetails.telephone}
                    </a>
                    <div className="text-white/80 text-xs sm:text-sm">FAX: {contactDetails.fax}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-md bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white mb-0.5 sm:mb-1 text-xs sm:text-sm">Email</div>
                    <a href={`mailto:${contactDetails.email}`} className="text-white/80 hover:text-white text-xs sm:text-sm transition-colors break-all">
                      {contactDetails.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-md bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white mb-0.5 sm:mb-1 text-xs sm:text-sm">Office Hours</div>
                    <div className="text-white/80 text-xs sm:text-sm">{contactDetails.officeHours}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-5 border-t border-white/20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-white/80 text-xs mb-1">
                  <span>Proudly serving the community since 1980</span>
                </div>
                <div className="text-white/60 text-xs">
                  © 2023 Kathmandu National School. All rights reserved.
                </div>
              </div>
              
              <div className="text-center sm:text-right">
                <div className="text-white/60 text-xs">
                  Affiliated with Government of Nepal, Ministry of Education
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-3 sm:opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }} />
        </div>
      </footer>

      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-4 right-4 w-9 h-9 rounded-full bg-red-600 text-white shadow-md hover:bg-red-700 transition-colors flex items-center justify-center z-40"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Add marquee animation CSS */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: inline-block;
          white-space: nowrap;
          padding-left: 100%;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

