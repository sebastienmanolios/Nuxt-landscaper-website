<template>
  <main class="main-container">
    <div class="title">
        <h1 class="title__content">Nous aménageons votre quotidien</h1>
    </div>
    <div class="mobile-img">
      <img class="mobile-img__top" src="img/index/verso1.jpg" width=320px alt="arts des jardins photo description">
      <img class="mobile-img__bottom" src="img/index/verso2.jpg" width=320px alt="arts des jardins photo description">
    </div>
    <img class="desktop-img" src="img/index/headerimg.png" alt="arts des jardins photo description">
  </main>
</template>


<style lang="scss" scoped>

  .title {
    height: 9.5em;
  }

  .mobile-img {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

    .mobile-img__top {
      margin-top: .3em;
    }

  .mobile-img__top, .mobile-img__bottom {
    margin-bottom: .3em;
  }

  .desktop-img {
    display: none;
  }


  @media only screen and (min-width: 655px) {
    .mobile-img__bottom {
      margin-top: .3em;
    }
  }


  @media only screen and (min-width: 800px) {
    .mobile-img__top, .mobile-img__bottom {
      display: none;
    }
   
    .title {
      height: 6em;
    }

    .desktop-img {
      margin-top: .25em;
      display: inline;
      width:100%;
    }
  }

</style>