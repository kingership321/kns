import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, Coffee, Bus, Home, Clock, HelpCircle, HeartPulse, Wifi, Users, Shield, Monitor } from 'lucide-react';

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
      icon: Wifi,
      title: 'Wi-Fi Campus',
      description: 'High-speed internet connectivity throughout the campus'
    },
    {
      icon: Shield,
      title: 'Security',
      description: '24/7 security surveillance and controlled access'
    },
    {
      icon: Users,
      title: 'Counseling',
      description: 'Professional counseling services for students'
    },
    {
      icon: Monitor,
      title: 'Smart Classrooms',
      description: 'Technology-enabled classrooms for interactive learning'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Same as home page */}
      <section className="relative py-10 lg:py-16 overflow-hidden">
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

        <div className="container mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white font-[Cambria] mb-4">
              Our Facilities
            </h1>
            
            {/* Divider like home page */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-white/50" />
                <p className="text-base md:text-lg text-white/95 italic tracking-wide font-serif">
                  Education · Civilization · Humanization
                </p>
                <div className="h-px w-10 bg-white/50" />
              </div>
            </motion.div>
            
            <p className="text-lg text-white/90 mb-6 font-serif italic">
              World-Class Infrastructure for Holistic Development
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content */}
      <section className="relative py-10 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-5 lg:px-6">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 lg:mb-12"
          >
            <div className="bg-white rounded-lg p-4 lg:p-6 border border-gray-200 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-0.5 bg-red-500 rounded-full"></div>
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                      State-of-the-Art Facilities
                    </h2>
                  </div>
                  
                  <div className="text-gray-700 text-sm lg:text-base leading-relaxed space-y-3">
                    <p>
                      Kathmandu National School is equipped with <span className="font-semibold text-primary">modern, comprehensive facilities</span> designed to support academic excellence and holistic development of every student.
                    </p>
                    
                    <p>
                      From advanced laboratories to comfortable boarding facilities, we provide everything needed for a complete educational experience in a safe and nurturing environment.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
                  <h3 className="font-bold text-gray-900 text-base mb-3">Why Our Facilities Matter</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Enhanced learning experiences</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Safe and secure environment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Convenience for students and parents</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Health and wellness support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Facilities Grid */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-primary/50" />
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Our Comprehensive Facilities
                </h2>
                <div className="h-px w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Modern infrastructure supporting academic and personal growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                    {/* Image Section */}
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img 
                        src={facility.image} 
                        alt={facility.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-2 left-2">
                        <div className={`${facility.color} w-10 h-10 rounded-lg flex items-center justify-center shadow-md`}>
                          <facility.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-lg font-bold text-white font-[Cambria]">
                          {facility.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-4">
                      <p className="text-gray-700 text-sm mb-4">
                        {facility.description}
                      </p>
                      
                      <div className="border-t border-gray-100 pt-3">
                        <h4 className="font-bold text-gray-900 text-sm mb-2">Key Features:</h4>
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

          {/* Additional Features */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-primary/50" />
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Additional Features
                </h2>
                <div className="h-px w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Supporting infrastructure that enhances the learning experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-base font-bold text-gray-900 font-[Cambria] mb-2">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-700 text-xs">
                      {feature.description}
                    </p>
                    
                    <div className="h-0.5 w-10 bg-red-500 rounded-full mt-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative rounded-lg overflow-hidden">
              {/* Gradient overlay like hero */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-primary/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/50" />
              
              {/* Pattern texture */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                }} />
              </div>

              <div className="relative z-10 p-6 lg:p-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="h-px w-10 bg-white/50" />
                    <h3 className="text-xl lg:text-2xl font-bold text-white font-[Cambria]">
                      Benefits of Our Facilities
                    </h3>
                    <div className="h-px w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-base font-serif italic max-w-2xl mx-auto">
                    Creating an environment where students thrive academically and personally
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Academic Excellence</h4>
                    <p className="text-white/80 text-xs">
                      State-of-the-art labs and library facilities that enhance learning outcomes
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <HeartPulse className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Health & Safety</h4>
                    <p className="text-white/80 text-xs">
                      Medical facilities, hygienic food, and secure transportation for student wellbeing
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Home className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Comfort & Convenience</h4>
                    <p className="text-white/80 text-xs">
                      Boarding facilities and services that make school feel like a second home
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Parent Partnership</h4>
                    <p className="text-white/80 text-xs">
                      SMS notifications and help desk support for effective parent-school communication
                    </p>
                  </div>
                </div>
                
                {/* Facilities Stats */}
                <div className="mt-10 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white font-[Cambria] mb-1">8+</div>
                      <div className="text-white/90 text-xs">Major Facilities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white font-[Cambria] mb-1">24/7</div>
                      <div className="text-white/90 text-xs">Medical Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white font-[Cambria] mb-1">100%</div>
                      <div className="text-white/90 text-xs">Filtered Water</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white font-[Cambria] mb-1">GPS</div>
                      <div className="text-white/90 text-xs">Transport Tracking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23006699'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }} />
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;