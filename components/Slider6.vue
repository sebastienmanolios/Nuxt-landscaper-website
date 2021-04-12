<template>
  <div>

    <vue-tiny-slider v-bind="tinySliderOptions" >
      <div v-for="item in number" :key="item">
        <img :src="'img/realisations/' + theme + '/' + theme + item + '.jpg'" 
            class="responsive" alt="art des jardins photo">
      </div>
    </vue-tiny-slider>

  </div>
</template>

<script>
  export default {
  props: {
    themeId: {
      type: Number,
      required: true
    }
  },
  head() {
    return {
      link: [{rel:"stylesheet",href: "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css" }]};
  },
  data() {
    return {
      tinySliderOptions:
      {
        "items": 1,
        "mouseDrag": true,
        "controlsText": ["prec","suiv"],
        "nav": false,
        "onInit": true
      },
    };
  },
  computed: {
      themes() {
        return this.$store.getters.themes;
      },
      chosen_theme() {
        return this.themes[this.themeId-1];
      },
      number() {
        return this.chosen_theme.number;
      },
      theme() {
        return this.chosen_theme.theme;
      }
  },  
}
</script>

<style lang="scss" scoped>

  .responsive {
    max-height: 80vh;
    max-width: 95vw;
    width:auto;
  }

</style>