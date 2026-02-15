import { motion } from 'framer-motion';
import { Calendar, Download, FileText, Clock, BookOpen, Trophy, Users, GraduationCap, Star, Bell, CheckCircle, CalendarDays, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import QuickLinksSection from '../components/LinksSection';

// Import calendar images
import calendarImage from '../assets/annual-day/annual-day1.jpg';
import academicEventsImage from '../assets/annual-day/annual-day2.jpg';
import extracurricularCalendarImage from '../assets/annual-day/annual-day3.jpg';
import examScheduleImage from '../assets/annual-day/annual-day4.jpg';

// Import PDF files - You need to add these PDFs to your assets folder
import academicCalendarPDF from '../assets/pdf/Network ch 5and 6.pdf';
import examSchedulePDF from '../assets/pdf/bsccsit_syllabus.pdf';
import cocurricularCalendarPDF from '../assets/pdf/microsyllabus-CG.pdf';
import holidayListPDF from '../assets/pdf/pdf.pdf';

const CalendarPage = () => {
  const [selectedYear, setSelectedYear] = useState('2024-2025');
  const [downloading, setDownloading] = useState(null);
  const [expandedDownloads, setExpandedDownloads] = useState({});

  const academicYears = [
    { year: '2024-2025', active: true },
    { year: '2023-2024', active: false },
    { year: '2022-2023', active: false },
  ];

  const calendarDownloads = [
    {
      id: 'academic',
      title: "Academic Calendar 2024-2025",
      description: "Complete annual academic schedule with all important dates",
      fileSize: "2.4 MB",
      pages: "12 pages",
      icon: FileText,
      color: "bg-blue-500",
      pdfFile: academicCalendarPDF,
      fileName: "KNS_Academic_Calendar_2024_2025.pdf"
    },
    {
      id: 'exams',
      title: "Examination Schedule 2024-2025",
      description: "Detailed examination dates for all classes and subjects",
      fileSize: "1.8 MB",
      pages: "8 pages",
      icon: FileText,
      color: "bg-red-500",
      pdfFile: examSchedulePDF,
      fileName: "KNS_Examination_Schedule_2024_2025.pdf"
    },
    {
      id: 'cocurricular',
      title: "Co-curricular Activities Calendar",
      description: "Schedule for sports, cultural and extracurricular activities",
      fileSize: "1.5 MB",
      pages: "6 pages",
      icon: Calendar,
      color: "bg-green-500",
      pdfFile: cocurricularCalendarPDF,
      fileName: "KNS_Co-curricular_Calendar_2024_2025.pdf"
    },
    {
      id: 'holidays',
      title: "Holiday List 2024-2025",
      description: "Official holiday schedule for the academic year",
      fileSize: "0.8 MB",
      pages: "3 pages",
      icon: Star,
      color: "bg-yellow-500",
      pdfFile: holidayListPDF,
      fileName: "KNS_Holiday_List_2024_2025.pdf"
    }
  ];

  const importantDates = [
    {
      title: "New Session Begins",
      date: "April 15, 2024",
      icon: BookOpen,
      importance: "High Priority"
    },
    {
      title: "Annual Examinations",
      date: "February 1-15, 2025",
      icon: FileText,
      importance: "Critical"
    },
    {
      title: "Sports Day",
      date: "November 15, 2024",
      icon: Trophy,
      importance: "Major Event"
    },
    {
      title: "Result Declaration",
      date: "March 10, 2025",
      icon: Star,
      importance: "Important"
    }
  ];

  const toggleDownload = (id) => {
    setExpandedDownloads(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleDownload = async (download) => {
    try {
      setDownloading(download.title);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = download.pdfFile;
      link.download = download.fileName;
      
      // Append to the document
      document.body.appendChild(link);
      
      // Trigger the download
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      
      // Reset downloading state after a short delay
      setTimeout(() => {
        setDownloading(null);
      }, 1500);
      
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download the file. Please try again.');
      setDownloading(null);
    }
  };

  // For PDF preview functionality
  const handleViewPDF = (pdfFile, title) => {
    window.open(pdfFile, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Optimized for Mobile */}
      <section className="relative py-6 sm:py-8 lg:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={calendarImage}
            alt="Academic Calendar at KNS" 
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
              Academic Calendar
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
              Plan Ahead for Academic Excellence & School Activities
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content - Mobile Optimized */}
      <section className="relative py-6 sm:py-8 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          {/* Introduction - Mobile Accordion */}
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
                    Academic Calendar Downloads
                  </h2>
                </div>
                
                <div className="space-y-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <p>
                    Download detailed PDF calendars for the academic year. Select the year and choose from available documents.
                  </p>
                  
                  {/* Year Selection - Mobile */}
                  <div className="flex justify-center my-3">
                    <div className="inline-flex rounded-lg border border-gray-200 p-0.5 bg-white shadow-sm">
                      {academicYears.map((academicYear, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedYear(academicYear.year)}
                          className={`px-2 py-0.5 rounded text-xs font-medium transition-all duration-200 ${
                            selectedYear === academicYear.year
                              ? 'bg-primary text-white'
                              : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                          }`}
                        >
                          {academicYear.year}
                          {academicYear.active && (
                            <span className="ml-0.5 text-xs bg-green-100 text-green-800 px-0.5 rounded">Current</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Accordion for Downloads */}
            <div className="space-y-3 sm:space-y-4">
              {calendarDownloads.map((download, index) => (
                <motion.div
                  key={download.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <button
                      onClick={() => toggleDownload(download.id)}
                      className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 text-left">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 ${download.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <download.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 font-[Cambria]">
                            {download.title}
                          </h3>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full mt-1"></div>
                        </div>
                      </div>
                      {expandedDownloads[download.id] ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedDownloads[download.id] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="p-3 sm:p-4 pt-0">
                        <div className="space-y-3">
                          <p className="text-gray-700 text-xs sm:text-sm">
                            {download.description}
                          </p>
                          
                          <div className="flex items-center justify-between text-gray-600 text-xs">
                            <div className="flex items-center gap-1">
                              <FileText className="w-3 h-3" />
                              <span>PDF Format</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>{download.fileSize}</span>
                              <span>•</span>
                              <span>{download.pages}</span>
                            </div>
                          </div>
                          
                          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                          </div>
                          
                          <div className="flex gap-2 pt-2">
                            <button
                              onClick={() => handleViewPDF(download.pdfFile, download.title)}
                              className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 transition-colors text-xs"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              Preview
                            </button>
                            
                            <button
                              onClick={() => handleDownload(download)}
                              disabled={downloading === download.title}
                              className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors text-xs disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                              {downloading === download.title ? (
                                <>
                                  <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                  Downloading...
                                </>
                              ) : (
                                <>
                                  <Download className="w-3 h-3" />
                                  Download
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Important Dates */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 sm:mt-8"
            >
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-5 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <h3 className="text-base sm:text-lg font-bold text-white font-[Cambria]">
                    Key Academic Dates
                  </h3>
                </div>
                
                <div className="space-y-3 text-white/90 text-xs sm:text-sm">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
                      <div className="text-white text-lg sm:text-xl font-bold mb-0.5">4</div>
                      <div className="text-white/80 text-xs">Key Dates</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
                      <div className="text-white text-lg sm:text-xl font-bold mb-0.5">2024-25</div>
                      <div className="text-white/80 text-xs">Academic Year</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Introduction & Important Dates */}
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
                    Academic Calendar Downloads
                  </h2>
                </div>
                
                <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                  <p>
                    Download detailed PDF calendars for the academic year. Select the year and choose from available documents.
                  </p>
                  
                  {/* Year Selection - Desktop */}
                  <div className="flex justify-start my-4">
                    <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white shadow-sm">
                      {academicYears.map((academicYear, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedYear(academicYear.year)}
                          className={`px-3 py-1 rounded-md font-medium transition-all duration-200 text-sm ${
                            selectedYear === academicYear.year
                              ? 'bg-primary text-white'
                              : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                          }`}
                        >
                          {academicYear.year}
                          {academicYear.active && (
                            <span className="ml-1 text-xs bg-green-100 text-green-800 px-1 py-0.5 rounded">Current</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-4">
                    <p className="font-serif italic text-gray-700 text-sm">
                      "Proper planning ensures thorough preparation for all examinations and academic requirements."
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Dates */}
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-white" />
                  <h3 className="text-xl font-bold text-white font-[Cambria]">
                    Key Academic Dates
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-white font-bold text-lg mb-0.5">4</div>
                    <div className="text-white/80 text-sm">Key Dates</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-white font-bold text-lg mb-0.5">2024-25</div>
                    <div className="text-white/80 text-sm">Academic Year</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Download Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {calendarDownloads.map((download, index) => (
                <motion.div
                  key={download.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 ${download.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <download.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 font-[Cambria] mb-1.5">
                          {download.title}
                        </h3>
                        <div className="h-0.5 w-10 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-3">
                      {download.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-gray-600 text-xs mb-3">
                      <div className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        <span>PDF Format</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{download.fileSize}</span>
                        <span>•</span>
                        <span>{download.pages}</span>
                        <span className="bg-gray-100 px-1 py-0.5 rounded text-xs">Print Ready</span>
                      </div>
                    </div>
                    
                    <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden mb-4">
                      <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewPDF(download.pdfFile, download.title)}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 transition-colors text-xs"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Preview
                      </button>
                      
                      <button
                        onClick={() => handleDownload(download)}
                        disabled={downloading === download.title}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors text-xs disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {downloading === download.title ? (
                          <>
                            <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Downloading...
                          </>
                        ) : (
                          <>
                            <Download className="w-3 h-3" />
                            Download
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
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
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-[Cambria]">
                      Stay Organized, Stay Ahead
                    </h3>
                    <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-sm sm:text-base font-serif italic max-w-2xl mx-auto">
                    Effective planning leads to academic success and balanced school life
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <FileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Academic Excellence</h4>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Proper planning ensures thorough preparation for all examinations
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Trophy className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Event Participation</h4>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Never miss important school events and extracurricular activities
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Family Coordination</h4>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Easily coordinate family plans with school schedule
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

export default CalendarPage;