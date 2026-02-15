import { motion } from 'framer-motion';
import { Building2, Target, Eye, Trophy, UserPlus, Shirt, Users, BookOpen, GraduationCap, Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import QuickLinksSection from '../../../components/LinksSection.tsx';

// Import school image
import schoolImage from '../../../assets/annual-day/annual-day5.jpg';

const IntroductionPage = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const sections = [
    {
      id: 'mission',
      title: 'Mission',
      icon: Target,
      content: 'We ensure that our students develop both the skills that a sound education provides and the competencies essential for success and leadership in the emerging creative economy. We will also lead in generating practical and theoretical knowledge that enables students to better understand our world and improve conditions for local and global communities.'
    },
    {
      id: 'vision',
      title: 'Vision',
      icon: Eye,
      content: 'Our vision is to empower students to acquire, demonstrate, articulate and value knowledge and skills that will support them, as life-long learners, to participate in and contribute to the global world and practice the core values of the school i.e. respect, tolerance and excellence.'
    },
    {
      id: 'aim',
      title: 'Aim',
      icon: Trophy,
      content: 'The school aims to provide high quality value-based education to its students and helps them realize their full potential by development of their academic and extra-curricular skills. We believe that discipline is the major component of all success.'
    },
    {
      id: 'admissions',
      title: 'Admissions',
      icon: UserPlus,
      content: 'To get admissions, students have to sit for an entrance test followed by an interview by the Principal/ Vice-Principal. Students get enrolled once in a year.'
    },
    {
      id: 'uniform',
      title: 'Uniform',
      icon: Shirt,
      content: 'All the students are strictly advised to wear the uniform prescribed by the school. We have two sets of uniforms for summer and winter. During sports and games day the students are required to wear their house dress according to their respective houses.'
    },
    {
      id: 'houses',
      title: 'House System',
      icon: Users,
      content: 'The house system divides the school for the sake of competition in academic and non-academic pursuits. It also helps in the recognition of both individual as well as group achievement. The four houses are named on beautiful birds found in Nepal. They are Danfe (Red), Munal (Blue), Mayur (Green) and Sarus (Yellow).'
    },
    {
      id: 'teaching',
      title: 'Teaching Methodology',
      icon: BookOpen,
      content: 'Apart from classroom lectures, in order to make the students participate in the teaching learning process both physically and mentally, we make use of additional teaching methodology activities such as group discussion, case studies, project work, presentation and educational excursions. We focus on regular correction of class work and home work, frequent revisions and student centered teaching and interaction.'
    },
    {
      id: 'teachers',
      title: 'Our Teachers',
      icon: GraduationCap,
      content: 'We encourage our teachers to be lifelong learners. We recruit only the best teachers through our reputed network and continuously enhance their skills with our Professional Development Programmes.'
    },
    {
      id: 'culture',
      title: 'KNS Culture',
      icon: Heart,
      content: 'We always respect all the religions with the generous virtue of progressive and scientific feelings and we don\'t have any caste at all because we respect and value each individual and group and their way of life equally. Senior students always love and care the junior ones and junior students always respect the senior ones at KNS.'
    },
    {
      id: 'junior',
      title: 'KNS Junior Wing',
      icon: Building2,
      content: 'Our junior wing "Happy Kids Kindergarten" is an independent Montessori School, run under the management of KNS network without any outward interference and disturbances. It is established to bring innovation in pre-school education.'
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
            src={schoolImage}
            alt="Kathmandu National School" 
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
              Introduction
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
              Since 1980 AD (2036 BS) - A Legacy of Excellence
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
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-display">
                    Kathmandu National School
                  </h2>
                </div>
                
                <div className="space-y-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <p>
                    <span className="font-semibold text-primary">Kathmandu National School (KNS)</span>, an A-grade co-educational institution was founded by renowned academicians and dedicated professionals in 1980 AD (2036 BS).
                  </p>
                  
                  <p>
                    KNS is committed to bring out the best in a student and strongly believes that good education is interlinked with discipline and a systematic formation of character.
                  </p>
                  
                  <p>
                    The school is like a home with compact organization of happy families which has doctrine of delivering education with trinity of 
                    <span className="font-bold text-primary italic"> "Education, Civilization and Humanization"</span>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mobile Accordion for Sections */}
            <div className="space-y-3 sm:space-y-4">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 text-left">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <section.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 font-display">
                            {section.title}
                          </h3>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full mt-1"></div>
                        </div>
                      </div>
                      {expandedSections[section.id] ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedSections[section.id] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="p-3 sm:p-4 pt-0">
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* School Culture Section - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 sm:mt-8"
            >
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-5 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    Our Unique Culture
                  </h3>
                </div>
                
                <div className="text-white/90 space-y-2 text-xs sm:text-sm">
                  <p>
                    We never impose corporal punishment to our students rather we love, care and counsel them. We, however develop a unique system of reward and punishment issuing the Merit and Demerit Cards.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
                      <div className="text-white text-lg sm:text-xl font-bold mb-0.5">45+</div>
                      <div className="text-white/80 text-xs">Years of Excellence</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
                      <div className="text-white text-lg sm:text-xl font-bold mb-0.5">A-Grade</div>
                      <div className="text-white/80 text-xs">Co-educational Institution</div>
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
                  <h2 className="text-2xl font-bold text-gray-900 font-display">
                    Kathmandu National School
                  </h2>
                </div>
                
                <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                  <p>
                    <span className="font-semibold text-primary">Kathmandu National School (KNS)</span>, an A-grade co-educational institution was founded by renowned academicians and dedicated professionals in 1980 AD (2036 BS). The school was established to cater the demand of the parents extending the good school culture that we have been successfully delivering through our Pre-School and Primary School Program since its inception.
                  </p>
                  
                  <p>
                    And later it was extended from Elementary to Secondary Level so as to fulfill the demand of quality education with culture.
                  </p>
                  
                  <p>
                    KNS is committed to bring out the best in a student and strongly believes that good education is interlinked with discipline and a systematic formation of character. KNS's motto is to instill a deep sense of discipline in the students so that it becomes an integral part of their lives.
                  </p>
                  
                  <p>
                    The school is like a home with compact organization of happy families which has doctrine of delivering education with trinity of 
                    <span className="font-bold text-primary italic"> "Education, Civilization and Humanization"</span>.
                  </p>
                </div>
              </div>

              {/* School Culture Section */}
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-white" />
                  <h3 className="text-xl font-bold text-white font-display">
                    Our Unique Culture
                  </h3>
                </div>
                
                <div className="text-white/90 space-y-3 text-sm">
                  <p>
                    We never impose corporal punishment to our students rather we love, care and counsel them. We, however develop a unique system of reward and punishment issuing the Merit and Demerit Cards.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <div className="text-white text-xl font-bold mb-0.5">45+</div>
                      <div className="text-white/80 text-xs">Years of Excellence</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <div className="text-white text-xl font-bold mb-0.5">A-Grade</div>
                      <div className="text-white/80 text-xs">Co-educational Institution</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Sections */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 font-display mb-1.5">
                          {section.title}
                        </h3>
                        <div className="h-0.5 w-10 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Additional Info Section - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 sm:mt-10 lg:mt-16"
          >
            <div className="bg-gradient-to-r from-red-600/90 to-red-500/80 rounded-lg p-4 sm:p-6 lg:p-8 border border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                {/* Discipline */}
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-display mb-1 sm:mb-1.5">Discipline First</h4>
                  <p className="text-white/90 text-xs sm:text-sm">
                    We believe discipline is the foundation of all success and character formation.
                  </p>
                </div>
                
                {/* Trinity */}
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-display mb-1 sm:mb-1.5">Our Trinity</h4>
                  <p className="text-white/90 text-xs sm:text-sm">
                    Education · Civilization · Humanization - The core of our educational philosophy.
                  </p>
                </div>
                
                {/* Innovation */}
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-display mb-1 sm:mb-1.5">Innovative Teaching</h4>
                  <p className="text-white/90 text-xs sm:text-sm">
                    Modern methodologies combined with traditional values for holistic development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/*Add Quick links*/}
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

export default IntroductionPage;

