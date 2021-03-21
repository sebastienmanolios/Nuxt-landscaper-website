<template>
   <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <Slider />
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
        </button>
      </header>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';

export default {
  components: {
    Slider
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
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
    top: -10px;
    right: 0;
    border: none;
    font-size: 1.2em;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: black;
    background: transparent;
    &::before{
      content:'fermer x';
    }
   
  }

  .btn-green {
    color: white;
    background: black;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    
  }

</style>