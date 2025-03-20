import { useState } from 'react';
import { Calendar, Mail } from 'lucide-react';
import ContactForm from './ContactForm';
import SectionTitle from './SectionTitle';
import { useThemeStore } from '../store/useThemeStore';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const isDark = useThemeStore((state) => state.isDark);
  const navigate = useNavigate();

  /*const handleScheduleCall = () => {
    window.open('/schedule-call', '_blank');
  };*/

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <SectionTitle title="Contact Us" />
        <div className="text-center mb-16 reveal">
          <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Your Journey Begins <br></br>
            <span className="gradient-text">
              {' '}
              <em>Here </em>
            </span>
            &nbsp;
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Choose how you'd like to connect with us
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 reveal">
          <button
            onClick={() => setShowContactForm(true)}
            className={`group relative w-full md:w-64 h-64 ${isDark ? 'bg-black' : 'bg-white'} ${isDark ? 'border-gray-800' : 'border-gray-200'} border rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#f9d342] opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="h-full flex flex-col items-center justify-center p-6">
              <Mail className="w-12 h-12 mb-4 text-[#FF6A00]" />
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-center`}>
                Fill out our contact form and we'll get back to you
              </p>
            </div>
          </button>

          <button
            onClick={() => navigate('/schedule-call')}
            className={`group relative w-full md:w-64 h-64 ${isDark ? 'bg-black' : 'bg-white'} ${isDark ? 'border-gray-800' : 'border-gray-200'} border rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#f9d342] opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="h-full flex flex-col items-center justify-center p-6">
              <Calendar className="w-12 h-12 mb-4 text-[#FF6A00]" />
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Schedule a Meeting</h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-center`}>
                Book a time to discuss your needs with our team
              </p>
            </div>
          </button>
        </div>
      </div>

      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </section>
  );
};

export default ContactSection;