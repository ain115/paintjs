<template>
    <div>
        <ul class="movie_list">
            <li  v-for="movie in movies"
                :key="movie.movieCd">
                <ul>
                  <li>{{movie.movieNm}}</li>
                  <li>{{movie.movieNmEn}}</li>
                  <li>{{movie.prdtYear}}</li>
                  <li>{{movie.genreAlt}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'Movies',
  computed: {
    movies () {
      return this.$store.state.movie.movies
    }
  }
}
</script>
<style>
  .movie_list li {list-style: none; margin:0px; padding:0px;}
</style>