import { useEffect } from 'react';

const ShootingStars = () => {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'shooting-star2';

      // Randomize starting position
      star.style.left = `-${Math.random() * 500}px`; // Slightly off-screen on the left
      star.style.top = `${Math.random() * window.innerHeight}px`; // Random vertical position

      // Randomize animation properties
      star.style.animationDuration = `${2 + Math.random() * 2}s`; // Random duration (2–4s)
      star.style.animationDelay = `${Math.random() * 2}s`; // Slight delay for natural feel

      document.getElementById('stars-container')?.appendChild(star);

      // Clean up after animation
      setTimeout(() => {
        star.remove();
      }, 5000);
    };

    const interval = setInterval(() => {
      for (let i = 0; i < 1; i++) createStar(); // Generate multiple stars per interval
    }, 150); // Faster interval for more stars

    return () => clearInterval(interval);
  }, []);

  return <div id="stars-container" className="absolute inset-0 overflow-hidden pointer-events-none" />;
};

export default ShootingStars;
