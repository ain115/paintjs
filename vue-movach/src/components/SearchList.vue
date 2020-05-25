<template>
    <div>
        <ul v-for="movie in movies"
                :key="movie.movieCd">
            <li>{{movie}}</li>
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
