<template>
  <div class="container">

    <div class="nav">
      <AppNavBar />
      <AppNavAside />
    </div>

    <div class="content">
      <FadeTransition :duration="1000">
        <Nuxt />
      </FadeTransition>
    </div>

    <AppFooter/>
    
  </div>
</template>

<script>

import AppNavBar from '@/components/AppNavBar.vue';
import AppNavAside from '@/components/AppNavAside.vue';
import AppFooter from '@/components/AppFooter.vue';
import { FadeTransition } from 'vue2-transitions';

export default {
   head() { 
    return {
      titleTemplate: '%s - art des jardins', 
      meta: [
        {
          hid: 'description',  
          name: 'description', 
          content:
            'Logo entreprise et détails des prestations'
        }
      ]
    }
  },
  components: {
    AppFooter,
    AppNavAside,
    AppNavBar,
    FadeTransition
  },

  computed: {
    isSidebar() {
      return this.$store.getters['nav/toggleSidebar']
    }

  },

  watch: {
    '$route': function() {
      if (process.client && this.isSidebar && window.innerWidth < 1041) {
        this.$store.dispatch('nav/toggleSidebar')
      }
    },
  }
};

</script>
