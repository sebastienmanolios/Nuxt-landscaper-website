<template>
<main>
  <div id="app" class="content-container">

    <section class="title">
      <h1 class="title__content">Nos réalisations - Découvrez-en quelques unes.</h1>
    </section>

    <section class="carousel">
      <h3 class="carousel__title">Au milieu de la guarrigue</h3>
      <div class="carousel__project">
        <img class="carousel__project--img" src="img/realisations/garrigue/garrigue1.jpg" alt="">
        <button class="carousel__project--btn" type="button" @click="showModal">Plus</button>
      </div>
    </section>

    <section class="carousel">
      <h3 class="carousel__title">le ciel</h3>
      <div class="carousel__project">
        <img class="carousel__project--img" src="img/realisations/garrigue/garrigue1.jpg" alt="">
        <button class="carousel__project--btn" type="button" @click="showModal">Plus</button>
      </div>
    </section>

  </div>

  <div class="modal-container">
   <Modal
      v-show="isModalVisible"
      @close="closeModal"
    >
    </Modal>
  </div>
</main>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal
  },
  data() {
      return {
        isModalVisible: false,
      };
    },
  methods: {
      showModal() {
        const contentContainer = document.getElementById('app');
        contentContainer.classList.replace('content-container','blur-content-container');
        this.isModalVisible = true;
      },

      closeModal() {
        const blurContentContainer = document.getElementById('app');
        blurContentContainer.classList.replace('blur-content-container','content-container');
        this.isModalVisible = false;
      }
  }
};
</script>

<style lang="scss" scoped>

.content-container {
    margin-bottom: 6em;
    text-align: center;
}

.blur-content-container {
    margin-bottom: 6em;
    text-align: center;
    filter: blur(3.5px) grayscale(50%);
    transform: scale(0.9);
}

.modal-container {
    // margin-bottom: 6em;
    text-align: center;
}

.title {
  height: 12em;
  font-size:.8em;
}

.carousel__title {
  text-decoration: underline;
  font-size: 2em;
  padding: 1em 0 1em .5em;
  text-align: left;
}

.carousel__project {
  display:flex;

  flex-wrap: wrap;
  &--img {
    width:310px
  }
  &--btn {
    background: #58795a;
    color:white;
    font-weight: bold;
    font-size: 1.35em;
    margin-left: 1em;
  }
}



@media only screen and (min-width: 450px) {
  .title {
    height: 9em;
  }
 }

@media only screen and (min-width: 700px) {
  .title {
    height: 6em;
  }
  .carousel__project {
  display:flex;
  &--img {
    margin-left: 4em;
    width:600px
  }
  &--btn {
    background: #58795a;
    color:black;
    font-weight: bold;
  }
}
}
 
 @media only screen and (min-width: 1000px) {
  .title {
    font-size: 1em;
  }
  .carousel__title {
    font-size: 2.5em;
  }
 }

</style>
