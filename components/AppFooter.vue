<template>
  <footer class="footer">
      <span class="footer__content">Me suivre sur </span>

      <div class="footer__link">
        <div class="footer__link--logo">
          <nuxt-link to="https://www.instagram.com/artdesjardinsmontpellier/">
          <img src="img/footer/instagram.jpg" alt="logo instagram" width=32px>
          </nuxt-link>
        </div>
        <div class="footer__link--content">
          <nuxt-link to="https://www.instagram.com/artdesjardinsmontpellier/">
            <span>Instagram</span>
          </nuxt-link>
        </div>
      </div>

      <div class="footer__link">
        <div class="footer__link--logo">
          <nuxt-link to="https://www.facebook.com/artdesjardins34/">
          <img src="img/footer/facebook.jpg" alt="logo instagram" width=32px>
          </nuxt-link>
        </div>
        <div class="footer__link--content">
          <nuxt-link to="https://www.facebook.com/artdesjardins34/">
            <span>Facebook</span>
          </nuxt-link>
        </div>
      </div>

      <!-- <div class="footer__logo">
        <nuxt-link  to="/">
          <img class="logo" src="img/logo.png" width=170px alt="logo">
        </nuxt-link>
      </div> -->

  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    background-color: rgba(87, 142, 68);
    height: 3em;
    // position: fixed;
    // bottom: 0;
    // right: 0;
    // left: 0;
    // z-index: 10;
  }

  .footer__link {
    display: flex;
    align-items: center;
  }

  .footer__content {
    display: none;
  }

  .footer__link--content {
    margin-left: .5em;
    font-size: 1.2em;
    display: inline;
    a {
       text-decoration: none;
       color:black;
    }
  }
  // .footer__logo {
  // padding-top: .3em;
  // }

@media only screen and (min-width: 500px) {
  .footer__content {
    color:black;
    font-size: 2em;
    display: inline;
    }
  .footer__link--content {
    font-size: 1.4em;
  }
}

@media only screen and (min-width: 1125px) {
  .footer__content {
    font-size: 2.3em;
    margin-right: 1.2em;
    margin-left: -3em;
  }
  .footer {
    height: 4em;
    justify-content: center;
  }
  .footer__link--logo {
    margin-left:1em;
  }
}
 
    
    

  
</style>