<template>
    <div>
        <div class="search_title_list">
            <button class="title_list_btn" @click="movieListShow()">전체<span>{{totalNum}}</span></button>
            <button class="title_list_btn" @click="movieKoShow()">한국영화<span>{{koTotalNum}}</span></button>
            <button class="title_list_btn">해외영화<span>{{otherTotalNum}}</span></button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('movie', [
            'totalNum',
            'koTotalNum',
            'otherTotalNum'
        ])
    },
    methods: {
        movieListShow() {

        },
        movieKoShow() {
            return console.log(this.$store.state.movie.koList)
        }
    }
}
</script>
<style>
.search_title_list {display:flex; justify-content: center; width: 100%; height: 100px; }
.search_title_list .title_list_btn {width: 27vw; background: none; font-size: 25px; color: #002447; cursor:pointer;}
.search_title_list .title_list_btn>span {padding-left:10px; text-decoration: underline; font-size: 20px; color: #e27079;}
</style>