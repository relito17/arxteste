import React, { useState, useEffect } from 'react';
import { 
  Phone, Database, BarChart3, UserPlus, Share2, ChevronDown, ChevronUp, Mic,
  Boxes, TrendingUp, BarChart2, Share, MessageCircle, Heart
} from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';

const VoiceAssistantBox = () => {
  const [, setIsActive] = useState(false);
  const isDark = useThemeStore((state) => state.isDark);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(prev => !prev);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="relative flex flex-col items-center h-full justify-center">
        {/* Voice Circle Container */}
        <Mic className="w-6 h-6 text-[#FFA100]" />

        {/* Waveform Visualization */}
        <div className="waveform-container">
          <div className="waveform-visualization">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="waveform-bar"
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  height: `${20 + Math.random() * 30}px`
                }}
              />
            ))}
          </div>
        </div>

        {/* AI Status Indicator */}
        <div className="ai-status-container mb-2">
          <div className="ai-status-dot" />
          <span className={`ai-status-text ${isDark ? 'text-white' : 'text-gray-900'}`}>AI Voice Assistant Active</span>
        </div>

        {/* Feature Tags */}
        <div className="feature-tags">
          <span className={`feature-tag ${isDark ? 'text-white' : 'text-gray-900'}`}>24/7 Support</span>
          <span className={`feature-tag ${isDark ? 'text-white' : 'text-gray-900'}`}>Multi-language</span>
          <span className={`feature-tag ${isDark ? 'text-white' : 'text-gray-900'}`}>Real-time</span>
        </div>
      </div>
    </div>
  );
};

const UserProfileBox = () => {
  const [, setExpandedProfile] = useState('justin');
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <div className="mt-4 p-3 ">
      {/* First Profile - Collapsed */}
      <div 
        className={`flex items-center justify-between p-2 rounded-lg mb-2 cursor-pointer hover:bg-gray-800/70 transition-all duration-300 ${isDark ? 'bg-gray-800/50' : 'bg-gray-900'}`}
        onClick={() => setExpandedProfile('jack')}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400 text-sm">JD</span>
          </div>
          <div>
            <h4 className="font-medium text-sm">Jack Daniel</h4>
            <p className="text-xs text-gray-400">Founder</p>
          </div>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>

      {/* Second Profile - Expanded */}
      <div className={`rounded-lg overflow-hidden ${isDark ? 'bg-gray-800/50' : 'bg-gray-900'}`}>
        <div 
          className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-800/70 transition-all duration-300"
          onClick={() => setExpandedProfile('justin')}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-WHITE-400 text-sm">JR</span>
            </div>
            <div>
              <h4 className="font-medium text-sm">Justin Rocks</h4>
              <p className="text-xs text-gray-400">Marketing head</p>
            </div>
          </div>
          <ChevronUp className="w-4 h-4 text-gray-400" />
        </div>

        {/* Expanded Content */}
        <div className="px-3 pb-3">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <p className="text-xs text-gray-500 mb-1">E-mail</p>
              <p className="text-xs">justin@main.com</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Phone</p>
              <p className="text-xs">+1(812)98XXX</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Company</p>
              <p className="text-xs">XYZ LLC</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Verified</p>
              <p className="text-xs">Yes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Generate Leads Button */}
      <button className="w-full mt-3 px-4 py-2 bg-gray-800/80 rounded-lg font-medium text-sm hover:bg-gray-800 transition-all duration-300 generate-leads-btn">
        Generate Leads
      </button>
    </div>
  );
};

