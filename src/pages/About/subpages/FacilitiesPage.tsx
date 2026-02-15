import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, Coffee, Bus, Home, Clock, HelpCircle, HeartPulse, Wifi, Users, Shield, Monitor, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import QuickLinksSection from '../../../components/LinksSection';

// Import facility images
import libraryImage from '../../../assets/Montessori/prize1.jpg';
import labImage from '../../../assets/Montessori/prize2.jpg';
import cafeteriaImage from '../../../assets/Scout/kns-scout1.jpg';
import transportImage from '../../../assets/annual-day/annual-day1.jpg';
import hostelImage from '../../../assets/annual-day/annual-day2.jpg';
import dayBoardingImage from '../../../assets/annual-day/annual-day3.jpg';
import helpDeskImage from '../../../assets/annual-day/annual-day4.jpg';
import medicalImage from '../../../assets/annual-day/annual-day5.jpg';

const FacilitiesPage = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const facilities = [
    {
      id: 'library',
      title: 'Library',
      icon: BookOpen,
      image: libraryImage,
      description: 'The School has a library with wide range of books catering to all age groups comprising textbooks, reference books, magazines, journals, novel, stories, comics, newspaper etc.',
      features: [
        'Extensive collection for all age groups',
        'Textbooks & reference materials',
        'Magazines, journals, and newspapers',
        'Fiction and non-fiction sections',
        'Comics and story books',
        'Digital resources available'
      ],
      color: 'bg-blue-500'
    },
    {
      id: 'laboratory',
      title: 'Science & Computer Lab',
      icon: FlaskConical,
      image: labImage,
      description: 'Well equipped science labs for physics, chemistry and biology. Each student gets necessary equipment separately. Mathematics made interesting with equipment. Sufficient computers with network, software and internet.',
      features: [
        'Separate physics, chemistry, biology labs',
        'Individual equipment for each student',
        'Mathematics learning aids',
        'Computer lab with network',
        'Required application software',
        'High-speed internet access'
      ],
      color: 'bg-green-500'
    },
    {
      id: 'cafeteria',
      title: 'Cafeteria',
      icon: Coffee,
      image: cafeteriaImage,
      description: 'School cafeteria provides hygienic and healthy food at reasonable price. Clean and well furnished. Provides pure drinking filtered water to avoid water-borne diseases. Food available on daily or monthly payment basis.',
      features: [
        'Hygienic and healthy food',
        'Clean and well-furnished space',
        'Pure filtered drinking water',
        'Reasonable pricing',
        'Daily/monthly payment options',
        'Nutritionally balanced meals'
      ],
      color: 'bg-yellow-500'
    },
    {
      id: 'transportation',
      title: 'Transportation',
      icon: Bus,
      image: transportImage,
      description: 'School-owned transportation facility. Point to point pick up and drop services offered to all students living in various parts of the Kathmandu valley.',
      features: [
        'School-owned transport vehicles',
        'Point to point service',
        'Coverage across Kathmandu valley',
        'Safe and reliable service',
        'Trained drivers and staff',
        'GPS tracking available'
      ],
      color: 'bg-purple-500'
    },
    {
      id: 'hostel',
      title: 'Hostel',
      icon: Home,
      image: hostelImage,
      description: 'Well managed boarding facility for both boys and girls. Good environment for studies. Provides hygienic living, healthy food and good care to the students.',
      features: [
        'Separate boys and girls hostel',
        'Conducive study environment',
        'Hygienic living conditions',
        'Healthy and balanced meals',
        '24/7 supervision and care',
        'Recreational facilities'
      ],
      color: 'bg-red-500'
    },
    {
      id: 'day-boarding',
      title: 'Day-Boarding',
      icon: Clock,
      image: dayBoardingImage,
      description: 'Special arrangement for day boarders who spend entire day at school. Includes breakfast, lunch and refreshments. Extra study guidance and regular tuition classes provided.',
      features: [
        'Breakfast, lunch and refreshments',
        'Extra study guidance',
        'Regular tuition classes',
        'Supervised study hours',
        'Recreational activities',
        'Evening study support'
      ],
      color: 'bg-indigo-500'
    },
    {
      id: 'help-desk',
      title: 'Help Desk & SMS Support',
      icon: HelpCircle,
      image: helpDeskImage,
      description: 'School has initiated SMS notification system. Using this system notices are being forwarded to parents or guardians. Dedicated help desk for queries.',
      features: [
        'SMS notification system',
        'Regular updates to parents',
        'Dedicated help desk',
        'Quick query resolution',
        'Emergency communication',
        'Parent portal access'
      ],
      color: 'bg-pink-500'
    },
    {
      id: 'medical',
      title: 'Medical & First Aid',
      icon: HeartPulse,
      image: medicalImage,
      description: 'Arrangement for providing first aid to students when required. Medical facilities available in school for all minor injuries and sickness.',
      features: [
        'First aid facilities',
        'Medical room with equipment',
        'Trained staff available',
        'Emergency response system',
        'Regular health check-ups',
        'Tie-up with nearby hospitals'
      ],
      color: 'bg-teal-500'
    }
  ];

  const additionalFeatures = [
    {
      id: 'wifi',
      icon: Wifi,
      title: 'Wi-Fi Campus',
      description: 'High-speed internet connectivity throughout the campus'
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security',
      description: '24/7 security surveillance and controlled access'
    },
    {
      id: 'counseling',
      icon: Users,
      title: 'Counseling',
      description: 'Professional counseling services for students'
    },
    {
      id: 'smart',
      icon: Monitor,
      title: 'Smart Classrooms',
      description: 'Technology-enabled classrooms for interactive learning'
    }
  ];

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Optimized for Mobile */}
      <section className="relative py-6 sm:py-8 lg:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={libraryImage}
            alt="KNS Facilities" 
            className="w-full h-full object-cover"
          />
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/50" />
        </div>
        
        {/* Subtle Pattern Texture */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }} />
        </div>

        <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display mb-3 sm:mb-4">
              Our Facilities
            </h1>
            
            {/* Divider like home page */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/95 italic tracking-wide font-serif px-1 sm:px-2">
                  Education · Civilization · Humanization
                </p>
                <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
              </div>
            </motion.div>
            
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-6 font-serif italic">
              World-Class Infrastructure for Holistic Development
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content - Mobile Optimized */}
      <section className="relative py-6 sm:py-8 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          {/* Mobile: Single Column Layout */}
          <div className="block lg:hidden">
            {/* Introduction Card - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-6 w-0.5 bg-red-500 rounded-full"></div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-display">
                    State-of-the-Art Facilities
                  </h2>
                </div>
                
                <div className="space-y-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <p>
                    Kathmandu National School is equipped with <span className="font-semibold text-primary">modern, comprehensive facilities</span> designed to support academic excellence and holistic development of every student.
                  </p>
                  
                  <p>
                    From advanced laboratories to comfortable boarding facilities, we provide everything needed for a complete educational experience in a safe and nurturing environment.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Facilities - Mobile Accordion */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-0.5 bg-blue-500 rounded-full"></div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-display">
                  Our Comprehensive Facilities
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {facilities.map((facility, index) => (
                  <motion.div
                    key={facility.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleSection(`facility-${facility.id}`)}
                        className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 text-left">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 ${facility.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <facility.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-sm sm:text-base font-bold text-gray-900 font-display">
                              {facility.title}
                            </h3>
                          </div>
                        </div>
                        {expandedSections[`facility-${facility.id}`] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedSections[`facility-${facility.id}`] ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-3 sm:p-4 pt-0">
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3">
                            {facility.description}
                          </p>
                          
                          <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-2">Key Features:</h4>
                          <ul className="space-y-1.5">
                            {facility.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-1.5">
                                <div className={`w-1.5 h-1.5 ${facility.color} rounded-full mt-1.5 flex-shrink-0`}></div>
                                <span className="text-gray-700 text-xs">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Features - Mobile Accordion */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-0.5 bg-green-500 rounded-full"></div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-display">
                  Additional Features
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {additionalFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleSection(`feature-${feature.id}`)}
                        className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 text-left">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 font-display">
                            {feature.title}
                          </h3>
                        </div>
                        {expandedSections[`feature-${feature.id}`] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedSections[`feature-${feature.id}`] ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-3 sm:p-4 pt-0">
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits Section - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-red-600/90 to-red-500/80 rounded-lg p-4 sm:p-5 border border-white/20">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
                    <div className="h-px w-6 sm:w-8 bg-white/50" />
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      Benefits of Our Facilities
                    </h3>
                    <div className="h-px w-6 sm:w-8 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-xs sm:text-sm font-serif italic">
                    Creating an environment where students thrive academically and personally
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-display mb-1">Academic Excellence</h4>
                    <p className="text-white/90 text-xs">
                      State-of-the-art labs and library facilities
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-display mb-1">Health & Safety</h4>
                    <p className="text-white/90 text-xs">
                      Medical facilities and secure transportation
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-display mb-1">Comfort & Convenience</h4>
                    <p className="text-white/90 text-xs">
                      Boarding facilities that feel like home
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Introduction & Facilities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Introduction Card */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-red-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900 font-display">
                    State-of-the-Art Facilities
                  </h2>
                </div>
                
                <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                  <p>
                    Kathmandu National School is equipped with <span className="font-semibold text-primary">modern, comprehensive facilities</span> designed to support academic excellence and holistic development of every student.
                  </p>
                  
                  <p>
                    From advanced laboratories to comfortable boarding facilities, we provide everything needed for a complete educational experience in a safe and nurturing environment.
                  </p>
                </div>
              </div>

              {/* Facilities Grid */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-blue-500 rounded-full"></div>
                  <h2 className="text-xl font-bold text-gray-900 font-display">
                    Our Comprehensive Facilities
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {facilities.map((facility, index) => (
                    <motion.div
                      key={facility.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 ${facility.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <facility.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-gray-900 font-display mb-1.5">
                            {facility.title}
                          </h3>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-sm leading-relaxed mb-3 ml-13">
                        {facility.description}
                      </p>
                      
                      <div className="ml-13">
                        <h4 className="font-bold text-gray-900 text-xs mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {facility.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-1.5">
                              <div className={`w-1.5 h-1.5 ${facility.color} rounded-full mt-1.5 flex-shrink-0`}></div>
                              <span className="text-gray-700 text-xs">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Additional Features & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Additional Features */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-gray-900 font-display">
                    Additional Features
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {additionalFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900 font-display mb-1">
                            {feature.title}
                          </h4>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed ml-13 mt-2">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits Card */}
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center mb-4">
                  <BookOpen className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-xl font-bold text-white font-display">
                    Benefits of Our Facilities
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1">Academic Excellence</h4>
                    <p className="text-white/90 text-xs">
                      State-of-the-art labs and library facilities
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <HeartPulse className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1">Health & Safety</h4>
                    <p className="text-white/90 text-xs">
                      Medical facilities and secure transportation
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Home className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1">Comfort & Convenience</h4>
                    <p className="text-white/90 text-xs">
                      Boarding facilities that feel like home
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1">Parent Partnership</h4>
                    <p className="text-white/90 text-xs">
                      SMS notifications and help desk support
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <QuickLinksSection />
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-3 sm:opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23006699'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }} />
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;

