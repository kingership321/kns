import { motion } from 'framer-motion';

const StatsSection = () => {
  return (
    <section className="relative py-8 lg:py-14 overflow-hidden">
      {/* Background Image with Overlay - Matching testimonial style */}
      <div className="absolute inset-0 z-0">
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-primary/100" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/50" />
      </div>
      
      {/* Subtle Pattern Texture - Matching testimonial */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-5 lg:px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 lg:mb-14"
        >
          <p className="text-lg md:text-xl text-white/90 mb-6 font-serif italic max-w-4xl mx-auto leading-relaxed">
            "Education is the most powerful weapon which you can use to change the world."
          </p>
          <p className="text-base font-bold text-white/95 font-serif">
            - Nelson Mandela
          </p>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade - Matching testimonial */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
};

export default StatsSection;