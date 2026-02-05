import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
      name: "Principal's Office",
      email: "principal@kns.edu.np",
      phone: "+977 4490821 Ext. 101",
      hours: "10:00 AM - 12:00 PM"
    },
    {
      name: "Admissions Office",
      email: "admissions@kns.edu.np",
      phone: "+977 4490821 Ext. 102",
      hours: "9:00 AM - 3:00 PM"
    },
    {
      name: "Accounts Department",
      email: "accounts@kns.edu.np",
      phone: "+977 4490821 Ext. 103",
      hours: "9:00 AM - 3:00 PM"
    },
    {
      name: "Academic Office",
      email: "academic@kns.edu.np",
      phone: "+977 4490821 Ext. 104",
      hours: "9:00 AM - 4:00 PM"
    }
  ];

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
      {/* Hero Banner - Same as home page */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[Cambria] mb-4">
              Contact Us
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
              Get in Touch with Kathmandu National School
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Main Content */}
      <section className="relative py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-6">
          {/* Main Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Left Column - Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {/* School Information Card */}
              <div className="bg-white rounded-lg p-4 lg:p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-6 w-1 bg-red-500 rounded-full"></div>
                  <h2 className="text-xl lg:text-3xl font-bold text-gray-900 font-[Cambria]">
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
                
                {/* Map Section */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="font-bold text-gray-900 text-base mb-3">Location Map</h3>
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg overflow-hidden border border-gray-200">
                    {/* Map Container - Google Maps Embed */}
                    <div className="h-48 w-full">
                      <iframe
                        title="Kathmandu National School Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8964234242197!2d85.3399709753094!3d27.68788537618752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a64a5a7d69%3A0x3047962879f36bf!2sOld%20Baneshwor%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2s!4v1701264000000!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-t-lg"
                      />
                    </div>
                    
                    {/* Map Details */}
                    <div className="bg-white p-3 border-t border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="text-center md:text-left">
                          <div className="flex items-center gap-2 justify-center md:justify-start">
                            <MapPin className="w-3 h-3 text-primary" />
                            <p className="text-xs font-medium text-gray-900">Address</p>
                          </div>
                          <p className="text-gray-700 text-xs mt-1">{contactDetails.address}</p>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-xs text-gray-500 mb-1">Coordinates</p>
                          <div className="flex items-center justify-center gap-3">
                            <div>
                              <p className="font-medium text-gray-900 text-xs">27.6878° N</p>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 text-xs">85.3465° E</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center md:text-right">
                          <a
                            href="https://www.google.com/maps?q=Kathmandu+National+School+Old+Baneshwor,+Kathmandu,+Nepal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 group text-xs"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span className="font-medium">Open in Google Maps</span>
                          </a>
                        </div>
                      </div>
                      
                      {/* Area Info */}
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-xs text-gray-600 text-center">
                          Located in Old Baneshwor, central Kathmandu. Easily accessible from major roads.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Feedback Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-lg p-4 lg:p-6 border border-gray-200 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-6 w-1 bg-blue-500 rounded-full"></div>
                  <h2 className="text-xl lg:text-3xl font-bold text-gray-900 font-[Cambria]">
                    Send Us Feedback
                  </h2>
                </div>
                
                <p className="text-gray-600 text-sm mb-6">
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
                        <p className="text-green-600 text-xs mt-1">A copy has been sent to your email: {formData.email}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* Feedback Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        disabled={formStatus.submitting}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        placeholder="(977) 123-4567"
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
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        placeholder="Enter subject"
                      />
                    </div>
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
                  
                  <div className="flex items-center gap-3 pt-1">
                    <motion.button
                      type="submit"
                      disabled={formStatus.submitting}
                      whileHover={{ scale: formStatus.submitting ? 1 : 1.02 }}
                      whileTap={{ scale: formStatus.submitting ? 1 : 0.98 }}
                      className="px-6 py-2 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-lg hover:from-primary/90 hover:to-primary/80 transition-all duration-300 flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
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
                    </motion.button>
                    
                    <p className="text-xs text-gray-500">
                      * Required fields
                    </p>
                  </div>
                  
                  {/* Privacy Notice */}
                  <div className="pt-1">
                    <p className="text-xs text-gray-500">
                      By submitting this form, you agree to our privacy policy. Your information will be used only to respond to your inquiry.
                    </p>
                  </div>
                </form>
                
                {/* Additional Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-gray-600 text-xs">
                    <span className="font-bold text-gray-900 text-sm">Need immediate assistance?</span> Call us at {contactDetails.telephone} during office hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Contact Section */}
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
                      Quick Contact Information
                    </h3>
                    <div className="h-px w-8 bg-white/50" />
                  </div>
                  <p className="text-white/90 text-base font-serif italic max-w-2xl mx-auto">
                    Connect with Kathmandu National School through multiple channels
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Call Us</h4>
                    <p className="text-white/80 text-sm">{contactDetails.telephone}</p>
                    <p className="text-white/60 text-xs mt-1">Office Hours Only</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Email Us</h4>
                    <p className="text-white/80 text-sm">{contactDetails.email}</p>
                    <p className="text-white/60 text-xs mt-1">24/7 Response</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Visit Us</h4>
                    <p className="text-white/80 text-sm">Old Baneshwor</p>
                    <p className="text-white/60 text-xs mt-1">Kathmandu, Nepal</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Office Hours</h4>
                    <p className="text-white/80 text-sm">9:00 AM - 4:00 PM</p>
                    <p className="text-white/60 text-xs mt-1">Sunday - Friday</p>
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

export default ContactPage;