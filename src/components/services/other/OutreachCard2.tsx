import { useState } from "react";
import { Send, Mail, Check } from "lucide-react";

const OutreachCard2 = ({ }: { onClick: () => void }) => {
  const [animationStep, setAnimationStep] = useState<
    "idle" | "sending" | "progress" | "complete"
  >("idle");

  const handleSend = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAnimationStep("sending");

    setTimeout(() => setAnimationStep("progress"), 800); // Transition to envelope
    setTimeout(() => setAnimationStep("complete"), 3000); // Progress completes, transform to check
    setTimeout(() => setAnimationStep("idle"), 4500); // Reset to normal
  };

  return (
    <div
      className={`group relative p-4 sm:p-6 lg:p-8 rounded-2xl transition-all duration-300  overflow-hidden`}
      
    >
    
      {/* Content */}
      <div
        className={`mt-6 transition-opacity duration-500 ${
          animationStep !== 'idle' ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="outreach-box bg-[#0D0D0D] border border-[#1A1A1A] rounded-lg p-4 shadow-glow">
          {/* Reached Statistics */}
          <div className="flex items-center mb-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6A00] to-[#f9d342] border-2 border-[#0D0D0D]"
                />
              ))}
            </div>
            <span className="ml-3 px-2 py-1 bg-[#FFA100]/20 rounded-full text-[#FF6A00] text-sm font-semibold">
              4k+ reached
            </span>
          </div>

          {/* Subject and Message Placeholders */}
          <div className="mb-3">
            <div className="text-sm text-gray-400 mb-2">Subject</div>
            <div className="flex flex-wrap gap-2">
              {[40, 60, 30].map((width, i) => (
                <div
                  key={i}
                  className="h-4 bg-[#1A1A1A] rounded-full transition-all duration-300 group-hover:shadow-glow-sm"
                  style={{ width: `${width}px` }}
                />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <div className="text-sm text-gray-400 mb-2">Message</div>
            <div className="flex flex-wrap gap-2">
              {[80, 60, 40, 70, 50, 65, 45, 55].map((width, i) => (
                <div
                  key={i}
                  className="h-4 bg-[#1A1A1A] rounded-full transition-all duration-300 group-hover:shadow-glow-sm"
                  style={{ width: `${width}px` }}
                />
              ))}
            </div>
          </div>

          {/* Send Button */}
          <div className="flex justify-end">
        <button
          onClick={handleSend}
          className="p-3 rounded-lg bg-gradient-to-r from-[#FF6A00] to-[#f9d342] hover:scale-105 transition-transform"
        >
          <Send className="w-5 h-5 text-black" />
        </button>
      </div>
        </div>
      </div>

      {/* Animation Layer */}
{animationStep !== "idle" && (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0D0D0D]/90">
    
            

    {/* Envelope & Progress Bar (Grouped Together) */}
    {animationStep === "progress" && (
      <div className="relative flex flex-col items-center">
        <Mail className="w-12 h-12 text-[#FFA100] animate-envelope-transform" />
        
        {/* Progress Bar Positioned Directly Below */}
        <div className="w-24 h-1 bg-[#1A1A1A] rounded overflow-hidden mt-2">
          <div className="h-1 bg-[#FFA100] rounded progress-bar animate-progress" />
        </div>
      </div>
    )}

    {/* Checkmark Appears */}
    {animationStep === "complete" && (
      <Check className="w-12 h-12 text-[#00FF00] animate-check-transform" />
    )}
  </div>
)}



    </div>
  );
};

export default OutreachCard2;
