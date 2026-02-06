import { motion } from 'framer-motion';
import { Trophy, Award, Globe, Users, Calendar, Star, Target, Medal, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

// Import achievement images
import exchangeImage from '../../../assets/Montessori/prize1.jpg';
import koreaImage from '../../../assets/Montessori/prize2.jpg';
import culturalFestivalImage from '../../../assets/Montessori/prize4.jpg';

const RecentAchievementsPage = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const achievements = [
    {
      id: 'cultural',
      title: "International Cultural Festival 2014",
      location: "South Korea",
      date: "27th July - 3rd August, 2014",
      description: "11 of our secondary level students participated in the prestigious International Cultural Festival, representing Nepal on a global platform.",
      icon: Globe,
      color: "bg-blue-500",
      highlights: [
        "Global cultural exchange program",
        "Representation of Nepali culture",
        "International exposure for students",
        "Cultural diplomacy initiative"
      ]
    },
    {
      id: 'exchange',
      title: "Student Exchange Program",
      location: "International Level",
      date: "Ongoing Program",
      description: "We have established student exchange programs to and from international institutions, providing global learning opportunities.",
      icon: Users,
      color: "bg-green-500",
      highlights: [
        "International partnerships",
        "Cultural immersion programs",
        "Global educational exposure",
        "Cross-cultural understanding"
      ]
    }
  ];

  const students = [
    "Shreya Sigdel",
    "Sujan Shrestha",
    "Surendra Tamang",
    "Sneha Thapa",
    "Samikshya KC",
    "Samjhana Ghimire",
    "Ajaya Rai",
    "Annu Shrestha",
    "Aashish Malla",
    "Rija Khadgi",
    "Karina Chaulaga"
  ];

  const programBenefits = [
    {
      id: 'global',
      icon: Target,
      title: "Global Exposure",
      description: "Students gain international perspective and cultural understanding"
    },
    {
      id: 'cultural',
      icon: Medal,
      title: "Cultural Exchange",
      description: "Promotes cross-cultural communication and appreciation"
    },
    {
      id: 'skill',
      icon: Star,
      title: "Skill Development",
      description: "Enhances communication, adaptability, and leadership skills"
    },
    {
      id: 'career',
      icon: Award,
      title: "Career Opportunities",
      description: "Opens doors to international education and career paths"
    }
  ];

  const toggleSection = (id) => {
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
            src={koreaImage}
            alt="International Cultural Festival Achievements" 
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
            <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-[Cambria] mb-3 sm:mb-4">
              Recent Achievements
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
              Celebrating Global Excellence & International Recognition
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
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                    Global Recognition & Exchange Programs
                  </h2>
                </div>
                
                <div className="space-y-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <p>
                    Kathmandu National School takes pride in its <span className="font-semibold text-primary">international achievements and global outreach programs</span>. Our students have represented Nepal on prestigious international platforms, showcasing our commitment to global education.
                  </p>
                  
                  <p>
                    We have established student exchange programs to and from international institutions, providing our students with invaluable global exposure and cross-cultural learning experiences.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border border-primary/20 mt-3">
                    <p className="font-serif italic text-gray-700 text-xs sm:text-sm text-center">
                      "11 of our secondary level students participated in the International Cultural Festival 2014 in South Korea, representing our school and country with distinction."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements - Mobile Accordion */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-0.5 bg-blue-500 rounded-full"></div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                  Recent Achievements
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleSection(`achievement-${achievement.id}`)}
                        className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 text-left">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <achievement.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-sm sm:text-base font-bold text-gray-900 font-[Cambria]">
                              {achievement.title}
                            </h3>
                            <div className="text-xs text-gray-600 mt-0.5 flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {achievement.date}
                            </div>
                          </div>
                        </div>
                        {expandedSections[`achievement-${achievement.id}`] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedSections[`achievement-${achievement.id}`] ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-3 sm:p-4 pt-0">
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3">
                            {achievement.description}
                          </p>
                          
                          <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-2">Key Highlights:</h4>
                          <ul className="space-y-1.5">
                            {achievement.highlights.map((highlight, highlightIndex) => (
                              <li key={highlightIndex} className="flex items-start gap-1.5">
                                <div className={`w-1.5 h-1.5 ${achievement.color} rounded-full mt-1.5 flex-shrink-0`}></div>
                                <span className="text-gray-700 text-xs">{highlight}</span>
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

            {/* Students - Mobile Accordion */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-0.5 bg-green-500 rounded-full"></div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                  Festival Participants
                </h2>
              </div>
              
              <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 shadow-sm">
                <p className="text-gray-700 text-xs sm:text-sm mb-3 text-center">
                  Our 11 exceptional students who represented KNS in South Korea, 2014
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  {students.slice(0, 8).map((student, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-2 border border-gray-100 flex items-center gap-1.5">
                      <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center">
                        <div className="text-primary font-bold text-xs">{student.charAt(0)}</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xs">{student}</h4>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => toggleSection('all-students')}
                  className="w-full mt-3 text-center text-primary text-xs font-semibold flex items-center justify-center gap-1"
                >
                  {expandedSections['all-students'] ? 'Show Less' : 'Show All 11 Students'} 
                  {expandedSections['all-students'] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
                
                {expandedSections['all-students'] && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-2">
                      {students.slice(8).map((student, index) => (
                        <div key={index + 8} className="bg-gray-50 rounded-lg p-2 border border-gray-100 flex items-center gap-1.5">
                          <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center">
                            <div className="text-primary font-bold text-xs">{student.charAt(0)}</div>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-xs">{student}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Benefits - Mobile Accordion */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-0.5 bg-red-500 rounded-full"></div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                  Program Benefits
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {programBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleSection(`benefit-${benefit.id}`)}
                        className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 text-left">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 font-[Cambria]">
                            {benefit.title}
                          </h3>
                        </div>
                        {expandedSections[`benefit-${benefit.id}`] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedSections[`benefit-${benefit.id}`] ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-3 sm:p-4 pt-0">
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Vision Section - Mobile */}
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
                    <h3 className="text-base sm:text-lg font-bold text-white font-[Cambria]">
                      Global Education Vision
                    </h3>
                    <div className="h-px w-6 sm:w-8 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-xs sm:text-sm font-serif italic">
                    Preparing students for success in an interconnected world
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-[Cambria] mb-1">Global Citizenship</h4>
                    <p className="text-white/90 text-xs">
                      Developing students as responsible global citizens
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-[Cambria] mb-1">International Partnerships</h4>
                    <p className="text-white/90 text-xs">
                      Building strong educational partnerships worldwide
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-[Cambria] mb-1">Future Opportunities</h4>
                    <p className="text-white/90 text-xs">
                      Opening doors to international education and careers
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Introduction & Achievements */}
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
                  <h2 className="text-2xl font-bold text-gray-900 font-[Cambria]">
                    Global Recognition & Exchange Programs
                  </h2>
                </div>
                
                <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                  <p>
                    Kathmandu National School takes pride in its <span className="font-semibold text-primary">international achievements and global outreach programs</span>. Our students have represented Nepal on prestigious international platforms, showcasing our commitment to global education.
                  </p>
                  
                  <p>
                    We have established student exchange programs to and from international institutions, providing our students with invaluable global exposure and cross-cultural learning experiences.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-4">
                    <p className="font-serif italic text-gray-700 text-base text-center">
                      "11 of our secondary level students participated in the International Cultural Festival 2014 in South Korea, representing our school and country with distinction."
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-blue-500 rounded-full"></div>
                  <h2 className="text-xl font-bold text-gray-900 font-[Cambria]">
                    Recent Achievements
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <achievement.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-gray-900 font-[Cambria] mb-1.5">
                            {achievement.title}
                          </h3>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-sm leading-relaxed mb-3 ml-13">
                        {achievement.description}
                      </p>
                      
                      <div className="ml-13">
                        <h4 className="font-bold text-gray-900 text-xs mb-2">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {achievement.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-start gap-1.5">
                              <div className={`w-1.5 h-1.5 ${achievement.color} rounded-full mt-1.5 flex-shrink-0`}></div>
                              <span className="text-gray-700 text-xs">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Students & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Students Card */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-gray-900 font-[Cambria]">
                    Festival Participants
                  </h3>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 text-center">
                  Our 11 exceptional students who represented KNS in South Korea, 2014
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {students.map((student, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-100 flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                        <div className="text-primary font-bold text-sm">{student.charAt(0)}</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{student}</h4>
                        <p className="text-gray-600 text-xs">International Festival Participant</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center mb-4">
                  <Award className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-xl font-bold text-white font-[Cambria]">
                    Program Benefits
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {programBenefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <benefit.icon className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-bold text-white text-sm">{benefit.title}</h4>
                      </div>
                      <p className="text-white/90 text-xs">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
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

export default RecentAchievementsPage;