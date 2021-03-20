<template>
  <nav>
    <ul class="nav-list">
      <li class="nav-links" v-for="(link, i) in $store.getters.menu" :key="i">
        <nuxt-link class="nav-link" :to="link.to">
              <b>{{ link.text }}</b>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>

.nav {
  &-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: block;
  } 

  &-links {
    margin: 0 1.2rem;
    .nuxt-link-exact-active {
      // background-color: rgba(87, 142, 68, 0.829);
      color: rgba(87, 142, 68, 0.829);
    }
    font-size: 1.1em;
    font-weight: bold;
  }
    
  &-link {
    text-decoration: none;
    padding:.4em .4em;
    color: black;
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 1.2em;

    &:hover {
      // background-color: rgba(87, 142, 68, 0.829);
            color: rgba(87, 142, 68, 0.829);

      transition: color ease-in .3s;
    }
  }
}




@media only screen and (min-width: 1174px) {
  .nav-list {
      display: flex;
  }
}


</style>