<template>
    <div>
        <div class="search_title_list">
            <button>전체({{totalN}})</button>
            <button>한국영화({{koTotal}})</button>
            <button>해외영화({{otherTotal}})</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('movie', [
            'totalN',
            'koTotal',
            'otherTotal'
        ])
    }
}
</script>
<style>
ul {width: 100%; height: 100%; list-style: none; margin:0; padding:0;}
.search_title_list {display:flex;}
.search_title_list button {cursor:pointer;}
</style>