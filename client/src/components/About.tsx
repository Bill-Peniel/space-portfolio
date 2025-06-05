import { useEffect, useRef } from 'react';
import { useAnimations } from '@/hooks/useAnimations';

export default function About() {
  const { observe } = useAnimations();
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (aboutRef.current) {
      observe(aboutRef.current);
    }
  }, [observe]);

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="py-20 relative"
      data-animation="stagger"
      data-selector=".about-element"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-cyan-400">ABOUT.TRANSMISSION</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-rose-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative about-element opacity-0">
            {/* Pixel art style portrait placeholder */}
            <div className="relative bg-slate-800/30 border-2 border-cyan-400/50 p-8 backdrop-blur-sm">
              <div className="aspect-square bg-gradient-to-br from-cyan-400/20 to-rose-400/20 rounded-lg flex items-center justify-center text-8xl text-cyan-400/50">
                <i className="fas fa-user-astronaut"></i>
              </div>
              <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 animate-pulse rounded-full"></div>
              <div className="absolute bottom-4 left-4 text-xs text-cyan-400">STATUS: ONLINE</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-800/20 border border-rose-400/30 p-6 backdrop-blur-sm about-element opacity-0">
              <h3 className="text-2xl font-bold text-rose-400 mb-4">SYSTEM.INFO</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">NAME:</span>
                  <span className="text-cyan-400">ALEX COSMOS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">AGE:</span>
                  <span className="text-cyan-400">28.CYCLES</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">LOCATION:</span>
                  <span className="text-cyan-400">MARS.COLONY.01</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">STATUS:</span>
                  <span className="text-green-400">AVAILABLE</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/20 border border-cyan-400/30 p-6 backdrop-blur-sm about-element opacity-0">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">MISSION.LOG</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Greetings, fellow space traveler! I'm a passionate full-stack developer with over 5 years of experience crafting digital experiences across the galaxy. My mission is to build innovative web applications that push the boundaries of technology.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I'm not coding, you can find me exploring new planets, studying alien technologies, or contributing to open-source projects that benefit the intergalactic community.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/20 border border-green-400/30 p-4 text-center backdrop-blur-sm about-element opacity-0">
                <div className="text-2xl font-bold text-green-400">Vue.js</div>
                <div className="text-xs text-slate-400">SPECIALIST</div>
              </div>
              <div className="bg-slate-800/20 border border-rose-400/30 p-4 text-center backdrop-blur-sm about-element opacity-0">
                <div className="text-2xl font-bold text-rose-400">Node.js</div>
                <div className="text-xs text-slate-400">EXPERT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