const CRMIntegrationBox = () => {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 p-4 rounded-xl h-[260px] b crm-integration-container shadow-lg">
      <div className="flex flex-col h-full">
        {/* Integration Network Visualization */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Central Hub */}
          <div className="absolute z-20 w-16 h-16 bg-[#FFA100] rounded-full flex items-center justify-center border border-[#FFA100]/50 shadow-md central-hub">
            <Database className="w-8 h-8 text-white" />
          </div>

          {/* Connection Nodes */}
          {[
            { angle: 45, icon: <Boxes className="w-6 h-6 text-white" />, label: "" },
            { angle: 135, icon: <UserPlus className="w-6 h-6 text-white" />, label: "" },
            { angle: 225, icon: <MessageCircle className="w-6 h-6 text-white" />, label: "" },
            { angle: 315, icon: <BarChart2 className="w-6 h-6 text-white" />, label: "" },
          ].map((node, index) => (
            <div
              key={index}
              className={`absolute w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border-2 transition-all duration-500 ${
                activeNode === index ? "scale-110 border-[#FFA100] shadow-lg" : "border-gray-700"
              }`}
              style={{
                transform: `rotate(${node.angle}deg) translate(90px) rotate(-${node.angle}deg)`,
              }}
            >
              <div className="relative text-center">
                {node.icon}
                <div
                  className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs ${
                    activeNode === index ? "text-[#FFA100]" : "text-gray-500"
                  }`}
                >
                  {node.label}
                </div>
              </div>
            </div>
          ))}

          {/* Animated Connection Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 200 200"
          >
            {[45, 135, 225, 315].map((angle, index) => {
              const x = 100 + Math.cos((angle * Math.PI) / 180) * 62;
              const y = 100 + Math.sin((angle * Math.PI) / 180) * 62;
              return (
                <line
                  key={index}
                  x1="100"
                  y1="100"
                  x2={x}
                  y2={y}
                  className={`transition-all duration-500 ${
                    activeNode === index ? "stroke-[#FFA100]" : "stroke-gray-700"
                  }`}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>
        </div>

        {/* Integration Status */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <span className="text-sm text-gray-400">CRM Integration Active:</span>
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full transition-all ${
                activeNode === 0 ? "bg-[#FFA100]" : "bg-gray-600"
              }`}
            />
            <div
              className={`w-3 h-3 rounded-full transition-all ${
                activeNode === 1 ? "bg-[#FFA100]" : "bg-gray-600"
              }`}
            />
            <div
              className={`w-3 h-3 rounded-full transition-all ${
                activeNode === 2 ? "bg-[#FFA100]" : "bg-gray-600"
              }`}
            />
            <div
              className={`w-3 h-3 rounded-full transition-all ${
                activeNode === 3 ? "bg-[#FFA100]" : "bg-gray-600"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MarketingAnalyticsBox = () => {
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <div className="mt-4 p-4">
      <div className="analytics-container">
        <div className="analytics-graph">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="graph-bar-container">
              <div
                className="graph-bar"
                style={{
                  height: `${30 + i * 15}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
              <div className="graph-dot" />
            </div>
          ))}
          <div className="trend-line" />
        </div>
        <div className="analytics-metrics">
          <div className="metric">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-green-500 text-sm">+24%</span>
          </div>
          <div className="metric">
            <BarChart2 className="w-4 h-4 text-[#FF6A00]" />
            <span className="text-[#FFA100] text-sm">89%</span>
          </div>
        </div>

        <span className={`feature-tag font-medium text-sm mt-3 block text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Real-time Insights
        </span>
      </div>
    </div>
  );
};

const SocialMediaBox = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const isDark = useThemeStore((state) => state.isDark);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 p-4">
      <div className="social-container">
        <div className="social-metrics">
          <div className={`social-metric ${activeMetric === 0 ? 'active' : ''}`}>
            <MessageCircle className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className="metric-value text-sm">50.3k</span>
          </div>
          <div className={`social-metric ${activeMetric === 1 ? 'active' : ''}`}>
            <Share className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className="metric-value text-sm">10.7K</span>
          </div>
          <div className={`social-metric ${activeMetric === 2 ? 'active' : ''}`}>
            <Heart className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className="metric-value text-sm">233k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdditionalServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDark = useThemeStore((state) => state.isDark);
  
  const services = [
    {
      icon: <Phone className="w-8 h-8" style={{ color: '#FFA100' }} />,
      title: 'AI Voice Caller Assistant',
      description: 'Transform customer interactions with our cutting-edge AI voice assistant—providing personalized, real-time solutions that delight users every time!',
      extraContent: <VoiceAssistantBox />,
    },
    {
      icon: <Database className="w-8 h-8" style={{ color: '#FFA100' }} />,
      title: 'CRM Integration',
      description: 'Unify your customer data seamlessly with our CRM integration—empower your team with actionable insights to boost relationships and revenue!',
      extraContent: <CRMIntegrationBox />,
    },
    {
      icon: <UserPlus className="w-8 h-8" style={{ color: '#FFA100' }} />,
      title: 'Lead Generation',
      description: 'Attract high-quality leads effortlessly with our proven strategies—turn clicks into customers and drive explosive business growth',
      extraContent: <UserProfileBox />,
    },
    {
      icon: <Share2 className="w-8 h-8" style={{ color: '#FFA100' }} />,
      title: 'Social Media Automation',
      description: 'Effortlessly manage your social presence with automated posts, engagement, and analysis—save time, stay consistent, and grow your audience fast!',
      extraContent: <SocialMediaBox />,
    },
    {
      icon: <BarChart3 className="w-8 h-8" style={{ color: '#FFA100' }} />,
      title: 'Marketing Analytics',
      description: 'Unlock the power of data with actionable marketing insights—optimize your campaigns, improve ROI, and outpace the competition',
      extraContent: <MarketingAnalyticsBox />,
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={`py-20 ${isDark ? 'bg-black/80' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Beyond the Basics:{' '}
            <span className="gradient-text">
              <em>Expanded Solutions </em>
            </span>
          </h1>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <em>
              <strong>
                Expand your capabilities with our specialized solutions
              </strong>
            </em>
          </p>
        </div>

        <div className="overflow-hidden relative">
          {/* Desktop View - Continuous Scroll */}
          <div className="hidden md:flex gap-8 services-scroll py-4">
            {[...services, ...services].map((service, index) => (
              <div
                key={index}
                className={`flex-none w-[400px] group p-6 ${isDark ? 'border border-gray-800 hover:bg-gray-900/50' : 'border border-gray-200 bg-white hover:bg-gray-50'} rounded-2xl hover:scale-105 transition-all duration-300`}
              >
                <div className={`p-3 ${isDark ? 'bg-white/5 group-hover:bg-white/10' : 'bg-gray-50 group-hover:bg-gray-100'} rounded-lg transition-colors w-fit mb-4`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{service.title}</h3>
                <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{service.description}</p>
                {service.extraContent}
              </div>
            ))}
          </div>

          {/* Mobile View - Slide Navigation */}
          <div className="md:hidden">
            <div className="relative min-h-[320px]">
              <div
                key={currentIndex}
                className={`w-full p-6 rounded-2xl min-h-[300px] flex flex-col justify-between ${
                  isDark 
                    ? 'border border-gray-800 bg-gray-900/50' 
                    : 'border border-gray-200 bg-white'
                }`}
              >
                <div className={`p-3 ${isDark ? 'bg-white/5' : 'bg-gray-50'} rounded-lg transition-colors w-fit mb-4`}>
                  {services[currentIndex].icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {services[currentIndex].title}
                </h3>
                <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {services[currentIndex].description}
                </p>
                <div className="h-[300px] overflow-hidden">
                  {services[currentIndex].extraContent}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full border ${
                  isDark 
                    ? 'bg-black/80 border-gray-800' 
                    : 'bg-white border-gray-200'
                }`}
              >
                <ChevronLeft className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
              </button>
              <button
                onClick={handleNext}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full border ${
                  isDark 
                    ? 'bg-black/80 border-gray-800' 
                    : 'bg-white border-gray-200'
                }`}
              >
                <ChevronRight className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
              </button>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 mt-4">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentIndex === index ? 'bg-[#FFA100] w-4' : isDark ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;