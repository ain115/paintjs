<template>
    <div>
        <ul class="movie_list">
            <li class="list_box" v-for="movie in movies"
                :key="movie.index">
                  <div>{{movie.movieNm}}</div>
                  <div>{{movie.movieNmEn}}</div>
                  <div>{{movie.prdtYear}}</div>
                  <div>{{movie.genreAlt}}</div>
                  <div>{{movie.showTm}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  computed: {
    movies () {
      return this.$store.state.movie.movies
    }
  }
}
</script>
<style>
  ul {margin:0; padding:0;}
  ul div {width: 100%; height: 100%; list-style: none; margin:0; padding:0;}
  /* .movie_list {display:flex; flex-direction: row; flex-wrap: wrap; justify-content: center; text-align: center;}
  .movie_list .list_box {width: 30vw; height: 30vh; margin: 10px; border:1px solid #444; border-radius:10px;} */
  .list_box {border-bottom:1px solid #8f9cb1;}
</style>