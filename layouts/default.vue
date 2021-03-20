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

<style lang="scss">

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  } 

  .content {
    padding-top: 8em;
  }

  // .nav {
  //       z-index: 100;

  // }
  // .app-container {
  // text-align: center;
  // margin: 0 auto;
  // width: 80%;
  // }
  // html, body{
  //       padding:0;
  //       margin: 0;
  //       height: 100%;
  //       width: 100%;
  // }
  //   }
  //   .app-container{
  //       height: 100%;
  //       position: relative;
  //       display: grid;
  //       grid-template: auto 3fr auto / 1fr;
  //   }
    // .app-content{
    //     min-height: 100vh;
    //     width: 70%;
    //     padding: 14px;
    //     display: grid;
    //     align-items: center;
    //     justify-items: center;
    // }

</style>