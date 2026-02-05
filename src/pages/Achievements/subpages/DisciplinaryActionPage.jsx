import { motion } from 'framer-motion';
import { Scale, Award, AlertTriangle, Shield, Users, Target, CheckCircle, XCircle, BookOpen, Heart, TrendingUp, Star } from 'lucide-react';

// Import disciplinary images
import disciplinaryMeetingImage from '../../../assets/saraswati-puja/Saraswati-Puja1.jpg';
import meritSystemImage from '../../../assets/saraswati-puja/Saraswati-Puja2.jpg';
import counselingImage from '../../../assets/saraswati-puja/Saraswati-Puja3.jpg';
import positiveEnvironmentImage from '../../../assets/saraswati-puja/Saraswati-Puja4.jpg';

const DisciplinaryActionPage = () => {
  const disciplinarySystem = [
    {
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
      {/* Hero Banner - Same as home page */}
      <section className="relative py-10 lg:py-16 overflow-hidden">
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

        <div className="container mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[Cambria] mb-4">
              Disciplinary Actions
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
              Building Character Through Corrective Discipline
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
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-0.5 bg-red-500 rounded-full"></div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Our Philosophy of Discipline
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="text-gray-700 text-sm lg:text-base leading-relaxed space-y-3">
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
                
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
                  <h3 className="font-bold text-gray-900 text-base mb-3">Core Principles</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Corrective rather than punitive approach</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Merit and Demerit card system for balanced assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Due investigation and deliberation before any action</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Final decisions made by disciplinary committee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Disciplinary System */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-primary/50" />
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Merit & Demerit Card System
                </h2>
                <div className="h-px w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Balanced approach recognizing both positive behavior and addressing areas for improvement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {disciplinarySystem.map((system, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                    {/* Header */}
                    <div className={`${system.color} p-4`}>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                          <system.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white font-[Cambria]">
                            {system.title}
                          </h3>
                          <p className="text-white/90 text-xs mt-0.5">{system.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 text-sm mb-2">
                          {system.title === "Merit Card System" ? "Issuance Criteria:" : "Issued For:"}
                        </h4>
                        <ul className="space-y-1.5">
                          {system.criteria.map((criterion, criterionIndex) => (
                            <li key={criterionIndex} className="flex items-start gap-1.5">
                              <div className={`w-1.5 h-1.5 ${system.color} rounded-full mt-1.5 flex-shrink-0`}></div>
                              <span className="text-gray-700 text-xs">{criterion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className={`p-3 rounded-lg border ${system.title === "Merit Card System" ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                        <p className={`font-semibold text-xs ${system.title === "Merit Card System" ? 'text-green-700' : 'text-red-700'}`}>
                          {system.title === "Merit Card System" ? system.benefits : system.process}
                        </p>
                      </div>
                    </div>
                    
                    {/* Accent Border */}
                    <div className={`h-0.5 w-full ${system.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Disciplinary Committee */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-primary/50" />
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Disciplinary Committee Structure
                </h2>
                <div className="h-px w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                The disciplinary committee is presided by the Principal and assisted by a team of senior teachers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {committeeStructure.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <member.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-base font-bold text-gray-900 font-[Cambria] mb-1.5">
                      {member.role}
                    </h3>
                    
                    <div className="text-primary font-semibold text-sm mb-2">{member.name}</div>
                    
                    <p className="text-gray-700 text-xs">
                      {member.responsibility}
                    </p>
                    
                    <div className="h-0.5 w-10 bg-red-500 rounded-full mt-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process & Principles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 lg:p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Scale className="w-5 h-5 text-white" />
                  <h3 className="text-lg lg:text-xl font-bold text-white font-[Cambria]">
                    Disciplinary Process
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="text-white font-bold text-sm">{step.step}</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-0.5">{step.title}</h4>
                        <p className="text-white/80 text-xs">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/20">
                  <p className="text-white/90 text-xs text-center">
                    <span className="font-bold">Important:</span> The cards are issued after due investigation and deliberation with reason/s. The decision of the disciplinary committee will be final.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Guiding Principles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-lg p-4 lg:p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-primary" />
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 font-[Cambria]">
                    Guiding Principles
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {principles.map((principle, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <principle.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">{principle.title}</h4>
                        <p className="text-gray-700 text-xs">{principle.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="h-px w-10 bg-white/50" />
                    <h3 className="text-xl lg:text-2xl font-bold text-white font-[Cambria]">
                      Our Commitment to Positive Discipline
                    </h3>
                    <div className="h-px w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-base font-serif italic max-w-2xl mx-auto">
                    Building character through guidance, correction, and positive reinforcement
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Character Building</h4>
                    <p className="text-white/80 text-xs">
                      Developing responsible, respectful, and disciplined individuals through corrective measures
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Positive Reinforcement</h4>
                    <p className="text-white/80 text-xs">
                      Recognizing and rewarding positive behavior through the Merit Card system
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Student Welfare</h4>
                    <p className="text-white/80 text-xs">
                      Ensuring student well-being by discouraging physical punishment and focusing on guidance
                    </p>
                  </div>
                </div>
                
                {/* Policy Highlights */}
                <div className="mt-10 pt-6 border-t border-white/20">
                  <div className="max-w-3xl mx-auto text-center">
                    <h4 className="text-lg font-bold text-white mb-4 font-[Cambria]">Policy Highlights</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-2xl font-bold text-white font-[Cambria] mb-1">100%</div>
                        <div className="text-white/90 text-sm">No Physical Punishment</div>
                        <div className="text-white/70 text-xs mt-0.5">Strictly discouraged in all circumstances</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-2xl font-bold text-white font-[Cambria] mb-1">Fair</div>
                        <div className="text-white/90 text-sm">Due Process</div>
                        <div className="text-white/70 text-xs mt-0.5">Investigation before any disciplinary action</div>
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

export default DisciplinaryActionPage;