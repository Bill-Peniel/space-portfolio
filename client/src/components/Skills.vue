<template>
  <section 
    id="skills" 
    ref="skillsRef"
    class="py-20 relative"
  >
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-6xl font-bold mb-4 text-green-400">MATRICE.COMPÉTENCES</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
          <h3 class="text-2xl font-bold text-cyan-400 mb-6 skill-element opacity-0">SYSTÈMES.FRONTEND</h3>
          
          <div class="space-y-6">
            <div v-for="(skill, index) in frontendSkills" :key="index" class="skill-element opacity-0">
              <div class="flex justify-between mb-2">
                <span class="text-slate-300">{{ skill.name }}</span>
                <span :class="['text-', skill.color, '-400 font-bold']">{{ skill.percentage }}%</span>
              </div>
              <div :class="['h-3 bg-slate-800/30 border border-', skill.color, '-400/30 relative overflow-hidden']">
                <div 
                  :class="['h-full bg-gradient-to-r from-', skill.color, '-400 to-rose-400 transition-all duration-2000 ease-out']"
                  :style="{ width: animatedSkills.frontend[index] + '%' }"
                ></div>
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="space-y-8">
          <h3 class="text-2xl font-bold text-rose-400 mb-6 skill-element opacity-0">SYSTÈMES.BACKEND</h3>
          
          <div class="space-y-6">
            <div v-for="(skill, index) in backendSkills" :key="index" class="skill-element opacity-0">
              <div class="flex justify-between mb-2">
                <span class="text-slate-300">{{ skill.name }}</span>
                <span :class="['text-', skill.color, '-400 font-bold']">{{ skill.percentage }}%</span>
              </div>
              <div :class="['h-3 bg-slate-800/30 border border-', skill.color, '-400/30 relative overflow-hidden']">
                <div 
                  :class="['h-full bg-gradient-to-r from-', skill.color, '-400 to-cyan-400 transition-all duration-2000 ease-out']"
                  :style="{ width: animatedSkills.backend[index] + '%' }"
                ></div>
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Technology Icons Grid -->
      <div class="mt-16 grid grid-cols-4 md:grid-cols-8 gap-6 max-w-4xl mx-auto">
        <div 
          v-for="(tech, index) in technologies" 
          :key="index"
          :class="['skill-element aspect-square bg-slate-800/30 border border-', tech.color, '-400/30 flex items-center justify-center text-2xl text-', tech.color, '-400 hover:bg-', tech.color, '-400/20 transition-all duration-300 cursor-pointer group opacity-0']"
        >
          <i :class="[tech.icon, 'group-hover:scale-110 transition-transform duration-300']"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      animatedSkills: {
        frontend: [0, 0, 0, 0],
        backend: [0, 0, 0, 0]
      },
      frontendSkills: [
        { name: "Vue.js / Nuxt.js", percentage: 95, color: "cyan" },
        { name: "JavaScript / TypeScript", percentage: 90, color: "rose" },
        { name: "Tailwind CSS", percentage: 88, color: "green" },
        { name: "Three.js / WebGL", percentage: 75, color: "cyan" }
      ],
      backendSkills: [
        { name: "Node.js / Express", percentage: 85, color: "green" },
        { name: "MongoDB / PostgreSQL", percentage: 80, color: "cyan" },
        { name: "Docker / AWS", percentage: 70, color: "rose" },
        { name: "GraphQL / REST APIs", percentage: 82, color: "green" }
      ],
      technologies: [
        { icon: "fab fa-vuejs", color: "cyan" },
        { icon: "fab fa-js-square", color: "rose" },
        { icon: "fab fa-node-js", color: "green" },
        { icon: "fab fa-docker", color: "cyan" },
        { icon: "fab fa-aws", color: "rose" },
        { icon: "fab fa-git-alt", color: "green" },
        { icon: "fab fa-github", color: "cyan" },
        { icon: "fas fa-database", color: "rose" }
      ]
    }
  },
  mounted() {
    this.observeIntersection()
  },
  methods: {
    observeIntersection() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateElements()
            this.animateSkillBars()
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })
      
      if (this.$refs.skillsRef) {
        observer.observe(this.$refs.skillsRef)
      }
    },
    
    animateElements() {
      if (window.anime) {
        window.anime({
          targets: '.skill-element',
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 800,
          delay: window.anime.stagger(200),
          easing: 'easeOutExpo'
        })
      }
    },
    
    animateSkillBars() {
      // Animate frontend skills
      this.frontendSkills.forEach((skill, index) => {
        if (window.anime) {
          const obj = { width: 0 }
          window.anime({
            targets: obj,
            width: skill.percentage,
            duration: 2000,
            easing: 'easeOutExpo',
            delay: Math.random() * 1000,
            update: () => {
              this.animatedSkills.frontend[index] = Math.floor(obj.width)
            }
          })
        }
      })
      
      // Animate backend skills
      this.backendSkills.forEach((skill, index) => {
        if (window.anime) {
          const obj = { width: 0 }
          window.anime({
            targets: obj,
            width: skill.percentage,
            duration: 2000,
            easing: 'easeOutExpo',
            delay: Math.random() * 1000,
            update: () => {
              this.animatedSkills.backend[index] = Math.floor(obj.width)
            }
          })
        }
      })
    }
  }
}
</script>