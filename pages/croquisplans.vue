<template>
  <main>

      <section class="title">
        <h1 class="title__content">Quelques croquis et plans faits par mes soins</h1>
      </section>

      <section class="article">
        <div class="article-first">
          <div class="article-first__container">
             <p class="article-first__content"> Pour répondre parfaitement aux demandes de nos clients, nous réalisons un croquis d’ambiance ou un plan. </p>
          </div>
          <img class="article-first__img" src="img/croquis/croquis1.jpg" alt="art des jardins croquis">
        </div>
        <div class="article-second">
          <p class="article-second__content"> L'avant Projet</p>
          <p class="article-second__contentbis"> Les grandes lignes du projet se dessinent en partenariat avec les <em>clients</em> pour définir la direction à prendre dans le choix des matériaux et du style de jardin en fonction de l’environnement. </p>
          <p class="article-second__content">Le projet d’aménagement</p>
          <p class="article-second__contentbis">C’est le rendu final, entre le croquis d’ambiance ou le plan de plantation à l’échelle accompagnés de sa palette végétale, des références  de matériaux.
Ensuite, nous organisons un calendrier des travaux pour réaliser votre aménagement  </p>
          <img class="article-second__img" src="img/croquis/croquis2.jpg" alt="art des jardins croquis">
        </div>
      </section>
  </main>
</template>


<script>
export default {
head() { 
    return {
    title: 'Croquis & Plans', 
    meta: [
        {
        hid: 'description',  
        name: 'description', 
        content:
            'Voici quelques croquis et plans afin de vous montrer le travail effectué en amont'
        }
    ]   
    }
}
}
</script>

<style lang="scss" scoped>

  .title {
    height: 13em;
  }

  .article-first__img {
    margin-top: 2em;
    display: inline;
    width:100%;
    margin-bottom: 2em;
  }

  .article-first__container {
    background-color: rgba(87, 142, 68);
    margin-top: 2em;
    padding: 1.2em;;
   }

  .article-first__content {
    margin-left: 1em;
    font-size: 1.4em;
    font-weight: bold;
    line-height: 1.3em;
    font-style: italic;
  }

  .article-second__content {
    text-decoration: underline;
    font-size: 2.2em;
    font-family: 'Dancing Script', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    margin-left: 1em;
    margin-bottom: .7em;
  }

  .article-second__contentbis {
    margin-left: 1em;
    margin-right: 1em;
    font-size: 1.2em;
    font-weight: bold;
    line-height: 1.7em;
    margin-bottom: 1.6em;
    padding-left: 1.8em;

    }

  .article-second__img {
    margin-top: 2em;
    display: inline;
    width:90%;
    text-align: center;
    margin-left: 1em;
    margin-bottom: 2em;;
    }

@media only screen and (min-width: 600px) {

  .title {
  height: 10em;
  }

  .article-first__container {
    margin:3em;
    padding: 1.6em;
  }
  .article-first__content {
    font-size: 1.7em;
    line-height: 1.3em;
  }   

  .article-second__content {
    margin-left: 3.5em;
  }

  .article-second__contentbis {
    margin-left: 3em;
    margin-bottom: 3em;
  }

  .article-second__img {
    width:70%;
    margin-left: 8.5em;
    }
}

@media only screen and (min-width: 800px) {
  .title {
  height: 7em;
  }
}

</style>