import { motion } from 'framer-motion';
import { Scale, Award, AlertTriangle, Shield, Users, Target, CheckCircle, XCircle, BookOpen, Heart, TrendingUp, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import QuickLinksSection from '../../../components/LinksSection';

// Import disciplinary images
import disciplinaryMeetingImage from '../../../assets/saraswati-puja/Saraswati-Puja1.jpg';
import meritSystemImage from '../../../assets/saraswati-puja/Saraswati-Puja2.jpg';
import counselingImage from '../../../assets/saraswati-puja/Saraswati-Puja3.jpg';
import positiveEnvironmentImage from '../../../assets/saraswati-puja/Saraswati-Puja4.jpg';

const DisciplinaryActionPage = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const disciplinarySystem = [
    {
      id: 'merit',
      title: "Merit Card System",
      icon: Award,
      color: "bg-green-500",
      description: "Awarded to deserving students to encourage better performance and positive behavior",
      criteria: [
        "Academic excellence",
        "Positive behavior",
        "Leadership qualities",
        "Community service",
        "Sports achievements",
        "Creative accomplishments"
      ],
      benefits: "Motivates students to maintain high standards and serve as role models"
    },
    {
      id: 'demerit',
      title: "Demerit Card System",
      icon: AlertTriangle,
      color: "bg-red-500",
      description: "Issued for indiscipline to make students conscious about their activities and behavior",
      criteria: [
        "Behavioral issues",
        "Rule violations",
        "Academic negligence",
        "Disrespect towards others",
        "Property damage",
        "Attendance issues"
      ],
      process: "Issued after due investigation and deliberation with proper reasoning"
    }
  ];

  const committeeStructure = [
    {
      role: "Presiding Officer",
      name: "Principal",
      responsibility: "Chairs the disciplinary committee and makes final decisions",
      icon: Shield
    },
    {
      role: "Committee Members",
      name: "Senior Teachers",
      responsibility: "Assist in investigations, deliberations, and recommendations",
      icon: Users
    },
    {
      role: "Guardian Representatives",
      name: "Selected Guardians",
      responsibility: "Provide guardians perspective in certain cases (where appropriate)",
      icon: BookOpen
    }
  ];

  const principles = [
    {
      icon: Heart,
      title: "Corrective Approach",
      description: "Focus on correction and improvement rather than punishment"
    },
    {
      icon: Target,
      title: "Due Process",
      description: "Proper investigation and deliberation before any action"
    },
    {
      icon: CheckCircle,
      title: "Final Decision",
      description: "Disciplinary committee's decision is final and binding"
    },
    {
      icon: XCircle,
      title: "No Physical Punishment",
      description: "We strictly discourage any form of corporal punishment"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Incident Reporting",
      description: "Report of behavioral issue or rule violation"
    },
    {
      step: 2,
      title: "Investigation",
      description: "Committee investigates the matter thoroughly"
    },
    {
      step: 3,
      title: "Deliberation",
      description: "Discussion and consideration of all aspects"
    },
    {
      step: 4,
      title: "Card Issuance",
      description: "Merit or Demerit card issued with reasons"
    },
    {
      step: 5,
      title: "Follow-up",
      description: "Monitoring improvement and providing guidance"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Optimized for Mobile */}
      <section className="relative py-6 sm:py-8 lg:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={disciplinaryMeetingImage}
            alt="Disciplinary System at KNS" 
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
              Disciplinary Actions
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
              Building Character Through Corrective Discipline
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
                    Our Philosophy of Discipline
                  </h2>
                </div>
                
                <div className="space-y-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <p>
                    At Kathmandu National School, <span className="font-semibold text-primary">we believe that disciplinary measures must be corrective rather than being purely punitive</span>. Our approach focuses on guiding students toward better behavior and character development.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-3 border border-primary/20 mt-3">
                    <p className="font-serif italic text-gray-700 text-xs">
                      "We discourage physical punishment. Our focus is on correction, guidance, and positive reinforcement."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Accordion for Disciplinary System */}
            <div className="space-y-3 sm:space-y-4">
              {disciplinarySystem.map((system, index) => (
                <motion.div
                  key={system.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <button
                      onClick={() => toggleSection(system.id)}
                      className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 text-left">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 ${system.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <system.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 font-[Cambria]">
                            {system.title}
                          </h3>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full mt-1"></div>
                        </div>
                      </div>
                      {expandedSections[system.id] ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedSections[system.id] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="p-3 sm:p-4 pt-0">
                        <div className="space-y-3">
                          <p className="text-gray-700 text-xs sm:text-sm">
                            {system.description}
                          </p>
                          
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1.5">
                              {system.title === "Merit Card System" ? "Issuance Criteria:" : "Issued For:"}
                            </h4>
                            <ul className="space-y-1">
                              {system.criteria.map((criterion, criterionIndex) => (
                                <li key={criterionIndex} className="flex items-start gap-1.5">
                                  <div className={`w-1.5 h-1.5 ${system.color} rounded-full mt-1.5 flex-shrink-0`}></div>
                                  <span className="text-gray-700 text-xs">{criterion}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className={`p-2 sm:p-3 rounded-lg border ${system.title === "Merit Card System" ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                            <p className={`font-semibold text-xs ${system.title === "Merit Card System" ? 'text-green-700' : 'text-red-700'}`}>
                              {system.title === "Merit Card System" ? system.benefits : system.process}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Committee Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 sm:mt-8"
            >
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-5 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <h3 className="text-base sm:text-lg font-bold text-white font-[Cambria]">
                    Disciplinary Committee
                  </h3>
                </div>
                
                <div className="space-y-3 text-white/90 text-xs sm:text-sm">
                  <p>The disciplinary committee is presided by the Principal and assisted by a team of senior teachers</p>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
                      <div className="text-white text-lg sm:text-xl font-bold mb-0.5">3</div>
                      <div className="text-white/80 text-xs">Committee Members</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
                      <div className="text-white text-lg sm:text-xl font-bold mb-0.5">100%</div>
                      <div className="text-white/80 text-xs">Fair Process</div>
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
                    Our Philosophy of Discipline
                  </h2>
                </div>
                
                <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                  <p>
                    At Kathmandu National School, <span className="font-semibold text-primary">we believe that disciplinary measures must be corrective rather than being purely punitive</span>. Our approach focuses on guiding students toward better behavior and character development.
                  </p>
                  
                  <p>
                    Our disciplinary system is designed to help students understand the consequences of their actions while providing opportunities for improvement and growth.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-4">
                    <p className="font-serif italic text-gray-700 text-sm">
                      "We discourage physical punishment. Our focus is on correction, guidance, and positive reinforcement."
                    </p>
                  </div>
                </div>
              </div>

              {/* Guiding Principles */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-gray-900 font-[Cambria]">
                    Guiding Principles
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {principles.map((principle, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <principle.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base mb-1">{principle.title}</h4>
                        <p className="text-gray-700 text-sm">{principle.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Disciplinary System */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {disciplinarySystem.map((system, index) => (
                <motion.div
                  key={system.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className={`${system.color} p-4 rounded-t-lg`}>
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <system.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white font-[Cambria] mb-1.5">
                            {system.title}
                          </h3>
                          <p className="text-white/90 text-sm">{system.description}</p>
                          <div className="h-0.5 w-10 bg-white/50 rounded-full mt-2"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 text-sm mb-2">
                          {system.title === "Merit Card System" ? "Issuance Criteria:" : "Issued For:"}
                        </h4>
                        <ul className="space-y-1.5">
                          {system.criteria.map((criterion, criterionIndex) => (
                            <li key={criterionIndex} className="flex items-start gap-1.5">
                              <div className={`w-1.5 h-1.5 ${system.color} rounded-full mt-1.5 flex-shrink-0`}></div>
                              <span className="text-gray-700 text-sm">{criterion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className={`p-3 rounded-lg border ${system.title === "Merit Card System" ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                        <p className={`font-semibold text-sm ${system.title === "Merit Card System" ? 'text-green-700' : 'text-red-700'}`}>
                          {system.title === "Merit Card System" ? system.benefits : system.process}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Disciplinary Committee - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 sm:mt-10 lg:mt-16"
          >
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
                <div className="h-px w-6 sm:w-8 md:w-10 bg-primary/50" />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Disciplinary Committee Structure
                </h2>
                <div className="h-px w-6 sm:w-8 md:w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                The disciplinary committee is presided by the Principal and assisted by a team of senior teachers
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
              {committeeStructure.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                      <member.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 font-[Cambria] mb-1 sm:mb-1.5">
                      {member.role}
                    </h3>
                    
                    <div className="text-primary font-semibold text-xs sm:text-sm mb-1 sm:mb-2">{member.name}</div>
                    
                    <p className="text-gray-700 text-xs">
                      {member.responsibility}
                    </p>
                    
                    <div className="h-0.5 w-8 sm:w-10 bg-red-500 rounded-full mt-2 sm:mt-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Steps - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 sm:mt-10 lg:mt-16"
          >
            <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-6 border border-white/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <Scale className="w-5 h-5 text-white" />
                <h3 className="text-lg sm:text-xl font-bold text-white font-[Cambria]">
                  Disciplinary Process
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <div className="text-white font-bold text-base sm:text-lg">{step.step}</div>
                    </div>
                    <h4 className="font-bold text-white text-sm mb-0.5">{step.title}</h4>
                    <p className="text-white/80 text-xs">{step.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-white/90 text-xs sm:text-sm text-center">
                  <span className="font-bold">Important:</span> The cards are issued after due investigation and deliberation with reason/s. The decision of the disciplinary committee will be final.
                </p>
              </div>
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
                      Our Commitment to Positive Discipline
                    </h3>
                    <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-sm sm:text-base font-serif italic max-w-2xl mx-auto">
                    Building character through guidance, correction, and positive reinforcement
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Character Building</h4>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Developing responsible, respectful, and disciplined individuals through corrective measures
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Positive Reinforcement</h4>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Recognizing and rewarding positive behavior through the Merit Card system
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Student Welfare</h4>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Ensuring student well-being by discouraging physical punishment and focusing on guidance
                    </p>
                  </div>
                </div>
                
                {/* Policy Highlights */}
                <div className="mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6 border-t border-white/20">
                  <div className="max-w-3xl mx-auto text-center">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 font-[Cambria]">Policy Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-lg sm:text-xl font-bold text-white font-[Cambria] mb-1">100%</div>
                        <div className="text-white/90 text-sm">No Physical Punishment</div>
                        <div className="text-white/70 text-xs mt-0.5">Strictly discouraged in all circumstances</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-lg sm:text-xl font-bold text-white font-[Cambria] mb-1">Fair</div>
                        <div className="text-white/90 text-sm">Due Process</div>
                        <div className="text-white/70 text-xs mt-0.5">Investigation before any disciplinary action</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <QuickLinksSection />
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

export default DisciplinaryActionPage;