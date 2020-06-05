<template>
    <div>
        <input type="text" class="search_input" v-model="title" @keypress.enter="searchMovies" placeholder="검색어를 입력해주세요">
    </div>
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
    .search_input {display : block; width: 70vw; height: 80px; margin : 0 auto; border-radius: 10px; padding: 0 20px; transform: translateY(-50%); font-size: 20px;}
</style>
