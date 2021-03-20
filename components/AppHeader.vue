<template>
  <div>
    <div class="title">
        <h1 class="title__content">Nous aménageons votre quotidien</h1>
    </div>
    <div>
      <div class="masthead" role="img" aria-label="main image"> </div>
      <div class="head-title">
        <h1></h1>  
      </div>  
    </div>
  </div>
</template>

<style lang="scss" scoped>


.title {
  height: 8.5em;
  margin-top: -1.5em !important;
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

.title__content {
  margin-top: .5em;
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
  margin-top: -.5em !important;

}


}
  
</style>