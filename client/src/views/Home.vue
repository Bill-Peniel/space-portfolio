<template>
  <div class="min-h-screen">
    <!-- Starfield Background -->
    <div class="fixed inset-0 starfield-bg opacity-30 z-0"></div>
    
    <Navigation />
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
import Skills from '../components/Skills.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    Hero,
    About,
    Projects,
    Skills,
    Contact,
    Footer
  },
  mounted() {
    // Load Font Awesome
    const fontAwesome = document.createElement('link')
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    fontAwesome.rel = 'stylesheet'
    document.head.appendChild(fontAwesome)

    // Load Anime.js
    const animeScript = document.createElement('script')
    animeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js'
    animeScript.async = true
    document.head.appendChild(animeScript)

    // Smooth scrolling for hash links
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Handle initial hash
  }
}
</script>