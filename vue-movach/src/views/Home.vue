<template>
    <div>
        <header-component />
        <main-search />
        <search-list v-if="show()" class="search_list" />
    </div>
</template>
<script>
//import SearchTest from '@/components/SearchTest.vue'
import MainSearch from '@/components/MainSearch.vue'
import SearchList from '@/components/SearchList.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'Home',
  // data () {
  //   return {
  //     titleShow: true
  //     }
  // },
  components: {
    //SearchTest
    MainSearch,
    SearchList,
    HeaderComponent
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