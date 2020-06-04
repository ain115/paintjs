import Vue from 'vue'
import Vuex from 'vuex'
import movie from './movie'
import register from './register'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie,
    register
  }
})
