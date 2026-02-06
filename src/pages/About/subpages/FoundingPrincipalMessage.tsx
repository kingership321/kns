import { motion } from 'framer-motion';
import { Home, Target, Heart, Award, Star, Shield, BookOpen, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

// Import founder principal image
import founderPrincipalImage from '../../../assets/governing-body/principal.jpg';

const FounderPrincipalMessagePage = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const pillars = [
    {
      id: 'home',
      icon: Home,
      title: "Home Away From Home",
      description: "A caring environment where students feel secure and valued"
    },
    {
      id: 'spiritual',
      icon: Heart,
      title: "Spiritual Development",
      description: "Cultivating thinking, speaking, and performing with kindness"
    },
    {
      id: 'leadership',
      icon: Target,
      title: "Future Leadership",
      description: "Preparing students to become future leaders of the country"
    },
    {
      id: 'values',
      icon: Shield,
      title: "Values & Ethics",
      description: "Modeling young individuals with perseverance and integrity"
    },
    {
      id: 'holistic',
      icon: BookOpen,
      title: "Holistic Education",
      description: "Balancing academics with sports, arts, and service"
    },
    {
      id: 'modern',
      icon: GraduationCap,
      title: "Modern Delivery",
      description: "Advancing education with modern tools and mechanisms"
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
            src={founderPrincipalImage}
            alt="Founder Principal Anju Thapa (Khadka)" 
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
              Founding Principal's Message
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
              A Legacy of Love, Care, and Academic Excellence
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
                      src={founderPrincipalImage}
                      alt="Anju Thapa (Khadka)"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria] mb-1">
                    Anju Thapa (Khadka)
                  </h3>
                  <p className="text-primary font-semibold text-xs sm:text-sm mb-3">Founding Principal</p>
                  <div className="h-px w-16 sm:w-20 bg-red-500/50 mx-auto mb-4"></div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-6 w-0.5 bg-red-500 rounded-full"></div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                    A Warm Welcome
                  </h2>
                </div>
                
                <div className="space-y-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <p className="text-sm font-serif italic text-primary border-l-4 border-primary pl-3 py-1.5 mb-2">
                    "It's my fortune to welcome you to Kathmandu National School (KNS)."
                  </p>
                  
                  <p>
                    <span className="font-semibold text-primary">Our students say that KNS is not only a school for them but it is also their home away from parental home.</span> In this sense it is an academic shrine where our students are found to be so happy and confident to lead them to be the future leaders of the country.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border border-primary/20 mt-3">
                    <p className="font-serif italic text-gray-700 text-xs sm:text-sm">
                      "We believe in our products as they are the ones who think spiritually, speak truly and perform kindly towards those who deserve the doctrine of perfect human beings."
                    </p>
                  </div>
                </div>
                
                {/* Signature - Mobile */}
                <div className="text-center pt-4 mt-4 border-t border-gray-100">
                  <p className="text-gray-600 text-xs italic mb-2">
                    With all good wishes,
                  </p>
                  <div className="font-[Cambria] text-gray-800 text-sm font-bold">
                    Anju Thapa (Khadka)
                  </div>
                  <div className="text-gray-500 text-xs">Founder Principal</div>
                </div>
              </div>
            </motion.div>

            {/* Pillars of KNS - Mobile Accordion */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-0.5 bg-red-500 rounded-full"></div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                  Pillars of KNS Philosophy
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="bg-gradient-to-r from-red-600/90 to-red-500/80 rounded-lg border border-white/20 overflow-hidden">
                      <button
                        onClick={() => toggleSection(pillar.id)}
                        className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 text-left">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <pillar.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-white font-[Cambria]">
                            {pillar.title}
                          </h3>
                        </div>
                        {expandedSections[pillar.id] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedSections[pillar.id] ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-3 sm:p-4 pt-0">
                          <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Philosophy Card - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-5 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <h3 className="text-base sm:text-lg font-bold text-white font-[Cambria]">
                    Our Educational Philosophy
                  </h3>
                </div>
                
                <div className="text-white/90 space-y-2 text-xs sm:text-sm">
                  <p>
                    At KNS we take our responsibility to find what is exceptional in students very seriously. The experience that we have prepared for them here gives every student an all-round education built on a foundation of service, adventure, sports, creative arts and academics.
                  </p>
                  
                  <p>
                    Now, we have been advancing in delivery system of education with modern mechanism and tools at KNS where every child is valued. We always maintain our services sophisticated with an affordable cost.
                  </p>
                  
                  <p className="font-bold text-white text-sm sm:text-base mt-3">
                    That's why it is KNS where once guardians visit, they then feel the difference.
                  </p>
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
                      src={founderPrincipalImage}
                      alt="Anju Thapa (Khadka)"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-[Cambria] mb-1">
                    Anju Thapa (Khadka)
                  </h3>
                  <p className="text-primary font-semibold text-base mb-4">Founding Principal</p>
                  <div className="h-px w-24 bg-red-500/50 mx-auto mb-6"></div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-red-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900 font-[Cambria]">
                    A Warm Welcome
                  </h2>
                </div>
                
                <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                  <p className="text-lg font-serif italic text-primary border-l-4 border-primary pl-4 py-2 mb-2">
                    "It's my fortune to welcome you to Kathmandu National School (KNS)."
                  </p>
                  
                  <p>
                    <span className="font-semibold text-primary">Our students say that KNS is not only a school for them but it is also their home away from parental home.</span> In this sense it is an academic shrine where our students are found to be so happy and confident to lead them to be the future leaders of the country.
                  </p>
                  
                  <p>
                    We attempt our level best to model our young angles to stand for the country by endeavoring with perseverance and overcoming challenges in the globe. We receive supreme satisfaction from our products.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-4">
                    <p className="font-serif italic text-gray-700 text-base">
                      "We believe in our products as they are the ones who think spiritually, speak truly and perform kindly towards those who deserve the doctrine of perfect human beings."
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
                      Anju Thapa (Khadka)
                    </div>
                    <div className="text-gray-500 text-sm mb-4">Founder Principal</div>
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

            {/* Right Column - Philosophy & Pillars */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Philosophy Card */}
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-white" />
                  <h3 className="text-xl font-bold text-white font-[Cambria]">
                    Our Educational Philosophy
                  </h3>
                </div>
                
                <div className="text-white/90 space-y-3 text-sm">
                  <p>
                    At KNS we take our responsibility to find what is exceptional in students very seriously. The experience that we have prepared for them here gives every student an all-round education built on a foundation of service, adventure, sports, creative arts and academics.
                  </p>
                  
                  <p>
                    Now, we have been advancing in delivery system of education with modern mechanism and tools at KNS where every child is valued. We always maintain our services sophisticated with an affordable cost.
                  </p>
                  
                  <p className="font-bold text-white text-base mt-4">
                    That's why it is KNS where once guardians visit, they then feel the difference.
                  </p>
                </div>
              </div>

              {/* Pillars of KNS */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-blue-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-900 font-[Cambria]">
                    Pillars of KNS Philosophy
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pillars.map((pillar, index) => (
                    <motion.div
                      key={pillar.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <pillar.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900 font-[Cambria] mb-1">
                            {pillar.title}
                          </h4>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed ml-13">
                        {pillar.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* The KNS Difference Section - Responsive */}
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
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-[Cambria]">
                    The KNS Difference
                  </h3>
                  <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
                </div>
                <p className="text-white/90 text-sm sm:text-base font-serif italic max-w-2xl mx-auto">
                  Where education meets care, and students find their second home
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-[Cambria] mb-1 sm:mb-1.5">Caring Environment</h4>
                  <p className="text-white/90 text-xs sm:text-sm">
                    More than a school - a home where students feel loved, valued, and secure
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-[Cambria] mb-1 sm:mb-1.5">Exceptional Discovery</h4>
                  <p className="text-white/90 text-xs sm:text-sm">
                    Finding and nurturing what is exceptional in every student
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-[Cambria] mb-1 sm:mb-1.5">Affordable Excellence</h4>
                  <p className="text-white/90 text-xs sm:text-sm">
                    Sophisticated services maintained with affordable cost for all
                  </p>
                </div>
              </div>
              
              {/* Final Quote */}
              <div className="mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-white/20">
                <div className="max-w-2xl mx-auto text-center">
                  <p className="text-white text-sm sm:text-base font-serif italic mb-2 sm:mb-3">
                    "Where once guardians visit, they then feel the difference."
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm">
                    - Anju Thapa (Khadka), Founding Principal
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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

export default FounderPrincipalMessagePage;