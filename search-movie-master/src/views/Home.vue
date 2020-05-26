<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>영화 검색</h1>
    <div class="form">
      <form @submit.prevent="handleSubmit">
        <div class="column">
          <input @input="typing" type="text" class="input-text" v-model="movie" placeholder="영화명" />
        </div>
        <button type="submit" class="button" :disabled="loading || disabled">
          <span v-if="!loading">검색</span>
          <div v-else class="loader">
            <font-awesome-icon :icon="['fas', 'fan']" :style="{ color: '#fff', fontSize: 22 }" />
          </div>
        </button>
      </form>
    </div>
    <div>
      <div v-if="display !== null" class="result">검색결과 {{display}}건</div>
      <div class="card-contents">
        <a :href="item.link" target="_blank" class="card" v-for="(item, idx) in items" :key="idx">
          <div>
            <img
              :src="item.image || 'https://ssl.pstatic.net/static/movie/2012/06/dft_img203x290.png'"
              alt="item.title"
            />
          </div>
          <div>
            <strong class="title" v-html="item.title"></strong>
            <br />
            <span class="sub-title" v-html="item.subtitle"></span>
          </div>
          <div class="rating">
            <span>평점:</span>
            <span>{{item.userRating}}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  data() {
    return {
      movie: '',
      disabled: true,
      loading: false,
      items: [],
      display: null
    };
  },
  methods: {
    handleSubmit() {
      this.getMovie();
    },
    async getMovie() {
      this.loading = true;

      const {
        statusText,
        data: { items, display }
      } = await axios.get(`/search/${this.movie}`);

      if (statusText === 'OK') {
        Object.assign(this.$data, {
          items,
          display,
          loading: false
        });
      }
    },
    typing(event) {
      const {
        target: { value: movie }
      } = event;
      Object.assign(this.$data, {
        movie,
        disabled: movie === ''
      });
    }
  },
  watch: {
    items() {
      this.loading = this.items.length < 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 400px;
  margin: 0 auto;
}
.column {
  display: flex;
  flex-direction: column;
  &--row {
    margin-top: 10px;
    flex-direction: row;
  }
}
.input-text {
  padding-left: 10px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 15px;
  & + & {
    margin-top: 10px;
  }
}
.button {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #42b983;
  color: #fff;
  font-size: 18px;
  &:disabled {
    opacity: 0.7;
  }
}
.card-contents {
  margin: 50px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  display: block;
  width: 25%;
  color: #000;
  text-decoration: none;
  &:hover {
    .title,
    .sub-title {
      color: #42b983;
    }
  }
  img {
    max-width: 100%;
    max-height: 158px;
  }
  .sub-title {
    font-size: 14px;
    font-weight: 500;
  }
  .rating {
    margin-top: 10px;
  }
}
.result {
  margin-top: 50px;
  font-size: 20px;
  font-weight: bold;
}

.loader {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: loader;
  animation-timing-function: linear;
}

@media screen and (max-width: 768px) {
  .card {
    width: calc(100% / 3);
  }
}

@media screen and (max-width: 549px) {
  .card {
    width: calc(100% / 2);
  }
}

@keyframes loader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
