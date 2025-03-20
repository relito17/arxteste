import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Don't initialize cursor events on mobile
    if (isMobile) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let rafId: number;

    const updatePosition = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.dataset.cursorHover ||
        target.closest('[data-cursor-hover]') ||
        target.classList.contains('service-card')
      ) {
        setHovering(true);
      }

     
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.dataset.cursorHover ||
        target.closest('[data-cursor-hover]') ||
        target.classList.contains('service-card')
      ) {
        setHovering(false);
      }

     
    };

    document.documentElement.style.cursor = 'none';

    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      document.documentElement.style.cursor = '';
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render the cursor on mobile
  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${clicking ? 'clicking' : ''} ${hovering ? 'hovering' : ''} `}
    />
  );
};

export default CustomCursor;