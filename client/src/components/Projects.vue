<template>
  <section 
    id="projects" 
    ref="projectsRef"
    class="py-20 bg-slate-800/50 relative"
  >
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-6xl font-bold mb-4 text-rose-400">ARCHIVE.PROJETS</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-rose-400 to-green-400 mx-auto"></div>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          :class="['project-card group relative bg-slate-800/30 border border-', project.borderColor, '-400/30 overflow-hidden backdrop-blur-sm hover:border-', project.borderColor, '-400 transition-all duration-300 opacity-0']"
        >
          <div :class="['aspect-video bg-gradient-to-br', project.gradient, 'flex items-center justify-center text-6xl text-', project.borderColor, '-400/50 group-hover:scale-110 transition-transform duration-300']">
            <i :class="['fas', project.icon]"></i>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-3">
              <h3 :class="['text-xl font-bold text-', project.borderColor, '-400']">{{ project.title }}</h3>
              <div class="flex space-x-2">
                <span :class="['w-3 h-3 bg-', project.statusColor, '-400 rounded-full animate-pulse']"></span>
                <span :class="['text-xs text-', project.statusColor, '-400']">{{ project.status }}</span>
              </div>
            </div>
            <p class="text-slate-400 text-sm mb-4">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="(tech, techIndex) in project.technologies" 
                :key="techIndex"
                :class="['px-2 py-1 bg-', project.techColors[techIndex], '-400/20 text-', project.techColors[techIndex], '-400 text-xs']"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex space-x-4">
              <button :class="['flex-1 py-2 border border-', project.borderColor, '-400 text-', project.borderColor, '-400 hover:bg-', project.borderColor, '-400 hover:text-slate-900 transition-all duration-300 text-sm']">
                <i class="fas fa-external-link-alt mr-2"></i>VOIR
              </button>
              <button class="flex-1 py-2 border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-slate-900 transition-all duration-300 text-sm">
                <i class="fab fa-github mr-2"></i>CODE
              </button>
            </div>
          </div>
          <div :class="['absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-', project.borderColor, '-400/30 group-hover:border-t-', project.borderColor, '-400 transition-all duration-300']"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: "STELLAR.APP",
          status: "ACTIF",
          statusColor: "green",
          description: "Une plateforme révolutionnaire d'exploration spatiale construite avec Vue.js et Three.js, avec cartographie stellaire en temps réel et visualisation 3D interactive.",
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
          description: "Système de suivi de satellites en temps réel avec algorithmes prédictifs et simulation de mécanique orbitale pour la planification de missions spatiales.",
          technologies: ["NUXT.JS", "D3.JS", "API"],
          techColors: ["rose", "cyan", "green"],
          icon: "fa-satellite",
          gradient: "from-rose-400/20 to-green-400/20",
          borderColor: "rose"
        },
        {
          title: "MARS.COLONY",
          status: "EN LIGNE",
          statusColor: "green",
          description: "Simulation de colonie martienne virtuelle avec gestion des ressources, algorithmes de terraformation et fonctionnalités de collaboration multijoueur.",
          technologies: ["VUE.JS", "SOCKET.IO", "MONGODB"],
          techColors: ["green", "cyan", "rose"],
          icon: "fa-space-shuttle",
          gradient: "from-green-400/20 to-cyan-400/20",
          borderColor: "green"
        }
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
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })
      
      if (this.$refs.projectsRef) {
        observer.observe(this.$refs.projectsRef)
      }
    },
    
    animateElements() {
      if (window.anime) {
        window.anime({
          targets: '.project-card',
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 800,
          delay: window.anime.stagger(200),
          easing: 'easeOutExpo'
        })
      }
    }
  }
}
</script>