import { motion } from 'framer-motion';
import { BookOpen, Calendar, Shield, Heart, Target, Users, Star, CheckCircle, AlertCircle, TrendingUp, Award, Home, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

// Import recommendation images
import parentInvolvementImage from '../../../assets/annual-day/annual-day2.jpg';
import almanacImage from '../../../assets/annual-day/annual-day1.jpg';
import studyEnvironmentImage from '../../../assets/annual-day/annual-day3.jpg';
import balancedDevelopmentImage from '../../../assets/annual-day/annual-day4.jpg';
import safetyImage from '../../../assets/annual-day/annual-day5.jpg';
import healthImage from '../../../assets/annual-day/annual-day6.jpg';

const RecommendationsPage = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const recommendations = [
    {
      id: 'academic',
      category: "Academic Responsibility",
      icon: BookOpen,
      image: almanacImage,
      color: "bg-blue-500",
      items: [
        {
          id: 'almanac',
          title: "Daily Almanac Check",
          description: "Check your ward's almanac daily. Do sign the remarks if any and take necessary action.",
          importance: "High Priority",
          tips: [
            "Review teacher remarks daily",
            "Sign acknowledgment sections",
            "Follow up on feedback",
            "Maintain communication with teachers"
          ]
        },
        {
          id: 'books',
          title: "Proper Book Preparation",
          description: "See that your ward carries books/exercise books according to the Time Table for that day. No extra books will be allowed.",
          importance: "Essential",
          tips: [
            "Check daily timetable",
            "Prepare books the night before",
            "Avoid overloading bags",
            "Follow school guidelines strictly"
          ]
        },
        {
          id: 'tests',
          title: "Test & Academic Preparation",
          description: "See that he/she is prepared for the tests and brings answer sheets to school. Please ensure that you see his/her Report Card and teachers' remarks in his/her class work/home work exercise books and almanac.",
          importance: "Academic Success",
          tips: [
            "Regular study schedule",
            "Test preparation support",
            "Review report cards thoroughly",
            "Monitor homework completion"
          ]
        }
      ]
    },
    {
      id: 'development',
      category: "Holistic Development",
      icon: Users,
      image: balancedDevelopmentImage,
      color: "bg-green-500",
      items: [
        {
          id: 'balanced',
          title: "Balanced Interest",
          description: "Encourage your ward to take a balanced interest in studies, co-curricular activities and sports.",
          importance: "Well-rounded Growth",
          tips: [
            "Support extracurricular participation",
            "Balance study and play time",
            "Encourage diverse interests",
            "Attend school events and competitions"
          ]
        }
      ]
    },
    {
      id: 'health',
      category: "Health & Safety",
      icon: Shield,
      image: safetyImage,
      color: "bg-red-500",
      items: [
        {
          id: 'halfday',
          title: "Half-Day Leave Policy",
          description: "Leave for half day should be avoided as far as possible for security reasons. In an emergency, written permission must be taken from the Principal.",
          importance: "Safety Protocol",
          tips: [
            "Plan appointments after school hours",
            "Emergency only half-day leaves",
            "Written permission required",
            "Prior notification to school office"
          ]
        },
        {
          id: 'sickness',
          title: "Health Compliance",
          description: "Children, when sick, should not be sent to school to attend classes. This is for strict compliance.",
          importance: "Health & Safety",
          tips: [
            "Keep sick children at home",
            "Inform school about illness",
            "Provide medical certificates if needed",
            "Ensure full recovery before return"
          ]
        }
      ]
    }
  ];

  const importanceLevels = [
    {
      level: "High Priority",
      color: "bg-red-100 text-red-800 border-red-200",
      description: "Critical for academic success and safety"
    },
    {
      level: "Essential",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      description: "Important for smooth school functioning"
    },
    {
      level: "Academic Success",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      description: "Key to academic achievement"
    },
    {
      level: "Well-rounded Growth",
      color: "bg-green-100 text-green-800 border-green-200",
      description: "Important for holistic development"
    },
    {
      level: "Safety Protocol",
      color: "bg-red-100 text-red-800 border-red-200",
      description: "Mandatory for student safety"
    },
    {
      level: "Health & Safety",
      color: "bg-red-100 text-red-800 border-red-200",
      description: "Critical for community health"
    }
  ];

  const parentTips = [
    {
      icon: Heart,
      title: "Active Involvement",
      description: "Regular communication with teachers and monitoring of academic progress"
    },
    {
      icon: Target,
      title: "Consistent Routine",
      description: "Establish and maintain a consistent daily study and preparation routine"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Regular review of almanac, homework, and report cards"
    },
    {
      icon: Star,
      title: "Encouragement",
      description: "Positive reinforcement for both academic and extracurricular achievements"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Optimized for Mobile */}
      <section className="relative py-6 sm:py-8 lg:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={parentInvolvementImage}
            alt="Parent Recommendations at KNS" 
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
              Parent Recommendations
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
              Partnering with Parents for Student Success
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content - Mobile Optimized */}
      <section className="relative py-6 sm:py-8 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          {/* Introduction - Mobile Accordion */}
          <div className="block lg:hidden mb-6">
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
                    Guidelines for Parents & Guardians
                  </h2>
                </div>
                
                <div className="space-y-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <p>
                    At Kathmandu National School, we believe that <span className="font-semibold text-primary">successful education requires strong partnership between school and parents</span>. Your active involvement in your ward's academic journey is crucial for their growth and development.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-3 border border-primary/20 mt-3">
                    <p className="font-serif italic text-gray-700 text-xs">
                      "Your cooperation and support in following these guidelines are essential for creating a conducive learning environment and ensuring your child's success."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Accordion for Recommendations */}
            <div className="space-y-3 sm:space-y-4">
              {recommendations.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <button
                      onClick={() => toggleSection(category.id)}
                      className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 text-left">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 font-[Cambria]">
                            {category.category}
                          </h3>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full mt-1"></div>
                        </div>
                      </div>
                      {expandedSections[category.id] ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedSections[category.id] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="p-3 sm:p-4 pt-0">
                        {category.items.map((item, itemIndex) => (
                          <div key={item.id} className={`${itemIndex > 0 ? 'mt-3 pt-3 border-t border-gray-100' : ''}`}>
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-sm font-bold text-gray-900 font-[Cambria]">
                                {item.title}
                              </h4>
                              <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium ${
                                item.importance === "High Priority" || item.importance === "Safety Protocol" || item.importance === "Health & Safety"
                                  ? "bg-red-100 text-red-800 border border-red-200"
                                  : item.importance === "Essential"
                                  ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                                  : item.importance === "Academic Success"
                                  ? "bg-blue-100 text-blue-800 border border-blue-200"
                                  : "bg-green-100 text-green-800 border border-green-200"
                              }`}>
                                {item.importance}
                              </span>
                            </div>
                            
                            <p className="text-gray-700 text-xs mb-2">
                              {item.description}
                            </p>
                            
                            {item.tips && (
                              <div className="border-t border-gray-100 pt-2 mt-2">
                                <h5 className="font-bold text-gray-900 text-xs mb-1">Helpful Tips:</h5>
                                <ul className="space-y-1">
                                  {item.tips.map((tip, tipIndex) => (
                                    <li key={tipIndex} className="flex items-start gap-1.5">
                                      <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-700 text-xs">{tip}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Parent Tips Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 sm:mt-8"
            >
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-5 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <h3 className="text-base sm:text-lg font-bold text-white font-[Cambria]">
                    Effective Parenting Strategies
                  </h3>
                </div>
                
                <div className="space-y-3 text-white/90 text-xs sm:text-sm">
                  <p>Key approaches for successful support of your child's education</p>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
                      <div className="text-white text-lg sm:text-xl font-bold mb-0.5">Daily</div>
                      <div className="text-white/80 text-xs">Almanac Check</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
                      <div className="text-white text-lg sm:text-xl font-bold mb-0.5">100%</div>
                      <div className="text-white/80 text-xs">Health Compliance</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Main Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-red-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900 font-[Cambria]">
                    Guidelines for Parents & Guardians
                  </h2>
                </div>
                
                <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                  <p>
                    At Kathmandu National School, we believe that <span className="font-semibold text-primary">successful education requires strong partnership between school and parents</span>. Your active involvement in your ward's academic journey is crucial for their growth and development.
                  </p>
                  
                  <p>
                    These recommendations are designed to help you support your child's education effectively, ensuring they get the maximum benefit from their time at KNS.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-4">
                    <p className="font-serif italic text-gray-700 text-sm">
                      "Your cooperation and support in following these guidelines are essential for creating a conducive learning environment and ensuring your child's success."
                    </p>
                  </div>
                </div>
              </div>

              {/* Importance Legend */}
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-4 h-4 text-gray-600" />
                  <h3 className="font-bold text-gray-900 text-base">Understanding Importance Levels</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {importanceLevels.map((level, index) => (
                    <div key={index} className={`px-2 py-1 rounded-md border text-xs font-medium ${level.color}`}>
                      {level.level}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Academic Recommendations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {recommendations[0].items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 font-[Cambria] mb-1.5">
                            {item.title}
                          </h3>
                          <div className="h-0.5 w-10 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        item.importance === "High Priority" || item.importance === "Safety Protocol" || item.importance === "Health & Safety"
                          ? "bg-red-100 text-red-800 border border-red-200"
                          : item.importance === "Essential"
                          ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                          : item.importance === "Academic Success"
                          ? "bg-blue-100 text-blue-800 border border-blue-200"
                          : "bg-green-100 text-green-800 border border-green-200"
                      }`}>
                        {item.importance}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-3">
                      {item.description}
                    </p>
                    
                    {item.tips && (
                      <div className="border-t border-gray-100 pt-3">
                        <h4 className="font-bold text-gray-900 text-sm mb-2">Helpful Tips:</h4>
                        <ul className="space-y-1.5">
                          {item.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start gap-1.5">
                              <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-xs">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Other Recommendations - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 sm:mt-10 lg:mt-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {recommendations.slice(1).map((category, index) => (
                <div key={category.id}>
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="h-px w-6 sm:w-8 md:w-10 bg-primary/50" />
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                        {category.category}
                      </h2>
                      <div className="h-px w-6 sm:w-8 md:w-10 bg-primary/50" />
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                        className="group"
                      >
                        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-start gap-3">
                              <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                <category.icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-gray-900 font-[Cambria] mb-1.5">
                                  {item.title}
                                </h3>
                                <div className="h-0.5 w-10 bg-red-500 rounded-full"></div>
                              </div>
                            </div>
                            <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                              item.importance === "High Priority" || item.importance === "Safety Protocol" || item.importance === "Health & Safety"
                                ? "bg-red-100 text-red-800 border border-red-200"
                                : item.importance === "Essential"
                                ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                                : item.importance === "Academic Success"
                                ? "bg-blue-100 text-blue-800 border border-blue-200"
                                : "bg-green-100 text-green-800 border border-green-200"
                            }`}>
                              {item.importance}
                            </span>
                          </div>
                          
                          <p className="text-gray-700 text-sm mb-3">
                            {item.description}
                          </p>
                          
                          {item.tips && (
                            <div className="border-t border-gray-100 pt-3">
                              <h4 className="font-bold text-gray-900 text-sm mb-2">Helpful Tips:</h4>
                              <ul className="space-y-1.5">
                                {item.tips.map((tip, tipIndex) => (
                                  <li key={tipIndex} className="flex items-start gap-1.5">
                                    <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 text-xs">{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Parent Tips - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 sm:mt-10 lg:mt-16"
          >
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
                <div className="h-px w-6 sm:w-8 md:w-10 bg-primary/50" />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Effective Parenting Strategies
                </h2>
                <div className="h-px w-6 sm:w-8 md:w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                Key approaches for successful support of your child's education
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
              {parentTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                      <tip.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 font-[Cambria] mb-1 sm:mb-2">
                      {tip.title}
                    </h3>
                    
                    <p className="text-gray-700 text-xs">
                      {tip.description}
                    </p>
                    
                    <div className="h-0.5 w-8 sm:w-10 bg-red-500 rounded-full mt-2 sm:mt-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final Section - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 sm:mt-10 lg:mt-16"
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

              <div className="relative z-10 p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-[Cambria]">
                      Our Shared Responsibility
                    </h3>
                    <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-sm sm:text-base font-serif italic max-w-2xl mx-auto">
                    Working together for the success and well-being of every student
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Home className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Home Support</h4>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Your active involvement at home reinforces learning and builds good study habits
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Safety Partnership</h4>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Following safety and health protocols ensures a secure environment for all students
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Academic Excellence</h4>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Consistent academic monitoring and support leads to better learning outcomes
                    </p>
                  </div>
                </div>
                
                {/* Compliance Checklist */}
                <div className="mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6 border-t border-white/20">
                  <div className="max-w-3xl mx-auto">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 text-center font-[Cambria]">Parent Compliance Checklist</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-white font-bold text-sm">Daily Responsibilities</span>
                        </div>
                        <ul className="space-y-1">
                          <li className="text-white/90 text-xs">✓ Check almanac daily</li>
                          <li className="text-white/90 text-xs">✓ Verify timetable compliance</li>
                          <li className="text-white/90 text-xs">✓ Monitor homework completion</li>
                        </ul>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-4 h-4 text-blue-400" />
                          <span className="text-white font-bold text-sm">Health & Safety</span>
                        </div>
                        <ul className="space-y-1">
                          <li className="text-white/90 text-xs">✓ Keep sick children home</li>
                          <li className="text-white/90 text-xs">✓ Avoid unnecessary half-days</li>
                          <li className="text-white/90 text-xs">✓ Follow emergency protocols</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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

export default RecommendationsPage;