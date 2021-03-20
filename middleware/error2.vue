<template>
  <main class="error">
      <h1 v-if="statusCode !== 200" class="error__title">
        Page <span class="error__title--primary">Not Found</span>
      </h1>       
      <h1 v-else class="error__title">
        An <span class="error__title--primary">Error</span> Occurred
      </h1>
      <div><img src="/img/shrug.png" alt="Shrugging shoulders"></div>

      <p class="error__message">
      If you think there's something wrong with my website, please could you
      <!-- <nuxt-link to="/contact/" class="error__contact">let me know</nuxt-link>? -->
      Otherwise you can head back over to the home page!
    </p>
  </main>
</template>

<script>
  export default {
    layout: 'default',
    props: {
      error: {
        type: Object,
        default: null
      }
    },
    computed: {
      statusCode() {
        return (this.error && this.error.statusCode) || 500
      }
    }
  }
</script>

<style lang="scss" scoped>
  .error {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .img {
    // --cooltipz-bg-color: #fff;
    // --cooltipz-text-color: var(--color-grey-dark);
    // --cooltipz-cursor: help;
    height: 15rem;
    margin-top: 4rem;

    img {
      height: 100%;
    }
  }


</style>