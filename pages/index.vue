<template>
  <main class="main-container">
    <AppHeader />    
  </main>
</template>

<script>
  import AppHeader from '@/components/AppHeader.vue';

  export default {
    components: {
      AppHeader
    },
  };
</script>

<style lang="scss" scoped>
.main-container {
  margin-bottom: 3.8em;
}
</style>