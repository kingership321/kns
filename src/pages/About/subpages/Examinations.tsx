import { motion } from 'framer-motion';
import { Calendar, BarChart3, FileText, Target, Award, TrendingUp, Clock, CheckCircle, BookOpen, Users } from 'lucide-react';

// Import examination image
import examImage from '../../../assets/saraswati-puja/Saraswati-Puja4.jpg';

const ExaminationsPage = () => {
  const examTypes = [
    {
      icon: FileText,
      title: "Unit Tests",
      frequency: "After each unit",
      description: "Comprehensive assessment after completion of every academic unit",
      color: "bg-blue-500",
      duration: "Weekly/Bi-weekly",
      purpose: "Immediate feedback on unit comprehension"
    },
    {
      icon: Calendar,
      title: "Monthly Tests",
      frequency: "Each month",
      description: "Regular evaluation to track monthly progress and learning retention",
      color: "bg-green-500",
      duration: "Monthly",
      purpose: "Continuous assessment and progress tracking"
    },
    {
      icon: TrendingUp,
      title: "Terminal Tests",
      frequency: "Every three months",
      description: "Comprehensive evaluation covering three months of academic content",
      color: "bg-purple-500",
      duration: "Quarterly",
      purpose: "Comprehensive understanding assessment"
    },
    {
      icon: BookOpen,
      title: "Regular Evaluations",
      frequency: "Ongoing",
      description: "Holistic evaluation approach including class participation and assignments",
      color: "bg-yellow-500",
      duration: "Continuous",
      purpose: "Overall development assessment"
    },
    {
      icon: BarChart3,
      title: "Annual Examinations",
      frequency: "Year-end",
      description: "Final comprehensive assessment covering entire academic year syllabus",
      color: "bg-red-500",
      duration: "Annual",
      purpose: "Year-end performance evaluation"
    },
    {
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
      title: "Holistic Assessment",
      description: "We evaluate not just academic knowledge but also critical thinking, creativity, and practical application skills.",
      icon: Target
    },
    {
      title: "Continuous Monitoring",
      description: "Regular assessments ensure constant feedback and timely intervention for improvement.",
      icon: TrendingUp
    },
    {
      title: "Comprehensive Evaluation",
      description: "Annual results combine all assessment types to provide complete academic profile.",
      icon: BarChart3
    },
    {
      title: "Student-Centric Approach",
      description: "Our evaluation system is designed to identify and nurture individual strengths.",
      icon: Users
    }
  ];

  const examSchedule = [
    { month: "Unit Tests", timeline: "Throughout the year", weightage: "20%" },
    { month: "Monthly Tests", timeline: "Regular intervals", weightage: "15%" },
    { month: "Terminal Tests", timeline: "March, June, September", weightage: "25%" },
    { month: "Annual Exam", timeline: "November-December", weightage: "40%" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Same as home page */}
      <section className="relative py-10 lg:py-16 overflow-hidden">
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

        <div className="container mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white font-[Cambria] mb-4">
              Examinations & Evaluation
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
              Comprehensive Assessment System for Holistic Development
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content */}
      <section className="relative py-10 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-5 lg:px-6">
          {/* Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 lg:mb-12"
          >
            <div className="bg-white rounded-lg p-4 lg:p-6 border border-gray-200 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-0.5 bg-red-500 rounded-full"></div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Our Examination System
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="text-gray-700 text-sm lg:text-base leading-relaxed space-y-3">
                  <p>
                    At Kathmandu National School, we believe in a <span className="font-semibold text-primary">comprehensive and continuous assessment system</span> that provides regular feedback and supports student growth throughout the academic year.
                  </p>
                  
                  <p>
                    Our structured examination pattern is designed to evaluate not just academic knowledge, but also critical thinking, application skills, and overall development.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-4">
                    <p className="font-serif italic text-gray-700 text-sm">
                      "We follow a holistic evaluation approach that combines regular assessments with comprehensive examinations to ensure complete academic development."
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
                  <h3 className="font-bold text-gray-900 text-base mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">Regular assessments for continuous improvement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">Multiple evaluation methods for comprehensive assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">Transparent and fair evaluation process</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">Detailed feedback for academic growth</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Examination Types Grid */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-primary/50" />
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Types of Examinations
                </h2>
                <div className="h-px w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Our structured assessment system includes six types of evaluations throughout the academic year
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {examTypes.map((exam, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    {/* Icon Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 ${exam.color} rounded-lg flex items-center justify-center`}>
                        <exam.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{exam.duration}</div>
                        <div className="text-sm font-bold text-gray-700">{exam.frequency}</div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 font-[Cambria] mb-2">
                      {exam.title}
                    </h3>
                    
                    <p className="text-gray-700 text-sm mb-3">
                      {exam.description}
                    </p>
                    
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-gray-600">Purpose:</span>
                        <span className="text-xs text-gray-700">{exam.purpose}</span>
                      </div>
                    </div>
                    
                    {/* Accent Border */}
                    <div className={`h-0.5 w-full ${exam.color} rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Evaluation System & Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Evaluation System */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-lg p-4 lg:p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-primary" />
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 font-[Cambria]">
                    Holistic Evaluation Approach
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {evaluationSystem.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                        <p className="text-gray-700 text-xs">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Exam Schedule */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 lg:p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-white" />
                  <h3 className="text-lg lg:text-xl font-bold text-white font-[Cambria]">
                    Annual Examination Schedule
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {examSchedule.map((exam, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
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
                
                <div className="mt-6 pt-4 border-t border-white/20">
                  <p className="text-white/90 text-xs text-center">
                    <span className="font-bold">Annual Result</span> is prepared as the comprehensive summary evaluation combining all assessment components.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Final Evaluation Process */}
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
                      Annual Result & Evaluation
                    </h3>
                    <div className="h-px w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-base font-serif italic max-w-2xl mx-auto">
                    Comprehensive assessment leading to complete academic profile
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Comprehensive Summary</h4>
                    <p className="text-white/80 text-xs">
                      Annual result combines all assessment components for complete evaluation
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Progress Tracking</h4>
                    <p className="text-white/80 text-xs">
                      Continuous monitoring of academic growth throughout the year
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Fair Assessment</h4>
                    <p className="text-white/80 text-xs">
                      Transparent evaluation process ensuring fair and accurate results
                    </p>
                  </div>
                </div>
                
                {/* Final Note */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="max-w-3xl mx-auto text-center">
                    <p className="text-white text-base mb-3">
                      The <span className="font-bold">Annual Result</span> at Kathmandu National School is prepared as the annual summary evaluation, combining:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-md p-2">
                        <div className="text-white font-bold text-lg mb-1">Unit Tests</div>
                        <div className="text-white/80 text-xs">Regular unit-wise assessment</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-md p-2">
                        <div className="text-white font-bold text-lg mb-1">Monthly Tests</div>
                        <div className="text-white/80 text-xs">Progress tracking assessments</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-md p-2">
                        <div className="text-white font-bold text-lg mb-1">Terminal Tests</div>
                        <div className="text-white/80 text-xs">Quarterly comprehensive exams</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-md p-2">
                        <div className="text-white font-bold text-lg mb-1">Annual Exam</div>
                        <div className="text-white/80 text-xs">Final year-end evaluation</div>
                      </div>
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

export default ExaminationsPage;