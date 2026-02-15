import { motion } from 'framer-motion';
import { Users, Target, Building2, Heart, BookOpen, Award, Users2, Handshake, TrendingUp, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import QuickLinksSection from '../../../components/LinksSection';

// Import governing body image
import governingBodyImage from '../../../assets/governing-body/governing-1.jpg';

const GoverningBodyMessagePage = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const values = [
    {
      icon: Target,
      title: "Quality Education",
      description: "Imparting education that benefits children's overall development"
    },
    {
      icon: Users2,
      title: "Tripartite Relationship",
      description: "School, parents, and students working together for excellence"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Constantly upgrading infrastructure and educational services"
    },
    {
      icon: BookOpen,
      title: "Interdisciplinary Approach",
      description: "Experimental and progressive teaching methodologies"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Striving for huge academic success since 1980"
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Working with parents and academia for institutional growth"
    }
  ];

  const achievements = [
    { number: "45+", label: "Years of Excellence", icon: Star },
    { number: "5000+", label: "Students Educated", icon: Users },
    { number: "100+", label: "Qualified Faculty", icon: Award },
    { number: "98%", label: "Parent Satisfaction", icon: Heart }
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
            src={governingBodyImage}
            alt="Kathmandu National School Governing Body" 
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
            <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display mb-3 sm:mb-4">
              Message from Governing Body
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
              Leadership Perspective on Excellence in Education
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
            {/* Welcome Message Card - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 shadow-sm">
                {/* Governing Body Image */}
                <div className="w-full h-48 sm:h-56 rounded-lg overflow-hidden border border-primary/30 mb-4">
                  <img 
                    src={governingBodyImage} 
                    alt="Governing Body" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-6 w-0.5 bg-red-500 rounded-full"></div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-display">
                    Welcome to KNS
                  </h2>
                </div>
                
                <div className="space-y-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <p className="text-sm font-serif italic text-primary border-l-4 border-primary pl-3 py-1.5 mb-2">
                    "It's our immense pleasure to welcome you to Kathmandu National School (KNS)."
                  </p>
                  
                  <p>
                    <span className="font-semibold text-primary">KNS is the junction of qualified teachers, professionals and students.</span> Since its foundation, it has been imparting quality education that benefits our young children's overall development.
                  </p>
                  
                  <p>
                    We have been striding ahead with huge academic success. Our tireless effort to impart quality education has been mounting higher ever since we laid our foundation in 1980 AD (2036 BS).
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Values - Mobile Accordion */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-0.5 bg-blue-500 rounded-full"></div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-display">
                  Our Core Values
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleSection(`value-${index}`)}
                        className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 text-left">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <value.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 font-display">
                            {value.title}
                          </h3>
                        </div>
                        {expandedSections[`value-${index}`] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedSections[`value-${index}`] ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-3 sm:p-4 pt-0">
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Vision for Growth Card - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-5 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    Our Vision for Growth
                  </h3>
                </div>
                
                <div className="text-white/90 space-y-2 text-xs sm:text-sm">
                  <p>
                    We have been developing infrastructures to upgrade this institution to higher level studies and we are optimistic to offer promising higher education in near future.
                  </p>
                  
                  <p>
                    Our approach is interdisciplinary, experimental and progressive. Our students are encouraged not only to focus on textbooks but also to enhance their creativity, analytical skills, and pursue their extra-curricular interest.
                  </p>
                  
                  <div className="mt-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <p className="font-serif italic text-white text-center text-xs sm:text-sm">
                      "We look forward to continuing our collaboration with parents, students, and academia to progressively upgrade our institution."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements Stats - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <div className="bg-gradient-to-r from-red-600/90 to-red-500/80 rounded-lg p-4 sm:p-5 border border-white/20">
                <div className="text-center mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display mb-2">
                    Our Journey in Numbers
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Decades of commitment to educational excellence
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                        <achievement.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-white font-display mb-0.5">
                        {achievement.number}
                      </div>
                      <div className="text-white/90 text-xs">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Message Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Welcome Message Card */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                {/* Governing Body Image */}
                <div className="w-full h-64 rounded-lg overflow-hidden border border-primary/30 mb-4">
                  <img 
                    src={governingBodyImage} 
                    alt="Governing Body" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-red-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900 font-display">
                    Welcome to KNS
                  </h2>
                </div>
                
                <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                  <p className="text-lg font-serif italic text-primary border-l-4 border-primary pl-4 py-2 mb-2">
                    "It's our immense pleasure to welcome you to Kathmandu National School (KNS)."
                  </p>
                  
                  <p>
                    <span className="font-semibold text-primary">KNS is the junction of qualified teachers, professionals and students.</span> Since its foundation, it has been imparting quality education that benefits our young children's overall development. We have been preparing versatile, dynamic and energetic human resource to cope up with the challenges of twenty first century.
                  </p>
                  
                  <p>
                    We have been striding ahead with huge academic success. Our tireless effort to impart quality education has been mounting higher ever since we laid our foundation in 1980 AD (2036 BS) which was the beginning of early childhood education at KNS.
                  </p>
                  
                  <p>
                    The tripartite relationships among school, parents and students that promote exchange of critical feedbacks and suggestions from all parties and particularly the parents have helped us to continuously improve the quality of our education and services.
                  </p>
                </div>
              </div>

              {/* Vision for Growth Card */}
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-white" />
                  <h3 className="text-xl font-bold text-white font-display">
                    Our Vision for Growth
                  </h3>
                </div>
                
                <div className="text-white/90 space-y-3 text-sm">
                  <p>
                    We have been developing infrastructures to upgrade this institution to higher level studies and we are optimistic to offer promising higher education in near future.
                  </p>
                  
                  <p>
                    Our approach is interdisciplinary, experimental and progressive. Our students are encouraged not only to focus on textbooks but also to enhance their creativity, analytical skills, and pursue their extra-curricular interest.
                  </p>
                  
                  <p>
                    We toil to create an environment where good education and values are cultivated in our students to enable them to become responsible individuals.
                  </p>
                  
                  <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <p className="font-serif italic text-white text-center text-base">
                      "We look forward to continuing our collaboration with parents, students, and academia to progressively upgrade our institution."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Values & Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Core Values */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-blue-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-900 font-display">
                    Our Core Values
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <value.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900 font-display mb-1">
                            {value.title}
                          </h4>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed ml-13">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements Stats */}
              <div className="bg-gradient-to-r from-red-600/90 to-red-500/80 rounded-lg p-6 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white font-display mb-3">
                    Our Journey in Numbers
                  </h3>
                  <p className="text-white/80 text-sm max-w-md mx-auto">
                    Decades of commitment to educational excellence and student development
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white font-display mb-0.5">
                        {achievement.number}
                      </div>
                      <div className="text-white/90 text-xs">
                        {achievement.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Commitment Section - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 sm:mt-10 lg:mt-16"
          >
            <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-6 lg:p-8 border border-white/20 backdrop-blur-sm">
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-display">
                    Our Commitment to Excellence
                  </h3>
                  <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
                </div>
                <p className="text-white/90 text-sm sm:text-base font-serif italic max-w-2xl mx-auto">
                  Preparing students for the challenges of the 21st century with holistic education
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-display mb-1 sm:mb-1.5">Holistic Development</h4>
                  <p className="text-white/90 text-xs sm:text-sm">
                    Beyond textbooks, focusing on creativity, analytical skills, and extracurricular growth
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Users2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-display mb-1 sm:mb-1.5">Collaborative Growth</h4>
                  <p className="text-white/90 text-xs sm:text-sm">
                    Strong partnerships between school, parents, and students for continuous improvement
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-display mb-1 sm:mb-1.5">Future Ready</h4>
                  <p className="text-white/90 text-xs sm:text-sm">
                    Developing infrastructure and programs for promising higher education opportunities
                  </p>
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

export default GoverningBodyMessagePage;

