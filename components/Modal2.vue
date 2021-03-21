<template>
  <transition name="modal-fade">

   <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <Slider2 src/>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
        </button>
      </header>
    </div>
  </div>
    </transition>

</template>

<script>
import Slider2 from '@/components/Slider2.vue';

export default {
  components: {
    Slider2
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }

  .modal-backdrop {
    position: fixed;
    // top: calc(100%-15em);
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .responsive {
    width: 80%;
    max-width: 800px;
    // height: calc(width*.75);
    height: auto;
    }

  .modal {
    background: #58795a;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  // .modal-header,
  // .modal-footer {
  //   padding: 15px;
  //   display: flex;
  // }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    // color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: -5px;
    right: -3px;
    border: none;
    font-size: 1.2em;
    padding: .2em;
    cursor: pointer;
    font-weight: bold;
    color: black;
    background: transparent;
    &::before{
      content:'fermer x';
    }
    &:hover {
      background-color:#254629;
      color:white;
    }
   
  }

  .btn-green {
    color: white;
    background: black;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    
  }

  // @media only screen and (min-width: 350px) {
  // .btn-close {
  //   &::before {
  //     content:'fermer x';
  //   }
  // }
  // }

</style>