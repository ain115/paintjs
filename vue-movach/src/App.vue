<template>
  <div id="app">
    <!-- <search-test /> -->
    <main-search />
    <search-list class="search_list" />
  </div>
</template>

<script>
//import SearchTest from '@/components/SearchTest.vue'
import MainSearch from '@/components/MainSearch.vue'
import SearchList from '@/components/SearchList.vue'

export default {
  name: 'App',
  components: {
    //SearchTest
    MainSearch,
    SearchList
  }
}
</script>
<style>
  .search_list {width: 100%; margin: 200px 0;}
</style>