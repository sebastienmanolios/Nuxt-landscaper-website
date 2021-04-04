<template>
<main>
  <div id="app" class="content-container">

    <section class="title">
      <h1 class="title__content">{{ main_title }}</h1>
    </section>

    <section class="carousel" v-for="theme in $store.getters.themes" :key="theme.id">
      <h3 class="carousel__title">{{ theme.title }}</h3>
      <div class="carousel__project">
        <img class="carousel__project--img" :src="'img/realisations/' + theme.theme + '/' + theme.theme + '1.jpg'" alt="">
        <div>
          <p class="carousel__project--content">Voir toutes les photos du chantier</p>
          <p ></p>
          <button class="carousel__project--btn" type="button" 
            @click="showModal(theme.id)"
          > 
          Voir
          </button>
        </div>
      </div>
    </section>

  </div>

  <div class="modal-container">
   <Modal
      v-show="isModalVisible"
      @close="closeModal"
      :themeId=themeId
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
        themeId: 1,
        main_title: 'Nos réalisations - Découvrez-en quelques unes.',
        isModalVisible: false,
      };
    },
  methods: {
      showModal(id) {
        const contentContainer = document.getElementById('app');
        contentContainer.classList.replace('content-container','blur-content-container');
        this.isModalVisible = true;
        this.themeId = id;
        console.log('id :: '+id);
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
    text-align: center;
}

.title {
  height: 13em;
}


.carousel__title {
  text-decoration: underline;
  font-size: 2em;
  padding: 1em 0 1em .5em;
  text-align: left;
  margin-top: 1.1em;
}

.carousel__project {
  display:flex;

  flex-wrap: wrap;
  &--img {
    width:310px;
    height:420px;
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
