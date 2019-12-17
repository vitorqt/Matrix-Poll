<template>
  <div class="main">
    <Navbar />
    <div class="container">
      <h1>
        Create a
        <span>Poll</span>
      </h1>
      <label class="mg-top">Poll question</label>
      <input class="big-input" type="text" placeholder="Type your question here..." />
      <label class="mg-top">Poll question</label>
      <input class="small-input" type="text" placeholder="Enter poll option..." />
      <label class="mg-top">Poll question</label>
      <input class="small-input" type="text" placeholder="Enter poll option..." />
      <label class="mg-top">Poll question</label>
      <input class="small-input" type="text" placeholder="Enter poll option..." />

      <div class="container-options">
        <button class="btn-add">Add another option</button>

        <div class="options">
          <p>Improve spam prevention</p>
          <p>Allow multiple poll answers</p>
        </div>
      </div>

      <router-link to="/vote">
        <button class="btn-create">Create your poll</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';

export default {
  name: "main",
  components: {
    Navbar
  }
};
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
