import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  Users,
  Clock,
  XCircle,
  TrendingUp,
  ArrowRight,
  Bot,
  Settings,
  RefreshCw,
} from 'lucide-react';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { useNavigate } from 'react-router-dom';
import { useThemeStore } from '../store/useThemeStore';

import CustomCursor from '../components/CustomCursor';
import ContactForm from '../components/ContactForm';
import BackToTop from "../components/ui/BackToTopButton";
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import { useLocation } from 'react-router-dom';
import OutreachCard2 from '../components/services/other/OutreachCard2';

const words = ["Engagement", "Conversions", "Growth", "Success", "ROI"];

const AIOutreach = () => {
  const isDark = useThemeStore((state) => state.isDark);
  const navigate = useNavigate();
  const location = useLocation();
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('action');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (words[index]) {
      if (subIndex === words[index].length + 1 && !isDeleting) {
        setTimeout(() => setIsDeleting(true), 1200);
        return;
      }
      if (subIndex === 0 && isDeleting) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, words]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'} font-inter`}>
      <CustomCursor />
      <BackToTop />
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <section className={`pt-32 pb-20 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center reveal">
      <h1 className="text-5xl md:text-7xl font-bold mb-8">
        AI-Powered Outreach That Generate{' '}
        <br></br>
        <span className="gradient-text">
          <em>
            {`${words[index].substring(0, subIndex)}`}
          </em>
          <span className={`cursor ${blink ? 'opacity-100' : 'opacity-0'}`}>
            |
          </span>
        </span>
      </h1>
      <p className={`text-3xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        Scale Your Communication, Amplify Your Results
      </p>
      <p className={`text-xl text-gray-400 mb-12 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        Transform your outreach with AI-driven automation that personalizes every
        interaction, optimizes timing, and consistently drives higher engagement
        rates—sending over 1,000 perfectly crafted emails daily.
      </p>

      <div className="flex flex-col items-center mb-12 reveal">
        <div className="space-y-3 text-xl text-gray-400">
          <div className="flex items-center gap-2">
            <ArrowRight className={`w-5 h-5 mt-1 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className={`${isDark ? 'text-white' : 'text-black'}`}>1000+ Personalized Emails Daily</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRight className={`w-5 h-5 mt-1 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className={`${isDark ? 'text-white' : 'text-black'}`}>40% Higher Response Rates</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRight className={`w-5 h-5 mt-1 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className={`${isDark ? 'text-white' : 'text-black'}`}>Smart Follow-up Optimization</span>
          </div>
        </div>
      </div>

      <div className="flex gap-6 justify-center">
        <button
          onClick={() => navigate('/schedule-call')}
          className="bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2"
        >
          Schedule Demo
          <ArrowRight className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
        </button>
        <button
          className={`border ${isDark ? 'border-[#FF6A00]' : 'border-[#FF6A00]'} ${isDark ? 'text-white' : 'text-black'} px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FF6A00]/10 transition-colors`}
          onClick={() => setShowContactForm(true)}
        >
          Get in touch
        </button>
      </div>
    </div>
  </div>
  {showContactForm && (
    <ContactForm onClose={() => setShowContactForm(false)} />
  )}
</section>

<BackButton />

<div className={`section-divider ${isDark ? 'section-divider' : 'section-divider-light'} `} />

<section className={`py-20 ${isDark ? 'bg-black/50' : 'bg-gray-50'} relative overflow-hidden`}>
  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/5 to-transparent opacity-50" />
  
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="reveal">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Send Smarter,
          <span className="gradient-text"> Convert Better </span>
        </h2>
        
        <p className={`text-xl text-gray-300 mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Watch our AI craft personalized messages, optimize send times, and
          handle follow-ups automatically—all while maintaining a human touch.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            className="bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2"
            onClick={scrollToContact}
          >
            🚀 Start Automating Today
            <ArrowRight className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
          </button>
        </div>
        
        <p
          className={`text-sm ${isDark ? 'text-white' : 'text-gray-700'}`}
          onClick={scrollToContact}
        >
          📅 Book a Meeting
        </p>
      </div>
      <div className="w-full h-[400px]">
        <OutreachCard2 onClick={() => {}} />
      </div>
    </div>
  </div>
</section>


      <div className={`section-divider ${isDark ? 'section-divider' : 'section-divider-light'} `} />

      <section className={`py-20 ${isDark ? 'bg-black/50' : 'bg-white'}`}>
        <div className="container mx-auto px-4 text-center mb-16 reveal">
          <h2 className="text-5xl md:text-7xl font-bold mb-10">
            The <span className="gradient-text"><em>COST&nbsp;</em></span> of Manual
            <br />Outreach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Time Drain',
                description:
                  'Hours wasted on repetitive tasks instead of focusing on strategy and growth.',
              },
              {
                icon: <XCircle className="w-8 h-8" />,
                title: 'Missed Opportunities',
                description:
                  'Inconsistent follow-ups and poor timing lead to lost deals and reduced conversion rates.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Scale Limitations',
                description:
                  'Manual processes cap your reach, limiting growth potential and market impact.',
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Poor Analytics',
                description:
                  'Lack of data-driven insights makes it impossible to optimize and improve results.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="feature-card text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="p-3 bg-[#FF6A00]/10 rounded-lg w-fit mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`section-divider ${isDark ? 'section-divider' : 'section-divider-light'} `} />

      <section className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center mb-16 reveal">
      <h2 className={`text-5xl md:text-7xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>
        Outreach That Works{' '}
        <span className="gradient-text"><em>SMARTER&nbsp;</em></span>
      </h2>
      <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
        Our AI-powered platform automates your outreach while maintaining
        personalization and increasing engagement rates.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-24 items-start">
      {[
        {
          icon: <Settings className={`w-8 h-8 ${isDark ? 'text-white' : 'text-black'}`} />,
          title: 'Smart Campaign Setup',
          features: [
            'AI-powered template customization for your brand voice',
            'Automated list segmentation and targeting'
          ],
          
        },
        {
          icon: <BarChart3 className={`w-8 h-8 ${isDark ? 'text-white' : 'text-black'}`} />,
          title: 'Performance Analytics',
          features: [
            'Real-time tracking of open rates, clicks, and responses',
            'AI-driven insights for campaign optimization'
          ],
          
        },
        {
          icon: <Bot className={`w-8 h-8 ${isDark ? 'text-white' : 'text-black'}`} />,
          title: 'AI Writing Assistant',
          features: [
            'Dynamic content personalization for each recipient',
            'Smart A/Z testing for continuous improvement'
          ],
          
        },
        {
          icon: <RefreshCw className={`w-8 h-8 ${isDark ? 'text-white' : 'text-black'}`} />,
          title: 'Automated Workflows',
          features: [
            'Intelligent follow-up sequences based on recipient behavior',
            'Time-zone aware scheduling for optimal delivery'
          ],
          
        }
      ].map((feature, index) => (
        <React.Fragment key={index}>
          <div className="feature-card p-8 hover:bg-gray-900/30 rounded-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-[#FF6A00]/10 rounded-lg">
                {feature.icon}
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>{feature.title}</h3>
            </div>
            <ul className="mt-6 space-y-4 ml-16">
              {feature.features.map((item, idx) => (
                <li key={idx} className={`flex items-start gap-3 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  <ArrowRight className={`w-5 h-5 mt-1 ${isDark ? 'text-white' : 'text-black'} flex-shrink-0`} />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
</section>


        <div className={`section-divider ${isDark ? 'section-divider' : 'section-divider-light'} `} />

      <section id="action" className={`py-20 ${isDark ? 'bg-gradient-to-br from-[#FF6A00]/20 to-black' : 'bg-gradient-to-br from-[#FF6A00]/10 to-white'}`}>
  <div className="container mx-auto px-4 text-center">
    <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
      Ready to <span className="gradient-text">Transform</span> Your Outreach?
    </h2>
    <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-2xl mx-auto`}>
      Join the future of automated communication. Schedule a demo to see how our
      AI can revolutionize your outreach strategy.
    </p>
    <div className="flex gap-6 justify-center">
      <button
        onClick={() => navigate('/schedule-call')}
        className="bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2"
      >
        Schedule Demo
        <ArrowRight className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
      </button>
      <button
        onClick={() => setShowContactForm(true)}
        className={`border border-[#FF6A00] ${isDark ? 'text-white' : 'text-gray-800'} px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FF6A00]/10 transition-colors`}
      >
        Get in touch
      </button>
    </div>
  </div>
</section>


<div className={`section-divider ${isDark ? 'section-divider' : 'section-divider-light'} `} />
      <Footer />
    </div>
  );
};

export default AIOutreach;