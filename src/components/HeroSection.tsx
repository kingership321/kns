import { motion } from 'framer-motion';
import { Quote, Award, Users, GraduationCap, Star, Target, BookOpen } from 'lucide-react';

// Import images
import fac1 from '../assets/teachers/assembly.jpg';
import principalPhoto from '../assets/Montessori/prize1.jpg'; // Add principal photo
import chairmanPhoto from '../assets/Montessori/prize2.jpg'; // Add chairman photo

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
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-white/10 backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [20, 0, 20] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-white/5 backdrop-blur-sm"
        />
        <motion.div
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm"
        />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 xl:gap-14 py-10 lg:py-0">
          
          {/* Left Column - Principal's Message (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block lg:w-1/4 xl:w-1/3"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-xl">
              {/* Principal Photo */}
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 mx-auto">
                  <img 
                    src={principalPhoto}
                    alt="Principal Anju Thapa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap">
                  Principal
                </div>
              </div>
              
              {/* Message */}
              <div className="text-center">
                <Quote className="w-6 h-6 text-white/60 mx-auto mb-2" />
                <p className="text-white/90 text-xs leading-relaxed mb-2 italic">
                  It's my fortune to welcome you in Kathmandu National School (KNS). Our students say that KNS is not only a school for them but it is also their home away from parental home. In this sense it is an academic shrine where our students are found to be so happy and confident to lead them to be the future leaders of the country. We attempt our level best to model our young angles to stand for the country by endeavoring with perseverance and overcoming challenges in the globe. We receive supreme satisfaction from our products. We believe in our products as they are the ones who think spiritually, speak truly and perform kindly towards those who deserve the doctrine of perfect human beings.
                </p>
                <p className="text-white/90 text-xs leading-relaxed mb-2 italic">At the KNS we take our responsibility to find what is exceptional in students very seriously. The experience that we have prepared for them here gives every student an all-round education built on a foundation of service, adventure, sports, creative arts and academics.</p>
                <p className="text-white/90 text-xs leading-relaxed mb-2 italic">Now, we have been advancing in delivery system of education with modern mechanism and tools at KNS where every child is valued. We always maintain our services sophisticated with an affordable cost. That's why it is KNS where once guardians visit, they then feel the difference.</p>
                <div className="pt-2 border-t border-white/20">
                  <h3 className="text-base font-bold text-white font-[Cambria] mb-0.5">Anju Thapa</h3>
                  <p className="text-white/80 text-xs">Principal</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Center Column - Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 xl:w-1/3 text-center"
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-4 lg:mb-6"
            >
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-white font-serif text-base lg:text-lg tracking-widest">
                  WELCOME TO
                </span>
              </div>
            </motion.div>

            {/* School Name */}
            <div className="mb-4 lg:mb-6">
              <h1 className="font-bold leading-none tracking-tight">
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-600 font-[Cambria] [-webkit-text-stroke:1px_white] sm:[-webkit-text-stroke:1.5px_white] lg:[-webkit-text-stroke:2px_white] mb-1 lg:mb-2">
                  KATHMANDU
                </span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-[Cambria] tracking-wider">
                  NATIONAL SCHOOL
                </span>
              </h1>
            </div>

            {/* Motto */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mb-6 lg:mb-8"
            >
              <div className="flex items-center justify-center gap-2 lg:gap-4">
                <div className="h-px w-6 sm:w-8 lg:w-12 bg-gradient-to-r from-transparent to-white/30" />
                <p className="text-sm sm:text-base lg:text-lg text-white/95 italic tracking-wide font-serif leading-relaxed">
                  Education · Civilization · Humanization
                </p>
                <div className="h-px w-6 sm:w-8 lg:w-12 bg-gradient-to-l from-transparent to-white/30" />
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-md mx-auto"
            >
              {[
                { value: "45+", label: "Years", icon: Award, color: "text-blue-400" },
                { value: "1500+", label: "Students", icon: Users, color: "text-green-400" },
                { value: "100%", label: "SEE Results", icon: GraduationCap, color: "text-yellow-400" },
                { value: "50+", label: "Faculty", icon: Star, color: "text-red-400" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-block p-1 sm:p-2 rounded-md bg-white/5 mb-1 group-hover:bg-white/10 transition-all duration-300">
                    <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color}`} />
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white mb-0.5">{stat.value}</div>
                  <div className="text-white/80 text-xs sm:text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Column - Chairman's Message (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block lg:w-1/4 xl:w-1/3"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-xl">
              {/* Chairman Photo */}
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 mx-auto">
                  <img 
                    src={chairmanPhoto}
                    alt="Chairman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap">
                  Chairman
                </div>
              </div>
              
              {/* Message */}
              <div className="text-center">
                <Quote className="w-6 h-6 text-white/60 mx-auto mb-2" />
                <p className="text-white/90 text-xs leading-relaxed mb-2 italic">
                  It's our immense pleasure to welcome you in Kathmandu National School (KNS). KNS is the junction of qualified teachers, professionals and students. Since its foundation, it has been imparting quality education that benefits our young children's overall development. We have been preparing versatile, dynamic and energetic human resource to cope up with the challenges of twenty first century. We have been striding ahead with huge academic success. Our tireless effort to impart quality education has been mounting higher ever since we laid our foundation in 1980 AD(2036 BS) which was the beginning of early childhood education at KNS. The tripartite relationships among school, parents and students that promote exchange of critical feedbacks and suggestions from all parties and particularly the parents have helped us to continuously improve the quality of our education and services. We have been developing infrastructures to upgrade this institution to higher level studies and we are optimistic to offer promising higher education in near future.
                </p>
                <p className="text-white/90 text-xs leading-relaxed mb-2 italic">
                  Our approach is interdisciplinary, experimental and progressive. Our students are encouraged not only to focus on textbooks but also to enhance their creativity, analytical skills, and pursue their extra-curricular interest. We toil to create an environment where the good education and values are cultivated in our students to enable them to become responsible individuals. We are happy about the growth we have managed to achieve over the years and look forward to continuing our collaboration with the parents, students and others in the academia to progressively upgrade our institution.
                </p>
                <div className="pt-2 border-t border-white/20">
                  <h3 className="text-base font-bold text-white font-[Cambria] mb-0.5">Rajesh Shrestha</h3>
                  <p className="text-white/80 text-xs">Chairman</p>
                  <p className="text-white/60 text-xs mt-0.5">Ph.D. in Education</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout - Messages below welcome */}
        <div className="lg:hidden mt-6 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Principal's Message - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                  <img 
                    src={principalPhoto}
                    alt="Principal Anju Thapa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-[Cambria]">Anju Thapa</h3>
                  <p className="text-white/80 text-xs">Principal</p>
                  <div className="mt-1">
                    <span className="inline-block bg-red-500/20 text-red-200 px-2 py-0.5 rounded-full text-xs font-medium">
                      Principal
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-white/90 text-xs leading-relaxed mb-2 italic">
                "Our commitment is to provide quality education that shapes character and builds future leaders."
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-white/20">
                <div className="text-white/60 text-xs">25+ Years Experience</div>
                <Quote className="w-4 h-4 text-white/40" />
              </div>
            </motion.div>
            
            {/* Chairman's Message - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                  <img 
                    src={chairmanPhoto}
                    alt="Chairman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-[Cambria]">Rajesh Shrestha</h3>
                  <p className="text-white/80 text-xs">Chairman</p>
                  <div className="mt-1">
                    <span className="inline-block bg-blue-500/20 text-blue-200 px-2 py-0.5 rounded-full text-xs font-medium">
                      Chairman
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-white/90 text-xs leading-relaxed mb-2 italic">
                "We envision an institution that not only imparts knowledge but also instills values in students."
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-white/20">
                <div className="text-white/60 text-xs">Ph.D. in Education</div>
                <Quote className="w-4 h-4 text-white/40" />
              </div>
            </motion.div>
          </div>

          {/* About School - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full"></div>
              <h2 className="text-lg font-bold text-white font-[Cambria]">About Our School</h2>
            </div>
            <p className="text-white/90 text-xs leading-relaxed mb-2">
              Established in 1995, Kathmandu National School has been a beacon of quality education with state-of-the-art facilities and holistic development approach.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { title: "Academic Excellence", icon: <GraduationCap className="w-3 h-3 text-blue-400" /> },
                { title: "Modern Facilities", icon: <BookOpen className="w-3 h-3 text-green-400" /> },
                { title: "Sports & Activities", icon: <Target className="w-3 h-3 text-yellow-400" /> },
                { title: "Expert Faculty", icon: <Users className="w-3 h-3 text-red-400" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="p-1 rounded-md bg-white/5">
                    {item.icon}
                  </div>
                  <span className="text-white/80 text-xs">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
    </section>
  );
};

export default HeroSection;