import { motion } from 'framer-motion';
import { Home, Target, Heart, Award, Star, Shield, BookOpen, GraduationCap } from 'lucide-react';

// Import founder principal image
import founderPrincipalImage from '../../../assets/governing-body/principal.jpg';

const FounderPrincipalMessagePage = () => {
  const pillars = [
    {
      icon: Home,
      title: "Home Away From Home",
      description: "A caring environment where students feel secure and valued"
    },
    {
      icon: Heart,
      title: "Spiritual Development",
      description: "Cultivating thinking, speaking, and performing with kindness"
    },
    {
      icon: Target,
      title: "Future Leadership",
      description: "Preparing students to become future leaders of the country"
    },
    {
      icon: Shield,
      title: "Values & Ethics",
      description: "Modeling young individuals with perseverance and integrity"
    },
    {
      icon: BookOpen,
      title: "Holistic Education",
      description: "Balancing academics with sports, arts, and service"
    },
    {
      icon: GraduationCap,
      title: "Modern Delivery",
      description: "Advancing education with modern tools and mechanisms"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Same as home page */}
      <section className="relative py-10 lg:py-16 overflow-hidden">
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

        <div className="container mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white font-[Cambria] mb-4">
              Founding Principal's Message
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
              A Legacy of Love, Care, and Academic Excellence
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content */}
      <section className="relative py-10 lg:py-16 bg-gray-50 rounded-2xl overflow-hidden">
        <div className="container mx-auto px-3 sm:px-5 lg:px-6">
            {/* Left Column - Message Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              {/* Welcome Card */}
              <div className="bg-white rounded-lg p-4 lg:p-6 border border-gray-200 shadow-md mb-6 w-3/5 mx-auto">
                {/* Signature Card */}
                <div className="text-center mb-4">
                  <div className="w-40 h-40 mx-auto mb-3 rounded-full overflow-hidden border border-primary/20">
                    <img 
                      src={founderPrincipalImage}
                      alt="Anju Thapa (Khadka)"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-[Cambria] mb-1.5">
                    Anju Thapa (Khadka)
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-3">Founding Principal</p>
                  <div className="h-px w-20 bg-primary/30 mx-auto"></div>

                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-red-500 rounded-full"></div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                    A Warm Welcome
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-700 text-sm lg:text-base leading-relaxed">
                  <p className="text-base font-serif italic text-primary border-l-4 border-primary pl-3 py-1.5">
                    It's my fortune to welcome you to Kathmandu National School (KNS).
                  </p>
                  
                  <p>
                    <span className="font-semibold text-primary">Our students say that KNS is not only a school for them but it is also their home away from parental home.</span> In this sense it is an academic shrine where our students are found to be so happy and confident to lead them to be the future leaders of the country.
                  </p>
                  
                  <p>
                    We attempt our level best to model our young angles to stand for the country by endeavoring with perseverance and overcoming challenges in the globe. We receive supreme satisfaction from our products.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-4">
                    <p className="font-serif italic text-gray-700 text-sm">
                      "We believe in our products as they are the ones who think spiritually, speak truly and perform kindly towards those who deserve the doctrine of perfect human beings."
                    </p>
                  </div>
                </div>
                <div className="text-center pt-4 border-t border-gray-100">
                  <p className="text-gray-600 text-xs italic mb-3">
                    With all good wishes,
                  </p>
                  <div className="relative">
                    <div className="font-[Cambria] text-gray-800 text-base font-bold">
                      Anju Thapa (Khadka)
                    </div>
                    <div className="text-gray-500 text-xs">Founder Principal</div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-gray-600 text-xs">
                        Kathmandu National School
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/*Philosophy card*/}
            <motion.div>
              {/* Philosophy Card */}
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 lg:p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-white" />
                  <h3 className="text-lg lg:text-xl font-bold text-white font-[Cambria]">
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
            </motion.div>

            {/* Right Column - Signature & Pillars */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >

              {/* Pillars of KNS */}
              <div className="bg-gradient-to-r from-red-600/90 to-red-500/80 rounded-lg p-4 lg:p-6 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white font-[Cambria] mb-3">
                    Pillars of KNS Philosophy
                  </h3>
                  <p className="text-white/80 text-xs max-w-md mx-auto">
                    The foundational principles that guide our educational journey
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {pillars.map((pillar, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center flex-shrink-0">
                          <pillar.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-xs">{pillar.title}</h4>
                          <p className="text-white/70 text-xs mt-0.5">{pillar.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Legacy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 lg:mt-16"
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
                      The KNS Difference
                    </h3>
                    <div className="h-px w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-base font-serif italic max-w-2xl mx-auto">
                    Where education meets care, and students find their second home
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Caring Environment</h4>
                    <p className="text-white/80 text-xs">
                      More than a school - a home where students feel loved, valued, and secure
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Exceptional Discovery</h4>
                    <p className="text-white/80 text-xs">
                      Finding and nurturing what is exceptional in every student
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Affordable Excellence</h4>
                    <p className="text-white/80 text-xs">
                      Sophisticated services maintained with affordable cost for all
                    </p>
                  </div>
                </div>
                
                {/* Final Quote */}
                <div className="mt-10 pt-6 border-t border-white/20">
                  <div className="max-w-2xl mx-auto text-center">
                    <p className="text-white text-base font-serif italic mb-3">
                      "Where once guardians visit, they then feel the difference."
                    </p>
                    <p className="text-white/80 text-xs">
                      - Anju Thapa (Khadka), Founding Principal
                    </p>
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

export default FounderPrincipalMessagePage;