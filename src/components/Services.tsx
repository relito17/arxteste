import { useNavigate } from 'react-router-dom';
import AIAgentCard from './services/AIAgentCard';
import OutreachCard from './services/OutreachCard';
import AppDevelopmentCard from './services/AppDevelopmentCard';
import CustomAutomationCard from './services/CustomAutomationCard';
import SectionTitle from './SectionTitle';
import AdditionalServices from './AdditionalServices';
import { useThemeStore } from '../store/useThemeStore';

const Services = () => {
  const navigate = useNavigate();
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <section id="services" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'} relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="services-background" />
      <div className="services-glow" />
      <div className="services-glow" />
      <div className="services-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="Our Services" />
        <div className="text-center mb-16 reveal">
          <h1 className={`text-5xl md:text-7xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <div className="md:hidden">
              Our <span className="gradient-text"><em>Expertise&nbsp;</em></span> at a Glance
            </div>
            <div className="hidden md:block">
              Our{' '}
              <span className="gradient-text">
                <em>Expertise</em>{' '}
              </span>{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; at a Glance
            </div>
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <em>
              <strong>
                Explore the core solutions we offer to power your business with
                AI-driven automations
              </strong>{' '}
            </em>
          </p>
        </div>
        <div className="flex flex-col gap-12">
          {/* First Card - Left */}
          <div 
            className="w-full md:w-2/3 lg:w-1/2 reveal service-card rounded-2xl p-1" 
            onClick={() => navigate('/customer-support-ai')}
          >
            <AIAgentCard />
          </div>

          {/* Second Card - Right */}
          <div 
            className="w-full md:w-2/3 lg:w-1/2 ml-auto reveal service-card rounded-2xl p-1" 
            onClick={() => navigate('/ai-outreach')}
          >
            <OutreachCard onClick={() => navigate('/ai-outreach')} />
          </div>

          {/* Third Card - Left */}
          <div 
            className="w-full md:w-2/3 lg:w-1/2 reveal service-card rounded-2xl p-1" 
          >
            <AppDevelopmentCard />
          </div>

          {/* Fourth Card - Right */}
          <div 
            className="w-full md:w-2/3 lg:w-1/2 ml-auto reveal service-card rounded-2xl p-1" 
          >
            <CustomAutomationCard />
          </div>
        </div>
      </div>
      <AdditionalServices />
    </section>
  );
};

export default Services;