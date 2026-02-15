import { motion } from 'framer-motion';
import { 
  Award, 
  BookOpen, 
  Users, 
  GraduationCap, 
  Globe, 
  Heart, 
  Shield, 
  Zap, 
  Target,
  Star,
  Clock,
  Compass,
  Trophy,
  Leaf,
  Coffee,
  Microscope,
  Music,
  Palette,
  Cpu,
  Languages,
  Sparkles,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

// Import banner image (replace with your actual banner)
import featuresBanner from '../assets/kns-logo.png';
import LinksSection from '../components/LinksSection';

const SalientFeaturesPage = () => {
  // Main features categories
  const featureCategories = [
    {
      id: 1,
      title: "Academic Excellence",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      lightColor: "from-blue-50 to-blue-100",
      features: [
        "Experienced and qualified faculty members",
        "Modern teaching methodologies with smart classrooms",
        "Comprehensive curriculum following national standards",
        "Regular assessments and progress tracking",
        "Science and computer labs with latest equipment",
        "Library with extensive collection of books",
        "Remedial classes for slow learners",
        "Scholarship programs for meritorious students"
      ]
    },
    {
      id: 2,
      title: "Holistic Development",
      icon: Users,
      color: "from-green-500 to-green-600",
      lightColor: "from-green-50 to-green-100",
      features: [
        "Focus on moral and ethical education",
        "Personality development programs",
        "Leadership training opportunities",
        "Value-based education system",
        "Counseling and guidance services",
        "Career counseling from experts",
        "Life skills training workshops",
        "Yoga and meditation sessions"
      ]
    },
    {
      id: 3,
      title: "Extra-Curricular Activities",
      icon: Trophy,
      color: "from-purple-500 to-purple-600",
      lightColor: "from-purple-50 to-purple-100",
      features: [
        "Annual sports day with multiple events",
        "Cultural programs and competitions",
        "Music, dance, and art classes",
        "Debate and public speaking forums",
        "Quiz competitions and Olympiads",
        "Scout and guide programs",
        "Educational field trips and excursions",
        "Club activities (Science, Math, Literature)"
      ]
    },
    {
      id: 4,
      title: "Infrastructure",
      icon: Compass,
      color: "from-red-500 to-red-600",
      lightColor: "from-red-50 to-red-100",
      features: [
        "Spacious, well-ventilated classrooms",
        "Modern science and computer laboratories",
        "Well-stocked library with digital resources",
        "Sports facilities including playground",
        "Art and craft rooms",
        "Audio-visual rooms for presentations",
        "Safe drinking water facilities",
        "Hygienic cafeteria"
      ]
    },
    {
      id: 5,
      title: "Student Support",
      icon: Heart,
      color: "from-pink-500 to-pink-600",
      lightColor: "from-pink-50 to-pink-100",
      features: [
        "Individual attention to each student",
        "Parent-teacher regular meetings",
        "Student counseling services",
        "Health and medical check-ups",
        "Scholarship for deserving students",
        "Transportation facilities",
        "Hostel facilities for outstation students",
        "Special care for junior wing"
      ]
    },
    {
      id: 6,
      title: "Discipline & Values",
      icon: Shield,
      color: "from-orange-500 to-orange-600",
      lightColor: "from-orange-50 to-orange-100",
      features: [
        "Strict discipline with positive reinforcement",
        "Merit and demerit system",
        "Regular attendance monitoring",
        "Dress code enforcement",
        "Anti-bullying policies",
        "Respect for diversity and inclusion",
        "Community service initiatives",
        "Environmental awareness programs"
      ]
    },
    {
      id: 7,
      title: "Technology Integration",
      icon: Cpu,
      color: "from-cyan-500 to-cyan-600",
      lightColor: "from-cyan-50 to-cyan-100",
      features: [
        "Smart classrooms with digital boards",
        "Computer education from early grades",
        "Online learning resources",
        "Digital library access",
        "Educational software and apps",
        "Coding and robotics clubs",
        "Parent portal for updates",
        "Online assignment submission"
      ]
    },
    {
      id: 8,
      title: "Language & Communication",
      icon: Languages,
      color: "from-indigo-500 to-indigo-600",
      lightColor: "from-indigo-50 to-indigo-100",
      features: [
        "English medium instruction",
        "Nepali language classes",
        "Additional language options",
        "Communication skills training",
        "Public speaking opportunities",
        "Creative writing workshops",
        "Poetry and elocution contests",
        "Foreign language exposure"
      ]
    }
  ];

  // Key highlights for the top section
  const highlights = [
    { icon: Award, label: "45+ Years", sublabel: "of Excellence", color: "text-blue-600", bgColor: "bg-blue-100" },
    { icon: Users, label: "1500+", sublabel: "Students", color: "text-green-600", bgColor: "bg-green-100" },
    { icon: GraduationCap, label: "100%", sublabel: "SEE Results", color: "text-yellow-600", bgColor: "bg-yellow-100" },
    { icon: Star, label: "A-Grade", sublabel: "Institution", color: "text-purple-600", bgColor: "bg-purple-100" },
    { icon: Trophy, label: "50+", sublabel: "Awards", color: "text-red-600", bgColor: "bg-red-100" },
    { icon: Heart, label: "98%", sublabel: "Satisfaction", color: "text-pink-600", bgColor: "bg-pink-100" }
  ];

  // Quick stats for the middle section
  const stats = [
    { value: "45+", label: "Years of Excellence", icon: Clock },
    { value: "1500+", label: "Students Enrolled", icon: Users },
    { value: "50+", label: "Qualified Teachers", icon: GraduationCap },
    { value: "100%", label: "Pass Percentage", icon: Target },
    { value: "24/7", label: "Learning Support", icon: Zap },
    { value: "10+", label: "Sports Activities", icon: Trophy }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative py-6 sm:py-8 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={featuresBanner}
            alt="Salient Features - Kathmandu National School" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/50" />
        </div>
        
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
              Salient Features
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
              Discover What Makes Kathmandu National School Unique
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Highlights Strip */}
      <section className="py-8 sm:py-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.color}`} />
                </div>
                <div className="font-bold text-gray-900 text-sm sm:text-base">{item.label}</div>
                <div className="text-gray-500 text-xs">{item.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-playfair mb-3">
              What Sets Us Apart
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-8 sm:w-12 bg-primary/30" />
              <p className="text-sm text-gray-600 max-w-2xl">
                At Kathmandu National School, we provide an exceptional educational experience through these distinctive features
              </p>
              <div className="h-px w-8 sm:w-12 bg-primary/30" />
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {featureCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${category.color} p-4 sm:p-5`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-playfair">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="p-4 sm:p-5">
                    <ul className="space-y-2.5">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`h-1 w-full bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-3 sm:opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23006699'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }} />
        </div>
      </section>

      <LinksSection />

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-3 sm:opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23006699'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }} />
      </div>
    </div>
  );
};

export default SalientFeaturesPage;