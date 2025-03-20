import { Instagram, Linkedin } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from 'react-router-dom';



const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};




const Footer = () => {
  const isDark = useThemeStore((state) => state.isDark);

  const navigate = useNavigate();


  return (
    <footer className={`${isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-200'} border-t`}>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <div className="mb-4">
            <div className="text-2xl font-bold" onClick={scrollToTop}>
              <button>
                <span className={isDark ? 'text-white' : 'text-gray-900'}>AR</span>
                <span className="gradient-text">x</span>
                <span className={isDark ? 'text-white' : 'text-gray-900'}>Automate</span>
              </button>  
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
              Empowering businesses with intelligent automation solutions that
              drive growth and efficiency.
            </p>
            <div className="flex gap-4 justify-center">
              {[{ icon: <FontAwesomeIcon icon={faXTwitter} className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />, href: 'https://x.com/arxautomate' },
                { icon: <Instagram className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />, href: 'https://www.instagram.com/arxautomate/' },
                { icon: <Linkedin className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />, href: 'https://www.linkedin.com/company/106875360/admin/dashboard/' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Privacy Links */}
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <a onClick={() => navigate('/privacy-policy')} className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              Privacy Policy
            </a>
            <a onClick={() => navigate('/terms')} className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              Terms of Service
            </a>
          </div>
          
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            © {new Date().getFullYear()} ARxAutomate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
