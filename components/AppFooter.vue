<template>
  <footer class="footer">
      <span class="footer__content">Me suivre sur </span>

      <div class="footer__link">
        <div class="footer__link--logo">
          <a href="https://www.instagram.com/artdesjardinsmontpellier" rel="noopener" target="_blank">
          <img src="img/footer/instagram.jpg" alt="logo instagram">
          </a>
        </div>
        <div class="footer__link--content">
          <a href="https://www.instagram.com/artdesjardinsmontpellier" rel="noopener" target="_blank">
            <span class="footer__link--content--name">Instagram</span>
          </a>
        </div>
      </div>

      <div class="footer__link">
        <div class="footer__link--logo">
          <a href="https://www.facebook.com/artdesjardins34/" rel="noopener" target="_blank">
          <img src="img/footer/facebook.jpg" alt="logo instagram">
          </a>
        </div>
        <div class="footer__link--content">
          <a href="https://www.facebook.com/artdesjardins34/" rel="noopener" target="_blank">
            <span class="footer__link--content--name">Facebook</span>
          </a>
        </div>
      </div>

      <div class="footer__link">
        <div class="footer__link--logo footer__link--logo--phone ">
          <img src="img/footer/phone4.jpg" alt="logo instagram">
        </div>
        <div class="footer__content2">
          <span>06 52 37 52 39</span>
        </div>
      </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    background-color: rgba(87, 142, 68);
    height: 3em;
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

  .footer__link--content--name {
    display:none;
  }

  .footer__content2 {
    margin-left: .5em;

    font-size: 1.2em;
  }

@media only screen and (min-width: 500px) {
  .footer__content {
    color:black;
    font-size: 2em;
    display: inline;
    }
  .footer__link--content {
    font-size: 1.4em;
  }
  .footer__content2 {
    font-size: 1.3em;
  }
  .footer__link--logo--phone {
    display: inline-block;
  }
}

@media only screen and (min-width: 700px) {
.footer__link--content--name {
    display:inline-block;
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
  .footer__content2 {
    font-size: 1.6em;
    margin-left: .5em;
  }
  .footer__link--logo--phone {
    margin-left: 5.5em;
  }
}
  
</style>