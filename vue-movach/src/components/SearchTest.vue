<template>
    <header>
        <p class="title">MOVACH</p>
        <div class="gnp">
            <button>로그인</button>
            <button>회원가입</button>
        </div>
        <input type="text" v-model="title" @keypress.enter="searchMovise" placeholder="검색어를 입력해주세요">
        <ul v-for="movie in movies"
                :key="movie.movieCd">
            <li>{{movie.movieNm
                }}</li>
        </ul>
    </header>
</template>
<script>
import axios from 'axios';

export default {
    data () {
        return {
            title : '',
            movies: []
        }
    },
    methods: {
      searchMovise () {
            const key = '1f23d9ce4e683611b73fb9600216d051'
            axios.get(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&movieNm=${this.title}&curPage=1`)
                .then((res)=>{
                    this.movies=res.data.movieListResult.movieList
                    console.log(this.movies)
                })
      }
    }
}
</script>
<style>
    header {position:relative; width: 100%; height: 500px; background:url("../assets/img/home_img.jpg");}
    .title {margin: 0; text-align: center; line-height: 500px; font-size:150px; color:#fff;}
    .gnp {position: absolute; top: 50px; right: 60px;}
    .gnp button {width: 150px; height: 50px; border: none; border-radius: 10px; background:#ff2f6e; font-size:25px; color:#fff; cursor: pointer;}
    .gnp button:first-child {margin-right: 20px; background:none;}
    input {position: absolute; left: 50%; bottom: 0; transform: translate(-50%, 50%); width: 70vw; height: 80px; border-radius: 10px; padding: 0 20px; font-size: 20px;}
</style>
