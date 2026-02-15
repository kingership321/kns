import { motion } from 'framer-motion';

const StatsSection = () => {
  return (
    <section className="relative py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16 overflow-hidden">
      {/* Background Image with Overlay - Matching testimonial style */}
      <div className="absolute inset-0 z-0">
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-primary/100" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/50" />
      </div>
      
      {/* Subtle Pattern Texture - Matching testimonial */}
      <div className="absolute inset-0 z-0 opacity-3 xs:opacity-3 sm:opacity-4 md:opacity-5 lg:opacity-5 xl:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }} />
      </div>

      <div className="container mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14"
        >
          <p className="text-base xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl text-white/90 mb-4 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-8 font-serif italic max-w-xs xs:max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto leading-relaxed xs:leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
            "Education is the most powerful weapon which you can use to change the world."
          </p>
          <p className="text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-bold text-white/95 font-serif">
            - Nelson Mandela
          </p>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade - Matching testimonial */}
      <div className="absolute bottom-0 left-0 right-0 h-12 xs:h-12 sm:h-16 md:h-18 lg:h-20 xl:h-24 2xl:h-28 bg-gradient-to-t from-primary to-transparent" />
      
      {/* Top Gradient Fade for smaller screens */}
      <div className="absolute top-0 left-0 right-0 h-4 xs:h-4 sm:h-6 md:h-8 bg-gradient-to-b from-primary/80 to-transparent lg:hidden" />
    </section>
  );
};

export default StatsSection;

