import { motion } from 'framer-motion';
import { Palette, Music, Trophy, BookOpen, Users, Target, Award, Star, Leaf, Heart, Brain, Zap } from 'lucide-react';

// Import activity images
import martialArtsImage from '../../../assets/Scout/kns-scout1.jpg';
import fineArtsImage from '../../../assets/Scout/kns-scout2.jpg';
import sportsImage from '../../../assets/Scout/kns-scout3.jpg';
import musicDanceImage from '../../../assets/Scout/kns-scout4.jpg';
import excursionImage from '../../../assets/Montessori/prize1.jpg';
import libraryImage from '../../../assets/Montessori/prize2.jpg';
import clubsImage from '../../../assets/Montessori/prize4.jpg';
import leadershipImage from '../../../assets/students/std1.jpg';

const CoCurricularAchievementsPage = () => {
  const activityCategories = [
    {
      title: "Arts & Creative",
      icon: Palette,
      image: fineArtsImage,
      color: "bg-purple-500",
      activities: [
        "Fine Arts",
        "Music",
        "Dance",
        "Dramatic Club",
        "Literary Club"
      ],
      achievements: [
        "Annual art exhibition participation",
        "Inter-school music competition winners",
        "Cultural festival performances",
        "Creative writing publications"
      ]
    },
    {
      title: "Sports & Fitness",
      icon: Trophy,
      image: sportsImage,
      color: "bg-red-500",
      activities: [
        "Basketball",
        "Table Tennis",
        "Badminton",
        "Swimming",
        "Martial Arts"
      ],
      achievements: [
        "District level basketball champions",
        "Swimming competition medals",
        "Martial arts belt promotions",
        "Inter-school sports trophies"
      ]
    },
    {
      title: "Academic & Literary",
      icon: BookOpen,
      image: libraryImage,
      color: "bg-blue-500",
      activities: [
        "Library Learning",
        "Book Reviewing",
        "Literary Club",
        "Debate Competitions",
        "Quiz Contests"
      ],
      achievements: [
        "Reading challenge achievements",
        "Book review publications",
        "Debate competition winners",
        "Academic quiz champions"
      ]
    },
    {
      title: "Social & Environmental",
      icon: Leaf,
      image: clubsImage,
      color: "bg-green-500",
      activities: [
        "Eco-Environment Club",
        "Social Service Club",
        "Community Service",
        "Environmental Projects",
        "Cleanliness Drives"
      ],
      achievements: [
        "Environmental awareness campaigns",
        "Community service awards",
        "Tree plantation initiatives",
        "Social outreach programs"
      ]
    }
  ];

  const clubs = [
    {
      name: "Literary Club",
      description: "Promotes reading, writing, and literary appreciation",
      icon: BookOpen,
      achievements: "Organized school magazine, poetry competitions"
    },
    {
      name: "Dramatic Club",
      description: "Develops acting, script writing, and theater skills",
      icon: Users,
      achievements: "Annual drama festival, inter-school competitions"
    },
    {
      name: "Sports Club",
      description: "Manages all sports activities and competitions",
      icon: Trophy,
      achievements: "Multiple tournament victories, sports excellence awards"
    },
    {
      name: "Social Service Club",
      description: "Engages in community service and social welfare",
      icon: Heart,
      achievements: "Community outreach programs, social awareness campaigns"
    },
    {
      name: "Eco-Environment Club",
      description: "Promotes environmental conservation and awareness",
      icon: Leaf,
      achievements: "Green campus initiatives, environmental projects"
    }
  ];

  const programTypes = [
    {
      type: "Skill-Based Programs",
      activities: ["Martial Arts", "Fine Arts", "Dance", "Music", "Swimming"],
      focus: "Practical skill development and talent enhancement"
    },
    {
      type: "Education-Based Programs",
      activities: ["Library Learning", "Book Reviewing", "Excursions", "Literary Activities"],
      focus: "Academic enhancement and experiential learning"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Holistic Development",
      description: "Balances academic learning with personal growth"
    },
    {
      icon: Brain,
      title: "Skill Enhancement",
      description: "Develops practical skills and talents"
    },
    {
      icon: Users,
      title: "Leadership Skills",
      description: "Builds organizational and team leadership abilities"
    },
    {
      icon: Award,
      title: "Team Spirit",
      description: "Fosters collaboration and teamwork"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Same as home page */}
      <section className="relative py-10 lg:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={sportsImage}
            alt="Co-Curricular Activities at KNS" 
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
              Co-Curricular Achievements
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
              Nurturing Talent & Building Character Beyond Classrooms
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
                  Holistic Development Through ECAs
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="text-gray-700 text-sm lg:text-base leading-relaxed space-y-3">
                  <p>
                    At Kathmandu National School, <span className="font-semibold text-primary">Extra Co-Curricular Activities (ECAs) are inevitable parts for the all-round development of students</span>. We believe that true education extends beyond textbooks to encompass physical, creative, and social growth.
                  </p>
                  
                  <p>
                    Our comprehensive ECA program includes a wide range of indoor and outdoor activities, clearly scheduled in our operating calendar, ensuring regular participation and skill development.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-4">
                    <p className="font-serif italic text-gray-700 text-sm">
                      "Students are trained to take on leadership and develop organizational skills as well as team spirit through our structured co-curricular programs."
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
                  <h3 className="font-bold text-gray-900 text-base mb-3">Our Approach</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Wide range of indoor & outdoor activities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Structured student clubs with full responsibilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Leadership development through student representation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Balance of skill-based and education-based programs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Activity Categories */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-primary/50" />
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Activity Categories & Achievements
                </h2>
                <div className="h-px w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Four comprehensive categories ensuring balanced development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activityCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                    {/* Category Header */}
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 font-[Cambria]">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Grid */}
                    <div className="p-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {/* Activities */}
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm mb-2">Activities Offered:</h4>
                          <ul className="space-y-1.5">
                            {category.activities.map((activity, activityIndex) => (
                              <li key={activityIndex} className="flex items-center gap-1.5">
                                <div className={`w-1.5 h-1.5 ${category.color} rounded-full flex-shrink-0`}></div>
                                <span className="text-gray-700 text-xs">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Achievements */}
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm mb-2">Key Achievements:</h4>
                          <ul className="space-y-1.5">
                            {category.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start gap-1.5">
                                <Star className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 text-xs">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Accent Border */}
                    <div className={`h-0.5 w-full ${category.color} rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Student Clubs */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-primary/50" />
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Student Clubs & Leadership
                </h2>
                <div className="h-px w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                School has introduced different clubs with full responsibility to conduct ECAs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              {clubs.map((club, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <club.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-base font-bold text-gray-900 font-[Cambria] mb-1.5">
                      {club.name}
                    </h3>
                    
                    <p className="text-gray-600 text-xs mb-2">
                      {club.description}
                    </p>
                    
                    <div className="mt-3 pt-2 border-t border-gray-100">
                      <p className="text-primary text-xs font-semibold">{club.achievements}</p>
                    </div>
                    
                    <div className="h-0.5 w-10 bg-red-500 rounded-full mt-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Program Types */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 lg:mb-16">
            {programTypes.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className={`${index === 0 ? 'bg-gradient-to-r from-primary/90 to-primary/80' : 'bg-gradient-to-r from-red-600/90 to-red-500/80'} rounded-lg p-4 lg:p-6 border border-white/20 backdrop-blur-sm h-full`}>
                  <div className="flex items-center gap-2 mb-4">
                    {index === 0 ? (
                      <Zap className="w-5 h-5 text-white" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-white" />
                    )}
                    <h3 className="text-lg lg:text-xl font-bold text-white font-[Cambria]">
                      {program.type}
                    </h3>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-bold text-sm mb-2">Activities Include:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {program.activities.map((activity, activityIndex) => (
                        <span key={activityIndex} className="bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-white/90 text-sm">
                    <p className="font-semibold mb-1">Focus:</p>
                    <p>{program.focus}</p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-white/20">
                    <p className="text-white/80 text-xs">
                      {index === 0 
                        ? "Enhancing practical abilities and talents" 
                        : "Supplementing academic learning with real-world experiences"
                      }
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-primary/50" />
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Benefits of Co-Curricular Activities
                </h2>
                <div className="h-px w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                How ECAs contribute to comprehensive student development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-base font-bold text-gray-900 font-[Cambria] mb-2">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-700 text-xs">
                      {benefit.description}
                    </p>
                    
                    <div className="h-0.5 w-10 bg-red-500 rounded-full mt-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="h-px w-10 bg-white/50" />
                    <h3 className="text-xl lg:text-2xl font-bold text-white font-[Cambria]">
                      Leadership & Organizational Development
                    </h3>
                    <div className="h-px w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-base font-serif italic max-w-2xl mx-auto">
                    Training students to take on leadership roles through structured programs
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Student Representatives</h4>
                    <p className="text-white/80 text-xs">
                      Appointed or elected student leaders who manage and organize club activities
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Organizational Skills</h4>
                    <p className="text-white/80 text-xs">
                      Developing planning, coordination, and execution abilities through club management
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Team Spirit</h4>
                    <p className="text-white/80 text-xs">
                      Fostering collaboration, cooperation, and collective achievement through group activities
                    </p>
                  </div>
                </div>
                
                {/* ECA Highlights */}
                <div className="mt-10 pt-6 border-t border-white/20">
                  <div className="max-w-3xl mx-auto text-center">
                    <h4 className="text-lg font-bold text-white mb-4 font-[Cambria]">ECA Program Highlights</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="bg-white/10 backdrop-blur-sm rounded-md p-2">
                        <div className="text-white font-bold text-base mb-0.5">15+</div>
                        <div className="text-white/80 text-xs">Different Activities</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-md p-2">
                        <div className="text-white font-bold text-base mb-0.5">5</div>
                        <div className="text-white/80 text-xs">Student Clubs</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-md p-2">
                        <div className="text-white font-bold text-base mb-0.5">100%</div>
                        <div className="text-white/80 text-xs">Student Participation</div>
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

export default CoCurricularAchievementsPage;