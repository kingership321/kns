import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Newspaper, ExternalLink, ChevronRight, Award, BookOpen, Trophy, Megaphone, Eye, Heart, Share2, CalendarDays, Bell } from 'lucide-react';
import { useState } from 'react';

// Import banner image
import newsBanner from '../assets/annual-day/annual-day4.jpg';

const NewsEventsPage = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [expandedNews, setExpandedNews] = useState(null);

  // News data
  const newsArticles = [
    {
      id: 1,
      title: "KNS Students Excel in National Science Olympiad 2023",
      excerpt: "Our students secured top positions in the National Science Olympiad, bringing pride to the school with 3 gold medals and 5 silver medals.",
      content: "Kathmandu National School students demonstrated exceptional talent in the National Science Olympiad 2023 held in Kathmandu. Out of 15 participating students, 8 secured positions in the top 10. Rohan Sharma (Grade 10) secured first position in Physics, while Sita Gurung (Grade 11) topped in Chemistry. The winners received their awards at a ceremony attended by the Minister of Education.",
      date: "2023-12-15",
      category: "Achievement",
      author: "Academic Department",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      featured: true,
      tags: ["Science", "Olympiad", "Achievement"]
    },
    {
      id: 2,
      title: "New Computer Lab Inaugurated with Modern Equipment",
      excerpt: "School inaugurated a state-of-the-art computer lab with 50 new systems and advanced software for enhanced digital learning.",
      content: "The newly established computer lab at Kathmandu National School was inaugurated by Principal Anju Thapa. The lab features 50 high-performance computers, interactive smart boards, and the latest educational software. This initiative aims to enhance digital literacy among students and prepare them for the technology-driven future. The lab will be used for computer science classes, coding workshops, and digital research projects.",
      date: "2023-12-10",
      category: "Infrastructure",
      author: "IT Department",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      featured: true,
      tags: ["Technology", "Infrastructure", "Digital Learning"]
    },
    {
      id: 3,
      title: "Annual Parents-Teachers Meeting Concluded Successfully",
      excerpt: "The annual PTA meeting saw record participation with constructive discussions on student progress and school development.",
      content: "The Annual Parents-Teachers Association meeting was held on December 5, 2023, with over 85% parent participation. The meeting focused on student academic progress, behavioral development, and future school initiatives. Parents provided valuable feedback and suggestions for improvement. A new committee was formed to strengthen home-school collaboration and enhance student support systems.",
      date: "2023-12-05",
      category: "Meeting",
      author: "PTA Committee",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["PTA", "Parents", "Collaboration"]
    },
    {
      id: 4,
      title: "Environmental Club Organizes Tree Plantation Drive",
      excerpt: "Students planted over 200 saplings in school premises as part of environmental conservation initiative.",
      content: "The KNS Environmental Club organized a successful tree plantation drive on World Environment Day. Students, teachers, and staff participated in planting 200+ saplings of various native species in the school campus. The initiative aims to create awareness about environmental conservation and promote sustainable practices among students. The club also conducted workshops on waste management and recycling.",
      date: "2023-12-01",
      category: "Environment",
      author: "Environmental Club",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Environment", "Club", "Sustainability"]
    },
    {
      id: 5,
      title: "School Library Receives 500 New Books",
      excerpt: "Library collection expanded with new books covering various subjects and genres for enhanced reading culture.",
      content: "The school library has been enriched with 500 new books covering fiction, non-fiction, reference materials, and academic journals. This addition was made possible through donations from alumni and the school management. The new collection includes award-winning literature, scientific journals, and career guidance books. Students are encouraged to make the most of these resources for their academic and personal development.",
      date: "2023-11-28",
      category: "Resources",
      author: "Library Department",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Library", "Books", "Resources"]
    },
    {
      id: 6,
      title: "Art Exhibition Showcases Student Creativity",
      excerpt: "Annual art exhibition displayed 150+ artworks created by students across all grades.",
      content: "The Annual Art Exhibition 'Colors of Imagination' featured 150+ artworks including paintings, sculptures, and digital art created by KNS students. The exhibition was open to parents and visitors for three days. Many artworks were sold, with proceeds going to charity. Special recognition was given to innovative pieces that addressed social issues through art.",
      date: "2023-11-25",
      category: "Arts",
      author: "Art Department",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Art", "Exhibition", "Creativity"]
    }
  ];

  // Events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Winter Science Fair 2024",
      description: "Annual science fair showcasing innovative projects and experiments by students",
      date: "2024-01-20",
      time: "9:00 AM - 3:00 PM",
      location: "Science Block",
      category: "Academic",
      type: "Fair",
      participants: "Classes 6-12",
      registration: "Open until Jan 15",
      featured: true,
      icon: Award
    },
    {
      id: 2,
      title: "Inter-School Basketball Tournament",
      description: "Annual basketball competition featuring teams from schools across Kathmandu Valley",
      date: "2024-01-25",
      time: "8:00 AM - 5:00 PM",
      location: "School Basketball Court",
      category: "Sports",
      type: "Tournament",
      participants: "School Teams",
      registration: "Closed",
      featured: true,
      icon: Trophy
    },
    {
      id: 3,
      title: "Career Counseling Session",
      description: "Interactive session with industry professionals for career guidance",
      date: "2024-01-30",
      time: "11:00 AM - 1:00 PM",
      location: "Auditorium",
      category: "Academic",
      type: "Workshop",
      participants: "Grade 10-12 Students",
      registration: "Open",
      icon: BookOpen
    },
    {
      id: 4,
      title: "Cultural Diversity Day",
      description: "Celebration of Nepal's cultural diversity through performances and exhibitions",
      date: "2024-02-05",
      time: "10:00 AM - 4:00 PM",
      location: "School Ground",
      category: "Cultural",
      type: "Celebration",
      participants: "All Students",
      registration: "Not Required",
      icon: Heart
    },
    {
      id: 5,
      title: "Parents Orientation Program",
      description: "Orientation for new parents about school policies and academic programs",
      date: "2024-02-10",
      time: "10:00 AM - 12:00 PM",
      location: "Conference Hall",
      category: "Meeting",
      type: "Orientation",
      participants: "Parents",
      registration: "Required",
      icon: Users
    },
    {
      id: 6,
      title: "Mathematics Quiz Competition",
      description: "Inter-house mathematics quiz to promote analytical thinking",
      date: "2024-02-15",
      time: "2:00 PM - 4:00 PM",
      location: "Classroom Block",
      category: "Academic",
      type: "Competition",
      participants: "Classes 8-10",
      registration: "Open",
      icon: Award
    }
  ];

  // Recent events (past)
  const recentEvents = [
    {
      id: 7,
      title: "Teachers' Day Celebration",
      description: "Annual celebration honoring our dedicated teaching staff",
      date: "2023-11-30",
      time: "11:00 AM - 2:00 PM",
      location: "Auditorium",
      category: "Celebration",
      status: "Completed"
    },
    {
      id: 8,
      title: "Blood Donation Camp",
      description: "Community service initiative in collaboration with Red Cross",
      date: "2023-11-25",
      time: "9:00 AM - 3:00 PM",
      location: "School Hall",
      category: "Community",
      status: "Completed"
    },
    {
      id: 9,
      title: "Debate Competition Finals",
      description: "Final round of inter-house debate competition",
      date: "2023-11-20",
      time: "2:00 PM - 5:00 PM",
      location: "Auditorium",
      category: "Academic",
      status: "Completed"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
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

  const handleReadMore = (newsId) => {
    setExpandedNews(expandedNews === newsId ? null : newsId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Same as home page */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[Cambria] mb-4">
              News & Events
            </h1>
            
            {/* Divider like home page */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-white/50" />
                <p className="text-base md:text-lg text-white/95 italic tracking-wide font-serif">
                  Education · Civilization · Humanization
                </p>
                <div className="h-px w-12 bg-white/50" />
              </div>
            </motion.div>
            
            <p className="text-lg text-white/90 mb-6 font-serif italic">
              Stay Updated with Latest Happenings at Kathmandu National School
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content */}
      <section className="relative py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-6">
          {/* Tabs Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 lg:mb-12"
          >
            <div className="bg-white rounded-lg p-1 border border-gray-200 shadow-md max-w-2xl mx-auto">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('news')}
                  className={`flex-1 py-2 px-3 rounded-md font-medium transition-all duration-300 text-sm ${activeTab === 'news' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <Newspaper className="w-4 h-4" />
                    <span>Latest News</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('events')}
                  className={`flex-1 py-2 px-3 rounded-md font-medium transition-all duration-300 text-sm ${activeTab === 'events' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Events</span>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* News Section */}
          {activeTab === 'news' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Featured News */}
              <div className="mb-8 lg:mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-6 w-1 bg-red-500 rounded-full"></div>
                  <h2 className="text-xl lg:text-3xl font-bold text-gray-900 font-[Cambria]">
                    Featured News
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {newsArticles.filter(news => news.featured).slice(0, 2).map((news) => (
                    <motion.div
                      key={news.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="group"
                    >
                      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 h-full hover:border-1 hover:border-primary/30">
                        {/* News Image */}
                        <div className="relative h-56 overflow-hidden">
                          <img 
                            src={news.image} 
                            alt={news.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-2 left-2">
                            <div className="px-2 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium rounded">
                              {news.category}
                            </div>
                          </div>
                        </div>
                        
                        {/* News Content */}
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-1 text-gray-500 text-xs">
                              <Calendar className="w-3 h-3" />
                              {formatDate(news.date)}
                            </div>
                            <div className="text-gray-500 text-xs">
                              {news.readTime}
                            </div>
                          </div>
                          
                          <h3 className="font-bold text-gray-900 text-lg mb-2 font-[Cambria] line-clamp-2">
                            {news.title}
                          </h3>
                          
                          <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                            {news.excerpt}
                          </p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {news.tags.map((tag, index) => (
                              <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="text-gray-600 text-xs">
                              By {news.author}
                            </div>
                            <button
                              onClick={() => handleReadMore(news.id)}
                              className="flex items-center gap-1 text-primary text-sm font-medium hover:text-primary/80 transition-colors duration-300"
                            >
                              {expandedNews === news.id ? 'Read Less' : 'Read More'}
                              <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${expandedNews === news.id ? 'rotate-90' : ''}`} />
                            </button>
                          </div>
                          
                          {/* Expanded Content */}
                          {expandedNews === news.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-gray-100"
                            >
                              <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                                {news.content}
                              </p>
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
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Recent News Grid */}
              <div className="mb-12 lg:mb-16">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-1 bg-blue-500 rounded-full"></div>
                    <h2 className="text-xl lg:text-3xl font-bold text-gray-900 font-[Cambria]">
                      Recent News
                    </h2>
                  </div>
                  <div className="text-gray-600 text-sm">
                    Showing {newsArticles.length} articles
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {newsArticles.filter(news => !news.featured).map((news, index) => (
                    <motion.div
                      key={news.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full hover:border-1 hover:border-primary/30">
                        {/* News Image */}
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={news.image} 
                            alt={news.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute bottom-2 left-2">
                            <div className="px-1.5 py-0.5 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium rounded">
                              {news.category}
                            </div>
                          </div>
                        </div>
                        
                        {/* News Content */}
                        <div className="p-3">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-gray-500 text-xs">
                              {formatDate(news.date)}
                            </div>
                            <div className="text-gray-500 text-xs">
                              {news.readTime}
                            </div>
                          </div>
                          
                          <h3 className="font-bold text-gray-900 text-base mb-2 line-clamp-2">
                            {news.title}
                          </h3>
                          
                          <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                            {news.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                            <div className="text-gray-500 text-xs">
                              By {news.author}
                            </div>
                            <button
                              onClick={() => handleReadMore(news.id)}
                              className="text-primary text-xs font-medium hover:text-primary/80 transition-colors duration-300"
                            >
                              Read
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* News Archive & Updates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-6 lg:p-8 border border-white/20">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                        <Newspaper className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white font-[Cambria] mb-2">Daily Updates</h4>
                      <p className="text-white/80 text-xs">
                        Stay informed with daily school announcements and important notices
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                        <Megaphone className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white font-[Cambria] mb-2">Announcements</h4>
                      <p className="text-white/80 text-xs">
                        Important announcements regarding academics, events, and school policies
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                        <Bell className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white font-[Cambria] mb-2">Notifications</h4>
                      <p className="text-white/80 text-xs">
                        Get notified about important dates, deadlines, and schedule changes
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Events Section */}
          {activeTab === 'events' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Upcoming Events */}
              <div className="mb-8 lg:mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-6 w-1 bg-red-500 rounded-full"></div>
                  <h2 className="text-xl lg:text-3xl font-bold text-gray-900 font-[Cambria]">
                    Upcoming Events
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {upcomingEvents.filter(event => event.featured).slice(0, 2).map((event) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="group"
                    >
                      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 h-full hover:border-1 hover:border-primary/30">
                        {/* Event Header */}
                        <div className={`bg-gradient-to-r ${event.category === 'Academic' ? 'from-blue-500/90 to-blue-400/80' : event.category === 'Sports' ? 'from-green-500/90 to-green-400/80' : 'from-purple-500/90 to-purple-400/80'} p-4`}>
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                  <event.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <div className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded inline-block mb-1">
                                    {event.type}
                                  </div>
                                  <h3 className="text-lg font-bold text-white font-[Cambria] line-clamp-2">
                                    {event.title}
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
                                <div className="text-white text-xs">Countdown</div>
                                <div className="text-white font-bold text-sm">{getTimeRemaining(event.date)}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Event Details */}
                        <div className="p-4">
                          <p className="text-gray-700 text-sm mb-4">
                            {event.description}
                          </p>
                          
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-primary" />
                              <div>
                                <div className="text-gray-500 text-xs">Date</div>
                                <div className="font-medium text-gray-900 text-sm">{formatDate(event.date)}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-primary" />
                              <div>
                                <div className="text-gray-500 text-xs">Time</div>
                                <div className="font-medium text-gray-900 text-sm">{event.time}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-primary" />
                              <div>
                                <div className="text-gray-500 text-xs">Location</div>
                                <div className="font-medium text-gray-900 text-sm">{event.location}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-primary" />
                              <div>
                                <div className="text-gray-500 text-xs">For</div>
                                <div className="font-medium text-gray-900 text-sm">{event.participants}</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className={`px-2 py-0.5 rounded text-xs font-medium ${event.registration === 'Open' ? 'bg-green-100 text-green-800' : event.registration === 'Closed' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                              Registration: {event.registration}
                            </div>
                            <button className="flex items-center gap-1 text-primary text-sm font-medium hover:text-primary/80 transition-colors duration-300">
                              View Details
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* All Upcoming Events Grid */}
              <div className="mb-12 lg:mb-16">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-1 bg-blue-500 rounded-full"></div>
                    <h2 className="text-xl lg:text-3xl font-bold text-gray-900 font-[Cambria]">
                      All Events
                    </h2>
                  </div>
                  <div className="text-gray-600 text-sm">
                    {upcomingEvents.length} upcoming events
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full hover:border-1 hover:border-primary/30">
                        {/* Event Date Card */}
                        <div className={`p-3 ${event.category === 'Academic' ? 'bg-blue-50 border-b border-blue-100' : event.category === 'Sports' ? 'bg-green-50 border-b border-green-100' : 'bg-purple-50 border-b border-purple-100'}`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Calendar className={`w-4 h-4 ${event.category === 'Academic' ? 'text-blue-600' : event.category === 'Sports' ? 'text-green-600' : 'text-purple-600'}`} />
                              <div>
                                <div className="font-bold text-gray-900 text-sm">{formatDate(event.date)}</div>
                                <div className="text-gray-600 text-xs">{event.time}</div>
                              </div>
                            </div>
                            <div className={`px-1.5 py-0.5 rounded text-xs font-medium ${event.category === 'Academic' ? 'bg-blue-100 text-blue-800' : event.category === 'Sports' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>
                              {event.category}
                            </div>
                          </div>
                        </div>
                        
                        {/* Event Content */}
                        <div className="p-3">
                          <div className="flex items-start gap-2 mb-3">
                            <div className={`w-8 h-8 rounded flex items-center justify-center ${event.category === 'Academic' ? 'bg-blue-100' : event.category === 'Sports' ? 'bg-green-100' : 'bg-purple-100'}`}>
                              <event.icon className={`w-4 h-4 ${event.category === 'Academic' ? 'text-blue-600' : event.category === 'Sports' ? 'text-green-600' : 'text-purple-600'}`} />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-2">{event.title}</h3>
                              <p className="text-gray-600 text-xs line-clamp-2">{event.description}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center gap-1 text-gray-600">
                              <MapPin className="w-3 h-3" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-600">
                              <Users className="w-3 h-3" />
                              <span>{event.participants}</span>
                            </div>
                          </div>
                          
                          <div className="mt-4 pt-3 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                              <div className={`text-xs ${event.registration === 'Open' ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
                                {event.registration}
                              </div>
                              <button className="text-primary text-xs font-medium hover:text-primary/80 transition-colors duration-300">
                                Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Event Registration Info */}
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
                      <div className="flex items-center justify-center gap-4 mb-3">
                        <div className="h-px w-8 bg-white/50" />
                        <h3 className="text-xl lg:text-3xl font-bold text-white font-[Cambria]">
                          Event Participation
                        </h3>
                        <div className="h-px w-8 bg-white/50" />
                      </div>
                      <p className="text-white/90 text-base font-serif italic max-w-2xl mx-auto">
                        How to participate in school events and activities
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                          <div className="text-lg font-bold text-white">1</div>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Check Schedule</h4>
                        <p className="text-white/80 text-xs">
                          Review the event calendar and upcoming events list
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                          <div className="text-lg font-bold text-white">2</div>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Register</h4>
                        <p className="text-white/80 text-xs">
                          Complete registration for events requiring participation sign-up
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                          <div className="text-lg font-bold text-white">3</div>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Participate</h4>
                        <p className="text-white/80 text-xs">
                          Attend events as scheduled and follow participation guidelines
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
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

export default NewsEventsPage;