import { motion } from 'framer-motion';
import { Trophy, Award, Globe, Users, Calendar, Star, Target, Medal } from 'lucide-react';

// Import achievement images
import exchangeImage from '../../../assets/Montessori/prize1.jpg';
import koreaImage from '../../../assets/Montessori/prize2.jpg';
import culturalFestivalImage from '../../../assets/Montessori/prize4.jpg';

const RecentAchievementsPage = () => {
  const achievements = [
    {
      title: "International Cultural Festival 2014",
      location: "South Korea",
      date: "27th July - 3rd August, 2014",
      description: "11 of our secondary level students participated in the prestigious International Cultural Festival, representing Nepal on a global platform.",
      icon: Globe,
      color: "bg-blue-500",
      highlights: [
        "Global cultural exchange program",
        "Representation of Nepali culture",
        "International exposure for students",
        "Cultural diplomacy initiative"
      ]
    },
    {
      title: "Student Exchange Program",
      location: "International Level",
      date: "Ongoing Program",
      description: "We have established student exchange programs to and from international institutions, providing global learning opportunities.",
      icon: Users,
      color: "bg-green-500",
      highlights: [
        "International partnerships",
        "Cultural immersion programs",
        "Global educational exposure",
        "Cross-cultural understanding"
      ]
    }
  ];

  const students = [
    "Shreya Sigdel",
    "Sujan Shrestha",
    "Surendra Tamang",
    "Sneha Thapa",
    "Samikshya KC",
    "Samjhana Ghimire",
    "Ajaya Rai",
    "Annu Shrestha",
    "Aashish Malla",
    "Rija Khadgi",
    "Karina Chaulaga"
  ];

  const programBenefits = [
    {
      icon: Target,
      title: "Global Exposure",
      description: "Students gain international perspective and cultural understanding"
    },
    {
      icon: Medal,
      title: "Cultural Exchange",
      description: "Promotes cross-cultural communication and appreciation"
    },
    {
      icon: Star,
      title: "Skill Development",
      description: "Enhances communication, adaptability, and leadership skills"
    },
    {
      icon: Award,
      title: "Career Opportunities",
      description: "Opens doors to international education and career paths"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Same as home page */}
      <section className="relative py-10 lg:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={koreaImage}
            alt="International Cultural Festival Achievements" 
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[Cambria] mb-4">
              Recent Achievements
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
              Celebrating Global Excellence & International Recognition
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content */}
      <section className="relative py-10 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-5 lg:px-6">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 lg:mb-12"
          >
            <div className="bg-white rounded-lg p-4 lg:p-6 border border-gray-200 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-0.5 bg-red-500 rounded-full"></div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Global Recognition & Exchange Programs
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="text-gray-700 text-sm lg:text-base leading-relaxed space-y-3">
                  <p>
                    Kathmandu National School takes pride in its <span className="font-semibold text-primary">international achievements and global outreach programs</span>. Our students have represented Nepal on prestigious international platforms, showcasing our commitment to global education.
                  </p>
                  
                  <p>
                    We have established student exchange programs to and from international institutions, providing our students with invaluable global exposure and cross-cultural learning experiences.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-4">
                    <p className="font-serif italic text-gray-700 text-sm">
                      "11 of our secondary level students participated in the International Cultural Festival 2014 in South Korea, representing our school and country with distinction."
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
                  <h3 className="font-bold text-gray-900 text-base mb-3">Achievement Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">International festival participation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Student exchange programs established</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Global cultural representation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">International partnerships developed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 lg:mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center`}>
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 font-[Cambria]">
                          {achievement.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-600 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {achievement.date}
                          </span>
                          <span className="text-xs text-gray-600 flex items-center gap-1">
                            <Globe className="w-3 h-3" />
                            {achievement.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4">
                    {achievement.description}
                  </p>
                  
                  <div className="border-t border-gray-100 pt-3">
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Key Highlights:</h4>
                    <ul className="space-y-1.5">
                      {achievement.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-1.5">
                          <div className={`w-1.5 h-1.5 ${achievement.color} rounded-full mt-1.5 flex-shrink-0`}></div>
                          <span className="text-gray-700 text-xs">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`h-0.5 w-full ${achievement.color} rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Participating Students */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-primary/50" />
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  International Cultural Festival Participants
                </h2>
                <div className="h-px w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Our 11 exceptional students who represented KNS in South Korea, 2014
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 lg:p-6 border border-gray-200 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {students.map((student, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 hover:border-primary/20 transition-all duration-300 flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-primary font-bold text-sm">{student.charAt(0)}</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{student}</h4>
                        <p className="text-gray-600 text-xs">Participant, International Festival</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                <div className="inline-flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-full">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">All 11 students successfully represented KNS on international stage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-primary/50" />
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Benefits of International Programs
                </h2>
                <div className="h-px w-10 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                How international exposure benefits our students' growth and development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {programBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-base font-bold text-gray-900 font-[Cambria] mb-2">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-700 text-xs">
                      {benefit.description}
                    </p>
                    
                    <div className="h-0.5 w-10 bg-red-500 rounded-full mt-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final Section */}
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
                      Our Vision for Global Education
                    </h3>
                    <div className="h-px w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-base font-serif italic max-w-2xl mx-auto">
                    Preparing students for success in an interconnected world
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Global Citizenship</h4>
                    <p className="text-white/80 text-xs">
                      Developing students as responsible global citizens with cross-cultural understanding
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">International Partnerships</h4>
                    <p className="text-white/80 text-xs">
                      Building strong educational partnerships with institutions worldwide
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Future Opportunities</h4>
                    <p className="text-white/80 text-xs">
                      Opening doors to international higher education and career pathways
                    </p>
                  </div>
                </div>
                
                {/* Future Programs */}
                <div className="mt-10 pt-6 border-t border-white/20">
                  <div className="max-w-3xl mx-auto text-center">
                    <h4 className="text-lg font-bold text-white mb-4 font-[Cambria]">Upcoming International Programs</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="bg-white/10 backdrop-blur-sm rounded-md p-2">
                        <div className="text-white font-bold text-base mb-0.5">More Exchange Programs</div>
                        <div className="text-white/80 text-xs">Expanding to more countries</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-md p-2">
                        <div className="text-white font-bold text-base mb-0.5">Virtual Exchanges</div>
                        <div className="text-white/80 text-xs">Digital cultural programs</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-md p-2">
                        <div className="text-white font-bold text-base mb-0.5">International Competitions</div>
                        <div className="text-white/80 text-xs">Global academic challenges</div>
                      </div>
                    </div>
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

export default RecentAchievementsPage;