import { motion } from 'framer-motion';
import { BookOpen, Calendar, Shield, Heart, Target, Users, Star, CheckCircle, AlertCircle, TrendingUp, Award, Home } from 'lucide-react';

// Import recommendation images
import parentInvolvementImage from '../../../assets/annual-day/annual-day2.jpg';
import almanacImage from '../../../assets/annual-day/annual-day1.jpg';
import studyEnvironmentImage from '../../../assets/annual-day/annual-day3.jpg';
import balancedDevelopmentImage from '../../../assets/annual-day/annual-day4.jpg';
import safetyImage from '../../../assets/annual-day/annual-day5.jpg';
import healthImage from '../../../assets/annual-day/annual-day6.jpg';

const RecommendationsPage = () => {
  const recommendations = [
    {
      category: "Academic Responsibility",
      icon: BookOpen,
      image: almanacImage,
      color: "bg-blue-500",
      items: [
        {
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
      category: "Holistic Development",
      icon: Users,
      image: balancedDevelopmentImage,
      color: "bg-green-500",
      items: [
        {
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
      category: "Health & Safety",
      icon: Shield,
      image: safetyImage,
      color: "bg-red-500",
      items: [
        {
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
      {/* Hero Banner - Same as home page */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[Cambria] mb-4">
              Parent Recommendations
            </h1>
            
            {/* Divider like home page */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-white/50" />
                <p className="text-base md:text-lg text-white/95 italic tracking-wide font-serif">
                  Education · Civilization · Humanization
                </p>
                <div className="h-px w-12 bg-white/50" />
              </div>
            </motion.div>
            
            <p className="text-lg text-white/90 mb-6 font-serif italic">
              Partnering with Parents for Student Success
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content */}
      <section className="relative py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-6">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 lg:mb-12"
          >
            <div className="bg-white rounded-lg p-4 lg:p-6 border border-gray-200 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-6 w-1 bg-red-500 rounded-full"></div>
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 font-[Cambria]">
                  Guidelines for Parents & Guardians
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="text-gray-700 text-sm lg:text-base leading-relaxed space-y-3">
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
                
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
                  <h3 className="font-bold text-gray-900 text-base mb-3">Why These Recommendations Matter</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Enhance academic performance and progress</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Ensure student safety and well-being</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Maintain effective school-parent communication</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Support holistic development of students</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Importance Legend */}
          <div className="mb-8">
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
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
          </div>

          {/* Recommendations Grid */}
          {recommendations.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12 lg:mb-16"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="h-px w-6 bg-primary/50" />
                  <h2 className="text-xl lg:text-3xl font-bold text-gray-900 font-[Cambria]">
                    {category.category}
                  </h2>
                  <div className="h-px w-6 bg-primary/50" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Image Column */}
                <div className="relative rounded-lg overflow-hidden h-56 lg:h-auto">
                  <img 
                    src={category.image} 
                    alt={category.category}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white font-[Cambria]">{category.category}</h3>
                    </div>
                  </div>
                </div>

                {/* Recommendations Column */}
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:border-1 hover:border-primary/30">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-base font-bold text-gray-900 font-[Cambria] mb-2">
                              {item.title}
                            </h3>
                            <div className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                              item.importance === "High Priority" || item.importance === "Safety Protocol" || item.importance === "Health & Safety"
                                ? "bg-red-100 text-red-800 border border-red-200"
                                : item.importance === "Essential"
                                ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                                : item.importance === "Academic Success"
                                ? "bg-blue-100 text-blue-800 border border-blue-200"
                                : "bg-green-100 text-green-800 border border-green-200"
                            }`}>
                              {item.importance}
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-700 text-sm mb-4">
                          {item.description}
                        </p>
                        
                        {/* Tips */}
                        {item.tips && (
                          <div className="border-t border-gray-100 pt-3">
                            <h4 className="font-bold text-gray-900 text-sm mb-2">Helpful Tips:</h4>
                            <ul className="space-y-1">
                              {item.tips.map((tip, tipIndex) => (
                                <li key={tipIndex} className="flex items-start gap-2">
                                  <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700 text-xs">{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Accent Border */}
                        <div className={`h-1 w-full ${category.color} rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Parent Tips */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="h-px w-8 bg-primary/50" />
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 font-[Cambria]">
                  Effective Parenting Strategies
                </h2>
                <div className="h-px w-8 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Key approaches for successful support of your child's education
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {parentTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 h-full text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <tip.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-base font-bold text-gray-900 font-[Cambria] mb-2">
                      {tip.title}
                    </h3>
                    
                    <p className="text-gray-700 text-xs">
                      {tip.description}
                    </p>
                    
                    <div className="h-1 w-8 bg-red-500 rounded-full mt-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final Section */}
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
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <div className="h-px w-8 bg-white/50" />
                    <h3 className="text-xl lg:text-3xl font-bold text-white font-[Cambria]">
                      Our Shared Responsibility
                    </h3>
                    <div className="h-px w-8 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-base font-serif italic max-w-2xl mx-auto">
                    Working together for the success and well-being of every student
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Home className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Home Support</h4>
                    <p className="text-white/80 text-xs">
                      Your active involvement at home reinforces learning and builds good study habits
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Safety Partnership</h4>
                    <p className="text-white/80 text-xs">
                      Following safety and health protocols ensures a secure environment for all students
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Academic Excellence</h4>
                    <p className="text-white/80 text-xs">
                      Consistent academic monitoring and support leads to better learning outcomes
                    </p>
                  </div>
                </div>
                
                {/* Compliance Checklist */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="max-w-3xl mx-auto">
                    <h4 className="text-lg font-bold text-white mb-4 text-center font-[Cambria]">Parent Compliance Checklist</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-white font-bold text-sm">Daily Responsibilities</span>
                        </div>
                        <ul className="space-y-1">
                          <li className="text-white/90 text-xs">✓ Check almanac daily</li>
                          <li className="text-white/90 text-xs">✓ Verify timetable compliance</li>
                          <li className="text-white/90 text-xs">✓ Monitor homework completion</li>
                        </ul>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
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
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23006699'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }} />
        </div>
      </section>
    </div>
  );
};

export default RecommendationsPage;