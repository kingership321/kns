import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// Import background image for overlay
import testimonialBg from '../assets/teachers/assembly.jpg';

// Import testimonial person images (replace with actual images)
import person1 from '../assets/students/std1.jpg';
import person2 from '../assets/students/std2.jpg';
import person3 from '../assets/students/std3.jpg';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Parent of Grade 10 Student",
      content: "Kathmandu National School has provided my child with an exceptional educational experience. The teachers are dedicated, and the holistic approach truly prepares students for real-world challenges.",
      rating: 5,
      image: person1,
      year: "2023"
    },
    {
      id: 2,
      name: "Dr. Sunita Sharma",
      role: "Alumni (Batch 2015)",
      content: "The foundation I received at KNS has been instrumental in my medical career. The school's emphasis on critical thinking and character building goes beyond textbooks.",
      rating: 5,
      image: person2,
      year: "2015"
    },
    {
      id: 3,
      name: "Priya Gurung",
      role: "Parent of Two Students",
      content: "Both my children have flourished at KNS. The balance between academics, sports, and extracurricular activities is remarkable. Teachers genuinely care about each student's development.",
      rating: 5,
      image: person3,
      year: "Present"
    },
  ];

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden rounded-b-4xl">
      {/* Background Image with Overlay - EXACTLY like hero banner */}
      <div className="absolute inset-0 z-0">
        <img 
          src={testimonialBg} 
          alt="Testimonial Background" 
          className="w-full h-full object-cover"
        />
        {/* Blue Overlay - Same as hero */}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/50" />
      </div>
      
      {/* Subtle Pattern Texture - Same as hero */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }} />
      </div>

      <div className="container mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        {/* Section Header - Styled like hero motto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 lg:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4 flex-col sm:flex-row">
            <div className="hidden sm:block h-px w-6 md:w-10 bg-white/50" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white font-[Cambria]">
              Voices of Our Community
            </h2>
            <div className="hidden sm:block h-px w-6 md:w-10 bg-white/50" />
          </div>
        </motion.div>

        {/* Testimonials Grid - Using hero's card styling */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Card styled EXACTLY like hero cards */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-white/30 transition-all duration-300 h-full">
                {/* Quote Icon and Stars - Hero style */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  {/* Year Badge - Hero style */}
                  <div className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md border border-white/20">
                    <span className="text-xs font-semibold text-white">
                      {testimonial.year}
                    </span>
                  </div>
                </div>

                {/* Content with hero text styling */}
                <div className="mb-6">
                  <p className="text-white/90 text-sm lg:text-base leading-relaxed italic font-serif">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author Info with Circular Image - Enhanced styling */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                  {/* Circular Image Container */}
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/30 to-blue-500/30 rounded-full blur-sm"></div>
                    
                    {/* Circular Image */}
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/30">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Verified Badge */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-red-500 rounded-full border border-white/80 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Name and Role */}
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-white font-[Cambria]">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/80 text-xs">
                      {testimonial.role}
                    </p>
                    
                    {/* Accent Bar like hero */}
                    <div className="h-0.5 w-10 bg-red-500 rounded-full mt-1.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - With hero gradient overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 lg:mt-16"
        >
          {/* Background with hero's overlay style */}
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
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade - EXACTLY like hero */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
};

export default TestimonialSection;