<template>
  <div class="error">
    <h1 v-if="error.statusCode === 404">
      Page non trouvée 😭
    </h1>
    <h1 v-else>
      Une erreur est survenue
    </h1>
    <nuxt-link to="/">
      page d'accueil
    </nuxt-link>
    <div class="img">
      <img src="/img/shrug.png" alt="Shrugging shoulders">
    </div>
  </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;

  .img {
    height: 15rem;
    margin-top: 4rem;

    img {
      height: 100%;
    }
  }
}
</style>
