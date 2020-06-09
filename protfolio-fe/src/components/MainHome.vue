<template>
  <div class="main_home">
    <header>
        <h1 class="logo">PARK JAE EUN</h1>
        <p class="hamburger" :class="{active:isActive}" @click="activeToggle"></p>
        <ul class="menu" :class="{active:isActive}" >
          <router-link to="/" tag="li">Home</router-link>
          <router-link to="/protfolio" tag="li">PORTFOLIO</router-link>
        </ul>
    </header>
    <div class="main_section" id="main_section">
        <div class="main_img">
            <img class="main_me" src="@/assets/cake.png">
            <p class="title">HAPPINESS</p>
            <p class="scroll">SCROLL DOWN</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    activeToggle () {
      if (this.isActive === false) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    }
  }

}
</script>
<style src="@/assets/style.css" scope>
</style>
