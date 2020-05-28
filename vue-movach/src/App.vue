<template>
  <div id="app">
    <!-- <search-test /> -->
    <main-search />
    <search-title v-show="titleShow" class="search_title" />
    <search-list class="search_list" />
  </div>
</template>

<script>
//import SearchTest from '@/components/SearchTest.vue'
import MainSearch from '@/components/MainSearch.vue'
import SearchTitle from '@/components/SearchTitle.vue'
import SearchList from '@/components/SearchList.vue'

export default {
  name: 'App',
  data () {
    return {
      titleShow: true
      }
  },
  components: {
    //SearchTest
    MainSearch,
    SearchTitle,
    SearchList
  }
}
</script>
<style>
  .search_title {width: 100%; margin-top: 150px;}
  .search_list {width: 100%; margin: 50px 0;}
</style>