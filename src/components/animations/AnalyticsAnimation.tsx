import { useState, useEffect } from 'react';
import { Clock, Star, MessagesSquare, ChartNoAxesColumn, Bell, User, Home, Zap, MessageSquare, PieChart, Mail, Send, Cpu } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';



const AnalyticsAnimation = () => {
  const isDark = useThemeStore((state) => state.isDark);
  const [ , setIsActive] = useState(false);
  const [metrics, setMetrics] = useState({
    responseTime: 0,
    satisfaction: 0,
    engagement: 0
  });

  useEffect(() => {
    setIsActive(true);
    const interval = setInterval(() => {
      setMetrics(prev => ({
        responseTime: Math.min(prev.responseTime + 2, 85),
        satisfaction: Math.min(prev.satisfaction + 1.5, 95),
        engagement: Math.min(prev.engagement + 1, 90)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full h-full ${isDark ? 'bg-gray-900/30' : 'bg-gray-800/70'} rounded-2xl overflow-hidden`}>
      <div className="flex h-full">
        {/* Sidebar - Made narrower */}
        <div className="hidden md:block w-36 bg-gray-800/50 h-full p-3 border-r border-gray-700/50">
          <h3 className="text-base font-bold text-white mb-4">Dashboard</h3>
          <ul className="space-y-3">
            {[ 
              { icon: <Home className="w-4 h-4 lg:w-5 lg:h-5" />, label: 'Home' },
              { icon: <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5" />, label: 'Conversations' },
              { icon: <PieChart className="w-4 h-4 lg:w-5 lg:h-5" />, label: 'Analytics', active: true },
              { icon: <Mail className="w-4 h-4 lg:w-5 lg:h-5" />, label: 'Email' },
              { icon: <Send className="w-4 h-4 lg:w-5 lg:h-5" />, label: 'Newsletter' },
              { icon: <Cpu className="w-4 h-4 lg:w-5 lg:h-5" />, label: 'GPT' },
            ].map((item, index) => (
              <li key={index} className={`flex items-center gap-2 pointer-events-none relative ${item.active ? 'text-white' : 'text-gray-400'}`}>
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content - Adjusted spacing */}
        <div className="flex-1 p-3">
          {/* Top Navbar */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 " />
              <span className="text-sm text-white">Online</span>
            </div>
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-gray-400" />
              <User className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Dashboard Header */}
          <div className="mb-3">
            <h4 className="text-base font-semibold text-white">Analytics</h4>
          </div>

          {/* Metrics Grid - Compact layout */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            {[ 
              { icon: <Zap className="w-4 h-4" />, label: 'Response Time', value: metrics.responseTime },
              { icon: <MessagesSquare className="w-4 h-4" />, label: 'Messages', value: metrics.satisfaction },
              { icon: <ChartNoAxesColumn className="w-4 h-4" />, label: 'Engagement', value: metrics.engagement },
              { icon: <Clock className="w-4 h-4" />, label: 'Avg Time', value: metrics.engagement },
              { icon: <Star className="w-4 h-4" />, label: 'Rating', value: metrics.engagement }
            ].map((metric, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1 bg-[#FF6A00]/20 rounded">
                    {metric.icon}
                  </div>
                  <span className="text-xs text-gray-400">{metric.label}</span>
                </div>
                <div className="text-sm font-semibold text-white text-center">
                  {Math.round(metric.value)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsAnimation;
