declare global {
  interface Window {
    anime: any;
  }
}

// Anime.js animations library
export const animations = {
  // Counter animation
  animateCounter: (element: HTMLElement, target: number) => {
    if (typeof window !== 'undefined' && window.anime) {
      const obj = { count: 0 };
      window.anime({
        targets: obj,
        count: target,
        duration: 2000,
        easing: 'easeOutExpo',
        update: () => {
          element.textContent = Math.floor(obj.count).toString();
        }
      });
    }
  },

  // Skill bar animation
  animateSkillBar: (element: HTMLElement, width: number) => {
    if (typeof window !== 'undefined' && window.anime) {
      window.anime({
        targets: element,
        width: `${width}%`,
        duration: 2000,
        easing: 'easeOutExpo',
        delay: Math.random() * 1000
      });
    }
  },

  // Stagger animation for cards
  staggerCards: (selector: string) => {
    if (typeof window !== 'undefined' && window.anime) {
      window.anime({
        targets: selector,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 800,
        delay: window.anime.stagger(200),
        easing: 'easeOutExpo'
      });
    }
  },

  // Glitch effect
  glitchText: (element: HTMLElement) => {
    if (typeof window !== 'undefined' && window.anime) {
      window.anime({
        targets: element,
        translateX: () => window.anime.random(-2, 2),
        translateY: () => window.anime.random(-2, 2),
        duration: 100,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine'
      });
    }
  },

  // Float animation
  floatElements: (selector: string) => {
    if (typeof window !== 'undefined' && window.anime) {
      window.anime({
        targets: selector,
        translateY: [0, -20],
        duration: 3000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        delay: window.anime.stagger(500)
      });
    }
  },

  // Typewriter effect
  typeWriter: (element: HTMLElement, text: string) => {
    if (typeof window !== 'undefined' && window.anime) {
      element.textContent = '';
      const textArray = text.split('');
      
      window.anime({
        targets: textArray,
        duration: 100,
        delay: (el: any, i: number) => i * 100,
        update: (anim: any) => {
          const progress = Math.round(anim.progress / 100 * textArray.length);
          element.textContent = textArray.slice(0, progress).join('');
        }
      });
    }
  }
};
