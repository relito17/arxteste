import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
import { LucideIcon } from 'lucide-react'

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [, setIsMobile] = useState(false)
  const [visible, setVisible] = useState(false)
  const [isManualNavigation, setIsManualNavigation] = useState(false)

  // Removido o código relacionado ao setLastScrollY e scroll
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Lógica de scroll, agora só ativa se não for navegação manual
  useEffect(() => {
    const handleScroll = () => {
      if (isManualNavigation) return // Ignora a rolagem se a navegação for manual

      const currentScrollY = window.scrollY

      // Mostrar/ocultar navbar com base na rolagem
      if (currentScrollY > 100 || activeTab !== 'Home') {
        setVisible(true)
      } else {
        setVisible(false)
      }

      const sections = items.map(item => item.url)
      let currentSection = ''
      let minDistance = Infinity
      let viewportHeight = window.innerHeight

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementCenter = rect.top + rect.height / 2
          const distanceFromCenter = Math.abs(elementCenter - viewportHeight / 2)

          // Melhor verificação de visibilidade
          if (rect.top < viewportHeight * 0.6 && rect.bottom > viewportHeight * 0.4) {
            if (distanceFromCenter < minDistance) {
              minDistance = distanceFromCenter
              currentSection = section
            }
          }
        }
      })

      const activeItem = items.find(item => item.url === currentSection)
      if (activeItem && activeItem.name !== activeTab) {
        setActiveTab(activeItem.name)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items, activeTab, isManualNavigation]) // Agora a atualização depende também de isManualNavigation

  // Garantir que o clique também atualize imediatamente o activeTab
  const handleClick = (name: string, url: string) => {
    setActiveTab(name); // Atualiza o activeTab imediatamente
    setIsManualNavigation(true) // Ativa a navegação manual
    
    const element = document.getElementById(url);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1500; // Duração do scroll em milissegundos
      let startTime: number;
  
      const scroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
  
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Controla o progresso do scroll
  
        window.scrollTo(0, startPosition + distance * progress);
  
        if (timeElapsed < duration) {
          requestAnimationFrame(scroll);
        } else {
          setIsManualNavigation(false) // Reativa a navegação automática após o scroll terminar
        }
      };
  
      requestAnimationFrame(scroll);
    }
  };

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6 transition-all duration-500",
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full",
        className,
      )}
    >
      <div className="flex items-center gap-2 md:gap-3 bg-black/80 border border-gray-800 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleClick(item.name, item.url)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-3 md:px-6 py-2 rounded-full transition-all duration-300",
                "text-gray-400 hover:text-[#FFFFFF]",
                isActive && "bg-[#FFFFFF]/10 gradient-text",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} className={`${isActive ? 'text-[#FFFFFF]' : 'text-gray-400'}`} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#FF6A00]/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-[#FF6A00] to-[#f9d342] rounded-t-full">
                    <div className="absolute w-12 h-6 bg-[#FF6A00]/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#FF6A00]/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-[#FF6A00]/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>

          )
        })}
      </div>
    </div>
  )
}
