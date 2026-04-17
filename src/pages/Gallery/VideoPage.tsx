import { motion } from 'framer-motion';
import { ChevronLeft, Video, Calendar, Clock, MapPin, Users, Search, ChevronDown, ChevronUp, Play, Film, Eye, Youtube, Facebook, Image as LucideImage } from 'lucide-react';
import { useState, useEffect } from 'react';
import QuickLinksSection from '../../components/LinksSection';

// Import gallery banner image
import galleryBanner from '../../assets/annual-day/annual-day1.jpg';

// Define types
interface Video {
  id: string;
  title: string;
  description?: string;
  url: string;
  platform: 'youtube' | 'facebook';
  thumbnail?: string;
  duration?: string;
  date?: string;
  views?: number;
}

interface VideoCollection {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  videos: Video[];
  coverThumbnail?: string;
  featured?: boolean;
  videoCount: number;
  participants?: string;
  views?: number;
  highlights?: string[];
}

// Default fallback thumbnail (you can replace with your own)
const DEFAULT_THUMBNAIL = 'https://via.placeholder.com/640x360?text=Video+Thumbnail';

// Helper function to extract YouTube video ID
const getYouTubeVideoId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtu\.be\/)([^?]+)/,
    /(?:youtube\.com\/embed\/)([^?]+)/,
    /(?:youtube\.com\/v\/)([^?]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

// Helper function to get YouTube thumbnail
const getYouTubeThumbnail = (videoId: string, quality: 'default' | 'hq' | 'mq' | 'maxres' = 'hq'): string => {
  const qualities = {
    default: 'default.jpg',
    hq: 'hqdefault.jpg',
    mq: 'mqdefault.jpg',
    maxres: 'maxresdefault.jpg'
  };
  return `https://img.youtube.com/vi/${videoId}/${qualities[quality]}`;
};

// Helper function to extract Facebook video ID from various URL formats
const getFacebookVideoId = (url: string): string | null => {
  if (!url.includes('facebook.com')) return null;
  
  let videoId = null;
  
  // Format: facebook.com/videos/123456789
  if (url.includes('/videos/')) {
    videoId = url.split('/videos/')[1]?.split('/')[0]?.split('?')[0];
  }
  // Format: facebook.com/watch/?v=123456789
  else if (url.includes('/watch')) {
    try {
      videoId = new URL(url).searchParams.get('v');
    } catch (e) {
      console.error('Invalid Facebook watch URL:', url);
    }
  }
  // Format: facebook.com/reel/883069537417625
  else if (url.includes('/reel/')) {
    const reelMatch = url.match(/\/reel\/(\d+)/);
    if (reelMatch) {
      videoId = reelMatch[1];
    }
  }
  // Format: facebook.com/PageName/videos/123456789
  else if (url.includes('/videos/')) {
    const parts = url.split('/videos/');
    if (parts.length > 1) {
      videoId = parts[1].split('/')[0].split('?')[0];
    }
  }
  
  return videoId;
};

// Helper function to get Facebook thumbnail (using multiple fallback methods)
const getFacebookThumbnail = async (videoId: string): Promise<string> => {
  // Method 1: Try to use Facebook's OG image (most reliable)
  const ogImageUrl = `https://graph.facebook.com/v17.0/${videoId}/picture?type=large`;
  
  // Method 2: Try to use a third-party service (optional)
  // const fbWatchUrl = `https://www.facebook.com/watch/?v=${videoId}`; // not used, remove to avoid lint warning
  
  // Since we can't do async in a React component directly, 
  // we'll return a promise that resolves to the best available thumbnail
  return new Promise((resolve) => {
    // Try to load the OG image
    const img = new Image();
    img.onload = () => resolve(ogImageUrl);
    img.onerror = () => {
      // If OG image fails, use a generated thumbnail based on video ID
      // This creates a consistent but generic thumbnail
      resolve(`https://via.placeholder.com/640x360/4267B2/ffffff?text=Facebook+Video+${videoId.slice(0, 4)}`);
    };
    img.src = ogImageUrl;
  });
};

// Synchronous version for immediate rendering (uses placeholder)
const getFacebookThumbnailSync = (videoId: string): string => {
  // Return a placeholder with the video ID for consistency
  // Color: Facebook blue (#4267B2)
  return `https://via.placeholder.com/640x360/4267B2/ffffff?text=FB+${videoId.slice(0, 4)}`;
};

// Helper function to extract Facebook video ID/URL for embedding
const getFacebookVideoEmbedUrl = (url: string): string => {
  const videoId = getFacebookVideoId(url);
  if (videoId) {
    return `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=${videoId}&show_text=false&width=560&autoplay=1`;
  }
  return url;
};

// Auto-generate thumbnails for all videos
const generateVideoThumbnails = (collections: VideoCollection[]): VideoCollection[] => {
  return collections.map(collection => {
    // Process each video in the collection
    const updatedVideos = collection.videos.map(video => {
      // Skip if thumbnail already exists
      if (video.thumbnail) return video;

      if (video.platform === 'youtube') {
        const videoId = getYouTubeVideoId(video.url);
        if (videoId) {
          video.thumbnail = getYouTubeThumbnail(videoId, 'mq');
        }
      } else if (video.platform === 'facebook') {
        const videoId = getFacebookVideoId(video.url);
        if (videoId) {
          // Use sync version for immediate rendering
          video.thumbnail = getFacebookThumbnailSync(videoId);
          
          // Try to load better thumbnail asynchronously
          getFacebookThumbnail(videoId).then(betterThumbnail => {
            // Update the thumbnail if component is still mounted
            // This would require state management - we'll handle it in the component
            console.log('Better thumbnail available:', betterThumbnail);
          });
        }
      }

      // Fallback to default if no thumbnail generated
      if (!video.thumbnail) {
        video.thumbnail = DEFAULT_THUMBNAIL;
      }

      return video;
    });

    // Generate collection cover thumbnail from first video
    if (!collection.coverThumbnail && updatedVideos.length > 0) {
      collection.coverThumbnail = updatedVideos[0].thumbnail;
    }

    return {
      ...collection,
      videos: updatedVideos
    };
  });
};

// Video data with actual YouTube and Facebook links
const videoCollections: VideoCollection[] = [
  {
    id: 1,
    title: "Parents Day 2026",
    description: "Highlights from the annual parents day featuring parent-teacher interactions and school updates",
    date: "2026-03-18",
    location: "Police Club, Bhrikuti Mandap",
    category: "event",
    featured: true,
    videoCount: 5,
    participants: "All students and staff",
    views: 500,
    videos: [
      {
        id: "1-1",
        title: "Parents’ Day 2082: Principal Ma’am Invites Special Guest",
        description: "A heartwarming moment from Parents’ Day 2082 as our beloved Principal Ma’am warmly invites a special guest to the stage, creating a memorable highlight of the event.",
        url: "https://www.youtube.com/watch?v=9INbWQuDuDs",
        platform: "youtube",
        duration: "01:43",
        date: "2026-03-18",
        views: 100
      },
      {
        id: "1-2",
        title: "Parents Day 2026 - Grade Four Performances",
        description: "Our Grade Four students lit up the stage with their graceful dance, soulful lyrical ballad, and heartfelt welcome song—making the 46th Parents’ Day truly unforgettable.",
        url: "https://www.facebook.com/share/v/1Fpfc6SEkf/",
        platform: "facebook",
        duration: "01:00",
        date: "2026-03-18",
        views: 3000
      },
      {
        id: "1-3",
        title: "Students Singing School Song",
        description: "Our students passionately singing the school song, showcasing their love and pride for Kathmandu National School during the annual parents day event.",
        url: "https://www.youtube.com/watch?v=sD-oGc7tWzM",
        platform: "youtube",
        duration: "06:38",
        date: "2026-03-18",
        views: 100
      },
      {
        id: "1-4",
        title: "Welcome Song Performance",
        description: "Our students passionately singing the welcome song, setting a warm and inviting tone for the annual parents day event at Kathmandu National School.",
        url: "https://www.youtube.com/watch?v=cxzAsu6HPik",
        platform: "youtube",
        duration: "02:04",
        date: "2026-03-18",
        views: 100
      },
      {
        id: "1-5",
        title: "School Scout Team Performance",
        description: "Our dedicated school scout team showcasing their skills and teamwork in a captivating performance during the annual parents day event at Kathmandu National School.",
        url: "https://www.youtube.com/watch?v=0h5Ch-i2fgg",
        platform: "youtube",
        duration: "02:03",
        date: "2026-03-18",
        views: 100
      },
    ]
  },
  {
    id: 1,
    title: "Picnic",
    description: "Fun moments from the annual picnic at the local park",
    date: "2026-01-19",
    location: "Local Park",
    category: "trip",
    featured: true,
    videoCount: 2,
    participants: "All students and staff",
    views: 3900,
    videos: [
      {
        id: "1-1",
        title: "Picnic - Fun Moments",
        description: "Fun moments from the annual picnic at the local park",
        url: "https://www.facebook.com/reel/942873047749243",
        platform: "facebook",
        duration: "10:29",
        date: "2026-01-19",
        views: 1700
      },
      {
        id: "1-2",
        title: "Picnic - Group Activities",
        description: "Group activities and games during the picnic",
        url: "https://www.facebook.com/reel/883069537417625",
        platform: "facebook",
        duration: "00:20",
        date: "2026-01-19",
        views: 2200
      },
    ]
  },
  {
    id: 2,
    title: "Sports Day Competition",
    description: "Highlights from the annual sports day featuring track events, team competitions, and victory celebrations",
    date: "2026-02-15",
    location: "School Ground",
    category: "sports",
    featured: true,
    videoCount: 4,
    participants: "Classes 6-12",
    views: 4000,
    videos: [
      {
        id: "2-1",
        title: "Sports Day - March Past",
        description: "Students marking their presence in the annual sports day with enthusiasm and team spirit",
        url: "https://www.facebook.com/reel/6681209788559831",
        platform: "facebook",
        duration: "00:57",
        date: "2026-02-15",
        views: 700
      },
      {
        id: "2-2",
        title: "Sports Day - Welcome Song",
        description: "Students performing the welcome song to kick off the sports day celebrations",
        url: "https://www.facebook.com/reel/737649841078309",
        platform: "facebook",
        duration: "03:06",
        date: "2026-02-15",
        views: 800
      },
      {
        id: "2-3",
        title: "Sports Day - Taekwondo Performance",
        description: "Students showcasing their martial arts skills in a taekwondo performance",
        url: "https://www.facebook.com/reel/737649841078309",
        platform: "facebook",
        duration: "2:10",
        date: "2026-02-15",
        views: 1000
      },
    ]
  },
  {
    id: 3,
    title: "Introductory Videos",
    description: "Introductory videos for new students and parents, showcasing the school's facilities, values, and community",
    date: "",
    location: "Old Baneshwor - 31, Kathmandu",
    category: "academy",
    featured: true,
    videoCount: 2,
    participants: "",
    views: 2000,
    videos: [
      {
        id: "3-1",
        title: "Introductory Video - School Overview",
        description: "An overview of Kathmandu National School's facilities and values",
        url: "https://www.youtube.com/watch?v=EKPRfFgpK3Y",
        platform: "youtube",
        duration: "23:48",
        date: "2024",
        views: 1400
      },
      {
        id: "3-2",
        title: "Introductory Video - KNS",
        description: "Short introductory video about Kathmandu National School for new students and parents",
        url: "https://www.youtube.com/watch?v=IFedCOMCXh4",
        platform: "youtube",
        duration: "02:54",
        date: "2026",
        views: 350
      }
    ]
  },
  {
    id: 4,
    title: "Parents Day",
    description: "Highlights from the annual parents day featuring parent-teacher interactions and school updates",
    date: "2081",
    location: "Old Baneshwor - 31, Kathmandu",
    category: "event",
    featured: true,
    videoCount: 2,
    participants: "",
    views: 2000,
    videos: [
      {
        id: "4-1",
        title: "Parents Day - Short Length Program Video",
        description: "A comprehensive video covering the entire parents day program, including speeches, performances, and interactions",
        url: "https://www.youtube.com/watch?v=OtmYrXIeRFs",
        platform: "youtube",
        duration: "38:27",
        date: "2025",
        views: 1000
      },
      {
        id: "4-2",
        title: "Parents Day - Full Length Program Video",
        description: "Full length program video of the annual parents day event, showcasing all activities and interactions",
        url: "https://www.youtube.com/watch?v=eNJv-JRDn4w",
        platform: "youtube",
        duration: "03:23:55",
        date: "2025",
        views: 1000
      }
    ]
  },
];

// Auto-generate thumbnails for all videos
const processedVideoCollections = generateVideoThumbnails(videoCollections);

const VideoGalleryPage = () => {
  const [selectedVideoCollection, setSelectedVideoCollection] = useState<VideoCollection | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [expandedFilters, setExpandedFilters] = useState(false);
  const [collections, setCollections] = useState<VideoCollection[]>(processedVideoCollections);
  const [loadingThumbnails, setLoadingThumbnails] = useState<Record<string, boolean>>({});

  // Effect to load better Facebook thumbnails asynchronously
  useEffect(() => {
    const loadBetterThumbnails = async () => {
      const updatedCollections = [...collections];
      let hasUpdates = false;

      for (let i = 0; i < updatedCollections.length; i++) {
        for (let j = 0; j < updatedCollections[i].videos.length; j++) {
          const video = updatedCollections[i].videos[j];
          
          // Skip if not Facebook or already has a custom thumbnail
          if (video.platform !== 'facebook' || 
              (video.thumbnail && !video.thumbnail.includes('placeholder'))) {
            continue;
          }

          const videoId = getFacebookVideoId(video.url);
          if (!videoId) continue;

          // Mark as loading
          setLoadingThumbnails(prev => ({ ...prev, [video.id]: true }));

          try {
            // Try to get better thumbnail
            const betterThumbnail = await getFacebookThumbnail(videoId);
            
            // Update if we got a better one (not a placeholder)
            if (betterThumbnail && !betterThumbnail.includes('placeholder')) {
              updatedCollections[i].videos[j].thumbnail = betterThumbnail;
              hasUpdates = true;
            }
          } catch (error) {
            console.error('Failed to load thumbnail for video:', video.id);
          } finally {
            setLoadingThumbnails(prev => ({ ...prev, [video.id]: false }));
          }
        }
      }

      if (hasUpdates) {
        // Update collection cover thumbnails if first video thumbnail changed
        updatedCollections.forEach(collection => {
          if (collection.videos.length > 0) {
            collection.coverThumbnail = collection.videos[0].thumbnail;
          }
        });
        setCollections(updatedCollections);
      }
    };

    loadBetterThumbnails();
  }, []);

  // Categories
  const categories = [
    { id: 'all', name: 'All Videos' },
    { id: 'annual', name: 'Annual Day', color: 'bg-red-500' },
    { id: 'sports', name: 'Sports Events', color: 'bg-green-500' },
    { id: 'cultural', name: 'Cultural Programs', color: 'bg-purple-500' },
    { id: 'academic', name: 'Academic', color: 'bg-blue-500' },
    { id: 'assembly', name: 'Assembly', color: 'bg-yellow-500' },
    { id: 'trip', name: 'Field Trips', color: 'bg-indigo-500' }
  ];

  // Filter collections based on search and category
  const filteredCollections = collections.filter(collection => {
    const matchesSearch = collection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         collection.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || collection.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle collection click
  const handleCollectionClick = (collection: VideoCollection) => {
    setSelectedVideoCollection(collection);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle back to collections
  const handleBackToCollections = () => {
    setSelectedVideoCollection(null);
    setSelectedVideo(null);
  };

  // Handle video play
  const handleVideoPlay = (video: Video) => {
    setSelectedVideo(video);
  };

  // Get embed URL based on platform
  const getEmbedUrl = (video: Video): string => {
    if (video.platform === 'youtube') {
      const videoId = getYouTubeVideoId(video.url);
      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : video.url;
    } else if (video.platform === 'facebook') {
      return getFacebookVideoEmbedUrl(video.url);
    }
    return video.url;
  };

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Date not available';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get category color
  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'bg-primary';
  };

  // Get category name
  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Video';
  };

  // Toggle filters on mobile
  const toggleFilters = () => {
    setExpandedFilters(!expandedFilters);
  };

  // Platform icon component
  const PlatformIcon = ({ platform }: { platform: 'youtube' | 'facebook' }) => {
    if (platform === 'youtube') {
      return <Youtube className="w-3 h-3 text-red-600" />;
    }
    return <Facebook className="w-3 h-3 text-blue-600" />;
  };

  // Thumbnail with loading state
  const ThumbnailImage = ({ video, thumbnail }: { video: Video; thumbnail: string }) => {
    const [imgError, setImgError] = useState(false);
    const isLoading = loadingThumbnails[video.id];

    if (imgError) {
      return (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <LucideImage className="w-8 h-8 text-gray-400" />
        </div>
      );
    }

    return (
      <>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={thumbnail}
          alt={video.title}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100 group-hover:scale-110'
          }`}
          onError={() => setImgError(true)}
        />
      </>
    );
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
              className="mb-6 bg-red-600/80 backdrop-blur-sm rounded-lg inline-block border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <button
                onClick={handleBackToCollections}
                className="flex items-center gap-1 px-3 py-1.5 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-red/100 transition-all duration-300 border border-white/20 hover:border-white/40 text-sm"
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
              onClick={() => {
                setSelectedVideo(null);
              }}
            >
              <div className="relative w-full max-w-4xl">
                <div className="relative pt-[56.25%]">
                  <iframe
                    src={getEmbedUrl(selectedVideo)}
                    title={selectedVideo.title}
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
                  {selectedVideoCollection.videos.map((video, index) => {
                    const youtubeId = video.platform === 'youtube' ? getYouTubeVideoId(video.url) : null;
                    const thumbnail = youtubeId 
                      ? getYouTubeThumbnail(youtubeId, 'mq')
                      : video.thumbnail || selectedVideoCollection.coverThumbnail || DEFAULT_THUMBNAIL;

                    return (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="group"
                      >
                        <div 
                          className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-1 hover:border-primary/30"
                          onClick={() => handleVideoPlay(video)}
                        >
                          <div className="relative pt-[56.25%] overflow-hidden bg-gray-100">
                            <ThumbnailImage video={video} thumbnail={thumbnail} />
                            
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                <Play className="w-5 h-5 text-primary ml-1" />
                              </div>
                            </div>
                            
                            <div className="absolute top-2 left-2">
                              <div className="px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded flex items-center gap-1 text-white text-xs">
                                <PlatformIcon platform={video.platform} />
                                <span>{video.platform === 'youtube' ? 'YouTube' : 'Facebook'}</span>
                              </div>
                            </div>
                            
                            <div className="absolute bottom-2 right-2">
                              <div className="px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white text-xs">
                                <Clock className="w-3 h-3 inline mr-1" />
                                {video.duration}
                              </div>
                            </div>

                            {loadingThumbnails[video.id] && (
                              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              </div>
                            )}
                          </div>
                          
                          <div className="p-3">
                            <h4 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">
                              {video.title}
                            </h4>
                            {video.description && (
                              <p className="text-gray-600 text-xs line-clamp-2">
                                {video.description}
                              </p>
                            )}
                            <div className="mt-2 flex items-center justify-between">
                              <div className="flex items-center gap-1 text-gray-500 text-xs">
                                <Eye className="w-3 h-3" />
                                <span>{video.views} views</span>
                              </div>
                              {video.date && (
                                <div className="text-gray-500 text-xs">
                                  {new Date(video.date).toLocaleDateString()}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Highlights Card */}
              {selectedVideoCollection.highlights && selectedVideoCollection.highlights.length > 0 && (
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
              )}
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
                        <div className="text-base font-bold text-primary mb-0.5">{collections.length}</div>
                        <div className="text-gray-600 text-xs">Collections</div>
                      </div>
                      <div className="bg-purple-500/5 rounded-lg p-2 border border-purple-500/10">
                        <div className="text-base font-bold text-purple-600 mb-0.5">
                          {collections.reduce((acc, col) => acc + col.videoCount, 0)}
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
                        <div className="relative h-32 overflow-hidden bg-gray-100">
                          <img 
                            src={collection.coverThumbnail || DEFAULT_THUMBNAIL} 
                            alt={collection.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = DEFAULT_THUMBNAIL;
                            }}
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
                              <Eye className="w-3 h-3" />
                              <span>{collection.views} views</span>
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
                        <div className="text-lg font-bold text-primary mb-1">{collections.length}</div>
                        <div className="text-gray-600 text-xs">Collections</div>
                      </div>
                      <div className="bg-purple-500/5 rounded-lg p-3 border border-purple-500/10">
                        <div className="text-lg font-bold text-purple-600 mb-1">
                          {collections.reduce((acc, col) => acc + col.videoCount, 0)}
                        </div>
                        <div className="text-gray-600 text-xs">Total Videos</div>
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
                          <div className="sm:w-48 relative overflow-hidden bg-gray-100">
                            <div className="relative pt-[56.25%] sm:pt-0 sm:h-full">
                              <img 
                                src={collection.coverThumbnail || DEFAULT_THUMBNAIL} 
                                alt={collection.title}
                                className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = DEFAULT_THUMBNAIL;
                                }}
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
                                  <Eye className="w-3 h-3" />
                                  <span>{collection.views} views</span>
                                </div>
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
              </div>
            </>
          )}
        </div>
        
        <QuickLinksSection />

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