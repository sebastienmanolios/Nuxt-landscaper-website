<template>
  <main>

      <section class="title">
        <h1 class="title__content">Paysagiste sur la région de l'Hérault depuis plus de 15 ans.</h1>
      </section>

      <section class="container">
        <div class="article">
<!-- --------------------------------------------------------------------------- -->
          <div class="article__item article__image">
            <img src="img/entreprise/macon1.jpg" alt="masonry image">
          </div>
          <div class="article__item article__content">
            <p>L’entreprise <strong> Art des jardins </strong>se situe sur Montpellier, elle vous accompagne à toutes les étapes de votre aménagement, 
               un savoir faire sur mesure ainsi qu’une approche en <strong>design végétal.</strong>
                D’une idée jusqu’aux projets, Art des jardins est à l’écoute de vos envies.
            </p>
          </div>
<!-- --------------------------------------------------------------------------- -->
          <div class="article__item article__content">
            <ul>
              <li>Concevoir vos plans, et croquis d’ambiance</li>
              <li>Réaliser votre création paysagère  (terrasse, muret, arrosage automatique, bassin, clôture,...)</li>
              <li>Entretenir votre jardin durant toute l’année.</li>
            </ul>
          </div>
          <div class="article__item article__image">
            <img src="img/entreprise/macon2.jpg" alt="masonry image">
          </div>
<!-- --------------------------------------------------------------------------- -->
          <div class="article__item article__image">
            <img src="img/entreprise/macon3.jpg" alt="masonry image">
          </div>
          <div class="article__item article__content">
            <p>Un jardin est un véritable lieu de vie, un espace convivial,
               il met en valeur votre maison.
               Nous vous proposons d’exploiter et d’aménager au mieux cet espace et de le transformer en un lieu unique.
            </p>
          </div>
<!-- --------------------------------------------------------------------------- -->
        </div>
      </section>

  </main>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

.title {
  height: 12em;
}

.container {
  margin-top: 2em;
  margin-bottom: 3em;
}

.article {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

.article > div {
  flex: 50%; 
  margin-bottom: 2em;
}

.article :nth-child(1) { order: 1; }
.article :nth-child(2) { order: 2; }
.article :nth-child(3) { order: 4; }
.article :nth-child(4) { order: 3; }
.article :nth-child(5) { order: 5; }
.article :nth-child(6) { order: 6; }

.article__item {
  width: 100%
}

.article__image {
  img {
      width: 360px;
  }
}

.article__content > div {
  min-width: 360px;
  padding-left: 1em;
}

@media only screen and (min-width: 520px) {
  .title {
    height: 10em;
  }

  .article {
    width:90%;
    margin-left: 2em;
    margin-top: 2em;
  }

  .article__image {
      img{
      width:500px;
      }
    }
  .article__content { 
      padding-right: 5em;
      line-height: 1.5em;
    }
}

@media only screen and (min-width: 1125px) {
  .title {
      height: 6em;
    }

  .article :nth-child(1) { order: 1; }
  .article :nth-child(2) { order: 2; }
  .article :nth-child(3) { order: 3; }
  .article :nth-child(4) { order: 4; }
  
  .article__content {
        font-size: 1.1em;
        line-height: 2.2em;
  }
}

@media only screen and (min-width: 1450px) {
  .article__content {
      font-size: 1.3em;
      line-height: 2.5em;
  }
  .article__image {
    img{
    width:650px;
    }
  }
}

</style>