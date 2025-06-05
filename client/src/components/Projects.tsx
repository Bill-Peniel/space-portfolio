import { useEffect, useRef } from 'react';
import { useAnimations } from '@/hooks/useAnimations';

export default function Projects() {
  const { observe } = useAnimations();
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (projectsRef.current) {
      observe(projectsRef.current);
    }
  }, [observe]);

  const projects = [
    {
      title: "STELLAR.APP",
      status: "ACTIVE",
      statusColor: "green",
      description: "A revolutionary space exploration platform built with Vue.js and Three.js, featuring real-time stellar mapping and interactive 3D visualization.",
      technologies: ["VUE.JS", "THREE.JS", "WEBGL"],
      techColors: ["cyan", "rose", "green"],
      icon: "fa-rocket",
      gradient: "from-cyan-400/20 to-rose-400/20",
      borderColor: "cyan"
    },
    {
      title: "ORBIT.TRACKER",
      status: "BETA",
      statusColor: "rose",
      description: "Real-time satellite tracking system with predictive algorithms and orbital mechanics simulation for space mission planning.",
      technologies: ["NUXT.JS", "D3.JS", "API"],
      techColors: ["rose", "cyan", "green"],
      icon: "fa-satellite",
      gradient: "from-rose-400/20 to-green-400/20",
      borderColor: "rose"
    },
    {
      title: "MARS.COLONY",
      status: "LIVE",
      statusColor: "green",
      description: "Virtual Mars colony simulation with resource management, terraforming algorithms, and multiplayer collaboration features.",
      technologies: ["VUE.JS", "SOCKET.IO", "MONGODB"],
      techColors: ["green", "cyan", "rose"],
      icon: "fa-space-shuttle",
      gradient: "from-green-400/20 to-cyan-400/20",
      borderColor: "green"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={projectsRef}
      className="py-20 bg-slate-800/50 relative"
      data-animation="stagger"
      data-selector=".project-card"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-rose-400">PROJECT.ARCHIVE</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-green-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card group relative bg-slate-800/30 border border-${project.borderColor}-400/30 overflow-hidden backdrop-blur-sm hover:border-${project.borderColor}-400 transition-all duration-300 opacity-0`}
            >
              <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl text-${project.borderColor}-400/50 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`fas ${project.icon}`}></i>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-xl font-bold text-${project.borderColor}-400`}>{project.title}</h3>
                  <div className="flex space-x-2">
                    <span className={`w-3 h-3 bg-${project.statusColor}-400 rounded-full animate-pulse`}></span>
                    <span className={`text-xs text-${project.statusColor}-400`}>{project.status}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-2 py-1 bg-${project.techColors[techIndex]}-400/20 text-${project.techColors[techIndex]}-400 text-xs`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button className={`flex-1 py-2 border border-${project.borderColor}-400 text-${project.borderColor}-400 hover:bg-${project.borderColor}-400 hover:text-slate-900 transition-all duration-300 text-sm`}>
                    <i className="fas fa-external-link-alt mr-2"></i>VIEW
                  </button>
                  <button className={`flex-1 py-2 border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-slate-900 transition-all duration-300 text-sm`}>
                    <i className="fab fa-github mr-2"></i>CODE
                  </button>
                </div>
              </div>
              <div className={`absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-${project.borderColor}-400/30 group-hover:border-t-${project.borderColor}-400 transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
