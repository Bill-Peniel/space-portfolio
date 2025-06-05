import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/90 backdrop-blur-sm border-b border-cyan-500/30' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-cyan-400 glitch relative" data-text="SPACE.DEV">
            SPACE.DEV
          <div className="text-2xl font-bold text-cyan-400 glitch relative" data-text="YONKO.DEV">
            YONKO.DEV
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              <i className="fas fa-home mr-2"></i>HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              <i className="fas fa-user-astronaut mr-2"></i>ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              <i className="fas fa-rocket mr-2"></i>PROJECTS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              <i className="fas fa-cogs mr-2"></i>SKILLS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              <i className="fas fa-satellite-dish mr-2"></i>CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>
          
          <button 
            className="md:hidden text-cyan-400 text-xl"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <i className={`fas ${isMobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-cyan-500/30">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-cyan-400 transition-colors">
                <i className="fas fa-home mr-2"></i>HOME
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-cyan-400 transition-colors">
                <i className="fas fa-user-astronaut mr-2"></i>ABOUT
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-cyan-400 transition-colors">
                <i className="fas fa-rocket mr-2"></i>PROJECTS
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-cyan-400 transition-colors">
                <i className="fas fa-cogs mr-2"></i>SKILLS
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-cyan-400 transition-colors">
                <i className="fas fa-satellite-dish mr-2"></i>CONTACT
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
