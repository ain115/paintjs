<template>    
    <div>
        <header-component />
        <div class="login">
            <form class="login_form" @submit.prevent="handleLogin">
                <h1>로그인</h1>
                <input type="text" class="login_input" v-model="id" ref="id" placeholder="아이디를 입력해주세요" />
                <input type="password" class="login_input" v-model="password" ref="password" placeholder="비밀번호를 입력해주세요" />
                <div class="login_btn_box">
                    <button type="submit" class="login_btn">로그인</button>
                    <router-link :to="{name: 'Home'}" tag="button" class="login_btn">취소</router-link>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
    name: 'Login',
    components: {
        HeaderComponent
    },
    computed: {
        users : {
            get() {
                return this.$store.state.register.users
            },
            set(users) {
                this.$store.commit('register/updateState', { users })
            }
        },
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
        }
    },
    methods: {
        handleLogin() {
            const id = this.id
            const password = this.password

            // 각 input박스에 입력되어있나 확인하고 안되어 있으면 해당 input박스로 커서 이동
            if(!id) {
                alert('아이디를 입력해주세요');
                this.$refs.id.focus();
                return;
            }
            if(!password) {
                alert('비밀번호를 입력해주세요');
                this.$refs.password.focus();
                return;
            }

            this.users = JSON.parse(localStorage.getItem('USERS'))

            //로그인 id&password 체크 로직
             for(let i = 0; i < this.users.length; i++){
                    console.log(this.users[i].id)
                    if(this.users[i].id !== id) {
                        alert('id가 틀립니다. 다시 입력해주세요')
                        this.id=''
                        this.$refs.id.focus();
                        return;
                    }else if(this.users[i].password !== password){
                        alert('password가 틀립니다. 다시 입력해주세요')
                        this.password=''
                        this.$refs.password.focus();
                        return
                    }else{
                        alert(id+'님 로그인하셨습니다.')
                        this.id=''
                        this.password=''
                        this.$router.push({
                            name: 'Home'
                        })
                        break
                    }
                }
        }
    },
}
</script>
<style>
    .login {width: 100%; height: 100%; margin:auto 0;}
    .login .login_form {width:40vw; height:35vh; margin:0 auto; padding:30px 100px 100px; border:1px solid #ccc; background: #fff; transform: translateY(-20%);}
    .login .login_form h1 {margin-bottom: 50px; text-align: center;}
    .login .login_form .login_input {display: block; width: 30vw; height: 5vh; margin:0 auto 20px; border-radius: 5px; text-indent: 10px;}
    .login .login_form .login_input:focus {outline-color:#bb3b5b;}
    .login .login_form .login_btn_box {height: 6vh; text-align: center;}
    .login .login_form .login_btn {width:13vw; height: 6vh; margin:50px 8px 0; border-radius: 5px; border: none; background:#bb3b5b; font-size: 25px; color: #fff;}
</style>