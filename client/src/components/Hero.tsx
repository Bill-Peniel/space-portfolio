import { useEffect, useRef } from 'react';
import { useAnimations } from '@/hooks/useAnimations';

export default function Hero() {
  const { observe } = useAnimations();
  const heroRef = useRef<HTMLElement>(null);
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      observe(heroRef.current);
    }

    // Typewriter effect
    if (typingRef.current) {
      const text = "FULL-STACK DEVELOPER";
      let i = 0;
      typingRef.current.textContent = '';
      
      const type = () => {
        if (i < text.length && typingRef.current) {
          typingRef.current.textContent += text.charAt(i);
          i++;
          setTimeout(type, 100);
        }
      };
      
      setTimeout(type, 1000);
    }
  }, [observe]);

  const stats = [
    { count: 50, label: "PROJECTS", color: "cyan" },
    { count: 5, label: "YEARS EXP", color: "rose" },
    { count: 100, label: "CLIENTS", color: "green" },
    { count: 24, label: "AWARDS", color: "cyan" }
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      data-animation="stagger"
      data-selector=".hero-element"
    >
      {/* Starfield Background */}
      <div className="fixed inset-0 starfield-bg opacity-30 z-0"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 opacity-80"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-rose-400 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-70" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 hero-element opacity-0">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-rose-400 to-green-400 bg-clip-text text-transparent">
            ALEX COSMOS
          </h1>
          <div className="text-xl md:text-2xl text-slate-300 mb-8 relative">
            <span ref={typingRef} className="typing-text"></span>
            <span className="cursor animate-pulse">|</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12 hero-element opacity-0">
          <button className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 pixel-border relative overflow-hidden group">
            <span className="relative z-10">
              <i className="fas fa-download mr-2"></i>DOWNLOAD CV
            </span>
            <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          <button className="px-8 py-3 bg-rose-400 hover:bg-rose-500 text-slate-900 transition-all duration-300 relative overflow-hidden scan-line">
            <i className="fas fa-envelope mr-2"></i>GET IN TOUCH
          </button>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto hero-element opacity-0">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm border border-${stat.color}-400/30 p-6 text-center`}
            >
              <div 
                className={`text-3xl font-bold text-${stat.color}-400 mb-2`}
                data-animation="counter"
                data-count={stat.count}
              >
                0
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-cyan-400 text-2xl"></i>
      </div>
    </section>
  );
}
