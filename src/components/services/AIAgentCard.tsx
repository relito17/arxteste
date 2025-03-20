import { useState, useEffect } from 'react';
import { Headphones, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AIAgentCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const typingSpeed = 8;
  const deletingSpeed = 1;

  const defaultMessage =
    'ARxAutomate can significantly improve your business processes by ';
  const hoverMessage =
    'leveraging artificial intelligence to automate repetitive tasks. Our AI solutions adapt to your specific needs, learning from each interaction to provide increasingly personalized and effective support.';

  useEffect(() => {
    // Detecta se está num dispositivo móvel
    if (window.innerWidth < 768) {
      setIsHovered(true);
    }
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animateText = () => {
      if (isHovered && !isDeleting) {
        if (displayedText.length < hoverMessage.length) {
          setDisplayedText(hoverMessage.slice(0, displayedText.length + 1));
          timeout = setTimeout(animateText, typingSpeed);
        }
      } else if (!isHovered && !isDeleting) {
        setIsDeleting(true);
        timeout = setTimeout(animateText, deletingSpeed);
      } else if (isDeleting) {
        if (displayedText.length === 0) {
          setIsDeleting(false);
          if (isHovered) {
            timeout = setTimeout(animateText, typingSpeed);
          }
        } else {
          setDisplayedText(displayedText.slice(0, -1));
          timeout = setTimeout(animateText, deletingSpeed);
        }
      }
    };

    timeout = setTimeout(animateText, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [isHovered, displayedText, isDeleting]);

  return (
    <div
      className="group relative p-4 sm:p-6 lg:p-8 rounded-2xl transition-all hover:scale-105 duration-300 cursor-pointer overflow-hidden border border-gray-800 hover:bg-gray-900/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setIsHovered(false)} // Evita desligar em mobile
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black transition-opacity duration-300" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon and Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
            <Headphones className="w-8 h-8" style={{ color: '#FFA100' }} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            Customer Support AI Agent
          </h3>
        </div>
        <p className="text-gray-400 text-sm sm:text-base">
          Deliver 24/7 instant support with our AI-powered agent—ensuring
          customer satisfaction and freeing up your team to focus on growth!
        </p>
        {/* Learn More CTA */}
        <button 
          onClick={() => navigate('/customer-support-ai')}
          className="mt-4 sm:mt-6 flex items-center gap-2 text-[#FFA100] font-semibold border border-[#FFA100] rounded-lg px-4 py-2 transition duration-300 hover:shadow-[0_0_10px_#FFA100]"
        >
          Learn More
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
        </button>




        {/* Chat Interaction */}
        <div className="mt-6">
          <div className="chat-box bg-[#0D0D0D] border border-[#1A1A1A] rounded-lg p-4 shadow-glow">
            {/* Customer's message */}
            <div className="flex flex-col mb-4">
              <div className="flex items-center justify-end gap-3 mb-2">
                <span className="text-sm text-gray-400">Customer</span>
                <div className="w-8 h-8 rounded bg-[#1A1A1A] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="rounded p-3 ml-auto w-fit">
                <p className="text-sm text-gray-300">
                  How can ARxAutomate help improve my business processes?
                </p>
              </div>
            </div>

            {/* AI Assistant's response */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded bg-[#1A1A1A] flex items-center justify-center">
                  <div className="text-gray-400 font-bold text-sm">AI</div>
                </div>
                <span className="text-sm text-gray-400">AI Assistant</span>
              </div>
              <div className="rounded p-3 mr-4">
                <p className="text-sm text-gray-300 leading-relaxed typing-container">
                  <span className="typing-text">
                    {defaultMessage}{displayedText}
                  </span>
                  <span className="typing-cursor"></span>
                </p>
              </div>
            </div>

            {/* Input area */}
            <div className="mt-4 flex items-center gap-2">
              <div className="flex-1 bg-[#1A1A1A] rounded-lg p-3 border border-gray-800 chat-input">
                <div className="h-5 w-full flex items-center">
                  <span className="text-gray-500 text-sm">
                    Type your message...
                  </span>
                </div>
              </div>
              <button className="p-2 rounded-lg bg-[#1A1A1A] chat-input-icon">
                <Send className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default AIAgentCard;
