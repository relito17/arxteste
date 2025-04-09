import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import ProcessSection from './components/ProcessSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from "./components/ui/BackToTopButton";
import CustomerSupportAI from './pages/CustomerSupportAI';
import CustomAutomation from './pages/CustomAutomation';
import AIOutreach from './pages/AIOutreach';
import AppDevelopment from './pages/AppDevelopment';
import ScheduleCall from './components/ScheduleCall';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const Home = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log("Home component rendered!"); // Debugging log

    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <CustomCursor />
      <Navbar />
      <BackToTop />
      <Hero />
      <div className="section-divider" />
      <WhyUs />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <ProcessSection />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <ContactSection />
      <div className="section-divider" />
      <Footer />
    </div>
  );
};

function App() {
  console.log("App loaded successfully!"); // Debugging log

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule-call" element={<ScheduleCall />} />
        <Route path="/customer-support-ai" element={<CustomerSupportAI />} />
        <Route path="/ai-outreach" element={<AIOutreach />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/custom-automations" element={<CustomAutomation />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
