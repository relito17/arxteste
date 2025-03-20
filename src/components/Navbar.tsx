import { useState, useEffect } from 'react';

import { NavBar } from './ui/tubelight-navbar';
import { Home, ListChecks ,BriefcaseBusiness  , Phone, Star , BadgeCheck  } from 'lucide-react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', url: 'hero', icon: Home },
    { name: 'WhyUs', url: 'why-us', icon: BadgeCheck  },
    { name: 'Services', url: 'services', icon: BriefcaseBusiness },
    { name: 'Process', url: 'process', icon: ListChecks  },
    { name: 'Testimonials', url: 'testimonials', icon: Star   },
    { name: 'Contact', url: 'contact', icon: Phone }
  ];

  return (
    <>
      <NavBar items={navItems} />
      
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => {
                setIsOpen(false);
                const element = document.getElementById(item.url);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="mobile-menu-item py-4 px-8 text-3xl font-semibold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;