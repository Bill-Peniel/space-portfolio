<template>
  <nav :class="['fixed top-0 w-full z-50 transition-all duration-300', 
    isScrolled ? 'bg-slate-900/90 backdrop-blur-sm border-b border-cyan-500/30' : 'bg-transparent']">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-cyan-400 glitch relative" data-text="SPACE.DEV">
          BILL.DEV
        </div>
        
        <div class="hidden md:flex space-x-8">
          <button 
            @click="scrollToSection('home')"
            class="hover:text-cyan-400 transition-colors duration-300 relative group"
          >
            <i class="fas fa-home mr-2"></i>ACCUEIL
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            @click="scrollToSection('about')"
            class="hover:text-cyan-400 transition-colors duration-300 relative group"
          >
            <i class="fas fa-user-astronaut mr-2"></i>À PROPOS
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            @click="scrollToSection('projects')"
            class="hover:text-cyan-400 transition-colors duration-300 relative group"
          >
            <i class="fas fa-rocket mr-2"></i>PROJETS
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            @click="scrollToSection('skills')"
            class="hover:text-cyan-400 transition-colors duration-300 relative group"
          >
            <i class="fas fa-cogs mr-2"></i>COMPÉTENCES
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            @click="scrollToSection('contact')"
            class="hover:text-cyan-400 transition-colors duration-300 relative group"
          >
            <i class="fas fa-satellite-dish mr-2"></i>CONTACT
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </button>
        </div>
        
        <button 
          class="md:hidden text-cyan-400 text-xl"
          @click="isMobileOpen = !isMobileOpen"
        >
          <i :class="['fas', isMobileOpen ? 'fa-times' : 'fa-bars']"></i>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="isMobileOpen" class="md:hidden mt-4 pb-4 border-t border-cyan-500/30">
        <div class="flex flex-col space-y-4 pt-4">
          <button @click="scrollToSection('home')" class="text-left hover:text-cyan-400 transition-colors">
            <i class="fas fa-home mr-2"></i>ACCUEIL
          </button>
          <button @click="scrollToSection('about')" class="text-left hover:text-cyan-400 transition-colors">
            <i class="fas fa-user-astronaut mr-2"></i>À PROPOS
          </button>
          <button @click="scrollToSection('projects')" class="text-left hover:text-cyan-400 transition-colors">
            <i class="fas fa-rocket mr-2"></i>PROJETS
          </button>
          <button @click="scrollToSection('skills')" class="text-left hover:text-cyan-400 transition-colors">
            <i class="fas fa-cogs mr-2"></i>COMPÉTENCES
          </button>
          <button @click="scrollToSection('contact')" class="text-left hover:text-cyan-400 transition-colors">
            <i class="fas fa-satellite-dish mr-2"></i>CONTACT
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isScrolled: false,
      isMobileOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      this.isMobileOpen = false
    }
  }
}
</script>