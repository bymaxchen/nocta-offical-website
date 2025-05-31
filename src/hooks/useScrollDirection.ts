import { useState, useEffect, useCallback } from 'react';

interface ScrollDirectionConfig {
  threshold?: number;
  throttleMs?: number;
}

type ScrollDirection = 'up' | 'down' | null;

export function useScrollDirection(config: ScrollDirectionConfig = {}) {
  const { threshold = 15, throttleMs = 100 } = config;
  
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const throttle = useCallback((func: Function, delay: number) => {
    let inThrottle: boolean;
    return function (this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), delay);
      }
    };
  }, []);

  const updateScrollDirection = useCallback(
    throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // If we're at the very top, always show the navbar
      if (scrollTop <= 0) {
        setIsVisible(true);
        setScrollDirection(null);
        setLastScrollTop(scrollTop);
        return;
      }

      // Calculate the difference in scroll position
      const scrollDiff = Math.abs(scrollTop - lastScrollTop);
      
      // Only update if the scroll difference is greater than the threshold
      if (scrollDiff > threshold) {
        if (scrollTop > lastScrollTop) {
          // Scrolling down
          setScrollDirection('down');
          setIsVisible(false);
        } else {
          // Scrolling up
          setScrollDirection('up');
          setIsVisible(true);
        }
        setLastScrollTop(scrollTop);
      }
    }, throttleMs),
    [lastScrollTop, threshold, throttleMs, throttle]
  );

  useEffect(() => {
    window.addEventListener('scroll', updateScrollDirection, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [updateScrollDirection]);

  return {
    scrollDirection,
    isVisible,
    lastScrollTop
  };
}