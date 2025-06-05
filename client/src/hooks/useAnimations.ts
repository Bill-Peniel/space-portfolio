import { useEffect, useRef } from 'react';
import { animations } from '@/lib/animations';

export const useAnimations = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Load Anime.js
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
    script.async = true;
    document.head.appendChild(script);

    // Initialize intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const animationType = element.dataset.animation;
            
            switch (animationType) {
              case 'counter':
                const target = parseInt(element.dataset.count || '0');
                animations.animateCounter(element, target);
                break;
              case 'skillbar':
                const width = parseInt(element.dataset.width || '0');
                animations.animateSkillBar(element, width);
                break;
              case 'stagger':
                animations.staggerCards(element.dataset.selector || '');
                break;
              case 'float':
                animations.floatElements(element.dataset.selector || '');
                break;
              case 'typewriter':
                const text = element.dataset.text || '';
                animations.typeWriter(element, text);
                break;
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const observe = (element: HTMLElement) => {
    if (observerRef.current) {
      observerRef.current.observe(element);
    }
  };

  const unobserve = (element: HTMLElement) => {
    if (observerRef.current) {
      observerRef.current.unobserve(element);
    }
  };

  return { observe, unobserve };
};
