import { motion } from 'framer-motion';
import { Heart, Target, Users, BookOpen, Music, Brain, Shield, Award, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import QuickLinksSection from '../../../components/LinksSection';

// Import vice principal image
import vicePrincipalImage from '../../../assets/students/std2.jpg';

const VicePrincipalMessagePage = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const values = [
    {
      id: 'value',
      icon: Heart,
      title: "Value-Based Education",
      description: "Valuing everyone irrespective of age, position, race, or background"
    },
    {
      id: 'inclusive',
      icon: Users,
      title: "Inclusive Community",
      description: "Every child and adult feels valued, happy, and respected"
    },
    {
      id: 'balanced',
      icon: BookOpen,
      title: "Balanced Curriculum",
      description: "Broad curriculum that includes creative and physical education"
    },
    {
      id: 'holistic',
      icon: Music,
      title: "Holistic Development",
      description: "Nurturing different facets through arts, sports, and academics"
    },
    {
      id: 'growth',
      icon: Brain,
      title: "Mental & Physical Growth",
      description: "Developing both cognitive abilities and physical well-being"
    },
    {
      id: 'modern',
      icon: Sparkles,
      title: "Modern Teaching",
      description: "Upgraded teaching tools and techniques for effortless learning"
    }
  ];

  const testimonials = [
    {
      quote: "The balance between academics and extracurriculars at KNS has helped my child discover hidden talents.",
      author: "Parent of Grade 9 Student"
    },
    {
      quote: "Our teachers go beyond textbooks to make learning engaging and effortless for every student.",
      author: "Class Teacher"
    },
    {
      quote: "At KNS, every student is valued and encouraged to explore their true potential.",
      author: "Alumni (Batch 2018)"
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
            src={vicePrincipalImage}
            alt="Vice Principal Sushma K.C. (Karki)" 
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
              Vice Principal's Message
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
              Nurturing Holistic Growth in a Value-Driven Environment
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
                {/* Profile Image */}
                <div className="text-center mb-4">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-3 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                    <img 
                      src={vicePrincipalImage}
                      alt="Sushma K.C. (Karki)"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria] mb-1">
                    Sushma K.C. (Karki)
                  </h3>
                  <p className="text-primary font-semibold text-xs sm:text-sm mb-3">Vice Principal</p>
                  <div className="h-px w-16 sm:w-20 bg-red-500/50 mx-auto mb-4"></div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-6 w-0.5 bg-red-500 rounded-full"></div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                    Value-Based Education
                  </h2>
                </div>
                
                <div className="space-y-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <p className="text-sm font-serif italic text-primary border-l-4 border-primary pl-3 py-1.5 mb-2">
                    "Kathmandu National School (KNS) is a value-based and value-driven school."
                  </p>
                  
                  <p>
                    <span className="font-semibold text-primary">We aspire to value everyone irrespective of age, position, race, gender, background or ability</span> and teach the same to our students. We motivate, support and inspire personal, spiritual, emotional and educational growth in a safe and secure environment.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border border-primary/20 mt-3">
                    <p className="font-serif italic text-gray-700 text-xs sm:text-sm">
                      "As such we want all those who become part of our school family, whether a child or an adult, to feel valued, happy, respected and recognize their role in continuing to make our school outstanding."
                    </p>
                  </div>
                </div>
                
                {/* Signature - Mobile */}
                <div className="text-center pt-4 mt-4 border-t border-gray-100">
                  <p className="text-gray-600 text-xs italic mb-2">
                    With all good wishes,
                  </p>
                  <div className="font-[Cambria] text-gray-800 text-sm font-bold">
                    Sushma K.C. (Karki)
                  </div>
                  <div className="text-gray-500 text-xs">Vice Principal</div>
                </div>
              </div>
            </motion.div>

            {/* Core Values - Mobile Accordion */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-0.5 bg-blue-500 rounded-full"></div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                  Our Core Values
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleSection(value.id)}
                        className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 text-left">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <value.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 font-[Cambria]">
                            {value.title}
                          </h3>
                        </div>
                        {expandedSections[value.id] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedSections[value.id] ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
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

            {/* KNS Community Experience - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-5 border border-white/20 backdrop-blur-sm">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
                    <div className="h-px w-6 sm:w-8 bg-white/50" />
                    <h3 className="text-base sm:text-lg font-bold text-white font-[Cambria]">
                      The KNS Community Experience
                    </h3>
                    <div className="h-px w-6 sm:w-8 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-xs sm:text-sm font-serif italic">
                    Where every member of our school family feels valued and inspired
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-[Cambria] mb-1">Safe Environment</h4>
                    <p className="text-white/90 text-xs">
                      A secure space for personal, spiritual, and educational growth
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-[Cambria] mb-1">True Potential</h4>
                    <p className="text-white/90 text-xs">
                      Helping each child explore and realize their unique capabilities
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-[Cambria] mb-1">Outstanding School</h4>
                    <p className="text-white/90 text-xs">
                      Each member contributes to making our school truly outstanding
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonials - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-red-600/90 to-red-500/80 rounded-lg p-4 sm:p-5 border border-white/20">
                <h4 className="text-center text-base sm:text-lg font-bold text-white font-[Cambria] mb-4">
                  What Our Community Says
                </h4>
                <div className="space-y-3">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                      <p className="text-white/90 text-xs sm:text-sm italic mb-2">"{testimonial.quote}"</p>
                      <div className="h-px w-6 bg-white/30 my-1.5"></div>
                      <p className="text-white text-xs font-semibold">{testimonial.author}</p>
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
                {/* Profile Image */}
                <div className="text-center mb-6">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                    <img 
                      src={vicePrincipalImage}
                      alt="Sushma K.C. (Karki)"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-[Cambria] mb-1">
                    Sushma K.C. (Karki)
                  </h3>
                  <p className="text-primary font-semibold text-base mb-4">Vice Principal</p>
                  <div className="h-px w-24 bg-red-500/50 mx-auto mb-6"></div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-red-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900 font-[Cambria]">
                    Value-Based Education
                  </h2>
                </div>
                
                <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                  <p className="text-lg font-serif italic text-primary border-l-4 border-primary pl-4 py-2 mb-2">
                    "Kathmandu National School (KNS) is a value-based and value-driven school."
                  </p>
                  
                  <p>
                    <span className="font-semibold text-primary">We aspire to value everyone irrespective of age, position, race, gender, background or ability</span> and teach the same to our students. We motivate, support and inspire personal, spiritual, emotional and educational growth in a safe and secure environment.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-4">
                    <p className="font-serif italic text-gray-700 text-base">
                      "As such we want all those who become part of our school family, whether a child or an adult, to feel valued, happy, respected and recognize their role in continuing to make our school outstanding."
                    </p>
                  </div>
                </div>
                
                {/* Signature - Desktop */}
                <div className="text-center pt-6 mt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-sm italic mb-3">
                    With all good wishes,
                  </p>
                  <div className="relative">
                    <div className="font-[Cambria] text-gray-800 text-lg font-bold">
                      Sushma K.C. (Karki)
                    </div>
                    <div className="text-gray-500 text-sm mb-4">Vice Principal</div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600 text-sm">
                        Kathmandu National School
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        Since 1980 AD (2036 BS)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Values & Community */}
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
                  <h3 className="text-xl font-bold text-gray-900 font-[Cambria]">
                    Our Core Values
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.id}
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
                          <h4 className="text-base font-bold text-gray-900 font-[Cambria] mb-1">
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

              {/* KNS Community Experience */}
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-6 border border-white/20 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="h-px w-10 bg-white/50" />
                    <h3 className="text-xl font-bold text-white font-[Cambria]">
                      The KNS Community Experience
                    </h3>
                    <div className="h-px w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-base font-serif italic max-w-md mx-auto">
                    Where every member of our school family feels valued and inspired
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Safe Environment</h4>
                    <p className="text-white/80 text-sm">
                      A secure space for personal, spiritual, and educational growth
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">True Potential</h4>
                    <p className="text-white/80 text-sm">
                      Helping each child explore and realize their unique capabilities
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Outstanding School</h4>
                    <p className="text-white/80 text-sm">
                      Each member contributes to making our school truly outstanding
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <QuickLinksSection />
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

export default VicePrincipalMessagePage;