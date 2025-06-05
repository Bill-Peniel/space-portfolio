import { useEffect, useRef } from 'react';
import { useAnimations } from '@/hooks/useAnimations';

export default function Skills() {
  const { observe } = useAnimations();
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (skillsRef.current) {
      observe(skillsRef.current);
    }
  }, [observe]);

  const frontendSkills = [
    { name: "Vue.js / Nuxt.js", percentage: 95, color: "cyan" },
    { name: "JavaScript / TypeScript", percentage: 90, color: "rose" },
    { name: "Tailwind CSS", percentage: 88, color: "green" },
    { name: "Three.js / WebGL", percentage: 75, color: "cyan" }
  ];

  const backendSkills = [
    { name: "Node.js / Express", percentage: 85, color: "green" },
    { name: "MongoDB / PostgreSQL", percentage: 80, color: "cyan" },
    { name: "Docker / AWS", percentage: 70, color: "rose" },
    { name: "GraphQL / REST APIs", percentage: 82, color: "green" }
  ];

  const technologies = [
    { icon: "fab fa-vuejs", color: "cyan" },
    { icon: "fab fa-js-square", color: "rose" },
    { icon: "fab fa-node-js", color: "green" },
    { icon: "fab fa-docker", color: "cyan" },
    { icon: "fab fa-aws", color: "rose" },
    { icon: "fab fa-git-alt", color: "green" },
    { icon: "fab fa-github", color: "cyan" },
    { icon: "fas fa-database", color: "rose" }
  ];

  return (
    <section 
      id="skills" 
      ref={skillsRef}
      className="py-20 relative"
      data-animation="stagger"
      data-selector=".skill-element"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-green-400">SKILL.MATRIX</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 skill-element opacity-0">FRONTEND.SYSTEMS</h3>
            
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-element opacity-0">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className={`text-${skill.color}-400 font-bold`}>{skill.percentage}%</span>
                  </div>
                  <div className={`h-3 bg-slate-800/30 border border-${skill.color}-400/30 relative overflow-hidden`}>
                    <div 
                      className={`h-full bg-gradient-to-r from-${skill.color}-400 to-rose-400 w-0 transition-all duration-2000 ease-out`}
                      data-animation="skillbar"
                      data-width={skill.percentage}
                      style={{ width: '0%' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-rose-400 mb-6 skill-element opacity-0">BACKEND.SYSTEMS</h3>
            
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={index} className="skill-element opacity-0">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className={`text-${skill.color}-400 font-bold`}>{skill.percentage}%</span>
                  </div>
                  <div className={`h-3 bg-slate-800/30 border border-${skill.color}-400/30 relative overflow-hidden`}>
                    <div 
                      className={`h-full bg-gradient-to-r from-${skill.color}-400 to-cyan-400 w-0 transition-all duration-2000 ease-out`}
                      data-animation="skillbar"
                      data-width={skill.percentage}
                      style={{ width: '0%' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Technology Icons Grid */}
        <div className="mt-16 grid grid-cols-4 md:grid-cols-8 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className={`skill-element aspect-square bg-slate-800/30 border border-${tech.color}-400/30 flex items-center justify-center text-2xl text-${tech.color}-400 hover:bg-${tech.color}-400/20 transition-all duration-300 cursor-pointer group opacity-0`}
            >
              <i className={`${tech.icon} group-hover:scale-110 transition-transform duration-300`}></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
