import { motion } from 'framer-motion';
import { Music, Palette, Trophy, Brain, Globe, Camera, Users, Target, Award, Star, BookOpen, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

// Import activity images
import sportsImage from '../../../assets/annual-day/annual-day1.jpg';
import artsImage from '../../../assets/annual-day/annual-day2.jpg';
import midasImage from '../../../assets/annual-day/annual-day3.jpg';
import excursionImage from '../../../assets/annual-day/annual-day5.jpg';
import culturalImage from '../../../assets/annual-day/annual-day6.jpg';

const ExtraCurricularPage = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const activityCategories = [
    {
      id: 'sports',
      title: "Sports Activities",
      icon: Trophy,
      image: sportsImage,
      color: "bg-red-500",
      activities: [
        "Basketball", "Football", "Table Tennis", "Badminton", 
        "Martial Arts", "Swimming", "Cricket", "Chess"
      ],
      description: "Physical development and team spirit through various sports"
    },
    {
      id: 'arts',
      title: "Arts & Cultural",
      icon: Music,
      image: artsImage,
      color: "bg-purple-500",
      activities: [
        "Dance", "Music", "Drama", "Art & Craft",
        "Poetry", "Debate", "Essay Writing", "Talent Shows"
      ],
      description: "Creative expression and cultural appreciation"
    },
    {
      id: 'academic',
      title: "Academic Competitions",
      icon: Brain,
      image: culturalImage,
      color: "bg-blue-500",
      activities: [
        "Quiz Competitions", "Science Fairs", 
        "Math Olympiad", "Spelling Bee",
        "Debate Competitions", "Model UN"
      ],
      description: "Intellectual development and academic excellence"
    },
    {
      id: 'scouts',
      title: "Scouts & Leadership",
      icon: Users,
      image: sportsImage,
      color: "bg-green-500",
      activities: [
        "Scouts Program", "Leadership Training",
        "Community Service", "Public Speaking",
        "Event Organization", "Team Building"
      ],
      description: "Character building and leadership development"
    }
  ];

  const specialPrograms = [
    {
      id: 'midas',
      title: "Midas Smart e-Classroom",
      icon: BookOpen,
      image: midasImage,
      description: "Digital classrooms with 'Show me and I understand' approach for primary, lower secondary and secondary students.",
      features: [
        "Modern pedagogy methods",
        "Interactive tutorial videos",
        "Chapter-wise exercises",
        "Digital learning platform",
        "Teacher-student collaboration",
        "Enhanced understanding"
      ],
      benefits: "Encourages full utilization by both students and teachers for better learning outcomes"
    },
    {
      id: 'excursions',
      title: "School Excursions",
      icon: Camera,
      image: excursionImage,
      description: "Educational trips to various places within or outside the country for hands-on learning experiences.",
      features: [
        "Visual learning experiences",
        "Educational value sites",
        "Domestic & international trips",
        "Practical understanding",
        "Cultural exposure",
        "World perspective"
      ],
      benefits: "Helps students experience, touch, feel and listen to what they are learning about"
    }
  ];

  const benefits = [
    {
      id: 'holistic',
      icon: Target,
      title: "Holistic Development",
      description: "Balances academic learning with personal growth and skill development"
    },
    {
      id: 'talent',
      icon: Star,
      title: "Talent Discovery",
      description: "Helps students discover and nurture their unique talents and interests"
    },
    {
      id: 'confidence',
      icon: Award,
      title: "Confidence Building",
      description: "Builds self-confidence through participation and achievement"
    },
    {
      id: 'life',
      icon: GraduationCap,
      title: "Life Skills",
      description: "Develops teamwork, leadership, and communication skills"
    }
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
            src={sportsImage}
            alt="Extra Curricular Activities at KNS" 
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
              Extra Curricular Activities
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
              Beyond Classrooms: Nurturing Talents & Building Character
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
                    Beyond Regular Curriculum
                  </h2>
                </div>
                
                <div className="space-y-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <p>
                    At Kathmandu National School, we <span className="font-semibold text-primary">initiate and inspire our students</span> to participate in activities beyond the regular curriculum. Our comprehensive extra-curricular program is designed to nurture diverse talents and interests.
                  </p>
                  
                  <p>
                    We believe that true education extends beyond textbooks, encompassing physical development, creative expression, and practical life skills that shape well-rounded individuals.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Activity Categories - Mobile Accordion */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-0.5 bg-blue-500 rounded-full"></div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                  Activity Categories
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {activityCategories.map((category, index) => (
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
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-sm sm:text-base font-bold text-gray-900 font-[Cambria]">
                              {category.title}
                            </h3>
                            <div className="text-xs text-gray-600 mt-0.5">{category.description}</div>
                          </div>
                        </div>
                        {expandedSections[`category-${category.id}`] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedSections[`category-${category.id}`] ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-3 sm:p-4 pt-0">
                          <div className="grid grid-cols-2 gap-2">
                            {category.activities.map((activity, activityIndex) => (
                              <div key={activityIndex} className="flex items-center gap-1.5">
                                <div className={`w-1.5 h-1.5 ${category.color} rounded-full flex-shrink-0`}></div>
                                <span className="text-gray-700 text-xs">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Special Programs - Mobile Accordion */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-0.5 bg-red-500 rounded-full"></div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                  Special Programs
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {specialPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleSection(`program-${program.id}`)}
                        className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 text-left">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <program.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 font-[Cambria]">
                            {program.title}
                          </h3>
                        </div>
                        {expandedSections[`program-${program.id}`] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedSections[`program-${program.id}`] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-3 sm:p-4 pt-0">
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3">
                            {program.description}
                          </p>
                          
                          <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-2">Key Features:</h4>
                          <ul className="space-y-1.5 mb-3">
                            {program.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-1.5">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                                <span className="text-gray-700 text-xs">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                            <p className="text-primary font-semibold text-xs">{program.benefits}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits - Mobile Accordion */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-0.5 bg-green-500 rounded-full"></div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                  Benefits of Activities
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
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

            {/* Holistic Education - Mobile */}
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
                      Holistic Education
                    </h3>
                    <div className="h-px w-6 sm:w-8 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-xs sm:text-sm font-serif italic">
                    Where classroom learning meets real-world experiences
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-[Cambria] mb-1">Creative Expression</h4>
                    <p className="text-white/90 text-xs">
                      Arts, music, dance and drama programs that nurture creativity
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-[Cambria] mb-1">Physical Development</h4>
                    <p className="text-white/90 text-xs">
                      Sports and fitness activities promoting health and teamwork
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-[Cambria] mb-1">Global Exposure</h4>
                    <p className="text-white/90 text-xs">
                      Exposure to diverse cultures and perspectives
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Introduction & Activity Categories */}
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
                    Beyond Regular Curriculum
                  </h2>
                </div>
                
                <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                  <p>
                    At Kathmandu National School, we <span className="font-semibold text-primary">initiate and inspire our students</span> to participate in activities beyond the regular curriculum. Our comprehensive extra-curricular program is designed to nurture diverse talents and interests.
                  </p>
                  
                  <p>
                    We believe that true education extends beyond textbooks, encompassing physical development, creative expression, and practical life skills that shape well-rounded individuals.
                  </p>
                </div>
              </div>

              {/* Activity Categories Grid */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-blue-500 rounded-full"></div>
                  <h2 className="text-xl font-bold text-gray-900 font-[Cambria]">
                    Activity Categories
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activityCategories.map((category, index) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-gray-900 font-[Cambria] mb-1.5">
                            {category.title}
                          </h3>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-sm leading-relaxed mb-3 ml-13">
                        {category.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2 ml-13">
                        {category.activities.slice(0, 4).map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-center gap-1.5">
                            <div className={`w-1.5 h-1.5 ${category.color} rounded-full flex-shrink-0`}></div>
                            <span className="text-gray-700 text-xs">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Special Programs & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Special Programs */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-gray-900 font-[Cambria]">
                    Special Programs
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {specialPrograms.map((program, index) => (
                    <motion.div
                      key={program.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <program.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900 font-[Cambria] mb-1">
                            {program.title}
                          </h4>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-sm leading-relaxed mb-3 ml-13">
                        {program.description}
                      </p>
                      
                      <div className="ml-13">
                        <h5 className="font-bold text-gray-900 text-xs mb-2">Key Features:</h5>
                        <ul className="grid grid-cols-2 gap-1.5">
                          {program.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-1.5">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-gray-700 text-xs">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center mb-4">
                  <Award className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-xl font-bold text-white font-[Cambria]">
                    Benefits of Activities
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
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

export default ExtraCurricularPage;