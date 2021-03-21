<template>
  <div>
    <div class="title">
        <h1 class="title__content">Nous aménageons votre quotidien</h1>
    </div>
      <div class="masthead" role="img" aria-label="main image"> </div>
  </div>
</template>

<style lang="scss" scoped>


.title {
  height: 9.5em;
}

.masthead {

  width: 100%;
  height: 59vh;
  // overflow: hidden;
  background:  url(~assets/index/background-mobile.jpg) no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

@media only screen and (min-width: 800px) {

  .masthead {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background:  url(~assets/index/headerimg.png) no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.title {
  height: 6em;

}


}
  
</style>