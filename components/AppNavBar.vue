<template>
  <header class="page-header">
        <!-- :style="thin ? `height: 8em` : ''" -->

    <nuxt-link  to="/">
      <img class="logo" src="img/logo.png" width=288px alt="logo">
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
    // display: grid;
    // grid-template: 60px / auto 1fr;
    display: flex;
    height:8em;
    // height:3.75em;
    align-items: center;
    justify-content: space-between;
    flex-flow: row-reverse;
    background-color: white;
    // background-color: #333;
    // background-image: radial-gradient(#333, rgba(87, 142, 68));
    padding: 0 1em;
    // position: fixed;
    // right: 0;
    // left: 0;
    // z-index: 10;
    
  }

  // .page-header:nth-child{
  //   justify-self: end !important;
  // }

  .app-links{
    justify-self: end;
  }

  .logo {
    margin-top: .2em;
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
    // margin-left: 1em;
    // padding-left: 1em;
    cursor: pointer;
  }

  .app-links {
    display: none;
  }

  @media only screen and (min-width: 1174px) {
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