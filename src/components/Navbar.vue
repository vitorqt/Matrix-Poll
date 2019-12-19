<template>
  <header>
    <div class="logo">
      <router-link to='/'>Wu<span>nari</span></router-link>
    </div>
    <nav>
      <li>
        <router-link to="/">FAQ</router-link>
      </li>
      <li>
        <router-link to="/">Help</router-link>
      </li>
      <li>
        <router-link to="/">About</router-link>
      </li>
      <li class="loggedUser">
        Logado: <span class="logged">{{ loggedUser }}</span>
      </li>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ name: 'navbar' })
export default class Navbar extends Vue {
  public loggedUser = localStorage.getItem('name')
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

header {
  display: flex;
  justify-content: space-around;
  padding: 15px;
  border-width: 1px;
  border-style: solid;
  border-bottom-color: $text-grey;

  .loggedUser {
    margin-left: 100px!important;
    color: grey;

    .logged { color: $primary-color; }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  .logo {
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: $letter-spacing;
    color: $primary-color;

    span {
      color: $secundary-color;
    }
  }

  nav li {
    list-style: none;
    display: inline-block;
    letter-spacing: $letter-spacing;
    margin-top: 5px;
    margin-left: 25px;

    a {
      color: $text-grey;
    }
    a:hover {
      color: $white;
    }
  }
}
</style>
