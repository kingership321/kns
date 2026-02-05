import { motion } from 'framer-motion';
import { Music, Palette, Trophy, Brain, Globe, Camera, Users, Target, Award, Star, BookOpen, GraduationCap } from 'lucide-react';

// Import activity images
import sportsImage from '../../../assets/annual-day/annual-day1.jpg';
import artsImage from '../../../assets/annual-day/annual-day2.jpg';
import midasImage from '../../../assets/annual-day/annual-day3.jpg';
import excursionImage from '../../../assets/annual-day/annual-day5.jpg';
import culturalImage from '../../../assets/annual-day/annual-day6.jpg';

const ExtraCurricularPage = () => {
  const activityCategories = [
    {
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
      title: "Scouts & Leadership",
      icon: Users,
      image: sportsImage, // Using sports image as placeholder
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
      icon: Target,
      title: "Holistic Development",
      description: "Balances academic learning with personal growth and skill development"
    },
    {
      icon: Star,
      title: "Talent Discovery",
      description: "Helps students discover and nurture their unique talents and interests"
    },
    {
      icon: Award,
      title: "Confidence Building",
      description: "Builds self-confidence through participation and achievement"
    },
    {
      icon: GraduationCap,
      title: "Life Skills",
      description: "Develops teamwork, leadership, and communication skills"
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
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org0/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
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
              Extra Curricular Activities
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
              Beyond Classrooms: Nurturing Talents & Building Character
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-0.5 bg-red-500 rounded-full"></div>
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                      Beyond Regular Curriculum
                    </h2>
                  </div>
                  
                  <div className="text-gray-700 text-sm lg:text-base leading-relaxed space-y-3">
                    <p>
                      At Kathmandu National School, we <span className="font-semibold text-primary">initiate and inspire our students</span> to participate in activities beyond the regular curriculum. Our comprehensive extra-curricular program is designed to nurture diverse talents and interests.
                    </p>
                    
                    <p>
                      We believe that true education extends beyond textbooks, encompassing physical development, creative expression, and practical life skills that shape well-rounded individuals.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
                  <h3 className="font-bold text-gray-900 text-base mb-3">Our Philosophy</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Holistic development beyond academics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Discover and nurture unique talents</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Build confidence and social skills</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Prepare for real-world challenges</span>
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
                  Activity Categories
                </h2>
                <div className="h-px w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Diverse range of activities catering to every interest and talent
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
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                    {/* Image Section */}
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-2 left-2">
                        <div className={`${category.color} w-10 h-10 rounded-lg flex items-center justify-center shadow-md`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-lg font-bold text-white font-[Cambria]">
                          {category.title}
                        </h3>
                        <p className="text-white/90 text-xs mt-0.5">{category.description}</p>
                      </div>
                    </div>
                    
                    {/* Activities Grid */}
                    <div className="p-4">
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
                </motion.div>
              ))}
            </div>
          </div>

          {/* Special Programs */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-primary/50" />
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Special Programs
                </h2>
                <div className="h-px w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Unique initiatives that enhance learning beyond traditional activities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                    {/* Image Section */}
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-lg font-bold text-white font-[Cambria]">
                          {program.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-4">
                      <p className="text-gray-700 text-sm mb-4">
                        {program.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 text-sm mb-2">Key Features:</h4>
                        <ul className="space-y-1.5">
                          {program.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-1.5">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-gray-700 text-xs">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                        <p className="text-primary font-semibold text-xs">{program.benefits}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-primary/50" />
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Benefits of Extra-Curricular Activities
                </h2>
                <div className="h-px w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                How our activities contribute to student growth and development
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
                      Our Commitment to Holistic Education
                    </h3>
                    <div className="h-px w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-base font-serif italic max-w-2xl mx-auto">
                    Where classroom learning meets real-world experiences
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Creative Expression</h4>
                    <p className="text-white/80 text-xs">
                      Arts, music, dance and drama programs that nurture creativity and self-expression
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Physical Development</h4>
                    <p className="text-white/80 text-xs">
                      Sports and fitness activities promoting health, teamwork and discipline
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Global Exposure</h4>
                    <p className="text-white/80 text-xs">
                      Language classes and excursions exposing students to diverse cultures and perspectives
                    </p>
                  </div>
                </div>
                
                {/* Activity Stats */}
                <div className="mt-10 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white font-[Cambria] mb-1">20+</div>
                      <div className="text-white/90 text-xs">Activities Offered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white font-[Cambria] mb-1">4</div>
                      <div className="text-white/90 text-xs">Major Categories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white font-[Cambria] mb-1">3</div>
                      <div className="text-white/90 text-xs">Special Programs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white font-[Cambria] mb-1">100%</div>
                      <div className="text-white/90 text-xs">Student Participation</div>
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

export default ExtraCurricularPage;