// Import images
import sara1 from '../assets/saraswati-puja/Saraswati-Puja1.jpg';
import sara2 from '../assets/saraswati-puja/Saraswati-Puja2.jpg';
import sara3 from '../assets/saraswati-puja/Saraswati-Puja3.jpg';
import ann1 from '../assets/annual-day/annual-day1.jpg';

import { motion } from 'framer-motion';

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      image: sara1,
      title: "Annual Sports Day",
      description: "Students showcasing their athletic talents and team spirit",
      category: "Events"
    },
    {
      id: 2,
      image: sara2,
      title: "Science Exhibition",
      description: "Young innovators presenting their scientific projects",
      category: "Academics"
    },
    {
      id: 3,
      image: sara3,
      title: "Cultural Program",
      description: "Celebrating diversity through dance and music performances",
      category: "Cultural"
    },
    {
      id: 4,
      image: ann1,
      title: "Campus Facilities",
      description: "Modern infrastructure for holistic learning environment",
      category: "Campus"
    }
  ];

  return (
    <section className="relative py-12 lg:py-16 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23000000'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }} />
      </div>

      {/* Section Header */}
      <div className="container mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 lg:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4 flex-col sm:flex-row">
            <div className="hidden sm:block h-px w-6 md:w-10 bg-primary/50" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-blue font-[Cambria]">
              Our Gallery
            </h2>
            <div className="hidden sm:block h-px w-6 md:w-10 bg-primary/50" />
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-md">
                    {item.category}
                  </span>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content Card */}
              <div className="p-4 lg:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-6 w-0.5 bg-red-500 rounded-full"></div>
                  <h3 className="text-base lg:text-lg font-bold text-gray-900 font-[Cambria]">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent -z-10" />
    </section>
  );
};

export default GallerySection;