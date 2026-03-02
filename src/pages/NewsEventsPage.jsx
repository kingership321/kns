import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Newspaper, ExternalLink, ChevronRight, Award, BookOpen, Trophy, Megaphone, Eye, Heart, Share2, CalendarDays, Bell, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import QuickLinksSection from '../components/LinksSection';

// Import banner image
import newsBanner from '../assets/annual-day/annual-day4.jpg';
import admission from '../assets/admission.png'

const NewsEventsPage = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [expandedNews, setExpandedNews] = useState({});
  const [expandedEvents, setExpandedEvents] = useState({});

  // News data
  const newsArticles = [
    {
      id: 'olympiad',
      title: "Kathmandu National School announces Admissions Open from Play Group to Grade IX for the Academic Year 2082(2026/2027).",
      excerpt: "Admission form can be collected from the school Reception between 9:00 am to 4:00 pm on weekdays.",
      content: "",
      date: "2026",
      category: "Academic",
      author: "Academic Department",
      readTime: "",
      image: admission,
      featured: true,
      tags: ["Admissions", "Academic", "Enrollment"]
    }
  ];

  // Events data
  const upcomingEvents = [
    // {
    //   id: 'science-fair',
    //   title: "Winter Science Fair 2024",
    //   description: "Annual science fair showcasing innovative projects and experiments by students",
    //   date: "2024-01-20",
    //   time: "9:00 AM - 3:00 PM",
    //   location: "Science Block",
    //   category: "Academic",
    //   type: "Fair",
    //   participants: "Classes 6-12",
    //   registration: "Open until Jan 15",
    //   featured: true,
    //   icon: Award
    // },
    // {
    //   id: 'basketball',
    //   title: "Inter-School Basketball Tournament",
    //   description: "Annual basketball competition featuring teams from schools across Kathmandu Valley",
    //   date: "2024-01-25",
    //   time: "8:00 AM - 5:00 PM",
    //   location: "School Basketball Court",
    //   category: "Sports",
    //   type: "Tournament",
    //   participants: "School Teams",
    //   registration: "Closed",
    //   featured: true,
    //   icon: Trophy
    // },
    // {
    //   id: 'career',
    //   title: "Career Counseling Session",
    //   description: "Interactive session with industry professionals for career guidance",
    //   date: "2024-01-30",
    //   time: "11:00 AM - 1:00 PM",
    //   location: "Auditorium",
    //   category: "Academic",
    //   type: "Workshop",
    //   participants: "Grade 10-12 Students",
    //   registration: "Open",
    //   icon: BookOpen
    // },
    // {
    //   id: 'cultural',
    //   title: "Cultural Diversity Day",
    //   description: "Celebration of Nepal's cultural diversity through performances and exhibitions",
    //   date: "2024-02-05",
    //   time: "10:00 AM - 4:00 PM",
    //   location: "School Ground",
    //   category: "Cultural",
    //   type: "Celebration",
    //   participants: "All Students",
    //   registration: "Not Required",
    //   icon: Heart
    // },
    // {
    //   id: 'parents',
    //   title: "Parents Orientation Program",
    //   description: "Orientation for new parents about school policies and academic programs",
    //   date: "2024-02-10",
    //   time: "10:00 AM - 12:00 PM",
    //   location: "Conference Hall",
    //   category: "Meeting",
    //   type: "Orientation",
    //   participants: "Parents",
    //   registration: "Required",
    //   icon: Users
    // },
    // {
    //   id: 'math',
    //   title: "Mathematics Quiz Competition",
    //   description: "Inter-house mathematics quiz to promote analytical thinking",
    //   date: "2024-02-15",
    //   time: "2:00 PM - 4:00 PM",
    //   location: "Classroom Block",
    //   category: "Academic",
    //   type: "Competition",
    //   participants: "Classes 8-10",
    //   registration: "Open",
    //   icon: Award
    // }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getTimeRemaining = (eventDate) => {
    const now = new Date();
    const event = new Date(eventDate);
    const diffTime = event - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 0) {
      return `${diffDays} days remaining`;
    } else if (diffDays === 0) {
      return "Today";
    } else {
      return "Event passed";
    }
  };

  const toggleNews = (newsId) => {
    setExpandedNews(prev => ({
      ...prev,
      [newsId]: !prev[newsId]
    }));
  };

  const toggleEvent = (eventId) => {
    setExpandedEvents(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Optimized for Mobile */}
      <section className="relative py-6 sm:py-8 lg:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={newsBanner}
            alt="KNS News & Events" 
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
              News & Events
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
              Stay Updated with Latest Happenings at Kathmandu National School
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content - Mobile Optimized */}
      <section className="relative py-6 sm:py-8 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          {/* Tabs Navigation - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="bg-white rounded-lg p-1 border border-gray-200 shadow-sm">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('news')}
                  className={`flex-1 py-2 px-2 rounded-md font-medium transition-all duration-300 text-xs sm:text-sm ${activeTab === 'news' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <Newspaper className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Latest News</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('events')}
                  className={`flex-1 py-2 px-2 rounded-md font-medium transition-all duration-300 text-xs sm:text-sm ${activeTab === 'events' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Events</span>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* News Section - Mobile */}
          {activeTab === 'news' && (
            <div className="block lg:hidden">
              {/* Introduction Card */}
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
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-display">
                      School News & Updates
                    </h2>
                  </div>
                  
                  <div className="space-y-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                    <p>
                      Stay informed about the latest achievements, developments, and announcements from Kathmandu National School.
                    </p>
                    
                    <div className="bg-primary/5 rounded-lg p-3 border border-primary/20 mt-3">
                      <p className="font-serif italic text-gray-700 text-xs">
                        "Keeping our school community connected through timely updates and important information."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile News Accordion */}
              <div className="space-y-3 sm:space-y-4">
                {newsArticles.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleNews(news.id)}
                        className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 text-left">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Newspaper className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-sm sm:text-base font-bold text-gray-900 font-display line-clamp-2">
                              {news.title}
                            </h3>
                            <div className="h-0.5 w-8 bg-red-500 rounded-full mt-1"></div>
                          </div>
                        </div>
                        {expandedNews[news.id] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedNews[news.id] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-3 sm:p-4 pt-0">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-gray-500 text-xs">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(news.date)}
                              </span>
                              <span>{news.readTime}</span>
                            </div>
                            
                            <p className="text-gray-700 text-xs sm:text-sm">
                              {news.excerpt}
                            </p>
                            
                            {expandedNews[news.id] && (
                              <>
                                <p className="text-gray-700 text-xs sm:text-sm">
                                  {news.content}
                                </p>
                                
                                <div className="flex flex-wrap gap-1">
                                  {news.tags.map((tag, index) => (
                                    <span key={index} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                                
                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                  <span className="text-gray-600 text-xs">
                                    By {news.author}
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-1 text-primary text-xs font-medium">
                                      <Eye className="w-3 h-3" />
                                      <span>View</span>
                                    </button>
                                    <button className="flex items-center gap-1 text-primary text-xs font-medium">
                                      <Share2 className="w-3 h-3" />
                                      <span>Share</span>
                                    </button>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile News Stats */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 sm:mt-8"
              >
                <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-5 border border-white/20 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      News Updates
                    </h3>
                  </div>
                  
                  <div className="space-y-3 text-white/90 text-xs sm:text-sm">
                    <p>Stay informed with daily school announcements and important notices</p>
                    
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
                        <div className="text-white text-lg sm:text-xl font-bold mb-0.5">{newsArticles.length}</div>
                        <div className="text-white/80 text-xs">Latest News</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
                        <div className="text-white text-lg sm:text-xl font-bold mb-0.5">2</div>
                        <div className="text-white/80 text-xs">Featured</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Events Section - Mobile */}
          {activeTab === 'events' && (
            <div className="block lg:hidden">
              {/* Introduction Card */}
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
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-display">
                      Upcoming Events
                    </h2>
                  </div>
                  
                  <div className="space-y-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                    <p>
                      Discover exciting events, competitions, and activities happening at Kathmandu National School.
                    </p>
                    
                    <div className="bg-primary/5 rounded-lg p-3 border border-primary/20 mt-3">
                      <p className="font-serif italic text-gray-700 text-xs">
                        "Creating opportunities for learning, growth, and community engagement."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Events Accordion */}
              <div className="space-y-3 sm:space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleEvent(event.id)}
                        className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 text-left">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 ${
                            event.category === 'Academic' ? 'bg-blue-500/10' : 
                            event.category === 'Sports' ? 'bg-green-500/10' : 
                            'bg-purple-500/10'
                          } rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <event.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                              event.category === 'Academic' ? 'text-blue-500' : 
                              event.category === 'Sports' ? 'text-green-500' : 
                              'text-purple-500'
                            }`} />
                          </div>
                          <div>
                            <h3 className="text-sm sm:text-base font-bold text-gray-900 font-display line-clamp-2">
                              {event.title}
                            </h3>
                            <div className="h-0.5 w-8 bg-red-500 rounded-full mt-1"></div>
                          </div>
                        </div>
                        {expandedEvents[event.id] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedEvents[event.id] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-3 sm:p-4 pt-0">
                          <div className="space-y-3">
                            <p className="text-gray-700 text-xs sm:text-sm">
                              {event.description}
                            </p>
                            
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-primary" />
                                <span className="text-gray-600 text-xs">{formatDate(event.date)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-primary" />
                                <span className="text-gray-600 text-xs">{event.time}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-primary" />
                                <span className="text-gray-600 text-xs">{event.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-3 h-3 text-primary" />
                                <span className="text-gray-600 text-xs">{event.participants}</span>
                              </div>
                            </div>
                            
                            <div className={`p-2 rounded-lg border ${
                              event.registration === 'Open' ? 'bg-green-50 border-green-200' :
                              event.registration === 'Closed' ? 'bg-red-50 border-red-200' :
                              'bg-gray-50 border-gray-200'
                            }`}>
                              <p className={`font-medium text-xs ${
                                event.registration === 'Open' ? 'text-green-700' :
                                event.registration === 'Closed' ? 'text-red-700' :
                                'text-gray-700'
                              }`}>
                                Registration: {event.registration}
                              </p>
                            </div>
                            
                            <div className="pt-2 border-t border-gray-100">
                              <button className="flex items-center gap-1 text-primary text-xs font-medium">
                                <ExternalLink className="w-3 h-3" />
                                <span>View Details</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Events Stats */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 sm:mt-8"
              >
                <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-5 border border-white/20 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      Event Calendar
                    </h3>
                  </div>
                  
                  <div className="space-y-3 text-white/90 text-xs sm:text-sm">
                    <p>Plan your participation in upcoming school events and activities</p>
                    
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
                        <div className="text-white text-lg sm:text-xl font-bold mb-0.5">{upcomingEvents.length}</div>
                        <div className="text-white/80 text-xs">Upcoming Events</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
                        <div className="text-white text-lg sm:text-xl font-bold mb-0.5">2</div>
                        <div className="text-white/80 text-xs">Featured</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - News Introduction */}
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
                  <h2 className="text-2xl font-bold text-gray-900 font-display">
                    {activeTab === 'news' ? 'School News & Updates' : 'Upcoming Events'}
                  </h2>
                </div>
                
                <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                  <p>
                    {activeTab === 'news' 
                      ? "Stay informed about the latest achievements, developments, and announcements from Kathmandu National School." 
                      : "Discover exciting events, competitions, and activities happening at Kathmandu National School."
                    }
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-4">
                    <p className="font-serif italic text-gray-700 text-sm">
                      {activeTab === 'news' 
                        ? '"Keeping our school community connected through timely updates and important information."'
                        : '"Creating opportunities for learning, growth, and community engagement."'
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  {activeTab === 'news' ? (
                    <Bell className="w-5 h-5 text-white" />
                  ) : (
                    <CalendarDays className="w-5 h-5 text-white" />
                  )}
                  <h3 className="text-xl font-bold text-white font-display">
                    {activeTab === 'news' ? 'News Updates' : 'Event Calendar'}
                  </h3>
                </div>
                
                <div className="text-white/90 text-sm mb-3">
                  {activeTab === 'news' 
                    ? "Stay informed with daily school announcements and important notices"
                    : "Plan your participation in upcoming school events and activities"
                  }
                </div>
                
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="text-white text-xl font-bold mb-0.5">
                      {activeTab === 'news' ? newsArticles.length : upcomingEvents.length}
                    </div>
                    <div className="text-white/80 text-xs">
                      {activeTab === 'news' ? 'Latest News' : 'Upcoming Events'}
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="text-white text-xl font-bold mb-0.5">2</div>
                    <div className="text-white/80 text-xs">Featured</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {activeTab === 'news' ? (
                /* Desktop News Items */
                newsArticles.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Newspaper className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 font-display mb-1.5">
                            {news.title}
                          </h3>
                          <div className="h-0.5 w-10 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-gray-500 text-sm mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(news.date)}
                        </span>
                        <span>{news.readTime}</span>
                      </div>
                      
                      <p className="text-gray-700 text-sm mb-3">
                        {news.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="text-gray-600 text-xs">
                          By {news.author}
                        </div>
                        <button
                          onClick={() => toggleNews(news.id)}
                          className="flex items-center gap-1 text-primary text-xs font-medium hover:text-primary/80 transition-colors duration-300"
                        >
                          {expandedNews[news.id] ? 'Read Less' : 'Read More'}
                          <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${expandedNews[news.id] ? 'rotate-90' : ''}`} />
                        </button>
                      </div>
                      
                      {expandedNews[news.id] && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <p className="text-gray-700 text-sm mb-3">
                            {news.content}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {news.tags.map((tag, index) => (
                              <span key={index} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                            <button className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors duration-300 text-xs">
                              <Eye className="w-3 h-3" />
                              <span>View Details</span>
                            </button>
                            <button className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors duration-300 text-xs">
                              <Share2 className="w-3 h-3" />
                              <span>Share</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))
              ) : (
                /* Desktop Event Items */
                upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 ${
                          event.category === 'Academic' ? 'bg-blue-500/10' : 
                          event.category === 'Sports' ? 'bg-green-500/10' : 
                          'bg-purple-500/10'
                        } rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <event.icon className={`w-5 h-5 ${
                            event.category === 'Academic' ? 'text-blue-500' : 
                            event.category === 'Sports' ? 'text-green-500' : 
                            'text-purple-500'
                          }`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 font-display mb-1.5">
                            {event.title}
                          </h3>
                          <div className="h-0.5 w-10 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-sm mb-3">
                        {event.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-primary" />
                          <span className="text-gray-600 text-xs">{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-primary" />
                          <span className="text-gray-600 text-xs">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-primary" />
                          <span className="text-gray-600 text-xs">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-primary" />
                          <span className="text-gray-600 text-xs">{event.participants}</span>
                        </div>
                      </div>
                      
                      <div className={`p-2 rounded-lg border mb-3 ${
                        event.registration === 'Open' ? 'bg-green-50 border-green-200' :
                        event.registration === 'Closed' ? 'bg-red-50 border-red-200' :
                        'bg-gray-50 border-gray-200'
                      }`}>
                        <p className={`font-medium text-sm ${
                          event.registration === 'Open' ? 'text-green-700' :
                          event.registration === 'Closed' ? 'text-red-700' :
                          'text-gray-700'
                        }`}>
                          Registration: {event.registration}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="text-gray-600 text-xs">
                          {getTimeRemaining(event.date)}
                        </div>
                        <button className="flex items-center gap-1 text-primary text-xs font-medium hover:text-primary/80 transition-colors duration-300">
                          View Details
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </div>

          {/* Final Section - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 sm:mt-10 lg:mt-16"
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

              <div className="relative z-10 p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-display">
                      {activeTab === 'news' ? 'Stay Connected' : 'Participate & Engage'}
                    </h3>
                    <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-sm sm:text-base font-serif italic max-w-2xl mx-auto">
                    {activeTab === 'news' 
                      ? "Join our community to receive the latest updates and announcements"
                      : "Get involved in school activities and make the most of your learning experience"
                    }
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      {activeTab === 'news' ? (
                        <Newspaper className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      ) : (
                        <Calendar className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      )}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                      {activeTab === 'news' ? 'Regular Updates' : 'Event Calendar'}
                    </h4>
                    <p className="text-white/80 text-xs sm:text-sm">
                      {activeTab === 'news' 
                        ? 'Get timely information about school activities'
                        : 'Plan ahead for upcoming events and competitions'
                      }
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Bell className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Notifications</h4>
                    <p className="text-white/80 text-xs sm:text-sm">
                      {activeTab === 'news' 
                        ? 'Receive important announcements and alerts'
                        : 'Get notified about registration deadlines and changes'
                      }
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Community</h4>
                    <p className="text-white/80 text-xs sm:text-sm">
                      {activeTab === 'news' 
                        ? 'Connect with parents, teachers, and students'
                        : 'Join activities with peers and school community'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <QuickLinksSection />
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

export default NewsEventsPage;

