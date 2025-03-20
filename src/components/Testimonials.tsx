import { Star } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { useThemeStore } from '../store/useThemeStore';

const Testimonials = () => {
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <section id="testimonials" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <SectionTitle title="Client Testimonials" />
        <div className="text-center mb-16 reveal">
          <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <div className="md:hidden">
              <span className="gradient-text"><em>Real&nbsp;</em></span> Results,  
              <span className="gradient-text"><em> Real&nbsp;</em></span> Clients
            </div>
            <div className="hidden md:block">
              <span className="gradient-text"><em>Real&nbsp;</em></span> Results,
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="gradient-text"><em>Real&nbsp;</em></span> Clients
            </div>
          </h1>

          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <em>
              <strong>
                See how we've transformed businesses with measurable success
                stories. <br></br> Become the next one.
              </strong>{' '}
            </em>
          </p>
        </div>
        <div className="flex justify-center">
          <div className={`max-w-lg ${isDark ? 'bg-black shadow-xl' : 'bg-white shadow-xl'} p-8 rounded-2xl reveal hover:scale-105 transition-transform duration-300 feature-card ${isDark ? 'border-gray-800' : 'border-gray-200'} border`}>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5" 
                  fill={isDark ? '#FFFFFF' : '#FFA100'} 
                  color={isDark ? '#FFFFFF' : '#FFA100'} 
                />
              ))}
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              "Implementing their automation tools helped us scale our operations and improve quality."
            </p>
            <div>
              <p className="font-semibold gradient-text">
                <a 
                  href="https://www.avbx.pt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="no-underline text-inherit transition-opacity"
                >
                  AVBX Projetos
                </a>
              </p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;