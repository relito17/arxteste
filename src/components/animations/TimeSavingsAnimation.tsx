import { useState, useEffect } from 'react';
import { Clock, Users, TrendingUp, CheckCircle2, XCircle } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';

const TimeSavingsAnimation = () => {
  const isDark = useThemeStore((state) => state.isDark);
  const [progress, setProgress] = useState(0);
  const [activePhase, setActivePhase] = useState<'manual' | 'automated' | 'growth'>('manual');

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (activePhase === 'manual') {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 20) {
            setActivePhase('automated');
            return prev;
          }
          return prev + 0.2;
        });
      }, 20);
    } else if (activePhase === 'automated') {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setActivePhase('growth');
            return 100;
          }
          return prev + 1;
        });
      }, 30);
    } else if (activePhase === 'growth') {
      const timeout = setTimeout(() => {
        setActivePhase('manual');
        setProgress(0);  // Reset progress here when the growth phase ends
      }, 3000);
      return () => clearTimeout(timeout);
    }

    return () => clearInterval(interval);
  }, [activePhase]);

  return (
    <div className={`w-full h-full ${isDark ? 'bg-gray-900/30' : 'bg-gray-800/70'} rounded-2xl overflow-hidden p-6`}>
      <div className="h-full flex flex-col">
        {/* Header com a fase atual */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              {activePhase === 'manual' && (
                <>
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-white'}`}>Manual Tasks</span>
                </>
              )}
              {activePhase === 'automated' && (
                <>
                  <CheckCircle2 className="w-5 h-5 text-[#FFA100]" />
                  <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-white'}`}>Tasks Automated</span>
                </>
              )}
              {activePhase === 'growth' && (
                <>
                  <TrendingUp className="w-5 h-5 text-[#FFA100]" />
                  <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-white'}`}>Business Growth</span>
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className={`text-sm ${isDark ? 'text-white' : 'text-white'}`}>20+ hrs saved/week</span>
            </div>
          </div>
          
          {/* Barra de Progresso */}
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#FFA100] to-[#f9d342]  "
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Área principal de animação */}
        <div className="flex-1 relative">
          {/* Fase de Tarefas Manuais */}
          <div className={`absolute inset-0 transition-all duration-500 ${
            activePhase === 'manual' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          }`}>
            <div className="grid grid-cols-2 gap-4 h-full">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-800/50 rounded-lg p-4 flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div className="flex-1">
                    <div className="h-2 bg-gray-700 rounded-full w-3/4 mb-2" />
                    <div className="h-2 bg-gray-700 rounded-full w-1/2" />
                  </div>
                </div>
              ))}
            </div>
            {progress > 15 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <XCircle className="w-20 h-20 text-red-500 animate-bounce" />
              </div>
            )}
          </div>

          {/* Fase de Automação */}
          <div className={`absolute inset-0 transition-all duration-500 ${
            activePhase === 'automated' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}>
            <div className="h-full flex items-center justify-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-[#FFA100]/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#FFA100]/40 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#FFA100]" />
                  </div>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-center">
                  <p className={`text-sm ${isDark ? 'text-white' : 'text-white'}`}>Tasks Automated</p>
                  <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-[#FFA100]'}`}>{Math.round(progress)}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fase de Crescimento */}
          <div className={`absolute inset-0 transition-all duration-500 ${
            activePhase === 'growth' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}>
            <div className="flex items-center justify-center h-full">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-green-500/40 flex items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-green-500" />
                  </div>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-center">
                  <p className={`text-sm ${isDark ? 'text-white' : 'text-white'}`}>Business Growth</p>
                  <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-green-500'}`}>+{Math.round(progress)}%</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TimeSavingsAnimation;
