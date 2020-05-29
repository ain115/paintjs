<template>
  <div id="app">
    <!-- <search-test /> -->
    <main-search />
    <search-list v-if="show()" class="search_list" />
  </div>
</template>

<script>
//import SearchTest from '@/components/SearchTest.vue'
import MainSearch from '@/components/MainSearch.vue'
import SearchList from '@/components/SearchList.vue'

export default {
  name: 'App',
  // data () {
  //   return {
  //     titleShow: true
  //     }
  // },
  components: {
    //SearchTest
    MainSearch,
    SearchList
  },
  methods: {
    show() {
      return this.$store.state.movie.title===""?false:true
    }
  }
}
</script>
<style>
  .search_list {width: 100%; margin: 50px 0;}
</style>