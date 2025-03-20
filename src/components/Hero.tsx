import ShootingStars from './ShootingStars';
import ShootingStars2 from './ShootingStars2';  // Importando o novo componente
import { ChevronRight } from 'lucide-react';
import logo from '../images/logoarx5.png';
import { ThemeToggle } from './ui/ThemeToggle';
import { useThemeStore } from '../store/useThemeStore';

const Hero = () => {
  const isDark = useThemeStore((state) => state.isDark);
  


  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="hero" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-white/5 to-black/50' : 'bg-gradient-to-b from-gray-50 to-white'} z-0`} />
      {isDark ? <ShootingStars /> : <ShootingStars2 />} {/* Condicional para alternar entre os componentes */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto reveal">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="ARxAutomate Logo" className="h-28" />
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span>AR</span>
            <span className="gradient-text">x</span>
            <span>Automate</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <strong>
              <em>
                Unlock the Power of AI to Supercharge Your Operations, Skyrocket
                Productivity, and Fuel Sustainable Growth{' '}
              </em>
            </strong>
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
          >
            Get Started Now
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <ChevronRight className="w-8 h-8 rotate-90" />
      </div>
    </header>
  );
};

export default Hero;
