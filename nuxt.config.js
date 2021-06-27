export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: true,
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-landscaper-website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Artisan paysagiste dans la région montpéllieraine' },
      { hid: 'og:type', name: 'og:type', content: 'site internet' },
      { hid: 'og:url', name: 'og:url', content: 'https://www.artsdesjardins.com' },
      { hid: 'og:title', name: 'og:title', content: 'Paysagiste à Montpellier' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Art des jardins' },
      { hid: 'og:locale', name: 'og:locale', content: 'fr' },
      { hid: 'keywords', name: 'keywords', content: 'paysagiste, montpellier, jardinier, création jardin, aménagement jardin, pelouse, taille de haies, terrasse bois, gazon synthétique, bassin, débrouissaillage, arbre, plante, dessin croquis, espace vert, taille olivier, bassin' }
              
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-tiny-slider.js", mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@aceforth/nuxt-optimized-images'
  ],

  // googleAnalytics: {
  //     id: 'UA-XXX-X'
  // },

  optimizedImages: {
    optimizeImages: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',    
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
