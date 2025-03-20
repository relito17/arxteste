import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useThemeStore } from "../../store/useThemeStore";
import { cn } from "../../lib/utils";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isDark = useThemeStore((state) => state.isDark);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 z-50",
        "hover:scale-110 active:scale-95",
        isDark 
          ? "bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black" 
          : "bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTopButton;