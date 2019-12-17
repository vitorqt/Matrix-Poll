<template>
  <div class="result">
    <Navbar />
    <div class="container-result">
      <div class="result">
        <h1>Qual sua banda favorita ?</h1>
        <span>Asked by Wuzi 24 minutes ago</span>

        <div class="answer skew">
          <div class="result__title">
            <span>Coldplay</span>
            <span>100%</span>
          </div>

          <div class="progress-bar"></div>

          <span class="result__votes">1 Votes</span>
        </div>

        <div class="answer disabled">
          <div class="result__title">
            <span>Radiohead</span>
            <span>0%</span>
          </div>

          <div class="progress-bar"></div>

          <span class="result__votes">1 Votes</span>
        </div>

        <div class="answer disabled">
          <div class="result__title">
            <span>Jhon Mayer</span>
            <span>0%</span>
          </div>

          <div class="progress-bar"></div>

          <span class="result__votes">1 Votes</span>
        </div>
      </div>

      <div class="vote">
        <div class="vote__poll">
          <p>You voted Coldplay on this poll</p>
        </div>
        <div class="vote__share">
          <div class="information">
            <br />
            <small>Votes</small>
            <div class="number">1</div>
            <br />
            <br />
            <div class="share">Share</div>
            <small>Copy Link</small>
            <small>QR Code</small>
            <small>Share on Facebook</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';

export default {
  name: "result",
  components: {
    Navbar
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

.result {
  height: 73.5vh;
}
.container-result {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 80%;
  margin: 30px auto;

  .result {
    width: 50%;
    h1 {
      letter-spacing: $letter-spacing-less;
      color: $primary-color;
    }

    span {
      color: $secundary-color;
    }

    .answer {
      margin-top: 40px;
      background-color: $input-grey;
      height: 150px;
      border-radius: 5px;
      border: 5px solid $secundary-color;
    }

    .skew {
      transform: skew(-10deg);
    }

    .disabled {
      border: none !important;
      opacity: 0.3;
    }

    &__title {
      display: flex;
      justify-content: space-between;
      margin: 10px 15px;

      span {
        font-size: 20px;
        color: #000;
      }
    }

    .progress-bar {
      margin: 20px auto;
      height: 8px;
      width: 90%;
      border-radius: 3px;
      background-color: $primary-color;
    }

    .result__votes {
      color: #000;
      margin-left: 17px;
    }
  }

  .vote {
    &__poll {
      width: 100%;
      padding: 30px;
      background-color: #c7dde8;
    }

    &__share {
      margin-top: 30px;
      background-color: $input-grey;
      height: 450px;

      .information {
        margin: 30px 30px;
        width: 100px;
        font-size: 20px;
        color: #000;

        .number {
          font-weight: bold;
          font-size: 40px;
        }

        .share {
          font-weight: bold;
          font-size: 40px;
        }
      }
    }
  }
}

.footer {
  width: 100%;
  color: $primary-color;
  padding: 30px;
  text-align: center;
  background-color: #1c1a1a;

  p {
    font-size: 20px;
    color: $primary-color;
    text-transform: uppercase;
  }

  small {
    color: #cfe6d6;
  }
}

//MEDIA QUERYS //@at-root

@media (min-width: 320px) and (max-width: 768px) {
  .container-result {
    display: unset;
    width: 100%;
    max-width: 500px;

    .result {
      width: 70%;
      margin: 40px auto;

      .answer {
        margin-top: 30px;
        height: 140px;
      }
    }

    .vote {
      &__poll {
        width: 70%;
        margin: 0 auto;
      }

      &__share {
        width: 70%;
        margin: 0 auto;
        height: auto;
        padding-bottom: 20px;
      }
    }
  }
}
</style>