import { motion } from 'framer-motion';
import { Folder, ChevronLeft, Image as ImageIcon, Calendar, Clock, MapPin, Users, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useRef } from 'react';
import QuickLinksSection from '../../components/LinksSection';

// Import gallery images (you'll replace these with your actual images)
import galleryBanner from '../../assets/annual-day/annual-day1.jpg';
import event1Image from '../../assets/annual-day/annual-day2.jpg';
import event2Image from '../../assets/annual-day/annual-day3.jpg';
import event3Image from '../../assets/annual-day/annual-day4.jpg';
import event4Image from '../../assets/annual-day/annual-day5.jpg';
import event5Image from '../../assets/annual-day/annual-day6.jpg';
import event6Image from '../../assets/Montessori/prize1.jpg';

// Sample event images for gallery display
const sampleEventImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524178239883-269a632bb546?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524178239883-269a632bb546?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
];

const GalleryPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedFilters, setExpandedFilters] = useState(false);

  // Event categories
  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'academic', name: 'Academic', color: 'bg-blue-500' },
    { id: 'cultural', name: 'Cultural', color: 'bg-purple-500' },
    { id: 'sports', name: 'Sports', color: 'bg-green-500' },
    { id: 'celebration', name: 'Celebrations', color: 'bg-red-500' },
    { id: 'field', name: 'Field Trips', color: 'bg-yellow-500' }
  ];

  // Event folders data
  const events = [
    {
      id: 1,
      title: "Annual Day Celebration 2023",
      description: "The grand celebration of our school's foundation with cultural performances and award ceremonies",
      date: "2023-11-15",
      time: "4:00 PM - 7:00 PM",
      location: "School Auditorium",
      category: "celebration",
      images: sampleEventImages.slice(0, 12),
      coverImage: event1Image,
      featured: true,
      photoCount: 24,
      participants: "All students and staff"
    },
    {
      id: 2,
      title: "Sports Day Competition",
      description: "Annual inter-house sports competition showcasing athletic talents of our students",
      date: "2023-10-05",
      time: "9:00 AM - 4:00 PM",
      location: "School Ground",
      category: "sports",
      images: sampleEventImages.slice(2, 10),
      coverImage: event2Image,
      featured: true,
      photoCount: 18,
      participants: "Classes 6-12"
    },
    {
      id: 3,
      title: "Cultural Fest 2023",
      description: "Showcasing diverse cultural heritage through music, dance, and art performances",
      date: "2023-09-20",
      time: "3:00 PM - 6:00 PM",
      location: "School Cultural Hall",
      category: "cultural",
      images: sampleEventImages.slice(1, 9),
      coverImage: event3Image,
      photoCount: 32,
      participants: "All grades"
    },
    {
      id: 4,
      title: "Science Exhibition",
      description: "Innovative projects and experiments presented by our young scientists",
      date: "2023-08-18",
      time: "10:00 AM - 3:00 PM",
      location: "Science Block",
      category: "academic",
      images: sampleEventImages.slice(3, 11),
      coverImage: event4Image,
      photoCount: 21,
      participants: "Science Club Members"
    },
    {
      id: 5,
      title: "Graduation Ceremony",
      description: "Farewell ceremony for our graduating class with honors and awards",
      date: "2023-07-30",
      time: "2:00 PM - 5:00 PM",
      location: "Main Hall",
      category: "celebration",
      images: sampleEventImages.slice(0, 8),
      coverImage: event5Image,
      photoCount: 28,
      participants: "Grade 12 Students"
    },
    {
      id: 6,
      title: "Educational Field Trip",
      description: "Visit to historical sites and museums for practical learning experience",
      date: "2023-06-12",
      time: "8:00 AM - 4:00 PM",
      location: "Patan Museum",
      category: "field",
      images: sampleEventImages.slice(4, 12),
      coverImage: event6Image,
      photoCount: 15,
      participants: "Class 9 Students"
    },
    {
      id: 7,
      title: "Teachers' Day Celebration",
      description: "Students expressing gratitude to teachers through performances and gifts",
      date: "2023-05-28",
      time: "11:00 AM - 2:00 PM",
      location: "School Auditorium",
      category: "celebration",
      images: sampleEventImages.slice(2, 10),
      coverImage: event1Image,
      photoCount: 19,
      participants: "All teachers and students"
    },
    {
      id: 8,
      title: "Math Olympiad Winners",
      description: "Celebrating our students' achievements in national mathematics competition",
      date: "2023-04-10",
      time: "10:00 AM - 12:00 PM",
      location: "Principal's Office",
      category: "academic",
      images: sampleEventImages.slice(1, 7),
      coverImage: event2Image,
      photoCount: 12,
      participants: "Math Club"
    }
  ];

  // Filter events based on search and category
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || event.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle event folder click
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    // Scroll to top when viewing images
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle back to folders
  const handleBackToFolders = () => {
    setSelectedEvent(null);
    setSelectedImage(null);
  };

  // Handle image click for larger view
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get category color
  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'bg-primary';
  };

  // Get category name
  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Event';
  };

  // Toggle filters on mobile
  const toggleFilters = () => {
    setExpandedFilters(!expandedFilters);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Optimized for Mobile */}
      <section className="relative py-6 sm:py-8 lg:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={galleryBanner}
            alt="KNS Gallery - School Events & Activities" 
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
            <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-[Cambria] mb-3 sm:mb-4">
              School Gallery
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
              Capturing Memories of Our School Events & Activities
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content - Mobile Optimized */}
      <section className="relative py-6 sm:py-8 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          {/* Back Button (Visible only when viewing event images) */}
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <button
                onClick={handleBackToFolders}
                className="flex items-center gap-1 px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 text-sm"
              >
                <ChevronLeft className="w-3 h-3" />
                Back to Events
              </button>
            </motion.div>
          )}

          {/* Event Images View */}
          {selectedEvent ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Event Header - Mobile Optimized */}
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-5 lg:p-6 mb-6 border border-white/20 backdrop-blur-sm">
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-0.5 bg-red-500 rounded-full"></div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-[Cambria]">
                      {selectedEvent.title}
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-white/90 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{formatDate(selectedEvent.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs">{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs">{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span className="text-xs">{selectedEvent.participants}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
                    <div className="flex items-center gap-1 text-white">
                      <ImageIcon className="w-3 h-3" />
                      <span className="font-bold text-xs">{selectedEvent.images.length}</span>
                      <span className="text-xs">photos</span>
                    </div>
                  </div>
                  <div className={`px-2 py-0.5 rounded text-white text-xs font-medium ${getCategoryColor(selectedEvent.category)}`}>
                    {getCategoryName(selectedEvent.category)}
                  </div>
                </div>
                
                <p className="text-white/90 mt-3 text-xs sm:text-sm leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Images Grid - Mobile Optimized */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 font-[Cambria]">
                    Event Photos
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Tap to view larger
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                  {selectedEvent.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group"
                    >
                      <div 
                        className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-1 hover:border-primary/30"
                        onClick={() => handleImageClick(image)}
                      >
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${selectedEvent.title} - Photo ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-1 left-1 text-white text-xs">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Event Details Card - Mobile Optimized */}
              <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-6 w-0.5 bg-primary rounded-full"></div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 font-[Cambria]">
                    Event Details
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">Description</h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      {selectedEvent.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">Highlights</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1"></div>
                        <span className="text-gray-700 text-xs sm:text-sm">Documented in {selectedEvent.images.length} photographs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1"></div>
                        <span className="text-gray-700 text-xs sm:text-sm">Held at {selectedEvent.location}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1"></div>
                        <span className="text-gray-700 text-xs sm:text-sm">Featured {selectedEvent.participants}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-3 border border-primary/20">
                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-2">Quick Facts</h4>
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs">Date:</span>
                        <span className="font-medium text-gray-900 text-xs sm:text-sm">{formatDate(selectedEvent.date)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs">Time:</span>
                        <span className="font-medium text-gray-900 text-xs sm:text-sm">{selectedEvent.time}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs">Location:</span>
                        <span className="font-medium text-gray-900 text-xs sm:text-sm">{selectedEvent.location}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs">Category:</span>
                        <span className={`px-1.5 py-0.5 rounded text-xs font-medium text-white ${getCategoryColor(selectedEvent.category)}`}>
                          {getCategoryName(selectedEvent.category)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      onClick={handleBackToFolders}
                      className="px-4 py-1.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 text-xs sm:text-sm"
                    >
                      Browse All Events
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Event Folders View - Mobile Optimized */
            <>
              {/* Mobile: Accordion for Filters */}
              <div className="block lg:hidden mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-6 w-0.5 bg-red-500 rounded-full"></div>
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-[Cambria]">
                        Event Folders
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 text-xs sm:text-sm mb-3">
                      Browse through our collection of school events and activities. Click on any folder to view photos.
                    </p>

                    {/* Mobile Search Bar */}
                    <div className="relative mb-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search events..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-9 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-xs"
                        />
                      </div>
                    </div>

                    {/* Mobile Filters Accordion */}
                    <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                      <button
                        onClick={toggleFilters}
                        className="w-full p-2 flex items-center justify-between hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-primary/10 rounded flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          </div>
                          <span className="font-medium text-gray-900 text-xs">Filter by Category</span>
                        </div>
                        {expandedFilters ? (
                          <ChevronUp className="w-3 h-3 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-3 h-3 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedFilters ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-2 pt-0">
                          <div className="flex flex-wrap gap-1">
                            {categories.map((category) => (
                              <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-2 py-1 rounded text-xs transition-all duration-200 ${
                                  activeCategory === category.id 
                                    ? `${category.id === 'all' ? 'bg-primary text-white' : category.color + ' text-white'}` 
                                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                                }`}
                              >
                                {category.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Stats */}
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <div className="bg-primary/5 rounded-lg p-2 border border-primary/10">
                        <div className="text-base font-bold text-primary mb-0.5">{events.length}</div>
                        <div className="text-gray-600 text-xs">Total Events</div>
                      </div>
                      <div className="bg-green-500/5 rounded-lg p-2 border border-green-500/10">
                        <div className="text-base font-bold text-green-600 mb-0.5">
                          {events.reduce((acc, event) => acc + event.images.length, 0)}
                        </div>
                        <div className="text-gray-600 text-xs">Total Photos</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Event Folders Grid */}
                <div className="space-y-3">
                  {filteredEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5 }}
                      className="group"
                    >
                      <div 
                        className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                        onClick={() => handleEventClick(event)}
                      >
                        {/* Folder Header */}
                        <div className="relative h-32 overflow-hidden">
                          <img 
                            src={event.coverImage} 
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                            <div className="absolute top-1.5 right-1.5">
                              <div className={`px-1.5 py-0.5 rounded text-xs font-medium text-white ${getCategoryColor(event.category)}`}>
                                {getCategoryName(event.category)}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Folder Content */}
                        <div className="p-3">
                          <div className="flex items-start justify-between mb-1.5">
                            <h3 className="font-bold text-gray-900 text-sm flex-1 line-clamp-2">
                              {event.title}
                            </h3>
                            <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 ml-2">
                              <Folder className="w-4 h-4 text-primary" />
                            </div>
                          </div>
                          
                          <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                            {event.description}
                          </p>
                          
                          <div className="flex items-center justify-between text-gray-500 text-xs">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(event.date)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ImageIcon className="w-3 h-3" />
                              <span>{event.photoCount}</span>
                            </div>
                          </div>
                          
                          <div className="mt-2 pt-2 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-primary font-medium text-xs">
                                Tap to View Photos
                              </span>
                              <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                <ChevronLeft className="w-2.5 h-2.5 text-primary transform rotate-180" />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Accent Border */}
                        <div className="h-0.5 w-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile No Results */}
                {filteredEvents.length === 0 && (
                  <div className="text-center py-6">
                    <Folder className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <h3 className="text-sm font-bold text-gray-700 mb-1">No Events Found</h3>
                    <p className="text-gray-600 text-xs mb-3">
                      Try adjusting your search or filters
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('all');
                      }}
                      className="px-3 py-1 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 text-xs"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Desktop: Two Column Layout */}
              <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Filters & Search */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-8 w-0.5 bg-red-500 rounded-full"></div>
                      <h2 className="text-2xl font-bold text-gray-900 font-[Cambria]">
                        Event Folders
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 text-base mb-4">
                      Browse through our collection of school events and activities. Click on any folder to view photos.
                    </p>

                    {/* Search Bar */}
                    <div className="relative mb-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search events..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm"
                        />
                      </div>
                    </div>

                    {/* Category Filters */}
                    <div className="mb-4">
                      <h3 className="font-bold text-gray-900 text-sm mb-3">Filter by Category</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-3 py-1.5 rounded-md transition-all duration-300 text-sm ${activeCategory === category.id ? `${category.color} text-white` : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                        <div className="text-lg font-bold text-primary mb-1">{events.length}</div>
                        <div className="text-gray-600 text-xs">Total Events</div>
                      </div>
                      <div className="bg-green-500/5 rounded-lg p-3 border border-green-500/10">
                        <div className="text-lg font-bold text-green-600 mb-1">
                          {events.reduce((acc, event) => acc + event.images.length, 0)}
                        </div>
                        <div className="text-gray-600 text-xs">Total Photos</div>
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-6 border border-white/20 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <ImageIcon className="w-5 h-5 text-white" />
                      <h3 className="text-xl font-bold text-white font-[Cambria]">
                        Preserving School Memories
                      </h3>
                    </div>
                    
                    <p className="text-white/90 text-sm mb-3">
                      Our gallery captures the vibrant life at Kathmandu National School - from academic achievements to cultural celebrations, sports events to field trips. Each photo tells a story of learning, growth, and community.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                        <div className="text-white font-bold text-base mb-0.5">{events.length}</div>
                        <div className="text-white/80 text-xs">School Events</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                        <div className="text-white font-bold text-base mb-0.5">
                          {events.reduce((acc, event) => acc + event.images.length, 0)}
                        </div>
                        <div className="text-white/80 text-xs">Total Photos</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Event Folders Grid */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  {filteredEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <div 
                        className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer h-full hover:border-1 hover:border-primary/30"
                        onClick={() => handleEventClick(event)}
                      >
                        {/* Folder Header */}
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={event.coverImage} 
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                            <div className="absolute top-2 right-2">
                              <div className={`px-1.5 py-0.5 rounded text-xs font-medium text-white ${getCategoryColor(event.category)}`}>
                                {getCategoryName(event.category)}
                              </div>
                            </div>
                            {event.featured && (
                              <div className="absolute top-2 left-2">
                                <div className="px-1.5 py-0.5 rounded text-xs font-medium bg-red-500 text-white">
                                  Featured
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="absolute bottom-2 left-2">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                              <Folder className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Folder Content */}
                        <div className="p-4">
                          <h3 className="font-bold text-gray-900 text-base mb-2 line-clamp-2">
                            {event.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {event.description}
                          </p>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1 text-gray-500 text-xs">
                                <Calendar className="w-3 h-3" />
                                {formatDate(event.date)}
                              </div>
                              <div className="flex items-center gap-1 text-gray-500 text-xs">
                                <ImageIcon className="w-3 h-3" />
                                {event.photoCount}
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-1 text-gray-500 text-xs">
                              <MapPin className="w-3 h-3" />
                              <span className="truncate">{event.location}</span>
                            </div>
                          </div>
                          
                          {/* View Button */}
                          <div className="mt-4 pt-3 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-primary font-medium text-xs">
                                Click to View Photos
                              </span>
                              <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                <ChevronLeft className="w-3 h-3 text-primary transform rotate-180" />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Accent Border */}
                        <div className="h-0.5 w-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </motion.div>
                  ))}

                  {/* No Results - Desktop */}
                  {filteredEvents.length === 0 && (
                    <div className="text-center py-8">
                      <Folder className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-gray-700 mb-1">No Events Found</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        No events match your search criteria. Try adjusting your filters.
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setActiveCategory('all');
                        }}
                        className="px-4 py-1.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm"
                      >
                        Reset Filters
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>
            </>
          )}
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-3 sm:opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23006699'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }} />
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img 
                src={selectedImage} 
                alt="Enlarged view"
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute -top-8 right-0 text-white hover:text-gray-300 transition-colors duration-300 text-sm"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </section>
      <QuickLinksSection />
    </div>
  );
};

export default GalleryPage;