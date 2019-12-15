<template>
  <div class="content">
    <div class="content__container">
      <h1>
        Wu<span>nari</span>
      </h1>
      <p>
        Crie da maneira mais simples possível suas enquetes em menos de 1 minuto. Use em seu trabalho, em sua escola, em
        uma palestra ou até mesmo para surpreender seu público.
      </p>
      <a to="/main">
        <button class="btn btn-block btn-default" type="submit">Criar Poll</button>
      </a>
      <h2>Acessar Matrix Poll</h2>
      <br />
      <form action>
        <input
          class="form-control"
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          autocomplete="off"
          required
        />
        <input
          class="form-control"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          required
        />
        <button class="btn btn-block btn-default btn--purple" type="submit">Entrar</button>
      </form>
      <a class="forgot__password" href="#">
        Esqueci minha senha
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/variables';

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;

  &__container {
    width: 100%;
    max-width: 500px;
    padding: 10px;
    text-align: center;

    h1 {
      color: $primary-color;
      text-transform: uppercase;
      letter-spacing: $letter-spacing;

      span {
        color: $secundary-color;
      }
    }

    p {
      margin-top: 50px;
      color: $text-grey;
      line-height: 22px;
    }

    h2 {
      margin-top: 100px;
      color: #ffffff;
      font-weight: normal;
    }

    input {
      background-color: $input-black;
      border: 1px solid $text-grey;
      border-radius: 5px; 
      opacity: 0.5;
      font-size: 16px;
      margin: 0 auto 20px;
      width: 72%;
      padding: 18px;
    }

    input:focus,
    select:focus {
      border-color: $primary-color !important;
      background-color: $input-black;
      opacity: 0.5;
      outline: 0;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }

    .btn-default {
      background-color: $primary-color;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      color: #fff;
      width: 80%;
      margin: 0 auto 20px;
      padding: 20px;
      transition: all 0.5s;
    }

    .btn-default:hover {
      background-color: $primary-color-hover;
      color: #fff;
      cursor: pointer;
    }
    .btn--purple {
      background-color: $secundary-color;
    }
    .btn--purple:hover {
      background-color: $secundary-color-hover;
    }

    .forgot__password {
      display: block;
      margin: 0 auto;
      margin-top: 20px;
      background-color: transparent;
      border-color: transparent;
      font-size: 16px;
      color: $text-grey;
    }
  }
}
</style>
