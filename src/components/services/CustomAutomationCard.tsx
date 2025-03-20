import { Settings, Workflow, Bot, Gauge } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';

const CustomAutomationCard = () => {
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <div
      className={`group relative p-8 rounded-2xl transition-all hover:scale-105 duration-300 overflow-hidden border border-gray-800 hover:bg-gray-900/50 ${
        !isDark ? 'bg-gray-700' : ''
      }`}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
            <Settings className="w-8 h-8" style={{ color: '#FFA100' }} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold">Custom Automations</h3>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-8">
          Transform your workflow with intelligent automation solutions that adapt to your unique business needs.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[ 
            {
              icon: <Workflow className="w-6 h-6" />,
              title: "Smart Workflows",
              description: "Automate complex business processes seamlessly"
            },
            {
              icon: <Bot className="w-6 h-6" />,
              title: "AI Integration",
              description: "Leverage advanced AI for smarter automation"
            },
            {
              icon: <Gauge className="w-6 h-6" />,
              title: "Real-time Analytics",
              description: "Monitor and optimize performance instantly"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-4 bg-black/20 feature-card rounded-xl border border-gray-800 group-hover:border-[#FF6A00]/30 transition-all duration-500"
            >
              <div className="text-[#FFA100] mb-3">{feature.icon}</div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Learn More CTA 
        <div className="mt-8 flex items-center gap-2 text-[#FF6A00] font-semibold opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span>Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>*/}
      </div>
    </div>
  );
};

export default CustomAutomationCard;
