import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Mypage from '@/views/Mypage.vue'
import store from '@/store/index.js'

Vue.use(VueRouter)

// 로그인 된다면 로그인 창으로 넘어가지 못하게 막는 로직
const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    // 이미 로그인 된 유저니까 막아야함
    alert('이미 로그인을 하였습니다.')
    next('/')
  } else {
    next()
  }
}
// 로그아웃 상태에서는 마이페이지 접근못하게
const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    // 아직 로그인 된 유저니까 막아야함
    alert('로그인을 해주세요.')
    next('/')
  } else {
    next()
  }
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: rejectAuthUser,
    component: Login
  },
  {
    path: '/mypage',
    name: 'Mypage',
    beforeEnter: onlyAuthUser,
    component: Mypage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
