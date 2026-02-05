import { motion } from 'framer-motion';
import { Users, Shield, AlertCircle, Target, Award, Calendar, UserCheck, FileText, Home, School, CheckCircle, Star } from 'lucide-react';

// Import discipline image
import disciplineImage from '../../../assets/annual-day/annual-day1.jpg';

const RulesDisciplinePage = () => {
  const categories = [
    {
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
      icon: Star,
      title: "Uniform Policy",
      description: "Strict adherence required on all working days"
    },
    {
      icon: CheckCircle,
      title: "Behavior Standards",
      description: "Polite conduct expected at all times, represents school"
    },
    {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Same as home page */}
      <section className="relative py-10 lg:py-16 overflow-hidden">
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

        <div className="container mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white font-[Cambria] mb-4">
              Rules & Discipline
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
              Building Character Through Discipline and Responsibility
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
                  School Rules & Discipline Policy
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="text-gray-700 text-sm lg:text-base leading-relaxed space-y-3">
                  <p>
                    At Kathmandu National School, we believe that <span className="font-semibold text-primary">discipline is the foundation of character building</span> and academic excellence. Our rules and regulations are designed to create a safe, respectful, and conducive learning environment for all students.
                  </p>
                  
                  <p>
                    Enrollment in KNS requires compliance with school requirements and regulations from both parents and students. The observance of rules of discipline and good behaviour is essential for a student's continuance in the school.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-4 text-center">
                    <p className="font-serif italic text-gray-700 text-sm">
                      "Students should always remember that the school is judged by their conduct. Polite behavior is expected wherever they go."
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
                  <h3 className="font-bold text-gray-900 text-base mb-3 text-center">Policy Statement</h3>
                  <p className="text-gray-700 mb-3 text-center text-sm">
                    In case a student violates school rules or indulges in any form of indiscipline, strict action including expulsion, suspension, or restriction shall be taken.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Strict adherence to all school rules required</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Parent cooperation essential for success</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Good behavior condition for school continuance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Important Points */}
          <div className="mb-10 lg:mb-12">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-primary/50" />
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Key Requirements
                </h2>
                <div className="h-px w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Essential points that require special attention from students and parents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 mx-auto">
              {importantPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <point.icon className="w-5 h-5 text-primary" />
                    </div>
                    
                    <h3 className="text-base font-bold text-gray-900 font-[Cambria] mb-2">
                      {point.title}
                    </h3>
                    
                    <p className="text-gray-700 text-xs flex-1">
                      {point.description}
                    </p>
                    
                    <div className="h-0.5 w-10 bg-red-500 rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Rules Categories Grid */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-primary/50" />
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Comprehensive Rules & Regulations
                </h2>
                <div className="h-px w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Detailed guidelines organized by category for easy reference
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    {/* Category Header */}
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 font-[Cambria]">
                        {category.title}
                      </h3>
                    </div>
                    
                    {/* Rules List */}
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
                    
                    {/* Accent Border */}
                    <div className="h-0.5 w-10 bg-primary rounded-full mt-4 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Consequences & Final Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Consequences Grid */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white rounded-lg p-4 lg:p-6 border border-gray-200 shadow-md w-full max-w-2xl">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center mb-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 font-[Cambria]">
                    Consequences of Violations
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {consequences.map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 text-center sm:text-left">
                      <div className="flex items-center gap-2 mb-1 sm:mb-0">
                        <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center">
                          <AlertCircle className="w-3 h-3 text-red-500" />
                        </div>
                        <span className="font-medium text-gray-900 text-sm">{item.action}</span>
                      </div>
                      <div className="bg-red-500/10 px-2 py-0.5 rounded-full">
                        <span className="text-red-600 font-semibold text-xs">{item.consequence}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                  <p className="text-gray-700 text-xs">
                    <span className="font-bold">Note:</span> The observance of rules of discipline and good behaviour is an essential condition to a student's continuance in the school.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Final Statement */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 lg:p-6 border border-white/20 backdrop-blur-sm w-full max-w-2xl">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-white font-[Cambria]">
                    Our Commitment to Discipline
                  </h3>
                </div>
                
                <div className="text-white/90 space-y-3 text-center text-sm">
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
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="text-left text-xs">Ensure equal treatment and fairness for all students</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <p className="font-serif italic text-white text-center text-xs">
                      "Students are expected to behave in a lady-like/gentlemanly manner and address all with respect and politeness."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Final Note Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 lg:mt-16 flex justify-center"
          >
            <div className="relative rounded-lg overflow-hidden w-full max-w-6xl">
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
                      Partnership for Success
                    </h3>
                    <div className="h-px w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-base font-serif italic max-w-2xl mx-auto">
                    Discipline requires partnership between school, students, and parents
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3">
                      <School className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">School's Role</h4>
                    <p className="text-white/80 text-xs">
                      Establish clear rules, ensure enforcement, provide guidance, and maintain records
                    </p>
                  </div>
                  
                  <div className="text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3">
                      <UserCheck className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Student's Role</h4>
                    <p className="text-white/80 text-xs">
                      Follow rules, show respect, maintain discipline, and represent school positively
                    </p>
                  </div>
                  
                  <div className="text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3">
                      <Home className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Parent's Role</h4>
                    <p className="text-white/80 text-xs">
                      Support school policies, ensure compliance, attend meetings, and reinforce values
                    </p>
                  </div>
                </div>
                
                {/* Final Message */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="max-w-3xl mx-auto text-center">
                    <p className="text-white text-base mb-4">
                      We believe that discipline, when combined with care and guidance, shapes students into responsible, respectful, and successful individuals who carry forward the values of Kathmandu National School throughout their lives.
                    </p>
                    <div className="text-white/80 text-xs">
                      - KNS Administration
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

export default RulesDisciplinePage;