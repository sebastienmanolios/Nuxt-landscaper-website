<template>
<main>
  <div id="app" class="content-container">

    <section class="title">
      <h1 class="title__content">Nos réalisations - Découvrez-en quelques unes.</h1>
    </section>

    <section class="carousel">
      <h3 class="carousel__title">Au milieu de la garrigue</h3>
      <div class="carousel__project">
        <img class="carousel__project--img" src="img/realisations/garrigue/garrigue1.jpg" alt="">
        <div>
          <p class="carousel__project--content">Voir toutes les photos du chantier</p>
          <button class="carousel__project--btn" type="button" @click="showModal1">Voir</button>
        </div>
      </div>
    </section>

    <section class="carousel">
      <h3 class="carousel__title">Au milieu coule un bassin</h3>
      <div class="carousel__project">
        <img class="carousel__project--img" src="img/realisations/bassin/bassin1.jpg" alt="">
        <div>
          <p class="carousel__project--content">Voir toutes les photos du chantier</p>
          <button class="carousel__project--btn" type="button" @click="showModal2">Voir</button>
        </div>
      </div>
    </section>

  </div>

  <div class="modal-container">
   <Modal
      v-show="isModalVisible1"
      @close="closeModal1"
      :src="image.src"
    >
    </Modal>
  </div>

  <div class="modal-container">
   <Modal2
      v-show="isModalVisible2"
      @close="closeModal2"
      :src="image.src"
    >
    </Modal2>

  </div>
</main>
</template>

<script>
import Modal from '@/components/Modal.vue';
import Modal2 from '@/components/Modal2.vue';

export default {
  components: {
    Modal,
    Modal2
  },
  data() {
      return {
        image: {
          src:'img/realisations/garrigue/garrigue8.jpg'
        },
        isModalVisible1: false,
        isModalVisible2: false,
      };
    },
  methods: {
      showModal1() {
        const contentContainer = document.getElementById('app');
        contentContainer.classList.replace('content-container','blur-content-container');
        this.isModalVisible1 = true;
      },

      showModal2() {
        const contentContainer = document.getElementById('app');
        contentContainer.classList.replace('content-container','blur-content-container');
        this.isModalVisible2 = true;
      },

      closeModal1() {
        const blurContentContainer = document.getElementById('app');
        blurContentContainer.classList.replace('blur-content-container','content-container');
        this.isModalVisible1 = false;
      },

      closeModal2() {
        const blurContentContainer = document.getElementById('app');
        blurContentContainer.classList.replace('blur-content-container','content-container');
        this.isModalVisible2 = false;
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
  height: 13em;
  // font-size:.8em;
  // &__content{
  //   margin-top: 0;
  // }
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
  &--content {
    font-size: 1em;
    margin-left: 2em;
    margin-top: .5em;
    display: inline-block;

  }
  &--btn {
    margin-left: 1em;
    margin-top: 1em;
    background: #58795a;
    color:white;
    font-weight: bold;
    font-size: 1em;
    border-radius:1.3em;
    padding:.3em .8em;
    border:1px solid #254629;
    cursor:pointer;
     &:hover {
      background-color:#254629;
    }
  }
}



@media only screen and (min-width: 450px) {
  .title {
    height: 9em;
  }
 }

// @media only screen and (min-width: 615px) {
// .carousel__project {
//   &--img {
//     margin-left: 4em;
//     width:600px
//   }
// }
// }



@media only screen and (min-width: 700px) {
  .title {
    height: 6em;
  }
  .carousel__project {
  display:flex;
  &--img {
    margin-left: 3em;
    width:600px
  }
  &--content {
    font-size: 1.6em;
    margin-left: 2em;
    margin-top: .5em;
    display: inline-block;
  }
}
}
 
 @media only screen and (min-width: 1200px) {

  .carousel__title {
    font-size: 2.5em;
  }

  .carousel__project {
  &--img {
    margin-left: 3em;
    width:600px
  }
  &--content {
    font-size: 2em;
    margin-left: 5em;
    margin-top: 3.5em;
    display: block;
  }
  &--btn {
    margin-top: 2.5em;
    font-size: 1.2em;
    padding:.5em 2em;
    border:2px solid #254629;
  }

 }
 }

</style>
