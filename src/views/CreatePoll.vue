<template>
  <div class="main">
    <Navbar />
    <form class="container" @submit="submit">
      <h1>
        Create a
        <span>Poll</span>
      </h1>
      <label class="mg-top">Poll question</label>
      <input class="big-input" type="text" placeholder="Type your question here..." v-model="createPoll.question" required/>
      <div v-for="answer in createPoll.answers" v-bind:key="answer.id">
        <label class="mg-top">Poll answer</label>
        <input class="small-input" type="text" placeholder="Enter poll option..." v-model="answer.title" required/>
      </div>

      <div class="container-options">
        <button class="btn-add" @click="addOption">Add another option</button>

        <div class="options">
          <p>Improve spam prevention</p>
          <p>Allow multiple poll answers</p>
        </div>
      </div>

      <button class="btn-create" type="submit">Create your poll</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Navbar from '@/components/Navbar.vue';
import Component from 'vue-class-component';

import axios from 'axios';
import Swal from 'sweetalert2';
import router from '../router';

@Component({name: "createpoll", components: { Navbar }})

export default class CreatePoll extends Vue {
  public createPoll = {
    answers: [{
      id: 0,
      title: "",
      votes: ""
    }],
    multipleAnswers: true,
    question: ""
  }

  private addOption() {
    const answer = {
      id: this.createPoll.answers.length,
      title: "",
      votes: ""
    };
    this.createPoll.answers.push(answer);
  }

  submit() {
    axios.post(`${process.env.VUE_APP_BASE_URL}/polls`, this.createPoll, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    }).then((response) => {
        Swal.fire('Sucesso', 'Enquete criada com sucesso', 'success');
        router.push('/vote');
    }).catch((error) => {
        Swal.fire('Erro', 'Não foi possível criar a enquete', 'error');
        console.log(error.response)
    })
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";
.container {
  position: absolute;
  width: 100%;
  max-width: 500px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);

  h1 {
    color: $primary-color;
    letter-spacing: $letter-spacing-less;

    span {
      color: $secundary-color;
    }
  }

  label {
    color: $secundary-color;
    font-size: 18px;
  }

  input {
    display: block;
    background-color: $input-grey;
    color: #000000;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    width: 100%;
    max-width: 450px;
  }
  input:focus,
  select:focus {
    border: 1px solid $primary-color;
    opacity: 0.5;
    outline: 0;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
  .big-input {
    padding: 20px;
  }
  .small-input {
    padding: 10px 20px;
  }
  input::placeholder {
    color: #000;
  }

  .mg-top {
    margin-top: 20px;
  }

  .container-options {
    display: flex;
    justify-content: space-between;

    .options {
      padding-top: 10px;
      color: $primary-color;
    }
  }

  button {
    border: none;
    height: 50px;
    width: 200px;
    color: #e4e0ee;
    transition: all 0.5s;
    cursor: pointer;
  }

  .btn-add {
    margin-top: 20px;
    font-size: 14px;
    background-color: #565068;
  }
  .btn-add:hover {
    background-color: $secundary-color-hover;
  }
  .btn-create {
    font-size: 18px;
    background-color: #50ae6e;
  }
  .btn-create:hover {
    background-color: $primary-color-hover;
  }
}

// RESPONSIVIDADE - MEDIA QUERYS

@media only screen and (max-width: 425px) {
  .container {
    padding: 20px;

    .container-options {
      display: block;
    }

    button {
      margin-top: 10px;
    }
  }

  footer {
    padding: 15px;
  }
}
</style>
