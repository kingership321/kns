import { motion } from 'framer-motion';
import { Folder, ChevronLeft, Video, Calendar, Clock, MapPin, Users, Search, ChevronDown, ChevronUp, Play, Film, Eye } from 'lucide-react';
import { useState, useRef } from 'react';
import QuickLinksSection from '../../components/LinksSection';

// Import gallery banner image
import galleryBanner from '../../assets/annual-day/annual-day1.jpg';

// Sample video thumbnails and video data
const sampleVideoThumbnails = [
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524178239883-269a632bb546?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1501290836518-b38a21c52277?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
];

// Sample video URLs (replace with your actual video URLs)
const sampleVideoUrls = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ"
];

const VideoGalleryPage = () => {
  const [selectedVideoCollection, setSelectedVideoCollection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [expandedFilters, setExpandedFilters] = useState(false);
  const videoRef = useRef(null);

  // Video categories
  const categories = [
    { id: 'all', name: 'All Videos' },
    { id: 'annual', name: 'Annual Day', color: 'bg-red-500' },
    { id: 'sports', name: 'Sports Events', color: 'bg-green-500' },
    { id: 'cultural', name: 'Cultural Programs', color: 'bg-purple-500' },
    { id: 'academic', name: 'Academic', color: 'bg-blue-500' },
    { id: 'assembly', name: 'Assembly', color: 'bg-yellow-500' },
    { id: 'trip', name: 'Field Trips', color: 'bg-indigo-500' }
  ];

  // Video collections data
  const videoCollections = [
    {
      id: 1,
      title: "Annual Day Celebration 2023",
      description: "Full coverage of our grand annual day celebration featuring cultural performances, award ceremonies, and memorable moments",
      date: "2023-11-15",
      duration: "45:30",
      location: "School Auditorium",
      category: "annual",
      videos: sampleVideoUrls.slice(0, 4),
      thumbnails: sampleVideoThumbnails.slice(0, 4),
      coverThumbnail: sampleVideoThumbnails[0],
      featured: true,
      videoCount: 4,
      participants: "All students and staff",
      views: 1245,
      highlights: [
        "Welcome speech by Principal",
        "Grade 10 cultural dance",
        "Award ceremony highlights",
        "Farewell performance"
      ]
    },
    {
      id: 2,
      title: "Sports Day Competition 2023",
      description: "Highlights from the annual sports day featuring track events, team competitions, and victory celebrations",
      date: "2023-10-05",
      duration: "28:15",
      location: "School Ground",
      category: "sports",
      videos: sampleVideoUrls.slice(1, 5),
      thumbnails: sampleVideoThumbnails.slice(1, 5),
      coverThumbnail: sampleVideoThumbnails[1],
      featured: true,
      videoCount: 4,
      participants: "Classes 6-12",
      views: 892,
      highlights: [
        "100m sprint finals",
        "Relay race",
        "Long jump competition",
        "Prize distribution"
      ]
    },
    {
      id: 3,
      title: "Cultural Fest 2023",
      description: "Showcasing diverse cultural heritage through music, dance, and theatrical performances by our talented students",
      date: "2023-09-20",
      duration: "52:20",
      location: "School Cultural Hall",
      category: "cultural",
      videos: sampleVideoUrls.slice(2, 6),
      thumbnails: sampleVideoThumbnails.slice(2, 6),
      coverThumbnail: sampleVideoThumbnails[2],
      videoCount: 4,
      participants: "All grades",
      views: 1567,
      highlights: [
        "Traditional dance performances",
        "Skits and dramas",
        "Music performances",
        "Grand finale"
      ]
    },
    {
      id: 4,
      title: "Science Exhibition 2023",
      description: "Innovative projects and experiments presented by our young scientists at the annual science fair",
      date: "2023-08-18",
      duration: "18:45",
      location: "Science Block",
      category: "academic",
      videos: sampleVideoUrls.slice(3, 7),
      thumbnails: sampleVideoThumbnails.slice(3, 7),
      coverThumbnail: sampleVideoThumbnails[3],
      videoCount: 4,
      participants: "Science Club Members",
      views: 678,
      highlights: [
        "Working model demonstrations",
        "Science experiments",
        "Project presentations",
        "Award ceremony"
      ]
    },
    {
      id: 5,
      title: "Morning Assembly Highlights",
      description: "Compilation of special morning assemblies featuring guest speakers, student performances, and important announcements",
      date: "2023-07-15",
      duration: "15:20",
      location: "School Ground",
      category: "assembly",
      videos: sampleVideoUrls.slice(4, 6),
      thumbnails: sampleVideoThumbnails.slice(4, 6),
      coverThumbnail: sampleVideoThumbnails[4],
      videoCount: 2,
      participants: "All students",
      views: 445,
      highlights: [
        "Thought of the day",
        "Special performances",
        "Important announcements",
        "National anthem"
      ]
    },
    {
      id: 6,
      title: "Educational Field Trip - Patan Museum",
      description: "Students explore historical sites and museums for practical learning experience",
      date: "2023-06-12",
      duration: "12:30",
      location: "Patan Museum",
      category: "trip",
      videos: sampleVideoUrls.slice(5, 7),
      thumbnails: sampleVideoThumbnails.slice(5, 7),
      coverThumbnail: sampleVideoThumbnails[5],
      videoCount: 2,
      participants: "Class 9 Students",
      views: 334,
      highlights: [
        "Museum tour",
        "Historical artifacts",
        "Student interactions",
        "Learning moments"
      ]
    },
    {
      id: 7,
      title: "Teachers' Day Celebration",
      description: "Students expressing gratitude to teachers through performances, speeches, and heartfelt moments",
      date: "2023-05-28",
      duration: "22:15",
      location: "School Auditorium",
      category: "cultural",
      videos: sampleVideoUrls.slice(2, 5),
      thumbnails: sampleVideoThumbnails.slice(2, 5),
      coverThumbnail: sampleVideoThumbnails[6],
      videoCount: 3,
      participants: "All teachers and students",
      views: 789,
      highlights: [
        "Student performances",
        "Teacher appreciation",
        "Fun games",
        "Gift distribution"
      ]
    },
    {
      id: 8,
      title: "Math Olympiad Winners Interview",
      description: "Interviews with our national mathematics competition winners and their preparation journey",
      date: "2023-04-10",
      duration: "8:45",
      location: "Principal's Office",
      category: "academic",
      videos: sampleVideoUrls.slice(0, 2),
      thumbnails: sampleVideoThumbnails.slice(0, 2),
      coverThumbnail: sampleVideoThumbnails[7],
      videoCount: 2,
      participants: "Math Club",
      views: 256,
      highlights: [
        "Winner interviews",
        "Preparation tips",
        "Coach's message",
        "Future goals"
      ]
    }
  ];

  // Filter collections based on search and category
  const filteredCollections = videoCollections.filter(collection => {
    const matchesSearch = collection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         collection.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || collection.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle collection click
  const handleCollectionClick = (collection) => {
    setSelectedVideoCollection(collection);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle back to collections
  const handleBackToCollections = () => {
    setSelectedVideoCollection(null);
    setSelectedVideo(null);
  };

  // Handle video click for playback
  const handleVideoClick = (videoUrl, index) => {
    setSelectedVideo({ url: videoUrl, index: index });
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
    return category ? category.name : 'Video';
  };

  // Toggle filters on mobile
  const toggleFilters = () => {
    setExpandedFilters(!expandedFilters);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative py-6 sm:py-8 lg:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={galleryBanner}
            alt="KNS Video Gallery" 
            className="w-full h-full object-cover"
          />
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
            <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-playfair mb-3 sm:mb-4">
              Video Gallery
            </h1>
            
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
              Watch Videos of School Events & Activities
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content */}
      <section className="relative py-6 sm:py-8 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          {/* Back Button */}
          {selectedVideoCollection && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <button
                onClick={handleBackToCollections}
                className="flex items-center gap-1 px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 text-sm"
              >
                <ChevronLeft className="w-3 h-3" />
                Back to Video Collections
              </button>
            </motion.div>
          )}

          {/* Video Player Modal */}
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <div className="relative w-full max-w-4xl">
                <div className="relative pt-[56.25%]">
                  <iframe
                    src={selectedVideo.url}
                    title="Video player"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVideo(null);
                  }}
                  className="absolute -top-8 right-0 text-white hover:text-gray-300 transition-colors duration-300 text-sm"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}

          {/* Video Collection View */}
          {selectedVideoCollection ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Collection Header */}
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-5 lg:p-6 mb-6 border border-white/20 backdrop-blur-sm">
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-0.5 bg-red-500 rounded-full"></div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-playfair">
                      {selectedVideoCollection.title}
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 text-white/90 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{formatDate(selectedVideoCollection.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs">Total: {selectedVideoCollection.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs">{selectedVideoCollection.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span className="text-xs">{selectedVideoCollection.participants}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span className="text-xs">{selectedVideoCollection.views} views</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
                    <div className="flex items-center gap-1 text-white">
                      <Film className="w-3 h-3" />
                      <span className="font-bold text-xs">{selectedVideoCollection.videoCount}</span>
                      <span className="text-xs">videos</span>
                    </div>
                  </div>
                  <div className={`px-2 py-0.5 rounded text-white text-xs font-medium ${getCategoryColor(selectedVideoCollection.category)}`}>
                    {getCategoryName(selectedVideoCollection.category)}
                  </div>
                </div>
                
                <p className="text-white/90 mt-3 text-xs sm:text-sm leading-relaxed">
                  {selectedVideoCollection.description}
                </p>
              </div>

              {/* Videos Grid */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 font-playfair">
                    Videos in this Collection
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Click to play
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedVideoCollection.videos.map((videoUrl, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group"
                    >
                      <div 
                        className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-1 hover:border-primary/30"
                        onClick={() => handleVideoClick(videoUrl, index)}
                      >
                        <div className="relative pt-[56.25%] overflow-hidden">
                          <img 
                            src={selectedVideoCollection.thumbnails[index]} 
                            alt={`Video ${index + 1}`}
                            className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                              <Play className="w-5 h-5 text-primary ml-1" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 left-2">
                            <div className="px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white text-xs">
                              {index + 1}/{selectedVideoCollection.videoCount}
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2">
                            <div className="px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white text-xs">
                              <Clock className="w-3 h-3 inline mr-1" />
                              {parseInt(selectedVideoCollection.duration) / selectedVideoCollection.videoCount > 10 
                                ? `${Math.floor(parseInt(selectedVideoCollection.duration) / selectedVideoCollection.videoCount)} min` 
                                : `${Math.floor(parseInt(selectedVideoCollection.duration) / selectedVideoCollection.videoCount)} min`}
                            </div>
                          </div>
                        </div>
                        <div className="p-3">
                          <h4 className="font-bold text-gray-900 text-sm mb-1">Video {index + 1}</h4>
                          <p className="text-gray-600 text-xs line-clamp-2">
                            Part of {selectedVideoCollection.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Highlights Card */}
              <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-6 w-0.5 bg-primary rounded-full"></div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 font-playfair">
                    Video Highlights
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-2">Featured Moments</h4>
                    <ul className="space-y-2">
                      {selectedVideoCollection.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                          <span className="text-gray-700 text-xs sm:text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-3 border border-primary/20">
                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-2">Quick Info</h4>
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs">Date:</span>
                        <span className="font-medium text-gray-900 text-xs sm:text-sm">{formatDate(selectedVideoCollection.date)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs">Total Duration:</span>
                        <span className="font-medium text-gray-900 text-xs sm:text-sm">{selectedVideoCollection.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs">Location:</span>
                        <span className="font-medium text-gray-900 text-xs sm:text-sm">{selectedVideoCollection.location}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs">Category:</span>
                        <span className={`px-1.5 py-0.5 rounded text-xs font-medium text-white ${getCategoryColor(selectedVideoCollection.category)}`}>
                          {getCategoryName(selectedVideoCollection.category)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      onClick={handleBackToCollections}
                      className="px-4 py-1.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 text-xs sm:text-sm"
                    >
                      Browse All Video Collections
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Video Collections View */
            <>
              {/* Mobile View */}
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
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-playfair">
                        Video Collections
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 text-xs sm:text-sm mb-3">
                      Browse through our video collections of school events and activities. Click on any collection to watch videos.
                    </p>

                    {/* Mobile Search */}
                    <div className="relative mb-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search videos..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-9 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-xs"
                        />
                      </div>
                    </div>

                    {/* Mobile Filters */}
                    <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                      <button
                        onClick={toggleFilters}
                        className="w-full p-2 flex items-center justify-between hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-primary/10 rounded flex items-center justify-center">
                            <Video className="w-1.5 h-1.5 text-primary" />
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
                        <div className="text-base font-bold text-primary mb-0.5">{videoCollections.length}</div>
                        <div className="text-gray-600 text-xs">Collections</div>
                      </div>
                      <div className="bg-purple-500/5 rounded-lg p-2 border border-purple-500/10">
                        <div className="text-base font-bold text-purple-600 mb-0.5">
                          {videoCollections.reduce((acc, col) => acc + col.videoCount, 0)}
                        </div>
                        <div className="text-gray-600 text-xs">Total Videos</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Collections Grid */}
                <div className="space-y-3">
                  {filteredCollections.map((collection) => (
                    <motion.div
                      key={collection.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5 }}
                      className="group"
                    >
                      <div 
                        className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                        onClick={() => handleCollectionClick(collection)}
                      >
                        {/* Collection Cover */}
                        <div className="relative h-32 overflow-hidden">
                          <img 
                            src={collection.coverThumbnail} 
                            alt={collection.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                            <div className="absolute top-1.5 right-1.5">
                              <div className={`px-1.5 py-0.5 rounded text-xs font-medium text-white ${getCategoryColor(collection.category)}`}>
                                {getCategoryName(collection.category)}
                              </div>
                            </div>
                            <div className="absolute bottom-2 left-2">
                              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                <Film className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2">
                            <div className="px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white text-xs">
                              {collection.videoCount} videos
                            </div>
                          </div>
                        </div>
                        
                        {/* Collection Info */}
                        <div className="p-3">
                          <div className="flex items-start justify-between mb-1.5">
                            <h3 className="font-bold text-gray-900 text-sm flex-1 line-clamp-2">
                              {collection.title}
                            </h3>
                          </div>
                          
                          <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                            {collection.description}
                          </p>
                          
                          <div className="flex items-center justify-between text-gray-500 text-xs">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(collection.date)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{collection.duration}</span>
                            </div>
                          </div>
                          
                          <div className="mt-2 pt-2 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-primary font-medium text-xs">
                                Tap to Watch Videos
                              </span>
                              <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                <ChevronLeft className="w-2.5 h-2.5 text-primary transform rotate-180" />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="h-0.5 w-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile No Results */}
                {filteredCollections.length === 0 && (
                  <div className="text-center py-6">
                    <Film className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <h3 className="text-sm font-bold text-gray-700 mb-1">No Collections Found</h3>
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

              {/* Desktop View */}
              <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Filters */}
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
                      <h2 className="text-2xl font-bold text-gray-900 font-playfair">
                        Video Collections
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 text-base mb-4">
                      Browse through our video collections of school events and activities. Click on any collection to watch videos.
                    </p>

                    {/* Search Bar */}
                    <div className="relative mb-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search video collections..."
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
                            className={`px-3 py-1.5 rounded-md transition-all duration-300 text-sm ${
                              activeCategory === category.id 
                                ? `${category.id === 'all' ? 'bg-primary' : category.color} text-white` 
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                        <div className="text-lg font-bold text-primary mb-1">{videoCollections.length}</div>
                        <div className="text-gray-600 text-xs">Collections</div>
                      </div>
                      <div className="bg-purple-500/5 rounded-lg p-3 border border-purple-500/10">
                        <div className="text-lg font-bold text-purple-600 mb-1">
                          {videoCollections.reduce((acc, col) => acc + col.videoCount, 0)}
                        </div>
                        <div className="text-gray-600 text-xs">Total Videos</div>
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-6 border border-white/20 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Film className="w-5 h-5 text-white" />
                      <h3 className="text-xl font-bold text-white font-playfair">
                        Watch Our Moments
                      </h3>
                    </div>
                    
                    <p className="text-white/90 text-sm mb-3">
                      Our video gallery captures the vibrant life at Kathmandu National School in motion. Watch performances, events, and special moments.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                        <div className="text-white font-bold text-base mb-0.5">{videoCollections.length}</div>
                        <div className="text-white/80 text-xs">Collections</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                        <div className="text-white font-bold text-base mb-0.5">
                          {videoCollections.reduce((acc, col) => acc + col.videoCount, 0)}
                        </div>
                        <div className="text-white/80 text-xs">Videos</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Collections Grid */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  {filteredCollections.map((collection, index) => (
                    <motion.div
                      key={collection.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <div 
                        className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-1 hover:border-primary/30"
                        onClick={() => handleCollectionClick(collection)}
                      >
                        <div className="flex flex-col sm:flex-row">
                          {/* Thumbnail */}
                          <div className="sm:w-48 relative overflow-hidden">
                            <div className="relative pt-[56.25%] sm:pt-0 sm:h-full">
                              <img 
                                src={collection.coverThumbnail} 
                                alt={collection.title}
                                className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                                  <Play className="w-4 h-4 text-primary ml-1" />
                                </div>
                              </div>
                              <div className="absolute top-2 left-2">
                                <div className={`px-1.5 py-0.5 rounded text-xs font-medium text-white ${getCategoryColor(collection.category)}`}>
                                  {getCategoryName(collection.category)}
                                </div>
                              </div>
                              {collection.featured && (
                                <div className="absolute top-2 right-2">
                                  <div className="px-1.5 py-0.5 rounded text-xs font-medium bg-red-500 text-white">
                                    Featured
                                  </div>
                                </div>
                              )}
                              <div className="absolute bottom-2 right-2">
                                <div className="px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white text-xs">
                                  {collection.videoCount} videos
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Info */}
                          <div className="flex-1 p-4">
                            <h3 className="font-bold text-gray-900 text-base mb-2 line-clamp-2">
                              {collection.title}
                            </h3>
                            
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                              {collection.description}
                            </p>
                            
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1 text-gray-500 text-xs">
                                  <Calendar className="w-3 h-3" />
                                  {formatDate(collection.date)}
                                </div>
                                <div className="flex items-center gap-1 text-gray-500 text-xs">
                                  <Clock className="w-3 h-3" />
                                  {collection.duration}
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-1 text-gray-500 text-xs">
                                <Eye className="w-3 h-3" />
                                <span>{collection.views} views</span>
                              </div>
                            </div>
                            
                            {/* View Button */}
                            <div className="mt-4 pt-3 border-t border-gray-100">
                              <div className="flex items-center justify-between">
                                <span className="text-primary font-medium text-xs">
                                  Click to Watch Videos
                                </span>
                                <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                  <ChevronLeft className="w-3 h-3 text-primary transform rotate-180" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="h-0.5 w-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </motion.div>
                  ))}

                  {/* No Results - Desktop */}
                  {filteredCollections.length === 0 && (
                    <div className="text-center py-8">
                      <Film className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-gray-700 mb-1">No Collections Found</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        No video collections match your search criteria. Try adjusting your filters.
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
                <QuickLinksSection />
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
      </section>
    </div>
  );
};

export default VideoGalleryPage;

