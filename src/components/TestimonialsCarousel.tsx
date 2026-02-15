import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

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
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Matching Introduction Page */}
      <section className="relative py-6 sm:py-8 lg:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={testimonialBg}
            alt="Testimonial Background" 
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
              Voices of Our Community
            </h1>
            
            {/* Divider like introduction page */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/95 italic tracking-wide font-serif px-1 sm:px-2">
                  Trust · Excellence · Legacy
                </p>
                <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
              </div>
            </motion.div>
            
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-6 font-serif italic">
              Hear from parents, alumni, and students who experienced KNS excellence
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content - Matching Introduction Layout */}
      <section className="relative py-6 sm:py-8 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">

          {/* Testimonials Grid - Using Introduction's Card Design */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Card styled exactly like Introduction's desktop cards */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">


                  {/* Content with Introduction's padding and spacing */}
                  <div className="p-4 sm:p-5 lg:p-6">
                    {/* Quote Icon - Matching Introduction's icon containers */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Quote className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Quote Content - Matching Introduction's text styling */}
                    <div className="mb-4">
                      <p className="text-gray-700 text-sm lg:text-base leading-relaxed italic font-serif mb-3">
                        "{testimonial.content}"
                      </p>
                      
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>

                    {/* Author Info - Enhanced with Introduction's styling */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      {/* Circular Image Container with glow effect */}
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-primary/20 rounded-full blur-sm"></div>
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-300">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Name and Role - Matching Introduction's typography */}
                      <div className="flex-1">
                        <h4 className="text-base font-bold text-gray-900 font-display">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {testimonial.role}
                        </p>
                        {/* Thin accent line */}
                        <div className="h-0.5 w-8 bg-red-500 rounded-full mt-1.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Pattern - Matching Introduction */}
        <div className="absolute inset-0 -z-10 opacity-3 sm:opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23006699'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }} />
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;

