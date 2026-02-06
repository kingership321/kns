import { motion } from 'framer-motion';
import { Calendar, BarChart3, FileText, Target, Award, TrendingUp, Clock, CheckCircle, BookOpen, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

// Import examination image
import examImage from '../../../assets/saraswati-puja/Saraswati-Puja4.jpg';

const ExaminationsPage = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const examTypes = [
    {
      id: 'unit',
      icon: FileText,
      title: "Unit Tests",
      frequency: "After each unit",
      description: "Comprehensive assessment after completion of every academic unit",
      color: "bg-blue-500",
      duration: "Weekly/Bi-weekly",
      purpose: "Immediate feedback on unit comprehension"
    },
    {
      id: 'monthly',
      icon: Calendar,
      title: "Monthly Tests",
      frequency: "Each month",
      description: "Regular evaluation to track monthly progress and learning retention",
      color: "bg-green-500",
      duration: "Monthly",
      purpose: "Continuous assessment and progress tracking"
    },
    {
      id: 'terminal',
      icon: TrendingUp,
      title: "Terminal Tests",
      frequency: "Every three months",
      description: "Comprehensive evaluation covering three months of academic content",
      color: "bg-purple-500",
      duration: "Quarterly",
      purpose: "Comprehensive understanding assessment"
    },
    {
      id: 'regular',
      icon: BookOpen,
      title: "Regular Evaluations",
      frequency: "Ongoing",
      description: "Holistic evaluation approach including class participation and assignments",
      color: "bg-yellow-500",
      duration: "Continuous",
      purpose: "Overall development assessment"
    },
    {
      id: 'annual',
      icon: BarChart3,
      title: "Annual Examinations",
      frequency: "Year-end",
      description: "Final comprehensive assessment covering entire academic year syllabus",
      color: "bg-red-500",
      duration: "Annual",
      purpose: "Year-end performance evaluation"
    },
    {
      id: 'result',
      icon: Award,
      title: "Annual Result",
      frequency: "After annual exam",
      description: "Final summary evaluation combining all assessment components",
      color: "bg-indigo-500",
      duration: "Once a year",
      purpose: "Comprehensive academic performance summary"
    }
  ];

  const evaluationSystem = [
    {
      id: 'holistic',
      title: "Holistic Assessment",
      description: "We evaluate not just academic knowledge but also critical thinking, creativity, and practical application skills.",
      icon: Target
    },
    {
      id: 'continuous',
      title: "Continuous Monitoring",
      description: "Regular assessments ensure constant feedback and timely intervention for improvement.",
      icon: TrendingUp
    },
    {
      id: 'comprehensive',
      title: "Comprehensive Evaluation",
      description: "Annual results combine all assessment types to provide complete academic profile.",
      icon: BarChart3
    },
    {
      id: 'student',
      title: "Student-Centric Approach",
      description: "Our evaluation system is designed to identify and nurture individual strengths.",
      icon: Users
    }
  ];

  const examSchedule = [
    { id: 'unit', month: "Unit Tests", timeline: "Throughout the year", weightage: "20%" },
    { id: 'monthly', month: "Monthly Tests", timeline: "Regular intervals", weightage: "15%" },
    { id: 'terminal', month: "Terminal Tests", timeline: "March, June, September", weightage: "25%" },
    { id: 'annual', month: "Annual Exam", timeline: "November-December", weightage: "40%" }
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
            src={examImage}
            alt="Examinations at Kathmandu National School" 
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
              Examinations & Evaluation
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
              Comprehensive Assessment System for Holistic Development
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
                    Our Examination System
                  </h2>
                </div>
                
                <div className="space-y-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <p>
                    At Kathmandu National School, we believe in a <span className="font-semibold text-primary">comprehensive and continuous assessment system</span> that provides regular feedback and supports student growth throughout the academic year.
                  </p>
                  
                  <p>
                    Our structured examination pattern is designed to evaluate not just academic knowledge, but also critical thinking, application skills, and overall development.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border border-primary/20 mt-3">
                    <p className="font-serif italic text-gray-700 text-xs sm:text-sm text-center">
                      "We follow a holistic evaluation approach that combines regular assessments with comprehensive examinations to ensure complete academic development."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Examination Types - Mobile Accordion */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-0.5 bg-blue-500 rounded-full"></div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                  Types of Examinations
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {examTypes.map((exam, index) => (
                  <motion.div
                    key={exam.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleSection(`exam-${exam.id}`)}
                        className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 text-left">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 ${exam.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <exam.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-sm sm:text-base font-bold text-gray-900 font-[Cambria]">
                              {exam.title}
                            </h3>
                            <div className="text-xs text-gray-600 mt-0.5">{exam.duration}</div>
                          </div>
                        </div>
                        {expandedSections[`exam-${exam.id}`] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedSections[`exam-${exam.id}`] ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-3 sm:p-4 pt-0">
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-2">
                            {exam.description}
                          </p>
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-gray-600">Frequency:</span>
                            <span className="text-gray-700">{exam.frequency}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs mt-1">
                            <span className="font-semibold text-gray-600">Purpose:</span>
                            <span className="text-gray-700">{exam.purpose}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Evaluation System - Mobile Accordion */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-0.5 bg-red-500 rounded-full"></div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                  Holistic Evaluation Approach
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {evaluationSystem.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleSection(`eval-${item.id}`)}
                        className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 text-left">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 font-[Cambria]">
                            {item.title}
                          </h3>
                        </div>
                        {expandedSections[`eval-${item.id}`] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedSections[`eval-${item.id}`] ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-3 sm:p-4 pt-0">
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Exam Schedule - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-5 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <h3 className="text-base sm:text-lg font-bold text-white font-[Cambria]">
                    Annual Examination Schedule
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {examSchedule.map((exam, index) => (
                    <div key={exam.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-white text-sm">{exam.month}</h4>
                        <span className="text-white font-bold bg-white/20 px-2 py-0.5 rounded-full text-xs">
                          {exam.weightage}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-white/80 text-xs">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {exam.timeline}
                        </span>
                        <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">
                          Weightage
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Annual Result Section - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-red-600/90 to-red-500/80 rounded-lg p-4 sm:p-5 border border-white/20">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
                    <div className="h-px w-6 sm:w-8 bg-white/50" />
                    <h3 className="text-base sm:text-lg font-bold text-white font-[Cambria]">
                      Annual Result & Evaluation
                    </h3>
                    <div className="h-px w-6 sm:w-8 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-xs sm:text-sm font-serif italic">
                    Comprehensive assessment leading to complete academic profile
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-[Cambria] mb-1">Comprehensive Summary</h4>
                    <p className="text-white/90 text-xs">
                      Annual result combines all assessment components for complete evaluation
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-[Cambria] mb-1">Progress Tracking</h4>
                    <p className="text-white/90 text-xs">
                      Continuous monitoring of academic growth throughout the year
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-[Cambria] mb-1">Fair Assessment</h4>
                    <p className="text-white/90 text-xs">
                      Transparent evaluation process ensuring fair and accurate results
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Introduction & Exam Types */}
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
                    Our Examination System
                  </h2>
                </div>
                
                <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                  <p>
                    At Kathmandu National School, we believe in a <span className="font-semibold text-primary">comprehensive and continuous assessment system</span> that provides regular feedback and supports student growth throughout the academic year.
                  </p>
                  
                  <p>
                    Our structured examination pattern is designed to evaluate not just academic knowledge, but also critical thinking, application skills, and overall development.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-4">
                    <p className="font-serif italic text-gray-700 text-base text-center">
                      "We follow a holistic evaluation approach that combines regular assessments with comprehensive examinations to ensure complete academic development."
                    </p>
                  </div>
                </div>
              </div>

              {/* Examination Types Grid */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-blue-500 rounded-full"></div>
                  <h2 className="text-xl font-bold text-gray-900 font-[Cambria]">
                    Types of Examinations
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {examTypes.map((exam, index) => (
                    <motion.div
                      key={exam.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 ${exam.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <exam.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-gray-900 font-[Cambria] mb-1.5">
                            {exam.title}
                          </h3>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-sm leading-relaxed mb-3 ml-13">
                        {exam.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs ml-13">
                        <div>
                          <div className="font-semibold text-gray-600">Frequency:</div>
                          <div className="text-gray-700">{exam.frequency}</div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-600">Duration:</div>
                          <div className="text-gray-700">{exam.duration}</div>
                        </div>
                        <div className="col-span-2 mt-1">
                          <div className="font-semibold text-gray-600">Purpose:</div>
                          <div className="text-gray-700">{exam.purpose}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Evaluation System & Schedule */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Evaluation System */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-gray-900 font-[Cambria]">
                    Holistic Evaluation Approach
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {evaluationSystem.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900 font-[Cambria] mb-1">
                            {item.title}
                          </h4>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed ml-13 mt-2">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Exam Schedule */}
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-white" />
                  <h3 className="text-xl font-bold text-white font-[Cambria]">
                    Annual Examination Schedule
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {examSchedule.map((exam, index) => (
                    <div key={exam.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-white text-base">{exam.month}</h4>
                        <span className="text-white font-bold bg-white/20 px-3 py-1 rounded-full text-sm">
                          {exam.weightage}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-white/80 text-sm">
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {exam.timeline}
                        </span>
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">
                          Weightage
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/20">
                  <p className="text-white/90 text-sm text-center">
                    <span className="font-bold">Annual Result</span> is prepared as the comprehensive summary evaluation combining all assessment components.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Annual Result Section - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 sm:mt-10 lg:mt-16"
          >
            <div className="bg-gradient-to-r from-red-600/90 to-red-500/80 rounded-lg p-4 sm:p-6 lg:p-8 border border-white/20">
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-[Cambria]">
                    Annual Result & Evaluation
                  </h3>
                  <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
                </div>
                <p className="text-white/90 text-sm sm:text-base font-serif italic max-w-2xl mx-auto">
                  Comprehensive assessment leading to complete academic profile
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-[Cambria] mb-1 sm:mb-1.5">Comprehensive Summary</h4>
                  <p className="text-white/90 text-xs sm:text-sm">
                    Annual result combines all assessment components for complete evaluation
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-[Cambria] mb-1 sm:mb-1.5">Progress Tracking</h4>
                  <p className="text-white/90 text-xs sm:text-sm">
                    Continuous monitoring of academic growth throughout the year
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-[Cambria] mb-1 sm:mb-1.5">Fair Assessment</h4>
                  <p className="text-white/90 text-xs sm:text-sm">
                    Transparent evaluation process ensuring fair and accurate results
                  </p>
                </div>
              </div>
              
              {/* Final Note */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-white text-sm sm:text-base mb-3 sm:mb-4">
                    The <span className="font-bold">Annual Result</span> at Kathmandu National School is prepared as the annual summary evaluation, combining all assessment components for a complete academic profile.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-md p-2">
                      <div className="text-white font-bold text-sm sm:text-lg mb-1">Unit Tests</div>
                      <div className="text-white/80 text-xs">Regular unit-wise assessment</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-md p-2">
                      <div className="text-white font-bold text-sm sm:text-lg mb-1">Monthly Tests</div>
                      <div className="text-white/80 text-xs">Progress tracking assessments</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-md p-2">
                      <div className="text-white font-bold text-sm sm:text-lg mb-1">Terminal Tests</div>
                      <div className="text-white/80 text-xs">Quarterly comprehensive exams</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-md p-2">
                      <div className="text-white font-bold text-sm sm:text-lg mb-1">Annual Exam</div>
                      <div className="text-white/80 text-xs">Final year-end evaluation</div>
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

export default ExaminationsPage;