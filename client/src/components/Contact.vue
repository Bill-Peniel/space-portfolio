<template>
  <section 
    id="contact" 
    ref="contactRef"
    class="py-20 bg-slate-800/50 relative"
  >
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-6xl font-bold mb-4 text-cyan-400">PROTOCOLE.CONTACT</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        <p class="text-slate-400 mt-6 max-w-2xl mx-auto">
          Prêt à lancer votre prochain projet en orbite ? Envoyez une transmission à travers le réseau cosmique.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div class="space-y-8">
          <div class="bg-slate-800/20 border border-cyan-400/30 p-6 backdrop-blur-sm contact-element opacity-0">
            <h3 class="text-2xl font-bold text-cyan-400 mb-6">CANAUX.COMMUNICATION</h3>
            
            <div class="space-y-4">
              <a
                v-for="(channel, index) in communicationChannels" 
                :key="index"
                :href="channel.href"
                target="_blank"
                rel="noopener noreferrer"
                :class="['flex items-center space-x-4 p-3 border border-', channel.color, '-400/30 hover:border-', channel.color, '-400 hover:bg-', channel.color, '-400/10 transition-all duration-300 cursor-pointer block']"
              >
                <div :class="['w-12 h-12 bg-', channel.color, '-400/20 border border-', channel.color, '-400/50 flex items-center justify-center text-', channel.color, '-400']">
                  <i :class="channel.icon"></i>
                </div>
                <div>
                  <div :class="['font-bold text-', channel.color, '-400']">{{ channel.title }}</div>
                  <div class="text-slate-400 text-sm">{{ channel.value }}</div>
                </div>
              </a>
            </div>
          </div>
          
          <div class="bg-slate-800/20 border border-rose-400/30 p-6 backdrop-blur-sm contact-element opacity-0">
            <h3 class="text-2xl font-bold text-rose-400 mb-4">STATUT.MISSION</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-slate-400">DISPONIBILITÉ:</span>
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-green-400 font-bold">ACTIF</span>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-400">TEMPS.RÉPONSE:</span>
                <span class="text-cyan-400">&lt; 24.HEURES</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-400">LOCALISATION:</span>
                <span class="text-rose-400">MARS.GMT+2</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-800/20 border border-green-400/30 p-8 backdrop-blur-sm relative overflow-hidden contact-element opacity-0">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-rose-400"></div>
          
          <h3 class="text-2xl font-bold text-green-400 mb-6">FORMULAIRE.TRANSMISSION</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-bold text-slate-400 mb-2">ID.NOM</label>
                <input 
                  type="text" 
                  v-model="formData.name"
                  required
                  class="w-full bg-slate-900/50 border border-cyan-400/30 focus:border-cyan-400 px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none transition-all duration-300" 
                  placeholder="ENTREZ.NOM" 
                />
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-400 mb-2">ADRESSE.EMAIL</label>
                <input 
                  type="email" 
                  v-model="formData.email"
                  required
                  class="w-full bg-slate-900/50 border border-cyan-400/30 focus:border-cyan-400 px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none transition-all duration-300" 
                  placeholder="ENTREZ.EMAIL" 
                />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-bold text-slate-400 mb-2">TYPE.PROJET</label>
              <select 
                v-model="formData.projectType"
                class="w-full bg-slate-900/50 border border-rose-400/30 focus:border-rose-400 px-4 py-3 text-slate-300 focus:outline-none transition-all duration-300"
              >
                <option value="APPLICATION.WEB">APPLICATION.WEB</option>
                <option value="APPLICATION.MOBILE">APPLICATION.MOBILE</option>
                <option value="E-COMMERCE">E-COMMERCE</option>
                <option value="DÉVELOPPEMENT.API">DÉVELOPPEMENT.API</option>
                <option value="CONSULTATION">CONSULTATION</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-bold text-slate-400 mb-2">CONTENU.MESSAGE</label>
              <textarea 
                v-model="formData.message"
                required
                rows="5"
                class="w-full bg-slate-900/50 border border-green-400/30 focus:border-green-400 px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none transition-all duration-300 resize-none" 
                placeholder="DÉCRIVEZ.VOTRE.PROJET..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full py-4 bg-gradient-to-r from-cyan-400 to-green-400 text-slate-900 font-bold hover:from-green-400 hover:to-cyan-400 transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span class="relative z-10">
                <i v-if="isSubmitting" class="fas fa-spinner fa-spin mr-2"></i>
                <i v-else class="fas fa-paper-plane mr-2"></i>
                {{ isSubmitting ? 'TRANSMISSION...' : 'TRANSMETTRE.MESSAGE' }}
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-rose-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
          
          <div v-if="submitMessage" :class="['mt-4 p-3 rounded border', submitMessage.type === 'success' ? 'border-green-400 bg-green-400/10 text-green-400' : 'border-red-400 bg-red-400/10 text-red-400']">
            {{ submitMessage.text }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      isSubmitting: false,
      submitMessage: null,
      formData: {
        name: '',
        email: '',
        projectType: 'APPLICATION.WEB',
        message: ''
      },
      communicationChannels: [
        {
          icon: "fas fa-envelope",
          title: "PROTOCOLE.EMAIL",
          value: "alex@spacecosmos.dev",
          color: "rose",
          href: "mailto:alex@spacecosmos.dev"
        },
        {
          icon: "fab fa-linkedin",
          title: "RÉSEAU.LINKEDIN",
          value: "/in/alexcosmos",
          color: "green",
          href: "https://linkedin.com/in/alexcosmos"
        },
        {
          icon: "fab fa-github",
          title: "DÉPÔT.GITHUB",
          value: "github.com/alexcosmos",
          color: "cyan",
          href: "https://github.com/alexcosmos"
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
      
      if (this.$refs.contactRef) {
        observer.observe(this.$refs.contactRef)
      }
    },
    
    animateElements() {
      if (window.anime) {
        window.anime({
          targets: '.contact-element',
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 800,
          delay: window.anime.stagger(200),
          easing: 'easeOutExpo'
        })
      }
    },
    
    async handleSubmit() {
      this.isSubmitting = true
      this.submitMessage = null
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData)
        })
        
        const result = await response.json()
        
        if (response.ok) {
          this.submitMessage = {
            type: 'success',
            text: 'TRANSMISSION.RÉUSSIE - Message transmis avec succès au réseau cosmique!'
          }
          this.formData = {
            name: '',
            email: '',
            projectType: 'APPLICATION.WEB',
            message: ''
          }
        } else {
          throw new Error(result.message || 'Erreur de transmission')
        }
      } catch (error) {
        this.submitMessage = {
          type: 'error',
          text: 'ERREUR.TRANSMISSION - Échec de la transmission du message. Veuillez réessayer.'
        }
      } finally {
        this.isSubmitting = false
        setTimeout(() => {
          this.submitMessage = null
        }, 5000)
      }
    }
  }
}
</script>