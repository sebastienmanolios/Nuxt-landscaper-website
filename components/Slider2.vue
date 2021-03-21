<template>
  <div>
    <vue-tiny-slider v-bind="tinySliderOptions">
        <div><img src="img/realisations/bassin/bassin1.jpg" class="responsive" alt=""></div>
        <div><img src="img/realisations/bassin/bassin2.jpg" class="responsive" alt=""></div>
        <div><img src="img/realisations/bassin/bassin3.jpg" class="responsive" alt=""></div>
        <div><img src="img/realisations/bassin/bassin4.jpg" class="responsive" alt=""></div>
        <div><img src="img/realisations/bassin/bassin5.jpg" class="responsive" alt=""></div>
        <div><img src="img/realisations/bassin/bassin6.jpg" class="responsive" alt=""></div>
        <div><img src="img/realisations/bassin/bassin7.jpg" class="responsive" alt=""></div>
    </vue-tiny-slider>
  </div>
</template>

<script>
  export default {
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
        "nav": false
      },
    };
  },
    
}
</script>

<style lang="scss" scoped>

.responsive {
  width: 95%;
  max-width: 1000px;
  height: auto;
}
// .tns-item {
//   padding: 2em;
//   background: #fafafb;
// }
// .tns-item:nth-child(odd) {
//   background: #c8e1ff;
// } 

</style>