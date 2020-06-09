<template>
  <div class="home">
    <MainHome />
    <AboutMe />
  </div>
</template>

<script>
// @ is an alias to /src
import MainHome from '@/components/MainHome.vue'
import AboutMe from '@/components/AboutMe.vue'

export default {
  name: 'Home',
  components: {
    MainHome,
    AboutMe
  }
}
</script>
