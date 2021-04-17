<template>
  <main>
      <section class="title">
        <h1 class="title__content">Contactez-moi</h1>
      </section>
      <section class="contact-container">
        <img src="img/contact/contact.jpg" alt="art des jardins photo">        
        <form class="form" target="_blank" action="https://formsubmit.co/sebastien.manolios@gmail.com" method="POST">
          <div>
            <div class="form__col">
                <input type="text" name="prenom" class="form__control" placeholder="prénom" required>
            </div>
            <div class="form__col">
                <input type="text" name="nom" class="form__control" placeholder="nom" required>
            </div>
            <div class="form__col">
                <input type="email" name="email" class="form__control" placeholder="email" required>
            </div>
            <textarea placeholder="Votre Message" class="form__control" name="message" rows="10" required></textarea>
          </div>
          <button type="submit" class="btn">Valider</button>
        </form>
      </section>
  </main>
</template>

<script>
export default {
  head() { 
    return {
      title: 'Contact', 
      meta: [
        {
          hid: 'description',  
          name: 'description', 
          content:
            'Vous pouvez me contactez par email'
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>

  .title{
    height: 6em;
  }

  .contact-container {
    margin-top: 3em;
    margin-bottom: 3em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img {
      width: 300px;
      margin-bottom: 2em;
    }
  }

  .form {
    text-align: center;
  }
  
  .form__control {
    margin-top: .5em;
    padding-top: .5em;
    padding-bottom: .5em;
  }

  textarea {
    margin-top: 2em !important;
  }

  // Button

  $green: rgb(125, 199, 101);
  $dark-green: rgba(80, 124, 65);
  $green-border: rgba(87, 142, 68);
  $green-shadow: rgb(125, 199, 101);

  button {
    margin-top: 3em;
    margin-bottom: 3em;
    padding: 1.25em 2em;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    border: 2px solid $green-border;
    border-radius: 0.75em;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: $dark-green;
      border-radius: inherit;
      box-shadow: 0 0 0 2px $green-border, 0 0.625em 0 0 $green-shadow;
      transform: translate3d(0, 0.75em, -1em);
      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }
    &:hover {
      background: $green;
      transform: translate(0, 0.25em);
      &::before {
        box-shadow: 0 0 0 2px $green-border, 0 0.5em 0 0 $green-shadow;
        transform: translate3d(0, 0.5em, -1em);
      }
    }
    &:active {
      background: $green;
      transform: translate(0em, 0.75em);
      &::before {
        box-shadow: 0 0 0 2px $green-border, 0 0 $green-shadow;
        transform: translate3d(0, 0, -1em);
      }
    }
  }
 
@media only screen and (min-width: 565px) {
  .contact-container {
    justify-content: space-evenly;
    img {
      width: 450px;
    }
        
  }
}

@media only screen and (min-width: 920px) {
  .contact-container {
    flex-wrap: nowrap;
    align-items: center;
    img {
       width:650px;
    }
  }
}

@media only screen and (min-width: 1080px) {
  .form__control {
    font-size: 1.5em;
  }
}

@media only screen and (min-width: 1260px) {
  .form__control {
    width: 450px;
  }
  textarea {
    width: 550px !important;
  }
}
</style>