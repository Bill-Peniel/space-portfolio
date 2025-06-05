<template>
  <footer class="py-12 bg-slate-900 border-t border-cyan-400/30">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <div class="text-2xl font-bold text-cyan-400 mb-2 glitch relative" data-text="SPACE.DEV">
            SPACE.DEV
          </div>
          <div class="text-slate-400 text-sm">© 2024 ALEX COSMOS. TOUS.DROITS.RÉSERVÉS</div>
        </div>
        
        <div class="flex space-x-6">
          <a 
            v-for="(link, index) in socialLinks" 
            :key="index"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            :class="['text-slate-400 hover:text-', link.color, '-400 transition-colors duration-300']"
          >
            <i :class="[link.icon, 'text-xl']"></i>
          </a>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-slate-800 text-center">
        <div class="text-slate-500 text-xs">
          ALIMENTÉ.PAR.ORDINATEUR.QUANTIQUE | CONSTRUIT.AVEC.VUE.&.AMOUR | STATUT: EN LIGNE
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      socialLinks: [
        { icon: "fab fa-github", href: "https://github.com/alexcosmos", color: "cyan" },
        { icon: "fab fa-linkedin", href: "https://linkedin.com/in/alexcosmos", color: "rose" },
        { icon: "fab fa-twitter", href: "https://twitter.com/alexcosmos", color: "green" },
        { icon: "fas fa-envelope", href: "mailto:alex@spacecosmos.dev", color: "cyan" }
      ]
    }
  }
}
</script>