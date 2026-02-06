import { motion } from 'framer-motion';
import { Quote, Award, Users, GraduationCap, Star, Target, BookOpen } from 'lucide-react';

// Import images
import fac1 from '../assets/teachers/assembly.jpg';
import principalPhoto from '../assets/Montessori/prize1.jpg';
import chairmanPhoto from '../assets/Montessori/prize2.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Banner Image with enhanced overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={fac1}
          alt="Kathmandu National School Banner" 
          className="w-full h-full object-cover object-center"
        />
        {/* Enhanced Blue Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/60" />
      </div>
      
      {/* Subtle Pattern Texture */}
      <div className="absolute inset-0 z-0 opacity-3 xs:opacity-4 sm:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-white/10 backdrop-blur-sm hidden xs:block"
        />
        <motion.div
          animate={{ y: [20, 0, 20] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-white/5 backdrop-blur-sm hidden xs:block"
        />
        <motion.div
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm hidden xs:block"
        />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 py-4 xs:py-5 sm:py-6 md:py-8 lg:py-0">
          
          {/* Left Column - Principal's Message (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block lg:w-1/4 xl:w-1/3 2xl:w-2/5"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 xs:p-4 sm:p-5 md:p-6 border border-white/20 shadow-xl">
              {/* Principal Photo */}
              <div className="relative mb-4 xs:mb-4 sm:mb-5 md:mb-6">
                <div className="w-20 h-20 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/20 mx-auto">
                  <img 
                    src={principalPhoto}
                    alt="Principal Anju Thapa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-500 text-white px-2 xs:px-2 sm:px-2.5 py-0.5 rounded-full text-xs xs:text-xs sm:text-sm font-semibold whitespace-nowrap">
                  Principal
                </div>
              </div>
              
              {/* Message */}
              <div className="text-center">
                <Quote className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white/60 mx-auto mb-2 xs:mb-2 sm:mb-3 md:mb-4" />
                <p className="text-white/90 text-xs xs:text-xs sm:text-sm md:text-base leading-relaxed mb-2 xs:mb-2 sm:mb-3 md:mb-4 italic">
                  It's my fortune to welcome you in Kathmandu National School (KNS). Our students say that KNS is not only a school for them but it is also their home away from parental home. In this sense it is an academic shrine where our students are found to be so happy and confident to lead them to be the future leaders of the country.
                </p>
                <p className="text-white/90 text-xs xs:text-xs sm:text-sm md:text-base leading-relaxed mb-2 xs:mb-2 sm:mb-3 md:mb-4 italic">At the KNS we take our responsibility to find what is exceptional in students very seriously. The experience that we have prepared for them here gives every student an all-round education built on a foundation of service, adventure, sports, creative arts and academics.</p>
                <div className="pt-3 xs:pt-3 sm:pt-4 border-t border-white/20">
                  <h3 className="text-base xs:text-base sm:text-lg md:text-xl font-bold text-white font-[Cambria] mb-0.5 xs:mb-0.5 sm:mb-1">Anju Thapa</h3>
                  <p className="text-white/80 text-xs xs:text-xs sm:text-sm md:text-base">Principal</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Center Column - Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 xl:w-1/3 2xl:w-1/3 text-center"
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-3 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8"
            >
              <div className="inline-block px-3 xs:px-3 sm:px-4 md:px-5 py-1.5 xs:py-1.5 sm:py-2 md:py-2.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-white font-serif text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl tracking-widest">
                  WELCOME TO
                </span>
              </div>
            </motion.div>

            {/* School Name - Responsive typography */}
            <div className="mb-3 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8">
              <h1 className="font-bold leading-none tracking-tight">
                <span className="block text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-red-600 font-[Cambria] 
  /* Replace stroke with text-shadow for cleaner mobile rendering */
  [text-shadow:_0.5px_0.5px_0_white,_-0.5px_-0.5px_0_white,_0.5px_-0.5px_0_white,_-0.5px_0.5px_0_white]
  xs:[text-shadow:_0.2px_0.2px_0_white,_-0.2px_-0.2px_0_white,_0.2px_-0.2px_0_white,_-0.2px_0.2px_0_white]
  sm:[text-shadow:_0.5px_0.5px_0_white,_-0.5px_-0.5px_0_white,_0.5px_-0.5px_0_white,_-0.5px_0.5px_0_white]
  md:[text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]
  lg:[text-shadow:_1.2px_1.2px_0_white,_-1.2px_-1.2px_0_white,_1.2px_-1.2px_0_white,_-1.2px_1.2px_0_white]
  xl:[text-shadow:_1.5px_1.5px_0_white,_-1.5px_-1.5px_0_white,_1.5px_-1.5px_0_white,_-1.5px_1.5px_0_white]
  2xl:[text-shadow:_2px_2px_0_white,_-2px_-2px_0_white,_2px_-2px_0_white,_-2px_2px_0_white]
  mb-1 xs:mb-1 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-3">
  KATHMANDU
</span>
                <span className="block text-base xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-[Cambria] tracking-wider xs:tracking-wide sm:tracking-wider md:tracking-wider">
                  NATIONAL SCHOOL
                </span>
              </h1>
            </div>

            {/* Motto */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mb-4 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10"
            >
              <div className="flex items-center justify-center gap-2 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-6">
                <div className="h-px w-4 xs:w-4 sm:w-6 md:w-8 lg:w-10 xl:w-12 bg-gradient-to-r from-transparent to-white/30" />
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white/95 italic tracking-wide font-serif leading-relaxed px-1 xs:px-1 sm:px-2 md:px-2">
                  Education · Civilization · Humanization
                </p>
                <div className="h-px w-4 xs:w-4 sm:w-6 md:w-8 lg:w-10 xl:w-12 bg-gradient-to-l from-transparent to-white/30" />
              </div>
            </motion.div>

            {/* Quick Stats - Fully responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-2 sm:gap-3 md:gap-4 max-w-xs xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
            >
              {[
                { value: "45+", label: "Years", icon: Award, color: "text-blue-400" },
                { value: "1500+", label: "Students", icon: Users, color: "text-green-400" },
                { value: "100%", label: "SEE Results", icon: GraduationCap, color: "text-yellow-400" },
                { value: "50+", label: "Faculty", icon: Star, color: "text-red-400" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-block p-1 xs:p-1 sm:p-1.5 md:p-2 rounded-md bg-white/5 mb-1 xs:mb-1 sm:mb-1.5 group-hover:bg-white/10 transition-all duration-300">
                    <stat.icon className={`w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ${stat.color}`} />
                  </div>
                  <div className="text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-0.5 xs:mb-0.5 sm:mb-0.5">{stat.value}</div>
                  <div className="text-white/80 text-xs xs:text-xs sm:text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Column - Chairman's Message (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block lg:w-1/4 xl:w-1/3 2xl:w-2/5"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 xs:p-4 sm:p-5 md:p-6 border border-white/20 shadow-xl">
              {/* Chairman Photo */}
              <div className="relative mb-4 xs:mb-4 sm:mb-5 md:mb-6">
                <div className="w-20 h-20 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/20 mx-auto">
                  <img 
                    src={chairmanPhoto}
                    alt="Chairman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-2 xs:px-2 sm:px-2.5 py-0.5 rounded-full text-xs xs:text-xs sm:text-sm font-semibold whitespace-nowrap">
                  Chairman
                </div>
              </div>
              
              {/* Message */}
              <div className="text-center">
                <Quote className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white/60 mx-auto mb-2 xs:mb-2 sm:mb-3 md:mb-4" />
                <p className="text-white/90 text-xs xs:text-xs sm:text-sm md:text-base leading-relaxed mb-2 xs:mb-2 sm:mb-3 md:mb-4 italic">
                  It's our immense pleasure to welcome you in Kathmandu National School (KNS). KNS is the junction of qualified teachers, professionals and students. Since its foundation, it has been imparting quality education that benefits our young children's overall development.
                </p>
                <p className="text-white/90 text-xs xs:text-xs sm:text-sm md:text-base leading-relaxed mb-2 xs:mb-2 sm:mb-3 md:mb-4 italic">
                  Our approach is interdisciplinary, experimental and progressive. Our students are encouraged not only to focus on textbooks but also to enhance their creativity, analytical skills, and pursue their extra-curricular interest.
                </p>
                <div className="pt-3 xs:pt-3 sm:pt-4 border-t border-white/20">
                  <h3 className="text-base xs:text-base sm:text-lg md:text-xl font-bold text-white font-[Cambria] mb-0.5 xs:mb-0.5 sm:mb-1">Rajesh Shrestha</h3>
                  <p className="text-white/80 text-xs xs:text-xs sm:text-sm md:text-base">Chairman</p>
                  <p className="text-white/60 text-xs xs:text-xs sm:text-sm md:text-base mt-0.5 xs:mt-0.5 sm:mt-1">Ph.D. in Education</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tablet/Mobile Layout - Messages below welcome */}
        <div className="lg:hidden mt-3 xs:mt-3 sm:mt-4 md:mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-3 sm:gap-4 md:gap-5">
            {/* Principal's Message - Mobile/Tablet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 xs:p-3 sm:p-4 md:p-5 border border-white/20"
            >
              <div className="flex items-center gap-2 xs:gap-2 sm:gap-3 md:gap-4 mb-2 xs:mb-2 sm:mb-3 md:mb-4">
                <div className="w-12 h-12 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                  <img 
                    src={principalPhoto}
                    alt="Principal Anju Thapa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm xs:text-sm sm:text-base md:text-lg font-bold text-white font-[Cambria]">Anju Thapa</h3>
                  <p className="text-white/80 text-xs xs:text-xs sm:text-sm md:text-base">Principal</p>
                  <div className="mt-1 xs:mt-1">
                    <span className="inline-block bg-red-500/20 text-red-200 px-1.5 xs:px-1.5 sm:px-2 md:px-2.5 py-0.5 rounded-full text-xs xs:text-xs sm:text-xs md:text-sm font-medium">
                      Principal
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-white/90 text-xs xs:text-xs sm:text-sm md:text-base leading-relaxed mb-2 xs:mb-2 sm:mb-3 italic">
                "Our commitment is to provide quality education that shapes character and builds future leaders."
              </p>
              <div className="flex items-center justify-between pt-2 xs:pt-2 sm:pt-3 border-t border-white/20">
                <div className="text-white/60 text-xs xs:text-xs sm:text-sm">25+ Years Experience</div>
                <Quote className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-white/40" />
              </div>
            </motion.div>
            
            {/* Chairman's Message - Mobile/Tablet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 xs:p-3 sm:p-4 md:p-5 border border-white/20"
            >
              <div className="flex items-center gap-2 xs:gap-2 sm:gap-3 md:gap-4 mb-2 xs:mb-2 sm:mb-3 md:mb-4">
                <div className="w-12 h-12 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                  <img 
                    src={chairmanPhoto}
                    alt="Chairman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm xs:text-sm sm:text-base md:text-lg font-bold text-white font-[Cambria]">Rajesh Shrestha</h3>
                  <p className="text-white/80 text-xs xs:text-xs sm:text-sm md:text-base">Chairman</p>
                  <div className="mt-1 xs:mt-1">
                    <span className="inline-block bg-blue-500/20 text-blue-200 px-1.5 xs:px-1.5 sm:px-2 md:px-2.5 py-0.5 rounded-full text-xs xs:text-xs sm:text-xs md:text-sm font-medium">
                      Chairman
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-white/90 text-xs xs:text-xs sm:text-sm md:text-base leading-relaxed mb-2 xs:mb-2 sm:mb-3 italic">
                "We envision an institution that not only imparts knowledge but also instills values in students."
              </p>
              <div className="flex items-center justify-between pt-2 xs:pt-2 sm:pt-3 border-t border-white/20">
                <div className="text-white/60 text-xs xs:text-xs sm:text-sm">Ph.D. in Education</div>
                <Quote className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-white/40" />
              </div>
            </motion.div>
          </div>

          {/* About School - Mobile/Tablet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-3 xs:mt-3 sm:mt-4 md:mt-5 bg-white/10 backdrop-blur-sm rounded-lg p-3 xs:p-3 sm:p-4 md:p-5 border border-white/20"
          >
            <div className="flex items-center gap-2 xs:gap-2 sm:gap-3 md:gap-4 mb-2 xs:mb-2 sm:mb-3 md:mb-4">
              <div className="h-6 xs:h-6 sm:h-8 md:h-10 w-0.5 xs:w-0.5 sm:w-1 md:w-1.5 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full"></div>
              <h2 className="text-base xs:text-base sm:text-lg md:text-xl font-bold text-white font-[Cambria]">About Our School</h2>
            </div>
            <p className="text-white/90 text-xs xs:text-xs sm:text-sm md:text-base leading-relaxed mb-2 xs:mb-2 sm:mb-3 md:mb-4">
              Established in 1995, Kathmandu National School has been a beacon of quality education with state-of-the-art facilities and holistic development approach.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-2 sm:gap-3 md:gap-4">
              {[
                { title: "Academic Excellence", icon: <GraduationCap className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400" /> },
                { title: "Modern Facilities", icon: <BookOpen className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-400" /> },
                { title: "Sports & Activities", icon: <Target className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400" /> },
                { title: "Expert Faculty", icon: <Users className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-red-400" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 xs:gap-1.5 sm:gap-2 md:gap-2.5">
                  <div className="p-1 xs:p-1 sm:p-1.5 md:p-2 rounded-md bg-white/5">
                    {item.icon}
                  </div>
                  <span className="text-white/80 text-xs xs:text-xs sm:text-sm md:text-base">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade - Responsive */}
      <div className="absolute bottom-0 left-0 right-0 h-16 xs:h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
    </section>
  );
};

export default HeroSection;