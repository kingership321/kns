import { motion } from 'framer-motion';
import QuickLinksSection from '../../../components/LinksSection';

// Import vice principal image
import vicePrincipalImage from '../../../assets/kamal-adhikari-principal1.jpeg';

const VicePrincipalMessagePage = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Optimized for Mobile */}
      <section className="relative py-6 sm:py-8 lg:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={vicePrincipalImage}
            alt="Vice Principal Kamal Prasad Adhikari" 
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
{/* Profile Image with Double Rings */}
<div className="text-center mb-4">
  {/* Image Container with Two Rings */}
  <div className="relative w-70 h-70 sm:w-50 sm:h-50 md:w-80 md:h-80 mx-auto mb-4 group">
    {/* Outer Blue Ring */}
    <div className="absolute -inset-2.5 rounded-full border-8 border-blue-800"></div>
    
    {/* Inner Red Ring */}
    <div className="absolute -inset-1 rounded-full border-6 border-red-600"></div>
    
    {/* Main Image Container */}
    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
      <img 
        src={vicePrincipalImage}
        alt="Kamal Prasad Adhikari"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
  
  <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-display mb-1">
    Kamal Prasad Adhikari
  </h3>
  <p className="text-primary font-semibold text-sm sm:text-sm mb-2">Vice Principal</p>
  <div className="inline-block px-2.5 py-0.5 bg-primary/80 backdrop-blur-sm rounded-full border border-white/20 mb-3">
    <span className="text-white text-xs xs:text-xs sm:text-xs mb-3">M.Phil. Graduate</span>
  </div>
  <div className="h-px w-16 sm:w-20 bg-red-500/50 mx-auto mb-4"></div>
</div>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-6 w-0.5 bg-red-500 rounded-full"></div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-display">
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
                  <p>
                    We have a broad and balanced curriculum, which our children are able to access. With the aim that the students receive the highest standard of education, we've fully included the creative and physical areas of the National curriculum.
                  </p>
                  <p>
                    Along with the academic programmes, we seek to develop and nurture the different facets of a child with the ECAs like dance, theatre, music, fine arts and a variety of sports. We focus on developing both the mental and physical abilities of a student. Thus, providing holistic grooming to the students, where the child can explore his/her true potential.
                  </p>
                  <p>
                    Besides the usual procedural teaching, we persistently upgrade and update our teaching tools and techniques, and we foster a healthy teacher-student relationship where we work around making studies as effortless as possible.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border border-primary/20 mt-3">
                    <p className="font-serif italic text-gray-700 text-xs sm:text-sm">
"We look forward to welcoming you and your children to our school."
                    </p>
                  </div>
                </div>
                
                {/* Signature - Mobile */}
                <div className="text-center pt-4 mt-4 border-t border-gray-100">
                  <p className="text-gray-600 text-xs italic mb-2">
                    With all good wishes,
                  </p>
                  <div className="font-display text-gray-800 text-sm font-bold">
                    Kamal Prasad Adhikari
                  </div>
                  <div className="text-gray-500 text-xs">Vice Principal</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid grid-cols-1 gap-8 lg:gap-12">
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
{/* Profile Image with Double Rings - More Prominent */}
<div className="text-center mb-6">
  {/* Image Container with Two Rings */}
  <div className="relative w-100 h-100 mx-auto mb-6 group">
    {/* Outer Golden Ring - Thicker */}
    <div className="absolute -inset-2.5 rounded-full border-8 border-blue-800"></div>
    
    {/* Inner Red Ring - Thicker */}
    <div className="absolute -inset-1 rounded-full border-6 border-red-600"></div>
    
    {/* Main Image Container */}
    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
      <img 
        src={vicePrincipalImage}
        alt="Kamal Prasad Adhikari"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
  
  <h3 className="text-2xl font-bold text-gray-900 font-display mb-1">
    Kamal Prasad Adhikari
  </h3>
  <p className="text-primary font-semibold text-base mb-3">Vice Principal</p>
  <div className="inline-block px-2.5 py-0.5 bg-primary/80 backdrop-blur-sm rounded-full border border-white/20 mb-3">
    <span className="text-white text-xs xs:text-xs sm:text-xs mb-3">M.Phil. Graduate</span>
  </div>
  <div className="h-px w-24 bg-red-500/50 mx-auto mb-6"></div>
</div>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-red-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900 font-display">
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
                  <p>
                    We have a broad and balanced curriculum, which our children are able to access. With the aim that the students receive the highest standard of education, we've fully included the creative and physical areas of the National curriculum.
                  </p>
                  <p>
                    Along with the academic programmes, we seek to develop and nurture the different facets of a child with the ECAs like dance, theatre, music, fine arts and a variety of sports. We focus on developing both the mental and physical abilities of a student. Thus, providing holistic grooming to the students, where the child can explore his/her true potential.
                  </p>
                  <p>
                    Besides the usual procedural teaching, we persistently upgrade and update our teaching tools and techniques, and we foster a healthy teacher-student relationship where we work around making studies as effortless as possible.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border border-primary/20 mt-3 mx-auto max-w-md">
                    <p className="font-serif italic text-gray-700 text-xs sm:text-sm">
"We look forward to welcoming you and your children to our school."
                    </p>
                  </div>
                </div>
                
                {/* Signature - Desktop */}
                <div className="text-center pt-6 mt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-sm italic mb-3">
                    With all good wishes,
                  </p>
                  <div className="relative">
                    <div className="font-display text-gray-800 text-lg font-bold">
                      Kamal Prasad Adhikari
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
          </div>
        </div>
                    <QuickLinksSection />

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

