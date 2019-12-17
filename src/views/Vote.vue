<template>
  <div class="vote">
    <Sidebar />
    <button class="container">
      <h2>Qual sua banda favorita ?</h2>
      <span>Asked by Wuzi 24 minutes ago</span>

      <div class="answer mg-top">
        <input id="radio1" type="radio" />
        <label for="radio1">Coldplay</label>
      </div>

      <div class="answer mg-top">
        <input id="radio2" type="radio" />
        <label for="radio2">Radiohead</label>
      </div>

      <div class="answer mg-top">
        <input id="radio3" type="radio" />
        <label for="radio3">Jhon Mayer</label>
      </div>

      <router-link to="/result">
        <button class="btn-create button-center">Submit your vote</button>
      </router-link>
    </button>
  </div>
</template>

<script>
import Sidebar from "@/components/Navbar";

export default {
  name: "vote", 
  components: {
    Sidebar
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

.container {
  position: absolute;
  width: 100%;
  max-width: 500px;
  background-color: #232323;
  border: none;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  h2 {
    letter-spacing: $letter-spacing-less;
    color: $primary-color;
  }

  span {
    color: $secundary-color;
  }
  button {
    border: none;
    height: 50px;
    width: 200px;
    color: #E4E0EE;
    transition: all .5s;
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
    background-color: #50AE6E;
  }
  .btn-create:hover {
    background-color: $primary-color-hover;
  }

  .answer {
    margin-top: 20px;
    padding: 20px;
    background-color: $input-grey;
    border-radius: 3px;

    label {
      color: #000;
      font-size: 18px;
      letter-spacing: $letter-spacing-less;
    }
    input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

    input + label {
      position: relative;
      cursor: pointer;
      padding-left: 40px;
    }

    input[type="radio"] + label::before {
      content: "";
      position: absolute;
      left: 0px;
      bottom: 0;
      width: 25px;
      height: 25px;
      background-color: #fff;

      border-radius: 50%;
      border: solid 1px $primary-color;
      vertical-align: bottom;
    }

    input[type="radio"]:checked + label::after {
      content: "";
      background-color: $primary-color;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      position: absolute;
      left: 1px;
      bottom: 1px;
    }
  }

  button.button-center {
    transform: translateX(15px) translateY(40px);
  }
}

//MEDIA QUERYS //@at-root

@media (max-width: 425px) {
  .container {
    button.button-center {
      transform: translateX(92px) translateY(40px);
    }
  }
}
</style>

    
