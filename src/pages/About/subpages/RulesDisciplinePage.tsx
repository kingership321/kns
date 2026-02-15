import { motion } from 'framer-motion';
import { Users, Shield, AlertCircle, Target, Award, Calendar, UserCheck, FileText, Home, School, CheckCircle, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import QuickLinksSection from '../../../components/LinksSection';

// Import discipline image
import disciplineImage from '../../../assets/annual-day/annual-day1.jpg';

const RulesDisciplinePage = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const categories = [
    {
      id: 'student',
      icon: UserCheck,
      title: "Student Conduct",
      rules: [
        "Behave in a lady-like/gentlemanly manner at all occasions",
        "Address all school staff and students with due respect and politeness",
        "Take part in all school activities",
        "Be neatly dressed in proper school uniform",
        "No low waist skirts/trousers permitted",
        "Shirts must be properly tucked in",
        "No jewellery allowed (chains, rings, bangles, bracelets, etc.)"
      ]
    },
    {
      id: 'parent',
      icon: Users,
      title: "Parent Responsibilities",
      rules: [
        "Comply with school requirements and regulations",
        "Attend Parents-Teacher Association (PTA) meetings",
        "Ensure children attend school punctually",
        "Ensure pickup at dismissal hour",
        "Get Report Cards signed within 5 days",
        "Ensure uniform adherence",
        "Cooperate with school disciplinary actions"
      ]
    },
    {
      id: 'property',
      icon: Shield,
      title: "School Property & Safety",
      rules: [
        "Damage to school property must be remedied at offender's cost",
        "School not responsible for lost goods",
        "No valuables allowed (watches, mobiles, cameras, etc.)",
        "Confiscation of unauthorized valuables",
        "Maintain cleanliness of school premises",
        "Protect school infrastructure and resources"
      ]
    },
    {
      id: 'attendance',
      icon: Calendar,
      title: "Attendance & Leave",
      rules: [
        "No half-day leaves once child arrives at school",
        "No short leave on weekly test days",
        "Leaving after test = marked absent for the day",
        "Regular attendance mandatory",
        "Punctuality strictly enforced",
        "Medical leaves require proper documentation"
      ]
    },
    {
      id: 'disciplinary',
      icon: AlertCircle,
      title: "Disciplinary Actions",
      rules: [
        "Strict action for uniform violations",
        "Bullying and foul language are punishable offences",
        "Violation may lead to suspension/expulsion",
        "Confiscation of prohibited items",
        "Fine for lost Report Cards",
        "Good behavior essential for continuance",
        "Restriction for repeated offences"
      ]
    },
    {
      id: 'grooming',
      icon: Target,
      title: "Grooming Standards",
      rules: [
        "Boys: Regular hair cuts at proper intervals",
        "Girls: Hair below shoulders must be plaited",
        "Girls: Short hair neatly cut and pinned",
        "Clean and tidy appearance always",
        "No extreme hairstyles or colors",
        "Proper school shoes must be worn"
      ]
    }
  ];

  const importantPoints = [
    {
      id: 'uniform',
      icon: Star,
      title: "Uniform Policy",
      description: "Strict adherence required on all working days"
    },
    {
      id: 'behavior',
      icon: CheckCircle,
      title: "Behavior Standards",
      description: "Polite conduct expected at all times, represents school"
    },
    {
      id: 'report',
      icon: FileText,
      title: "Report Cards",
      description: "Must be returned signed within 5 days of receipt"
    }
  ];

  const consequences = [
    { action: "Uniform Violation", consequence: "Disciplinary Action" },
    { action: "Bullying/Foul Language", consequence: "Punishable Offence" },
    { action: "Property Damage", consequence: "Cost Recovery" },
    { action: "Bringing Valuables", consequence: "Confiscation" },
    { action: "Rule Violation", consequence: "Suspension/Expulsion" },
    { action: "Lost Report Card", consequence: "Fine Imposed" }
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
            src={disciplineImage}
            alt="Rules & Discipline at Kathmandu National School" 
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
              Rules & Discipline
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
              Building Character Through Discipline and Responsibility
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
                    School Rules & Discipline Policy
                  </h2>
                </div>
                
                <div className="space-y-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <p>
                    At Kathmandu National School, we believe that <span className="font-semibold text-primary">discipline is the foundation of character building</span> and academic excellence. Our rules and regulations are designed to create a safe, respectful, and conducive learning environment for all students.
                  </p>
                  
                  <p>
                    Enrollment in KNS requires compliance with school requirements and regulations from both parents and students. The observance of rules of discipline and good behaviour is essential for a student's continuance in the school.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border border-primary/20 mt-3">
                    <p className="font-serif italic text-gray-700 text-xs sm:text-sm text-center">
                      "Students should always remember that the school is judged by their conduct. Polite behavior is expected wherever they go."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Key Requirements - Mobile Accordion */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-0.5 bg-blue-500 rounded-full"></div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                  Key Requirements
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {importantPoints.map((point, index) => (
                  <motion.div
                    key={point.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleSection(point.id)}
                        className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 text-left">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <point.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 font-[Cambria]">
                            {point.title}
                          </h3>
                        </div>
                        {expandedSections[point.id] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedSections[point.id] ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-3 sm:p-4 pt-0">
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Rules Categories - Mobile Accordion */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-0.5 bg-red-500 rounded-full"></div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                  Comprehensive Rules & Regulations
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleSection(`category-${category.id}`)}
                        className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 text-left">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 font-[Cambria]">
                            {category.title}
                          </h3>
                        </div>
                        {expandedSections[`category-${category.id}`] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedSections[`category-${category.id}`] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-3 sm:p-4 pt-0">
                          <ul className="space-y-2">
                            {category.rules.map((rule, ruleIndex) => (
                              <li key={ruleIndex} className="flex items-start">
                                <div className="w-4 h-4 bg-red-500/10 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                </div>
                                <span className="text-gray-700 text-xs text-left">{rule}</span>
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

            {/* Consequences - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 shadow-sm">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center mb-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                    Consequences of Violations
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {consequences.map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-2 mb-1 sm:mb-0">
                        <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center">
                          <AlertCircle className="w-3 h-3 text-red-500" />
                        </div>
                        <span className="font-medium text-gray-900 text-xs sm:text-sm">{item.action}</span>
                      </div>
                      <div className="bg-red-500/10 px-2 py-0.5 rounded-full">
                        <span className="text-red-600 font-semibold text-xs">{item.consequence}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Commitment to Discipline - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-5 border border-white/20 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-[Cambria]">
                    Our Commitment to Discipline
                  </h3>
                </div>
                
                <div className="text-white/90 space-y-2 text-xs sm:text-sm">
                  <p>
                    At Kathmandu National School, discipline is not just about following rules - it's about building character, respect, and responsibility.
                  </p>
                  
                  <div className="mt-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <p className="font-serif italic text-white text-center text-xs sm:text-sm">
                      "Students are expected to behave in a lady-like/gentlemanly manner and address all with respect and politeness."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Partnership Section - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gradient-to-r from-red-600/90 to-red-500/80 rounded-lg p-4 sm:p-5 border border-white/20">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
                    <div className="h-px w-6 sm:w-8 bg-white/50" />
                    <h3 className="text-base sm:text-lg font-bold text-white font-[Cambria]">
                      Partnership for Success
                    </h3>
                    <div className="h-px w-6 sm:w-8 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-xs sm:text-sm font-serif italic">
                    Discipline requires partnership between school, students, and parents
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <School className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-[Cambria] mb-1">School's Role</h4>
                    <p className="text-white/90 text-xs">
                      Establish clear rules, ensure enforcement, provide guidance
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-[Cambria] mb-1">Student's Role</h4>
                    <p className="text-white/90 text-xs">
                      Follow rules, show respect, maintain discipline
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-[Cambria] mb-1">Parent's Role</h4>
                    <p className="text-white/90 text-xs">
                      Support school policies, ensure compliance, attend meetings
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Introduction & Categories */}
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
                    School Rules & Discipline Policy
                  </h2>
                </div>
                
                <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                  <p>
                    At Kathmandu National School, we believe that <span className="font-semibold text-primary">discipline is the foundation of character building</span> and academic excellence. Our rules and regulations are designed to create a safe, respectful, and conducive learning environment for all students.
                  </p>
                  
                  <p>
                    Enrollment in KNS requires compliance with school requirements and regulations from both parents and students. The observance of rules of discipline and good behaviour is essential for a student's continuance in the school.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-4">
                    <p className="font-serif italic text-gray-700 text-base text-center">
                      "Students should always remember that the school is judged by their conduct. Polite behavior is expected wherever they go."
                    </p>
                  </div>
                </div>
              </div>

              {/* Rules Categories Grid */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-blue-500 rounded-full"></div>
                  <h2 className="text-xl font-bold text-gray-900 font-[Cambria]">
                    Comprehensive Rules & Regulations
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categories.map((category, index) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <category.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-gray-900 font-[Cambria] mb-1.5">
                            {category.title}
                          </h3>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 ml-13">
                        {category.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-start">
                            <div className="w-4 h-4 bg-red-500/10 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 text-xs text-left">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Key Points, Consequences & Commitment */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Key Requirements */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-red-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-900 font-[Cambria]">
                    Key Requirements
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {importantPoints.map((point, index) => (
                    <motion.div
                      key={point.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <point.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900 font-[Cambria] mb-1">
                            {point.title}
                          </h4>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed ml-13 mt-2">
                        {point.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Consequences */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-3">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-[Cambria]">
                    Consequences of Violations
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {consequences.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center">
                          <AlertCircle className="w-3 h-3 text-red-500" />
                        </div>
                        <span className="font-medium text-gray-900 text-sm">{item.action}</span>
                      </div>
                      <div className="bg-red-500/10 px-3 py-1 rounded-full">
                        <span className="text-red-600 font-semibold text-xs">{item.consequence}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commitment to Discipline */}
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-[Cambria]">
                    Our Commitment to Discipline
                  </h3>
                </div>
                
                <div className="text-white/90 space-y-3 text-sm">
                  <p>
                    At Kathmandu National School, discipline is not just about following rules - it's about building character, respect, and responsibility. Our disciplinary framework is designed to:
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="text-left text-xs">Create a safe and respectful learning environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="text-left text-xs">Develop responsible citizens for tomorrow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="text-left text-xs">Maintain the prestige and reputation of our institution</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <p className="font-serif italic text-white text-center text-sm">
                      "Students are expected to behave in a lady-like/gentlemanly manner and address all with respect and politeness."
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

export default RulesDisciplinePage;