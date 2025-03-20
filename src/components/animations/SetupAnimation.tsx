import { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';

const SetupAnimation = () => {
  const isDark = useThemeStore((state) => state.isDark);
  const [animationStep, setAnimationStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start animation sequence automatically
    if (animationStep === 0) {
      const timer = setTimeout(() => setAnimationStep(1), 500);
      return () => clearTimeout(timer);
    }
    if (animationStep === 1) {
      const timer = setTimeout(() => setAnimationStep(2), 1000);
      return () => clearTimeout(timer);
    }
    if (animationStep === 2) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => {
              setAnimationStep(0);
              setProgress(0);
            }, 1000);
            return 100;
          }
          return prev + 4;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [animationStep]);

  return (
    <div className={`relative w-full h-full `}>
      {/* Website Layout */}
      <div className={`absolute inset-4 ${isDark ? 'bg-gray-900/30' : 'bg-gray-800/70'} rounded-lg overflow-hidden`}>
        {/* Header */}
        <div className="h-8 bg-gray-700/50 flex items-center px-4 gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Placeholder Content */}
          <div className="h-3 w-3/4 bg-gray-700/50 rounded mb-2"></div>
          <div className="h-3 w-1/2 bg-gray-700/50 rounded"></div>
        </div>

        {/* Chatbot Widget */}
        <div 
          className={`absolute transition-all duration-500 ease-out ${
            animationStep >= 1 
              ? 'bottom-4 right-4 opacity-100 scale-100' 
              : 'bottom-20 right-20 opacity-0 scale-50'
          }`}
        >
          <div 
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
              animationStep >= 2 ? 'bg-[#FFA100]' : 'bg-gray-700'
            }`}
          >
            <Bot className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Progress Overlay */}
      {animationStep === 2 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1/2">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#FFA100] transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-center mt-2 text-sm text-gray-400">
            Setting up your chatbot... {progress}%
          </div>
        </div>
      )}
    </div>
  );
};

export default SetupAnimation;
