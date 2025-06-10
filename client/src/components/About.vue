<template>
  <section 
    id="about" 
    ref="aboutRef"
    class="py-20 relative"
  >
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-6xl font-bold mb-4 text-cyan-400">TRANSMISSION.À.PROPOS</h2>
        <h2 class="text-4xl md:text-6xl font-bold mb-4 text-cyan-400">À.PROPOS</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-rose-400 mx-auto"></div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="relative about-element opacity-0">
          <!-- Pixel art style portrait placeholder -->
          <div class="relative bg-slate-800/30 border-2 border-cyan-400/50 p-8 backdrop-blur-sm">
            <div class="aspect-square bg-gradient-to-br from-cyan-400/20 to-rose-400/20 rounded-lg flex items-center justify-center text-8xl text-cyan-400/50">
              <i class="fas fa-user-astronaut"></i>
            </div>
            <div class="absolute top-4 right-4 w-4 h-4 bg-green-400 animate-pulse rounded-full"></div>
            <div class="absolute bottom-4 left-4 text-xs text-cyan-400">STATUT: EN LIGNE</div>
          </div>
        </div>
        
        <div class="space-y-6">
          <div class="bg-slate-800/20 border border-rose-400/30 p-6 backdrop-blur-sm about-element opacity-0">
            <h3 class="text-2xl font-bold text-rose-400 mb-4">SYSTÈME.INFO</h3>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-slate-400">NOM:</span>
                <span class="text-cyan-400">ALEX COSMOS</span>
                <span class="text-cyan-400">BILL AKPACHEME</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">ÂGE:</span>
                <span class="text-cyan-400">28.CYCLES</span>
                <span class="text-cyan-400">21</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">LOCALISATION:</span>
                <span class="text-cyan-400">COLONIE.MARS.01</span>
                <span class="text-cyan-400">COTONOU, BENIN</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">STATUT:</span>
                <span class="text-green-400">DISPONIBLE</span>
              </div>
            </div>
          </div>
          
          <div class="bg-slate-800/20 border border-cyan-400/30 p-6 backdrop-blur-sm about-element opacity-0">
            <h3 class="text-2xl font-bold text-cyan-400 mb-4">JOURNAL.MISSION</h3>
            <p class="text-slate-300 leading-relaxed mb-4">
              Salutations, voyageur de l'espace ! Je suis un développeur full-stack passionné avec plus de 5 ans d'expérience dans la création d'expériences numériques à travers la galaxie. Ma mission est de construire des applications web innovantes qui repoussent les limites de la technologie.
              Salutations ! Je suis un développeur full-stack orienté frontend passionné avec plus de 2 ans d'expérience dans la création de solutions numériques. Ma mission est de construire des applications web innovantes qui repoussent les limites de la technologie.
            </p>
            <p class="text-slate-300 leading-relaxed">
              Quand je ne code pas, vous pouvez me trouver en train d'explorer de nouvelles planètes, d'étudier les technologies aliens, ou de contribuer à des projets open-source qui bénéficient à la communauté intergalactique.
              Quand je ne code pas, vous pouvez me trouver en train d'étudier les technologies dev, ou de contribuer à des projets open-source qui bénéficient à la communauté.
            </p>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-slate-800/20 border border-green-400/30 p-4 text-center backdrop-blur-sm about-element opacity-0">
              <div class="text-2xl font-bold text-green-400">Vue.js</div>
              <div class="text-xs text-slate-400">SPÉCIALISTE</div>
            </div>
            <div class="bg-slate-800/20 border border-rose-400/30 p-4 text-center backdrop-blur-sm about-element opacity-0">
              <div class="text-2xl font-bold text-rose-400">Node.js</div>
              <div class="text-xs text-slate-400">EXPERT</div>
              <div class="text-xs text-slate-400">AMATEUR</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
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
      
      if (this.$refs.aboutRef) {
        observer.observe(this.$refs.aboutRef)
      }
    },
    
    animateElements() {
      if (window.anime) {
        window.anime({
          targets: '.about-element',
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