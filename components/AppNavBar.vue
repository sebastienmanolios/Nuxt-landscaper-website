<template>
  <header class="page-header">
        <!-- :style="thin ? `height: 8em` : ''" -->

    <nuxt-link  to="/">
      <img class="logo" src="img/logo.png" alt="logo">
    </nuxt-link>
  
    <div class="drawer-toggle" role="button" @click="$store.dispatch('nav/toggleSidebar')">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <div class="app-links">
      <AppLinks />
    </div>

  </header>
</template>

<script>
import AppLinks from '@/components/AppLinks.vue';

export default {
  components: {
    AppLinks
  },
  // data: () => ({
  //   thin: true,
  //   }),

  // beforeMount() {
  //   window.addEventListener('scroll', this.onScroll)
  // },
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.onScroll)
  // },

  // // Method that allows to display navbar's background color in case of scrolling. 
  // methods: {
  //   onScroll() {
  //     if (window.scrollY < 200) {
  //       this.transparent = true
  //     } else {
  //       this.transparent = false
  //     }
  //   },
  // }

};
</script>

<style lang="scss" scoped>

  .page-header{
    display: flex;
    height:6em;
    align-items: center;
    justify-content: space-between;
    flex-flow: row-reverse;
    background-color: white;
    padding: 0 1em;
    margin-bottom:6em;
   
  }

  .app-links{
    justify-self: end;
  }

  .logo {
    margin-top: .2em;
    width: 250px;
  }

  .drawer-toggle .bar {
    width: 150%;
    height: .1rem;
    background-color: black;
  }

  .drawer-toggle {
    display: flex;
    justify-self: end;
    flex-direction: column;
    justify-content: space-around;
    height: 40%;
    width: 3rem;
    padding-right: 1em;
    cursor: pointer;
  }

  .app-links {
    display: none;
  }

  @media only screen and (min-width: 1176px) {
    .page-header{
      padding: 0 2em;
      flex-flow: row wrap;
    }
    .app-links {
      display: block;
    }
    .drawer-toggle {
      display: none;
    }
  }

</style>