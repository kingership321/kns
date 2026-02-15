import sara1 from '../assets/saraswati-puja/Saraswati-Puja1.jpg';
import sara2 from '../assets/saraswati-puja/Saraswati-Puja2.jpg';
import sara3 from '../assets/saraswati-puja/Saraswati-Puja3.jpg';
import ann1 from '../assets/annual-day/annual-day1.jpg';

import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  eventId: number;
}

const GallerySection = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullScreen, setShowFullScreen] = useState(false);

  const galleryItems = [
    {
      id: 1,
      image: sara1,
      title: "Annual Sports Day",
      description: "Students showcasing their athletic talents and team spirit",
      category: "Events",
      eventId: 1
    },
    {
      id: 2,
      image: sara2,
      title: "Science Exhibition",
      description: "Young innovators presenting their scientific projects",
      category: "Academics",
      eventId: 2
    },
    {
      id: 3,
      image: sara3,
      title: "Cultural Program",
      description: "Celebrating diversity through dance and music performances",
      category: "Cultural",
      eventId: 3
    },
    {
      id: 4,
      image: ann1,
      title: "Campus Facilities",
      description: "Modern infrastructure for holistic learning environment",
      category: "Campus",
      eventId: 4
    }
  ];

  // Handle card click to navigate to specific event folder
  const handleCardClick = (eventId: number) => {
    navigate(`/gallery/photos/?id=${eventId}`);
  };

  // Handle image click for full-screen view
  const handleImageClick = (e: React.MouseEvent, item: any) => {
    e.stopPropagation(); // Prevent triggering the card click
    setSelectedImage(item);
    setCurrentImageIndex(galleryItems.findIndex(i => i.id === item.id));
    setShowFullScreen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Close full-screen modal
  const closeFullScreen = () => {
    setShowFullScreen(false);
    setSelectedImage(null);
    // Restore body scrolling
    document.body.style.overflow = 'unset';
  };

  // Navigate to next image
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentImageIndex + 1) % galleryItems.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryItems[nextIndex]);
  };

  // Navigate to previous image
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryItems[prevIndex]);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeFullScreen();
    } else if (e.key === 'ArrowRight') {
      nextImage(e as any);
    } else if (e.key === 'ArrowLeft') {
      prevImage(e as any);
    }
  };

  return (
    <section className="relative py-6 sm:py-8 lg:py-12 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-3 sm:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23006699'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }} />
      </div>

      {/* Section Header */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-playfair mb-2 sm:mb-3">
            Our Gallery
          </h2>
          
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="h-px w-6 sm:w-8 md:w-10 bg-primary/50" />
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-serif italic">
              Capturing Memories of Excellence & Innovation
            </p>
            <div className="h-px w-6 sm:w-8 md:w-10 bg-primary/50" />
          </div>
        </motion.div>

        {/* Mobile: Single Column Layout */}
        <div className="block lg:hidden">
          <div className="space-y-3 sm:space-y-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => handleCardClick(item.eventId)}
              >
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:border-primary/30">
                  {/* Image Container with click handler for full screen */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-md">
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* View Full Screen Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => handleImageClick(e, item)}
                          className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5 hover:bg-white transition-colors"
                        >
                          <ZoomIn className="w-3 h-3 text-primary" />
                          <span className="text-primary text-xs font-medium">Full Screen</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="h-4 w-0.5 bg-red-500 rounded-full"></div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 font-playfair">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* View More Link */}
                    <div className="mt-2 flex items-center justify-end">
                      <span className="text-primary text-xs font-medium flex items-center gap-0.5 group-hover:gap-1 transition-all duration-300">
                        View Event Gallery
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="h-0.5 w-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {galleryItems.slice(0, 2).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleCardClick(item.eventId)}
              >
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden hover:border-primary/30">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
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
                    
                    {/* View Full Screen Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => handleImageClick(e, item)}
                        className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-white transition-colors"
                      >
                        <ZoomIn className="w-4 h-4 text-primary" />
                        <span className="text-primary text-sm font-medium">View Full Screen</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-5 w-0.5 bg-red-500 rounded-full"></div>
                      <h3 className="text-lg font-bold text-gray-900 font-playfair">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    
                    {/* View More Link */}
                    <div className="flex items-center justify-end">
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        View Event Gallery
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="h-0.5 w-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Secondary Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {galleryItems.slice(2, 4).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleCardClick(item.eventId)}
              >
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden hover:border-primary/30">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
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
                    
                    {/* View Full Screen Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => handleImageClick(e, item)}
                        className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-white transition-colors"
                      >
                        <ZoomIn className="w-4 h-4 text-primary" />
                        <span className="text-primary text-sm font-medium">View Full Screen</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-5 w-0.5 bg-red-500 rounded-full"></div>
                      <h3 className="text-lg font-bold text-gray-900 font-playfair">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    
                    {/* View More Link */}
                    <div className="flex items-center justify-end">
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        View Event Gallery
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="h-0.5 w-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View All Button - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 sm:mt-8 lg:mt-10 text-center"
        >
          <Link 
            to="/gallery" 
            className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 text-xs sm:text-sm group"
          >
            View Complete Gallery
            <svg 
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-gray-600 text-xs mt-2">
            Explore more photos and videos from school events
          </p>
        </motion.div>
      </div>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {showFullScreen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
            onClick={closeFullScreen}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={closeFullScreen}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="container mx-auto">
                  <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-white/90 text-sm">{selectedImage.description}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-white/80 text-xs">
                      {currentImageIndex + 1} / {galleryItems.length}
                    </span>
                    <span className="text-white/80 text-xs">
                      Category: {selectedImage.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-gray-50 to-transparent -z-10" />
    </section>
  );
};

export default GallerySection;