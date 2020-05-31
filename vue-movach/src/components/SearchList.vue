<template>
    <div>
        <div class="search_title_list">
            <button class="title_list_btn" @click="movieListShow()">전체<span>{{totalNum}}</span></button>
            <button class="title_list_btn" @click="movieKoShow()">한국영화<span>{{koTotalNum}}</span></button>
            <button class="title_list_btn" @click="movieOtherShow()">해외영화<span>{{otherTotalNum}}</span></button>
        </div>
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
import { mapState,mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('movie', [
            'totalNum',
            'koTotalNum',
            'otherTotalNum',
            'movies'
    ])
    
  },
  methods: {
    ...mapActions('movie',[
            'movieListShow',
            'movieKoShow',
            'movieOtherShow'
    ])
        // movieListShow() {
        //   return this.movies = this.$store.state.movie.movies
        // },
        // movieKoShow() {
        //   return this.movies = this.$store.state.movie.koList
        // },
        // movieOtherShow() {
        //   return this.movies = this.$store.state.movie.otherList
        // }
    }
}
</script>
<style>
  .search_title_list {display:flex; justify-content: center; width: 100%; height: 100px; margin-top: 150px;}
  .search_title_list .title_list_btn {width: 27vw; background: none; font-size: 25px; color: #002447; cursor:pointer;}
  .search_title_list .title_list_btn>span {padding-left:10px; text-decoration: underline; font-size: 20px; color: #e27079;}

  ul {margin:0; padding:0;}
  ul,li,div {width: 100%; height: 100%; list-style: none; margin:0; padding:0;}
  /* .movie_list {display:flex; flex-direction: row; flex-wrap: wrap; justify-content: center; text-align: center;}
  .movie_list .list_box {width: 30vw; height: 30vh; margin: 10px; border:1px solid #444; border-radius:10px;} */
  .movie_list {width: 80vw; margin: 0 auto;}
  .movie_list .list_box {border-bottom:1px solid #8f9cb1;}
</style>