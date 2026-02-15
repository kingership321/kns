import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Image, Download, Calendar, ArrowRight } from 'lucide-react';

// Add this section before your footer or at the bottom of your home page

const QuickLinksSection = () => {
  const quickLinks = [
    {
      id: 1,
      title: "Photo Gallery",
      description: "Browse through our collection of memorable moments and events",
      icon: Image,
      path: "/gallery/photos/",
      color: "from-purple-500 to-purple-600",
      lightColor: "from-purple-50 to-purple-100",
      stats: "500+ Photos",
      delay: 0.1
    },
    {
      id: 2,
      title: "Downloads",
      description: "Access study materials, forms, notices, and other resources",
      icon: Download,
      path: "/downloads/",
      color: "from-blue-500 to-blue-600",
      lightColor: "from-blue-50 to-blue-100",
      stats: "All Resources",
      delay: 0.2
    },
    {
      id: 3,
      title: "Calendar",
      description: "Stay updated with school events, holidays, and important dates",
      icon: Calendar,
      path: "/calendar/",
      color: "from-green-500 to-green-600",
      lightColor: "from-green-50 to-green-100",
      stats: "2024-2025",
      delay: 0.3
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-3 sm:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23006699'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-playfair mb-3">
            Quick Access
          </h2>
          
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
            <div className="h-px w-6 sm:w-8 md:w-12 bg-primary/30" />
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-serif italic">
              Explore Resources & Information
            </p>
            <div className="h-px w-6 sm:w-8 md:w-12 bg-primary/30" />
          </div>
        </motion.div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-5xl mx-auto">
          {quickLinks.map((link) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: link.delay }}
              className="group"
            >
              <Link 
                to={link.path}
                className="block h-full"
              >
                <div className="relative h-full bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.lightColor} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative p-5 sm:p-6 flex flex-col h-full">
                    {/* Icon Container */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${link.color} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 font-playfair mb-2 group-hover:text-primary transition-colors duration-300">
                      {link.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                      {link.description}
                    </p>

                    {/* Stats Badge */}
                    <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-100">
                      <span className="text-xs font-medium text-gray-500">
                        {link.stats}
                      </span>
                      <span className="inline-flex items-center gap-1 text-primary text-xs font-medium group-hover:gap-2 transition-all duration-300">
                        Explore
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>

                    {/* Hover Effect Border */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${link.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent transform rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
            <span className="text-gray-600 text-xs sm:text-sm">
              Need help? Visit our
            </span>
            <Link 
              to="/contact" 
              className="text-primary font-medium text-xs sm:text-sm hover:text-primary/80 transition-colors duration-300 underline underline-offset-2"
            >
              Contact Page
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white to-transparent -z-10" />
    </section>
  );
};

export default QuickLinksSection;

