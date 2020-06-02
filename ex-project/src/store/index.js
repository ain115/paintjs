import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index.js'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      { id: 1, name: 'hoza', email: 'hoza@gmail.com', password: '123456' },
      { id: 2, name: 'gkgk', email: 'gkgk@gmail.com', password: '123456' }
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    // 로그인이 성공했을때,
    loginSuccess (state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    // 로그인이 실패했을 때,
    loginError (state) {
      state.isLogin = false
      state.isLoginError = true
    },
    logout (state) {
      state.isLoginError = false
      state.isLoginError = false
      state.userInfo = null
    }
  },
  actions: {
    // 로그인을 시도 context.commit , payload 인자값
    login ({ dispatch }, loginObj) {
      axios.post('https://reqres.in/api/login', loginObj)// 파라메터(body)통해서 보냄
        .then(response => {
          // 성공 시 token:(실제로는 토큰과함께 user_id값을 받아옴) 받음
          // 토큰을 헤더에 포함시켜서 유저정보를 요청
          const token = response.data.token
          // 토큰을 로컬스토리지에 저장
          localStorage.setItem('access_token', token)
          dispatch('getMemberInfo')
        })
        .catch(() => {
          alert('이메일과 비밀번호를 확인하세요')
        })
      // let selectedUser = null
      // state.allUsers.forEach(user => {
      //   if (user.email === loginObj.email) selectedUser = user
      // })
      // if (selectedUser === null || selectedUser.password !== loginObj.password) {
      //   commit('loginError')
      // } else {
      //   commit('loginSuccess', selectedUser)
      //   router.push({ name: 'Mypage' })
      // }
    },
    logout ({ commit }) {
      commit('logout')
      router.push({ name: 'Home' })
    },
    getMemberInfo ({ commit }) {
      // 로컬 스토리지에 저장되어 있는 토큰을 불러온다
      const token = localStorage.getItem('access_token')
      const config = {
        // hearder설정을 하기위해서
        headers: {
          'access-token': token
        }
      }
      axios.get('https://reqres.in/api/users/2', config)
        .then(res => {
          const userInfo = {
            id: res.data.data.id,
            first_name: res.data.data.first_name,
            last_name: res.data.data.last_name,
            avatar: res.data.data.avatar
          }
          commit('loginSuccess', userInfo)
        })
        .catch(() => {
          alert('이메일과 비밀번호를 확인하세요')
        })
    }
  },
  modules: {
  }
})
