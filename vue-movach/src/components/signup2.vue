<template>
    <div class="register">
        <h1>회원 가입</h1>
        <form class="register_form" @submit.prevent="handleRegister">
            <input type="text" class="register_input" placeholder="아이디" v-model="id" ref="id">
            <input type="password" class="register_input" placeholder="비밀번호" v-model="password" ref="password">
            <input type="password" class="register_input" placeholder="비밀번호 재확인" v-model="confirmPwd" ref="confirmPwd">
            <input type="text" class="register_input" placeholder="이메일을 입력해주세요" v-model="email" ref="email">
            <button type="submit" class="register_btn">가입하기</button>
            <router-link :to="{name: 'Home'}" tag="button" class="register_btn">취소</router-link>
        </form>
    </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
    name: 'SignUp',
    computed: {
        id : {
            get() {
                return this.$store.state.register.id
            },
            set(id) {
                this.$store.commit('register/updateState', { id })
            }
        },
        password : {
            get() {
                return this.$store.state.register.password
            },
            set(password) {
                this.$store.commit('register/updateState', { password })
            }
        },
        confirmPwd: {
            get() {
                return this.$store.state.register.confirmPwd
            },
            set(confirmPwd) {
                this.$store.commit('register/updateState', { confirmPwd })
            }
        },
        email: {
            get() {
                return this.$store.state.register.email
            },
            set(email) {
                this.$store.commit('register/updateState', { email })
            }
        }
    },
    methods: {
       ...mapActions('register', [
           'handleRegister'
       ])

    }
}
</script>
<style>
    .register {width: 100%; height: 100%; margin: 100px auto 0}
    .register h1 {text-align: center;}
    .register .register_form {width:50vw; height:40vh; margin:50px auto; padding:100px; border:1px solid #ccc;}
    .register .register_form .register_input {width: 50vw; height: 5vh; margin-bottom: 20px; border-radius: 5px; text-indent: 10px;}
    .register .register_form .register_input:focus {outline-color:#bb3b5b;}
    .register .register_form .register_btn {width:15vw; height: 6vh; margin:50px 100px 0 0; border-radius: 5px; border: none; background:#bb3b5b; font-size: 25px; color: #fff;}
</style>