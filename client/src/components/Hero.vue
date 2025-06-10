<template>
  <section 
    id="home" 
    ref="heroRef"
    class="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    <!-- Starfield Background -->
    <div class="fixed inset-0 starfield-bg opacity-30 z-0"></div>
    
    <div class="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 opacity-80"></div>
    
    <!-- Floating Elements -->
    <div class="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full animate-float opacity-60"></div>
    <div class="absolute top-40 right-20 w-6 h-6 bg-rose-400 rounded-full animate-float opacity-40" style="animation-delay: 1s"></div>
    <div class="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-70" style="animation-delay: 2s"></div>
    
    <div class="container mx-auto px-6 text-center relative z-10">
      <div class="mb-8 hero-element opacity-0">
        <h1 class="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-rose-400 to-green-400 bg-clip-text text-transparent">
          ALEX COSMOS
          BILL DEV
        </h1>
        <div class="text-xl md:text-2xl text-slate-300 mb-8 relative">
          <span ref="typingRef" class="typing-text">{{ typedText }}</span>
          <span class="cursor animate-pulse">|</span>
        </div>
      </div>
      
      <div class="flex flex-col md:flex-row gap-6 justify-center items-center mb-12 hero-element opacity-0">
        <button class="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 pixel-border relative overflow-hidden group">
          <span class="relative z-10">
            <i class="fas fa-download mr-2"></i>TÉLÉCHARGER CV
          </span>
          <div class="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
        <button class="px-8 py-3 bg-rose-400 hover:bg-rose-500 text-slate-900 transition-all duration-300 relative overflow-hidden scan-line">
          <i class="fas fa-envelope mr-2"></i>ME CONTACTER
        </button>
      </div>
      
      <!-- Stats Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto hero-element opacity-0">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          :class="['bg-slate-800/50 backdrop-blur-sm border border-', stat.color, '-400/30 p-6 text-center']"
        >
          <div 
            :class="['text-3xl font-bold text-', stat.color, '-400 mb-2']"
            ref="counterRefs"
            :data-count="stat.count"
          >
            {{ animatedCounts[index] }}
          </div>
          <div class="text-sm text-slate-400">{{ stat.label }}</div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <i class="fas fa-chevron-down text-cyan-400 text-2xl"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      typedText: '',
      animatedCounts: [0, 0, 0, 0],
      stats: [
        { count: 50, label: "PROJETS", color: "cyan" },
        { count: 5, label: "ANNÉES D'EXP", color: "rose" },
        { count: 100, label: "CLIENTS", color: "green" },
        { count: 24, label: "RÉCOMPENSES", color: "cyan" }
      ]
    }
  },
  mounted() {
    this.startTypewriter()
    this.observeIntersection()
  },
  methods: {
    startTypewriter() {
      const text = "DÉVELOPPEUR FULL-STACK"
      let i = 0
      
      const type = () => {
        if (i < text.length) {
          this.typedText += text.charAt(i)
          i++
          setTimeout(type, 100)
        }
      }
      
      setTimeout(type, 1000)
    },
    
    observeIntersection() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateElements()
            this.animateCounters()
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })
      
      if (this.$refs.heroRef) {
        observer.observe(this.$refs.heroRef)
      }
    },
    
    animateElements() {
      if (window.anime) {
        window.anime({
          targets: '.hero-element',
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 800,
          delay: window.anime.stagger(200),
          easing: 'easeOutExpo'
        })
      }
    },
    
    animateCounters() {
      this.stats.forEach((stat, index) => {
        if (window.anime) {
          const obj = { count: 0 }
          window.anime({
            targets: obj,
            count: stat.count,
            duration: 2000,
            easing: 'easeOutExpo',
            update: () => {
              this.animatedCounts[index] = Math.floor(obj.count)
            }
          })
        }
      })
    }
  }
}
</script>