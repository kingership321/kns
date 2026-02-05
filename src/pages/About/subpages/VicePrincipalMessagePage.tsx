import { motion } from 'framer-motion';
import { Heart, Target, Users, BookOpen, Music, Brain, Shield, Award, Sparkles } from 'lucide-react';

// Import vice principal image
import vicePrincipalImage from '../../../assets/students/std2.jpg';

const VicePrincipalMessagePage = () => {
  const values = [
    {
      icon: Heart,
      title: "Value-Based Education",
      description: "Valuing everyone irrespective of age, position, race, or background"
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Every child and adult feels valued, happy, and respected"
    },
    {
      icon: BookOpen,
      title: "Balanced Curriculum",
      description: "Broad curriculum that includes creative and physical education"
    },
    {
      icon: Music,
      title: "Holistic Development",
      description: "Nurturing different facets through arts, sports, and academics"
    },
    {
      icon: Brain,
      title: "Mental & Physical Growth",
      description: "Developing both cognitive abilities and physical well-being"
    },
    {
      icon: Sparkles,
      title: "Modern Teaching",
      description: "Upgraded teaching tools and techniques for effortless learning"
    }
  ];

  const testimonials = [
    {
      quote: "The balance between academics and extracurriculars at KNS has helped my child discover hidden talents.",
      author: "Parent of Grade 9 Student"
    },
    {
      quote: "Our teachers go beyond textbooks to make learning engaging and effortless for every student.",
      author: "Class Teacher"
    },
    {
      quote: "At KNS, every student is valued and encouraged to explore their true potential.",
      author: "Alumni (Batch 2018)"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Same as home page */}
      <section className="relative py-10 lg:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={vicePrincipalImage}
            alt="Vice Principal Sushma K.C. (Karki)" 
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
              Vice Principal's Message
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
              Nurturing Holistic Growth in a Value-Driven Environment
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content */}
      <section className="relative py-10 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-5 lg:px-6">
          {/* Message Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-lg p-4 lg:p-6 border border-gray-200 shadow-md mb-10 lg:mb-12 w-3/5 mx-auto">
              {/* Signature Card */}
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border border-primary/20">
                  <img 
                    src={vicePrincipalImage}
                    alt="Sushma K.C. (Karki)"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-[Cambria] mb-1.5">
                  Sushma K.C. (Karki)
                </h3>
                <p className="text-primary font-semibold text-sm mb-3">Vice Principal</p>
                <div className="h-px w-20 bg-primary/30 mx-auto"></div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-0.5 bg-red-500 rounded-full"></div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Value-Based Education
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-700 text-sm lg:text-base leading-relaxed">
                <p className="text-base font-serif italic text-primary border-l-4 border-primary pl-3 py-1.5">
                  Kathmandu National School (KNS) is a value-based and value-driven school.
                </p>
                
                <p>
                  <span className="font-semibold text-primary">We aspire to value everyone irrespective of age, position, race, gender, background or ability </span>
                  and teach the same to our students. We motivate, support and inspire personal, spiritual, emotional and educational growth in a safe and secure environment.                            
                </p>
                
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-4">
                  <p className="font-serif italic text-gray-700 text-sm">
                    "As such we want all those who become part of our school family, whether a child or an adult, to feel valued, happy, respected and recognize their role in continuing to make our school outstanding."
                  </p>
                </div>
              </div>

              <div className="text-center pt-6 mt-6 border-t border-gray-100">
                <p className="text-gray-600 text-xs italic mb-3">
                  With all good wishes,
                </p>
                <div className="relative">
                  <div className="font-[Cambria] text-gray-800 text-base font-bold">
                    Sushma K.C. (Karki)
                  </div>
                  <div className="text-gray-500 text-xs">Vice Principal</div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-gray-600 text-xs">
                      Kathmandu National School
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Grid Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-10 lg:mb-12"
          >
            <div className="bg-white rounded-lg p-4 lg:p-6 border border-gray-200 shadow-md">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-px w-10 bg-primary/50" />
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                    Our Core Values
                  </h3>
                  <div className="h-px w-10 bg-primary/50" />
                </div>
                <p className="text-gray-600 text-base font-serif italic max-w-2xl mx-auto">
                  The principles that guide our educational philosophy and daily practice
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-base mb-1.5">{value.title}</h4>
                      <p className="text-gray-600 text-xs">{value.description}</p>
                      <div className="h-0.5 w-10 bg-red-500 rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Community Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
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
                      The KNS Community Experience
                    </h3>
                    <div className="h-px w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-base font-serif italic max-w-2xl mx-auto">
                    Where every member of our school family feels valued and inspired
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Safe Environment</h4>
                    <p className="text-white/80 text-xs">
                      A secure space for personal, spiritual, and educational growth
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">True Potential</h4>
                    <p className="text-white/80 text-xs">
                      Helping each child explore and realize their unique capabilities
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Outstanding School</h4>
                    <p className="text-white/80 text-xs">
                      Each member contributes to making our school truly outstanding
                    </p>
                  </div>
                </div>
                
                {/* Testimonials */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h4 className="text-center text-lg font-bold text-white mb-4 font-[Cambria]">
                    What Our Community Says
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <p className="text-white/90 text-xs italic mb-2">"{testimonial.quote}"</p>
                        <div className="h-px w-6 bg-white/30 my-1.5"></div>
                        <p className="text-white text-xs font-semibold">{testimonial.author}</p>
                      </div>
                    ))}
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

export default VicePrincipalMessagePage;