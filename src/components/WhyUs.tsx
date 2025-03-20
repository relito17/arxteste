import {
  Zap,
  Heart,
  Users2,
  Trophy,
} from 'lucide-react';
import SectionTitle from './SectionTitle';
import { useThemeStore } from '../store/useThemeStore';

const WhyUs = () => {
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <section id="why-us" className={`py-20 ${isDark ? 'bg-black/80' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <SectionTitle title="Why Choose Us" />
        <div className="text-center mb-16 reveal">
          <h1 className={`text-5xl md:text-7xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            What Sets Us <br></br>
            <span className="gradient-text">
              <em>Apart </em>
            </span>
            &nbsp;
          </h1>

          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <strong>
              <em> Step Into the Future of Automation with Proven Solutions</em>
            </strong>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16 reveal">
          {[ 
            { value: 'Reduce 90%', label: 'Human Error ' },
            { value: 'Save 3000+', label: 'Human Hours' },
            { value: '99.9%', label: 'Uptime Guaranteed' },
            { value: '-65%', label: 'Operational Cost' },
            {
              value: '94%',
              label: ' Report Improvements in Customer Satisfaction',
            },
            { value: '95%', label: 'Efficiency Increase' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`feature-card text-center p-6 rounded-2xl ${isDark ? 'bg-gradient-to-br' : 'bg-gray-50'}`}
            >
              <div className="stats-gradient text-3xl md:text-4xl font-bold mb-2">
                <span
                  className={`${isDark ? '' : 'text-gray-700'}`} // dark mode keeps the default color, light mode adds a darker color
                >
                  {stat.value}
                </span>
              </div>
              <p className={`text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 reveal">
          {[ 
            {
              icon: <Zap className="w-8 h-8" style={{ color: '#FFA100' }} />,
              title: 'Lightning Fast Performance',
              description:
                'Experience blazing-fast response times and real-time processing capabilities that keep your business ahead of the competition.',
            },
            {
              icon: <Heart className="w-8 h-8" style={{ color: '#FFA100' }} />,
              title: 'Passionate Dedication',
              description:
                'Our team is committed to your success, providing round-the-clock support and continuous optimization of your AI solutions.',
            },
            {
              icon: <Users2 className="w-8 h-8" style={{ color: '#FFA100' }} />,
              title: 'Collaborative Excellence',
              description:
                'Work with a team that understands your vision and collaborates seamlessly to achieve your business goals.',
            },
            {
              icon: <Trophy className="w-8 h-8" style={{ color: '#FFA100' }} />,
              title: 'Premium Quality Pays Off',
              description:
                'Invest in quality AI solutions that deliver measurable ROI and long-term value for your business.',
            },
          ].map((point, index) => (
            <div
              key={index}
              className={`p-8 feature-card rounded-2xl transition-colors duration-300 ${isDark 
                ? 'hover:border-white/20' 
                : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                  {point.icon}
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {point.title}
                </h3>
              </div>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
