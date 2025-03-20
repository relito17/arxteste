import { useState } from 'react';
import { AppWindow } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';

const codeString = `function createWebApp(config) {
  const { name, theme, modules } = config;
  
  // Initialize core application
  const app = new Application(name);
  app.setTheme(theme);
  
  // Load required modules
  modules.forEach(module => {
    app.registerModule(module);
  });
  
  return app;
}`;

const AppDevelopmentCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <div
      className={`group relative p-4 sm:p-6 lg:p-8 rounded-2xl transition-all reveal hover:scale-105 duration-300 overflow-hidden border border-gray-800 hover:bg-gray-900/50 ${
        !isDark ? 'bg-gray-700' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Title and Service Information */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
            <AppWindow className="w-8 h-8" style={{ color: '#FFA100' }} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            App & Website Development
          </h3>
        </div>
        <p className="text-gray-400 text-sm sm:text-base">
          Turn your ideas into seamless, high-performance apps and websites that
          captivate users and drive measurable results—let's build your digital
          future today!
        </p>
      </div>

      {/* Code Editor */}
      <div className="code-editor bg-[#0D0D0D] rounded-lg overflow-hidden border border-gray-800 shadow-glow">
        {/* Editor Header */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#151515] border-b border-gray-800">
          <div className="w-3 h-3 rounded-full bg-[#FFA100]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFA100]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFA100]"></div>
        </div>

        {/* Code Content */}
        <div className="p-4 font-mono text-sm leading-relaxed">
          {codeString.split('\n').map((line, index) => (
            <div key={index} className="whitespace-pre">
              {index === 4 ? (
                <span
                  className={`text-gray-400 bg-[#FFA100] text-white transition-all duration-300 ${
                    isHovered ? 'px-4 -mx-4' : 'px-2 -mx-2'
                  }`}
                >
                  {line}
                </span>
              ) : (
                <span
                  className={`text-gray-400 ${
                    isHovered && index === 3
                      ? 'text-white bg-[#FFA100] px-4 -mx-4'
                      : ''
                  } transition-all duration-300`}
                >
                  {line}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppDevelopmentCard;