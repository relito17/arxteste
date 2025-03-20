import  { useState, useEffect } from 'react';
import { MessageCircle, User, Bot, Phone, RefreshCw } from 'lucide-react';

const AvailabilityAnimation = () => {
  const [, setCurrentTime] = useState(new Date());
  const [activeAgent, setActiveAgent] = useState('ai');
  const [messages, setMessages] = useState<{ type: string; text: string }[]>([]);
  const [, setHandoffInProgress] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [aiTyping, setAiTyping] = useState(false);

  const simulateUserTyping = async (text: string) => {
    setIsTyping(true);
    for (let i = 0; i <= text.length; i++) {
      setInputText(text.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    setIsTyping(false);
    
    setIsSending(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    setIsSending(false);
    
    setInputText('');
    setMessages(prev => [...prev, { type: 'user', text }]);
  };

  const simulateAITyping = async (text: string, type: 'ai' | 'human' = 'ai') => {
    setAiTyping(true);
    await new Promise(resolve => setTimeout(resolve, 850));
    setAiTyping(false);
    setMessages(prev => [...prev, { type, text }]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const conversation = [
      { type: 'user', text: 'Hello, I need help!' },
      { type: 'ai', text: 'Hi! How can I assist you today?' },
      { type: 'user', text: 'I want to speak with someone with legs' },
      { type: 'system', text: 'Transferring to human agent...' },
      { type: 'human', text: "I'll take it from here! How can I help?" }
    ];

    let currentIndex = 0;
    const messageTimer = setInterval(async () => {
      if (currentIndex < conversation.length) {
        const message = conversation[currentIndex];
        
        if (message.type === 'user') {
          await simulateUserTyping(message.text);
        } else if (message.type === 'system') {
          setHandoffInProgress(true);
          setActiveAgent('human');
          setMessages(prev => [...prev, message]);
        } else {
          await simulateAITyping(message.text, message.type as 'ai' | 'human');
        }
        
        currentIndex++;
      } else {
        // Reset conversation
        currentIndex = 0;
        setMessages([]);
        setActiveAgent('ai');
        setHandoffInProgress(false);
      }
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-1 rounded-2xl">
      <div className="bg-[#0D0D0D] rounded-xl overflow-hidden border border-gray-800">
        <div className="bg-[#1A1A1A] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#f9d342] flex items-center justify-center">
              <Bot className="w-6 h-6 text-black" />
            </div>
            <div>
              <h4 className="font-semibold">ARx Assistant</h4>
              <p className="text-sm text-gray-400">AI Support Agent</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Phone className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <RefreshCw className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
        <div className="p-6 h-[350px] flex flex-col">
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute bottom-0 left-0 right-0 space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''} ${
                    message.type === 'system' ? 'justify-center' : ''
                  }`}
                >
                  {message.type !== 'system' && (
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      {message.type === 'user' ? (
                        <User className="w-4 h-4 text-gray-300" />
                      ) : message.type === 'ai' ? (
                        <Bot className="w-4 h-4 text-[#FFA100]" />
                      ) : message.type === 'human' ? (
                        <MessageCircle className="w-4 h-4 text-blue-400" />
                      ) : null}
                    </div>
                  )}
                  <div className={`px-4 py-2 rounded-lg ${
                    message.type === 'user' ? 'bg-[#FFA100] text-white max-w-[80%]' :
                    message.type === 'system' ? 'bg-gray-700 text-gray-300 text-center inline-block' :
                    'bg-gray-700 text-white max-w-[80%]'
                  }`}>
                    {message.text}
                  </div>
                </div>
              ))}
              {aiTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                    {activeAgent === 'ai' ? (
                      <Bot className="w-4 h-4 text-[#FF6A00]" />
                    ) : (
                      <MessageCircle className="w-4 h-4 text-blue-400" />
                    )}
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-gray-700 text-white">
                    <span className="typing-dots">typing</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="mt-4 flex gap-2">
            <div className="flex-1 bg-gray-900/50 rounded-lg p-3 border border-gray-800">
              <input
                type="text"
                value={isTyping ? inputText : ''}
                readOnly
                placeholder="Type your message..."
                className="w-full bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none"
              />
            </div>
            <button 
              className={`p-3 bg-gradient-to-r from-[#FF6A00] to-[#f9d342] rounded-lg transition-all duration-300 ${
                isSending ? 'scale-90' : 'hover:scale-105'
              }`}
            >
              <MessageCircle className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityAnimation;