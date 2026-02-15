import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Download, 
  FileText, 
  Search, 
  ChevronDown, 
  ChevronUp,
  Calendar,
  Eye,
  BookOpen,
  GraduationCap,
  Award,
  File,
  Filter,
  Users
} from 'lucide-react';

// Import banner image (replace with your actual banner)
import downloadsBanner from '../assets/kns-logo.png';

// Sample PDF data - Replace with your actual PDF files
const pdfDocuments = [
  {
    id: 1,
    title: "School Prospectus 2024-2025",
    description: "Complete guide to Kathmandu National School - curriculum, facilities, admission process, and more.",
    category: "prospectus",
    subCategory: "admissions",
    fileUrl: "/pdfs/prospectus-2024.pdf",
    fileSize: "2.8 MB",
    pages: 24,
    date: "2024-01-15",
    downloads: 1245,
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    featured: true,
    tags: ["Admissions", "School Info", "Curriculum"]
  },
  {
    id: 2,
    title: "Academic Calendar 2024-2025",
    description: "Important dates including holidays, exam schedules, parent-teacher meetings, and events.",
    category: "calendar",
    subCategory: "academic",
    fileUrl: "/pdfs/academic-calendar-2024.pdf",
    fileSize: "1.2 MB",
    pages: 8,
    date: "2024-01-10",
    downloads: 3456,
    icon: Calendar,
    color: "from-green-500 to-green-600",
    featured: true,
    tags: ["Schedule", "Dates", "Planning"]
  },
  {
    id: 3,
    title: "Admission Form 2024-2025",
    description: "Application form for new student admissions for the academic year 2024-2025.",
    category: "forms",
    subCategory: "admissions",
    fileUrl: "/pdfs/admission-form-2024.pdf",
    fileSize: "856 KB",
    pages: 4,
    date: "2024-01-05",
    downloads: 892,
    icon: FileText,
    color: "from-purple-500 to-purple-600",
    featured: true,
    tags: ["Application", "New Student"]
  },
  {
    id: 4,
    title: "School Uniform Guidelines",
    description: "Detailed information about school uniform requirements for all grades.",
    category: "guidelines",
    subCategory: "student-life",
    fileUrl: "/pdfs/uniform-guidelines.pdf",
    fileSize: "1.5 MB",
    pages: 12,
    date: "2023-12-20",
    downloads: 567,
    icon: FileText,
    color: "from-orange-500 to-orange-600",
    featured: false,
    tags: ["Uniform", "Dress Code"]
  },
  {
    id: 5,
    title: "Exam Routine - Grade 10 (2024)",
    description: "Complete examination schedule for Grade 10 students including SEE preparation.",
    category: "exam",
    subCategory: "academic",
    fileUrl: "/pdfs/exam-routine-grade10.pdf",
    fileSize: "654 KB",
    pages: 3,
    date: "2024-02-01",
    downloads: 2345,
    icon: GraduationCap,
    color: "from-red-500 to-red-600",
    featured: true,
    tags: ["Exams", "Schedule", "Grade 10"]
  },
  {
    id: 6,
    title: "Extra-Curricular Activities Brochure",
    description: "Overview of sports, clubs, and cultural activities available at KNS.",
    category: "activities",
    subCategory: "student-life",
    fileUrl: "/pdfs/eca-brochure.pdf",
    fileSize: "3.2 MB",
    pages: 18,
    date: "2023-11-15",
    downloads: 432,
    icon: Award,
    color: "from-yellow-500 to-yellow-600",
    featured: false,
    tags: ["Activities", "Sports", "Clubs"]
  },
  {
    id: 7,
    title: "Parent Handbook 2024",
    description: "Essential information for parents including communication guidelines and policies.",
    category: "handbook",
    subCategory: "parents",
    fileUrl: "/pdfs/parent-handbook-2024.pdf",
    fileSize: "4.1 MB",
    pages: 32,
    date: "2024-01-20",
    downloads: 678,
    icon: Users,
    color: "from-teal-500 to-teal-600",
    featured: false,
    tags: ["Parents", "Policies", "Guidelines"]
  },
  {
    id: 8,
    title: "Holiday List 2024",
    description: "Official list of school holidays for the academic year 2024.",
    category: "calendar",
    subCategory: "academic",
    fileUrl: "/pdfs/holiday-list-2024.pdf",
    fileSize: "452 KB",
    pages: 2,
    date: "2024-01-12",
    downloads: 1890,
    icon: Calendar,
    color: "from-cyan-500 to-cyan-600",
    featured: false,
    tags: ["Holidays", "Schedule"]
  },
  {
    id: 9,
    title: "Fee Structure 2024-2025",
    description: "Detailed fee breakdown for all grades including tuition, activities, and other charges.",
    category: "fees",
    subCategory: "admissions",
    fileUrl: "/pdfs/fee-structure-2024.pdf",
    fileSize: "1.1 MB",
    pages: 6,
    date: "2024-01-18",
    downloads: 2100,
    icon: FileText,
    color: "from-indigo-500 to-indigo-600",
    featured: true,
    tags: ["Fees", "Payment", "Admissions"]
  },
  {
    id: 10,
    title: "Transportation Routes 2024",
    description: "Complete information about school bus routes, stops, and transportation policies.",
    category: "transport",
    subCategory: "facilities",
    fileUrl: "/pdfs/transport-routes-2024.pdf",
    fileSize: "2.3 MB",
    pages: 15,
    date: "2024-01-08",
    downloads: 543,
    icon: FileText,
    color: "from-pink-500 to-pink-600",
    featured: false,
    tags: ["Transport", "Bus Routes"]
  }
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Documents', icon: File },
  { id: 'prospectus', name: 'Prospectus', icon: BookOpen, color: 'bg-blue-500' },
  { id: 'calendar', name: 'Calendar', icon: Calendar, color: 'bg-green-500' },
  { id: 'forms', name: 'Forms', icon: FileText, color: 'bg-purple-500' },
  { id: 'exam', name: 'Exam Related', icon: GraduationCap, color: 'bg-red-500' },
  { id: 'guidelines', name: 'Guidelines', icon: FileText, color: 'bg-orange-500' },
  { id: 'activities', name: 'Activities', icon: Award, color: 'bg-yellow-500' },
  { id: 'handbook', name: 'Handbooks', icon: Users, color: 'bg-teal-500' },
  { id: 'fees', name: 'Fees', icon: FileText, color: 'bg-indigo-500' },
  { id: 'transport', name: 'Transport', icon: FileText, color: 'bg-pink-500' }
];

const DownloadsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFilters, setExpandedFilters] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<typeof pdfDocuments[0] | null>(null);
  const [sortBy, setSortBy] = useState('date'); // 'date', 'downloads', 'title'
  const [sortOrder, setSortOrder] = useState('desc');

  // Filter documents based on search and category
  const filteredDocuments = pdfDocuments.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort documents
  const sortedDocuments = [...filteredDocuments].sort((a: typeof pdfDocuments[0], b: typeof pdfDocuments[0]) => {
    let comparison = 0;
    if (sortBy === 'date') {
      comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === 'downloads') {
      comparison = a.downloads - b.downloads;
    } else if (sortBy === 'title') {
      comparison = a.title.localeCompare(b.title);
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Toggle sort
  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  // Handle download
  const handleDownload = (doc: typeof pdfDocuments[0], e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app, this would trigger file download
    // window.open(doc.fileUrl, '_blank');
    console.log(`Downloading: ${doc.title}`);
  };

  // Handle view
  const handleView = (doc: typeof pdfDocuments[0]) => {
    setSelectedDocument(doc);
  };

  // Get category name
  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : 'Document';
  };

  // Get category color
  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.color : 'bg-primary';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative py-6 sm:py-8 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={downloadsBanner}
            alt="Downloads - Kathmandu National School" 
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
              Downloads & Resources
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
              Access Important Documents, Forms, and Resources
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Content */}
      <section className="relative py-6 sm:py-8 lg:py-16 bg-white">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          {/* PDF Preview Modal */}
          {selectedDocument && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedDocument(null)}
            >
              <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-3 flex items-center justify-between border-b">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">{selectedDocument?.title}</span>
                  </div>
                  <button
                    onClick={() => setSelectedDocument(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6 text-center">
                  <FileText className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{selectedDocument?.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{selectedDocument?.description}</p>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <File className="w-3 h-3" />
                      {selectedDocument?.fileSize}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Eye className="w-3 h-3" />
                      {selectedDocument?.pages} pages
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Download className="w-3 h-3" />
                      {selectedDocument?.downloads} downloads
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={selectedDocument?.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all text-sm flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View PDF
                    </a>
                    <a
                      href={selectedDocument?.fileUrl}
                      download
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all text-sm flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Mobile View */}
          <div className="block lg:hidden">
            {/* Search and Filters */}
            <div className="mb-6">
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-6 w-0.5 bg-red-500 rounded-full"></div>
                  <h2 className="text-lg font-bold text-gray-900 font-playfair">
                    Downloads
                  </h2>
                </div>

                {/* Search */}
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                  />
                </div>

                {/* Filters Accordion */}
                <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setExpandedFilters(!expandedFilters)}
                    className="w-full p-2 flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Filter className="w-3 h-3 text-primary" />
                      <span className="font-medium text-gray-900 text-xs">Filter by Category</span>
                    </div>
                    {expandedFilters ? (
                      <ChevronUp className="w-3 h-3 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-3 h-3 text-gray-500" />
                    )}
                  </button>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${
                    expandedFilters ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-2 pt-0">
                      <div className="flex flex-wrap gap-1.5">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-2 py-1 rounded text-xs transition-all ${
                              selectedCategory === category.id 
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

                {/* Sort Options */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-600">Sort by:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleSort('date')}
                      className={`px-2 py-1 rounded text-xs flex items-center gap-1 ${
                        sortBy === 'date' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      Date
                      {sortBy === 'date' && (
                        <ChevronDown className={`w-3 h-3 transition-transform ${sortOrder === 'asc' ? 'rotate-180' : ''}`} />
                      )}
                    </button>
                    <button
                      onClick={() => toggleSort('downloads')}
                      className={`px-2 py-1 rounded text-xs flex items-center gap-1 ${
                        sortBy === 'downloads' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      Popular
                      {sortBy === 'downloads' && (
                        <ChevronDown className={`w-3 h-3 transition-transform ${sortOrder === 'asc' ? 'rotate-180' : ''}`} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="bg-primary/5 rounded-lg p-2 border border-primary/10">
                    <div className="text-base font-bold text-primary mb-0.5">{pdfDocuments.length}</div>
                    <div className="text-gray-600 text-xs">Total Docs</div>
                  </div>
                  <div className="bg-green-500/5 rounded-lg p-2 border border-green-500/10">
                    <div className="text-base font-bold text-green-600 mb-0.5">
                      {pdfDocuments.reduce((acc, doc) => acc + doc.downloads, 0)}
                    </div>
                    <div className="text-gray-600 text-xs">Downloads</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents List - Mobile */}
            <div className="space-y-3">
              {sortedDocuments.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all"
                >
                  <div className="p-3">
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${doc.color} flex items-center justify-center flex-shrink-0`}>
                        <doc.icon className="w-5 h-5 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-bold text-gray-900 text-sm line-clamp-2">
                            {doc.title}
                          </h3>
                          {doc.featured && (
                            <span className="px-1.5 py-0.5 bg-red-500 text-white text-xs rounded whitespace-nowrap">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-600 text-xs mt-1 line-clamp-2">
                          {doc.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {doc.tags.map((tag, i) => (
                            <span key={i} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Meta */}
                        <div className="flex items-center gap-3 mt-2 text-gray-500 text-xs">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(doc.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <File className="w-3 h-3" />
                            {doc.fileSize}
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {doc.downloads}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center justify-end gap-2 mt-3 pt-2 border-t border-gray-100">
                      <button
                        onClick={() => handleView(doc)}
                        className="px-2 py-1 text-primary border border-primary/20 rounded hover:bg-primary/5 transition-colors text-xs flex items-center gap-1"
                      >
                        <Eye className="w-3 h-3" />
                        Preview
                      </button>
                      <a
                        href={doc.fileUrl}
                        download
                        onClick={(e) => handleDownload(doc, e)}
                        className="px-2 py-1 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-xs flex items-center gap-1"
                      >
                        <Download className="w-3 h-3" />
                        Download
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* No Results */}
              {sortedDocuments.length === 0 && (
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-sm font-bold text-gray-700 mb-1">No Documents Found</h3>
                  <p className="text-gray-600 text-xs mb-3">
                    Try adjusting your search or filters
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="px-3 py-1 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-xs"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:block">
            {/* Header */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-1 bg-red-500 rounded-full"></div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-1">
                      Download Center
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Access all school documents, forms, and resources in one place
                    </p>
                  </div>
                </div>
                
                {/* Search */}
                <div className="w-80">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search documents..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Filters Bar */}
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3 py-1.5 rounded-md transition-all text-sm whitespace-nowrap flex items-center gap-1.5 ${
                        selectedCategory === category.id 
                          ? `${category.id === 'all' ? 'bg-primary' : category.color} text-white` 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <category.icon className="w-3.5 h-3.5" />
                      {category.name}
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort:</span>
                  <button
                    onClick={() => toggleSort('date')}
                    className={`px-3 py-1.5 rounded-md text-sm flex items-center gap-1 ${
                      sortBy === 'date' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Date
                    {sortBy === 'date' && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${sortOrder === 'asc' ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  <button
                    onClick={() => toggleSort('downloads')}
                    className={`px-3 py-1.5 rounded-md text-sm flex items-center gap-1 ${
                      sortBy === 'downloads' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Popular
                    {sortBy === 'downloads' && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${sortOrder === 'asc' ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">{pdfDocuments.length}</div>
                    <div className="text-gray-600 text-sm">Total Documents</div>
                  </div>
                  <FileText className="w-8 h-8 text-primary/40" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-lg p-4 border border-green-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {pdfDocuments.reduce((acc, doc) => acc + doc.downloads, 0).toLocaleString()}
                    </div>
                    <div className="text-gray-600 text-sm">Total Downloads</div>
                  </div>
                  <Download className="w-8 h-8 text-green-500/40" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {pdfDocuments.filter(d => d.featured).length}
                    </div>
                    <div className="text-gray-600 text-sm">Featured Docs</div>
                  </div>
                  <Award className="w-8 h-8 text-purple-500/40" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {new Date().getFullYear()}
                    </div>
                    <div className="text-gray-600 text-sm">Academic Year</div>
                  </div>
                  <Calendar className="w-8 h-8 text-blue-500/40" />
                </div>
              </div>
            </div>

            {/* Documents Grid */}
            <div className="grid grid-cols-1 gap-4">
              {sortedDocuments.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden group"
                >
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${doc.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <doc.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-bold text-gray-900 font-playfair">
                                {doc.title}
                              </h3>
                              {doc.featured && (
                                <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm mb-2 max-w-2xl">
                              {doc.description}
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {doc.tags.map((tag, i) => (
                                <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            {/* Meta */}
                            <div className="flex items-center gap-4 text-gray-500 text-xs">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(doc.date)}
                              </div>
                              <div className="flex items-center gap-1">
                                <File className="w-3 h-3" />
                                {doc.fileSize}
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {doc.pages} pages
                              </div>
                              <div className="flex items-center gap-1">
                                <Download className="w-3 h-3" />
                                {doc.downloads.toLocaleString()} downloads
                              </div>
                            </div>
                          </div>
                          
                          {/* Actions */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleView(doc)}
                              className="px-3 py-1.5 text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors text-sm flex items-center gap-1.5"
                            >
                              <Eye className="w-4 h-4" />
                              Preview
                            </button>
                            <a
                              href={doc.fileUrl}
                              download
                              onClick={(e) => handleDownload(doc, e)}
                              className="px-3 py-1.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm flex items-center gap-1.5"
                            >
                              <Download className="w-4 h-4" />
                              Download
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getCategoryColor(doc.category)}`}></div>
                      <span className="text-xs text-gray-500">
                        Category: {getCategoryName(doc.category)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results - Desktop */}
            {sortedDocuments.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-700 mb-2">No Documents Found</h3>
                <p className="text-gray-600 text-sm mb-4">
                  No documents match your search criteria. Try adjusting your filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
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

export default DownloadsPage;