import { motion } from 'framer-motion';
import { Calendar, Download, FileText, Clock, BookOpen, Trophy, Users, GraduationCap, Star, Bell, CheckCircle, CalendarDays } from 'lucide-react';
import { useState } from 'react';

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

  const academicYears = [
    { year: '2024-2025', active: true },
    { year: '2023-2024', active: false },
    { year: '2022-2023', active: false },
  ];

  const calendarDownloads = [
    {
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
      {/* Hero Banner - Same as home page */}
      <section className="relative py-10 lg:py-16 overflow-hidden">
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

        <div className="container mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white font-[Cambria] mb-4">
              Academic Calendar
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
              Plan Ahead for Academic Excellence & School Activities
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content */}
      <section className="relative py-10 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-5 lg:px-6">

          {/* Year Selection & Downloads */}
          <div className="mb-6 lg:mb-12">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-primary/50" />
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-[Cambria]">
                  Download Academic Calendar
                </h2>
                <div className="h-px w-8 bg-primary/50" />
              </div>
              <p className="text-gray-600 text-sm lg:text-base max-w-2xl mx-auto">
                Select academic year and download detailed PDF calendars
              </p>
            </div>

            {/* Year Selection */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white shadow-sm">
                {academicYears.map((academicYear, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedYear(academicYear.year)}
                    className={`px-3 py-1 rounded-md font-medium transition-all duration-200 text-xs sm:text-sm ${
                      selectedYear === academicYear.year
                        ? 'bg-primary text-white shadow-md'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {academicYear.year}
                    {academicYear.active && (
                      <span className="ml-1 text-xs bg-green-100 text-green-800 px-1 py-0.5 rounded-md">
                        Current
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Download Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {calendarDownloads.map((download, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:border-primary/30">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 ${download.color} rounded-lg flex items-center justify-center shadow-sm`}>
                        <download.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-semibold text-gray-500">{download.fileSize}</div>
                        <div className="text-sm font-bold text-gray-700">{download.pages}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-sm font-bold text-gray-900 font-[Cambria] mb-2">
                      {download.title}
                    </h3>
                    
                    <p className="text-gray-700 text-xs mb-4 flex-grow">
                      {download.description}
                    </p>
                    
                    {/* File Format Info */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                        <span className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          PDF Format
                        </span>
                        <span className="bg-gray-100 px-1 py-0.5 rounded text-xs">Print Ready</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleViewPDF(download.pdfFile, download.title)}
                        className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 transition-colors text-xs"
                        title="View PDF"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Preview
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
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
                      </motion.button>
                    </div>
                    
                    {/* Hover effect line */}
                    <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            className="mt-6 lg:mt-12"
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
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="h-px w-10 bg-white/50" />
                    <h3 className="text-xl lg:text-2xl font-bold text-white font-[Cambria]">
                      Stay Organized, Stay Ahead
                    </h3>
                    <div className="h-px w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-base font-serif italic max-w-2xl mx-auto">
                    Effective planning leads to academic success and balanced school life
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Academic Excellence</h4>
                    <p className="text-white/80 text-xs">
                      Proper planning ensures thorough preparation for all examinations and academic requirements
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Event Participation</h4>
                    <p className="text-white/80 text-xs">
                      Never miss important school events, competitions, and extracurricular activities
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Family Coordination</h4>
                    <p className="text-white/80 text-xs">
                      Easily coordinate family plans with school schedule for balanced lifestyle
                    </p>
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

export default CalendarPage;