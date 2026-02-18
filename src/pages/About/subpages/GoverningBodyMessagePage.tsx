import { motion } from 'framer-motion';
import QuickLinksSection from '../../../components/LinksSection';

// Import governing body image
import governingBodyImage from '../../../assets/governing-body/governing-2.jpg';

const GoverningBodyMessagePage = () => {

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
                <div className="w-full h-40 sm:h-56 md:h-76 rounded-lg overflow-hidden border border-primary/30 mb-4">
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
                {/* Governing Body Image */}
                <div className="w-auto h-128 rounded-lg overflow-hidden border border-primary/30 mb-4">
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
            </motion.div>
          </div>
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

