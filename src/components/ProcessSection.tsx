import { 
  Phone, 
  ClipboardCheck, 
  Rocket, 
  Code2, 
  Crosshair,
  Handshake 
} from 'lucide-react';
import SectionTitle from './SectionTitle';
import { useThemeStore } from '../store/useThemeStore';

const ProcessSection = () => {
  const isDark = useThemeStore((state) => state.isDark);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const processes = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'Kick off with an initial consultation to uncover your goals, challenges, and opportunities.',
      icon: <Phone className="w-8 h-8 text-[#FF6A00]" />,
    },
    {
      number: '02',
      title: 'Needs Assessment & Proposal',
      description: 'Delve into your unique requirements and receive a custom-tailored solution plan.',
      icon: <ClipboardCheck className="w-8 h-8 text-[#FF6A00]" />,
    },
    {
      number: '03',
      title: 'Onboarding & Strategy',
      description: 'Align on priorities, timelines, and a clear roadmap to set the stage for success.',
      icon: <Crosshair className="w-8 h-8 text-[#FF6A00]" />,
    },
    {
      number: '04',
      title: 'Implementation & Development',
      description: 'Turn your vision into reality with expert execution and advanced technology.',
      icon: <Code2 className="w-8 h-8 text-[#FF6A00]" />,
    },
    {
      number: '05',
      title: 'Launch & Deployment',
      description: 'Seamlessly roll out your solution and achieve results with confidence.',
      icon: <Rocket className="w-8 h-8 text-[#FF6A00]" />,
    },
    {
      number: '06',
      title: 'Continuous Support',
      description: 'Ensure ongoing success with proactive monitoring, updates, and enhancements.',
      icon: <Handshake className="w-8 h-8 text-[#FF6A00]" />,
    }
  ];

  return (
    <section id="process" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'} relative overflow-hidden`}>
      <div className="container mx-auto px-4">
        <SectionTitle title="The Process" />
        <div className="text-center mb-16 reveal">
          <h2 className={`text-5xl sm:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Our Process: <br />
            <span className="gradient-text"><em>From Vision to Execution&nbsp;</em></span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            <em>
              <strong>
                A step-by-step journey to transform your ideas into seamless automation solutions.
              </strong>
            </em>
          </p>
        </div>

        <div className="relative">
          {/* Central glowing line */}
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-[#FF6A00] to-[#f9d342] transform -translate-x-1/2">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-[#FF6A00]/50 to-[#f9d342]/50 blur-sm"></div>
          </div>

          {/* Process Steps */}
          <div className="relative space-y-24 sm:space-y-16">
            {processes.map((process, index) => (
              <div 
                key={index}
                className={`flex flex-col sm:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } reveal`}
              >
                {/* Content */}
                <div className={`w-full sm:w-1/2 text-center sm:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                  <div className={`inline-flex items-center gap-4 mb-4 justify-center sm:justify-start ${
                    index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
                  }`}>
                    <div className="p-3 bg-gradient-to-br from-[#FF6A00]/20 to-[#f9d342]/20 rounded-lg transform hover:scale-110 transition-all duration-300">
                      {process.icon}
                    </div>
                    <h3 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'bg-black' : 'bg-white'} p-4 rounded-xl ${isDark ? 'border-gray-800' : 'border-gray-200'} border ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {process.title}
                    </h3>
                  </div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} ${isDark ? 'bg-black' : 'bg-white'} p-4 rounded-xl ${isDark ? 'border-gray-800' : 'border-gray-200'} border`}>
                    {process.description}
                  </p>
                </div>

                {/* Number */}
                <div className="relative mb-4 sm:mb-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00] to-[#f9d342] rounded-full blur-lg opacity-50 animate-pulse"></div>
                  <div className={`relative w-16 h-16 flex items-center justify-center ${isDark ? 'bg-black' : 'bg-white'} rounded-full border-2 border-[#FF6A00] transform hover:scale-110 transition-all duration-300`}>
                    <span className="text-2xl sm:text-3xl font-bold gradient-text">{process.number}</span>
                  </div>
                </div>

                <div className="w-full sm:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center reveal">
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform"
          >
            Start Your Journey Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;