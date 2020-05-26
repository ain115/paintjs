<template>
    <header>
        <p class="title">MOVACH</p>
        <div class="gnp">
            <button>로그인</button>
            <button>회원가입</button>
        </div>
        <input type="text" v-model="title" @keypress.enter="searchMovies" placeholder="검색어를 입력해주세요">
    </header>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  // state에 있는 data쓸려면 computed에 정의해야함
  computed: {
      title : {
        get () {
          return this.$store.state.title
        },
        set (title) {
          this.$store.commit('movie/updateState', {
            title
          })
        }
      }
    },
    methods: {
      ...mapActions('movie',[
            'searchMovies'
        ])
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
