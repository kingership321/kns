import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, AlertCircle, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import QuickLinksSection from '../components/LinksSection';

// Import contact page image
import contactImage from '../../src/assets/teachers/grppic.jpg';

// Initialize EmailJS with your Public Key
// Replace with your actual EmailJS Public Key
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE'; // Get from EmailJS dashboard
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE'; // Get from EmailJS dashboard
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE'; // Get from EmailJS dashboard

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });
  
  const [expandedContact, setExpandedContact] = useState({});

  const contactDetails = {
    name: "Kathmandu National School",
    address: "Old Baneshwor-34, Kathmandu, Nepal",
    telephone: "+977 4490821",
    fax: "+977 4490821",
    email: "info@kns.edu.np",
    officeHours: "Sunday-Friday: 9:00 AM - 4:00 PM",
    principalOffice: "For Principal's Office: 10:00 AM - 12:00 PM"
  };

  const departments = [
    {
      id: 'principal',
      name: "Principal's Office",
      email: "principal@kns.edu.np",
      phone: "+977 4490821 Ext. 101",
      hours: "10:00 AM - 12:00 PM"
    },
    {
      id: 'admissions',
      name: "Admissions Office",
      email: "admissions@kns.edu.np",
      phone: "+977 4490821 Ext. 102",
      hours: "9:00 AM - 3:00 PM"
    },
    {
      id: 'accounts',
      name: "Accounts Department",
      email: "accounts@kns.edu.np",
      phone: "+977 4490821 Ext. 103",
      hours: "9:00 AM - 3:00 PM"
    },
    {
      id: 'academic',
      name: "Academic Office",
      email: "academic@kns.edu.np",
      phone: "+977 4490821 Ext. 104",
      hours: "9:00 AM - 4:00 PM"
    }
  ];

  const toggleContact = (id) => {
    setExpandedContact(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Please fill all required fields'
      });
      return;
    }

    setFormStatus({ 
      submitting: true, 
      submitted: false,
      error: null 
    });
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message,
        to_email: 'info@kns.edu.np', // School's email
        date: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        school_name: 'Kathmandu National School'
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setFormStatus({ 
          submitting: false, 
          submitted: true,
          error: null 
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 8 seconds
        setTimeout(() => {
          setFormStatus({ 
            submitting: false, 
            submitted: false,
            error: null 
          });
        }, 8000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({ 
        submitting: false, 
        submitted: false,
        error: 'Failed to send message. Please try again later or contact us directly.'
      });
      
      // Clear error after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, error: null }));
      }, 5000);
    }
  };

  // Function to format phone number (optional enhancement)
  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const phoneNumber = value.replace(/\D/g, '');
    
    // Format based on length
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else if (phoneNumber.length <= 10) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)} ext. ${phoneNumber.slice(10)}`;
    }
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      phone: formattedPhone
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Optimized for Mobile */}
      <section className="relative py-6 sm:py-8 lg:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={contactImage}
            alt="Kathmandu National School Contact" 
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
              Contact Us
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
              Get in Touch with Kathmandu National School
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content - Mobile Optimized */}
      <section className="relative py-6 sm:py-8 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          {/* Mobile Contact Details Accordion */}
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
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-display">
                    School Information
                  </h2>
                </div>
                
                {/* Mobile Contact Details */}
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 text-xs sm:text-sm">{contactDetails.name}</p>
                      <p className="text-gray-700 text-xs sm:text-sm">{contactDetails.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 text-xs sm:text-sm">Tel: {contactDetails.telephone}</p>
                      <p className="text-gray-700 text-xs sm:text-sm">Fax: {contactDetails.fax}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 text-xs sm:text-sm">{contactDetails.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 text-xs sm:text-sm">{contactDetails.officeHours}</p>
                      <p className="text-gray-700 text-xs mt-0.5">{contactDetails.principalOffice}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Departments Accordion */}
            <div className="space-y-3 sm:space-y-4 mb-6">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <button
                      onClick={() => toggleContact(dept.id)}
                      className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 text-left">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 font-display">
                            {dept.name}
                          </h3>
                          <div className="h-0.5 w-8 bg-red-500 rounded-full mt-1"></div>
                        </div>
                      </div>
                      {expandedContact[dept.id] ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedContact[dept.id] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="p-3 sm:p-4 pt-0">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3 text-primary" />
                            <span className="text-gray-700 text-xs sm:text-sm">{dept.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3 text-primary" />
                            <span className="text-gray-700 text-xs sm:text-sm">{dept.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3 text-primary" />
                            <span className="text-gray-700 text-xs sm:text-sm">{dept.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-6 w-0.5 bg-primary rounded-full"></div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-display">
                    Send Us Feedback
                  </h2>
                </div>
                
                <p className="text-gray-700 text-xs sm:text-sm mb-3">
                  We value your feedback. Please fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                {/* Error Message */}
                {formStatus.error && (
                  <div className="mb-3 bg-red-50 border border-red-200 rounded-lg p-2">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-3 h-3 text-red-600" />
                      <p className="text-red-700 text-xs">{formStatus.error}</p>
                    </div>
                  </div>
                )}
                
                {/* Success Message */}
                {formStatus.submitted && (
                  <div className="mb-3 bg-green-50 border border-green-200 rounded-lg p-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                      <p className="text-green-700 text-xs">Your message has been sent successfully!</p>
                    </div>
                  </div>
                )}
                
                {/* Feedback Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={formStatus.submitting}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={formStatus.submitting}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={formStatus.submitting}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                      placeholder="Enter subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      disabled={formStatus.submitting}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed resize-none text-sm"
                      placeholder="Type your message here..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="w-full px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {formStatus.submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-3 h-3" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <p className="text-gray-500 text-xs">
                    * Required fields. By submitting, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Mobile Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-primary/90 to-primary/80 rounded-lg p-4 sm:p-5 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    Quick Contact
                  </h3>
                </div>
                
                <div className="space-y-3 text-white/90 text-xs sm:text-sm">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
                      <div className="text-white text-lg sm:text-xl font-bold mb-0.5">4</div>
                      <div className="text-white/80 text-xs">Departments</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
                      <div className="text-white text-lg sm:text-xl font-bold mb-0.5">24/7</div>
                      <div className="text-white/80 text-xs">Email Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - School Information */}
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
                    School Information
                  </h2>
                </div>
                
                {/* School Details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1">Address</h3>
                      <p className="text-gray-700 text-sm">{contactDetails.name}</p>
                      <p className="text-gray-700 text-sm">{contactDetails.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1">Phone & Fax</h3>
                      <p className="text-gray-700 text-sm">Telephone: {contactDetails.telephone}</p>
                      <p className="text-gray-700 text-sm">FAX: {contactDetails.fax}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1">Email</h3>
                      <p className="text-gray-700 text-sm">{contactDetails.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1">Office Hours</h3>
                      <p className="text-gray-700 text-sm">{contactDetails.officeHours}</p>
                      <p className="text-gray-700 text-xs mt-1">{contactDetails.principalOffice}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Departments Section */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-primary rounded-full"></div>
                  <h2 className="text-xl font-bold text-gray-900 font-display">
                    Department Contacts
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={dept.id} className={`p-3 bg-gray-50 rounded-lg border border-gray-100 ${index > 0 ? 'mt-3' : ''}`}>
                      <h3 className="font-bold text-gray-900 text-sm mb-2">{dept.name}</h3>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3 h-3 text-primary" />
                          <span className="text-gray-700 text-xs">{dept.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-3 h-3 text-primary" />
                          <span className="text-gray-700 text-xs">{dept.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-primary" />
                          <span className="text-gray-700 text-xs">{dept.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-0.5 bg-primary rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900 font-display">
                    Send Us Feedback
                  </h2>
                </div>
                
                <p className="text-gray-700 text-sm mb-6">
                  We value your feedback. Please fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                {/* Error Message */}
                {formStatus.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3"
                  >
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <div>
                        <p className="font-bold text-red-800 text-sm">Error</p>
                        <p className="text-red-700 text-xs">{formStatus.error}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* Success Message */}
                {formStatus.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 bg-green-50 border border-green-200 rounded-lg p-3"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <div>
                        <p className="font-bold text-green-800 text-sm">Thank You!</p>
                        <p className="text-green-700 text-xs">Your message has been sent successfully. We'll contact you soon.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* Feedback Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={formStatus.submitting}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={formStatus.submitting}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={formStatus.submitting}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                      placeholder="Enter subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      disabled={formStatus.submitting}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed resize-none text-sm"
                      placeholder="Type your message here..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="w-full px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {formStatus.submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-3 h-3" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <p className="text-gray-500 text-xs text-center">
                    * Required fields. By submitting, you agree to our privacy policy.
                  </p>
                </form>
              </div>
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
                      Quick Contact Information
                    </h3>
                    <div className="h-px w-6 sm:w-8 md:w-10 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-sm sm:text-base font-serif italic max-w-2xl mx-auto">
                    Connect with Kathmandu National School through multiple channels
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Phone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Call Us</h4>
                    <p className="text-white/80 text-xs sm:text-sm">{contactDetails.telephone}</p>
                    <p className="text-white/60 text-xs mt-0.5">Office Hours Only</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Mail className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Email Us</h4>
                    <p className="text-white/80 text-xs sm:text-sm">{contactDetails.email}</p>
                    <p className="text-white/60 text-xs mt-0.5">24/7 Response</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Visit Us</h4>
                    <p className="text-white/80 text-xs sm:text-sm">Old Baneshwor</p>
                    <p className="text-white/60 text-xs mt-0.5">Kathmandu, Nepal</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Clock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Office Hours</h4>
                    <p className="text-white/80 text-xs sm:text-sm">9:00 AM - 4:00 PM</p>
                    <p className="text-white/60 text-xs mt-0.5">Sunday - Friday</p>
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

export default ContactPage;

