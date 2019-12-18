<template>
  <div class="content">
    <div class="content__container">
      <h1>
        Wu
        <span>nari</span>
      </h1>
      <p>
        Crie da maneira mais simples possível suas enquetes em menos de 1 minuto. Use em seu trabalho, em sua escola, em
        uma palestra ou até mesmo para surpreender seu público.
      </p>
      <router-link to="/create" style="text-decoration: none;">
        <button class="btn btn-block btn-default" type="submit">Criar Poll</button>
      </router-link>
      <h2>Acessar Matrix Poll</h2>
      <br />
      <form action>
        <input
          class="form-control input"
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          autocomplete="off"
          required
        />
        <input
          class="form-control input"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          required
        />
        <button class="btn btn-block btn-default btn--purple" type="submit">Entrar</button>
      </form>
      <a class="create__user" data-toggle="modal" data-target="#exampleModalCenter" href>Cadastre-se</a>
      <a class="forgot__password" href="#">Esqueci minha senha</a>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">Criar Conta</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Nome" v-model="user.name" />
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="E-mail" v-model="user.email" />
                  </div>
                  <div class="col">
                    <input type="password" class="form-control" placeholder="Senha" v-model="user.password" />
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-exit" data-dismiss="modal">Fechar</button>
              <button type="button" class="btn btn-create" v-on:click="registerUser">Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";
import Swal from "sweetalert2";

@Component({ name: "login" })
export default class Login extends Vue {
  private user = {
    email: "",
    password: "",
    name: ""
  };

  registerUser() {
    axios.post(`${process.env.VUE_APP_BASE_URL}/register`, this.user)
      .then(() => {
        Swal.fire('Sucesso', 'Usuário cadastrado com sucesso', 'success');
      }).catch((error) => {
        Swal.fire('Erro!', 'Não foi possível cadastrar o usuário', 'error')
      })
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

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
      font-size: 40px;
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

    input:focus,
    select:focus {
      border-color: $primary-color !important;
      outline: 0;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }

    .input {
      background-color: $input-black;
      border: 1px solid $text-grey;
      border-radius: 5px;
      color: #fff;
      opacity: 0.5;
      font-size: 16px;
      margin: 0 auto 20px;
      width: 78%;
      padding: 25px;
    }

    .input:focus,
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

    .btn-create {
      background-color: $primary-color;
      color: #fff;
    }
    .btn-exit {
      background-color: $secundary-color;
      color: #fff;
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

    .create__user {
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
