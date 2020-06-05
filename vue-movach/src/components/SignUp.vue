<template>
    <div>
        <header-component />
        <div class="register">
            <form class="register_form" @submit.prevent="handleRegister">
                <h1>회원 가입</h1>
                <input type="text" class="register_input" placeholder="아이디" v-model="id" ref="id">
                <input type="password" class="register_input" placeholder="비밀번호" v-model="password" ref="password">
                <input type="password" class="register_input" placeholder="비밀번호 재확인" v-model="confirmPwd" ref="confirmPwd">
                <input type="text" class="register_input" placeholder="이메일을 입력해주세요" v-model="email" ref="email">
                <div class="register_btn_box">
                    <button type="submit" class="register_btn">가입하기</button>
                    <router-link :to="{name: 'Home'}" tag="button" class="register_btn">취소</router-link>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
    name: 'SignUp',
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
        handleRegister() {
            //USERS 로컬스토리지에 있는 데이터 배열에 추가
            if(localStorage.getItem('USERS') != undefined) {
                this.users = JSON.parse(localStorage.getItem('USERS'))
            }

            const id = this.id
            const password = this.password
            const confirmPwd = this.confirmPwd
            const email = this.email
            const emailRe = /^[A-Za-z0-9-]+@[A-Za-z0-9-]+[A-Za-z0-9-]+/
            
            // 각 input박스에 입력되어있나 확인하고 안되어 있으면 해당 input박스로 커서 이동
            if(!id) {
                alert('아이디를 입력해주세요');
                this.$refs.id.focus();
                return;
            }else{
                //idCheck하는 로직
                for(let i = 0; i < this.users.length; i++){
                    console.log(this.users[i].id)
                    if(this.users[i].id === id) {
                        alert('사용하는 id입니다. 다른 id를 입력해주세요')
                        this.$refs.id.focus();
                        return;
                    }
                }
            }
            if(!password) {
                alert('비밀번호를 입력해주세요');
                this.$refs.password.focus();
                return;
            }
            if(!confirmPwd) {
                alert('비밀번호 확인란에 비밀번호를 입력해주세요');
                this.$refs.confirmPwd.focus();
                return;
            }
            if(!email) {
                alert('이름를 입력해주세요');
                this.$refs.email.focus();
                return;
            }
            // 비밀번호가 6자리 이상 아니면 경고창 띄움
            if(password.length<6) {
                alert('비밀번호는 최소 6자리 이상 작성해야 합니다');
                this.password='';
                this.$refs.password.focus();
                return;
            }
            // 비밀번호입력란과 확인란이 다르면 경고창 띄움
            if(password!=confirmPwd) {
                alert('비밀번호가 서로 다릅니다. 다시 입력해주세요');
                this.password='';
                this.confirmPwd='';
                this.$refs.password.focus();
                return;
            }
            // 이메일 형식이 아니면 경고창 띄움
            if(!emailRe.test(email)) {
                alert('이메일 형식이 아닙니다.');
                this.email='';
                this.$refs.email.focus();
                return;
            }

            //이상없으면 users 배열에 추가
            this.users.push({
                id,password,email
            })
            //localStorage에 저장
            localStorage.setItem('USERS', JSON.stringify(this.users))

            //초기화
            this.id = ''
            this.password = ''
            this.confirmPwd = ''
            this.email = ''

            //home으로 이동
            this.$router.push({
                name: 'Home'
            })
            
        }
    }
}
</script>
<style>
    .register {width: 100%; height: 100%; margin: 0 auto;}
    .register .register_form {width:50vw; height:40vh; margin:0px auto; padding:100px 100px 200px; border:1px solid #ccc; background: #fff; transform: translateY(-15%);}
    .register .register_form h1 {margin-bottom: 50px; text-align: center;}
    .register .register_form .register_input {display: block; width: 50vw; height: 5vh; margin:0 auto 20px; border-radius: 5px; text-indent: 10px;}
    .register .register_form .register_input:focus {outline-color:#bb3b5b;}
    .register .register_form .register_btn_box {height: 6vh; text-align: center;}
    .register .register_form .register_btn {width:15vw; height: 6vh; margin:50px 20px 0; border-radius: 5px; border: none; background:#bb3b5b; font-size: 25px; color: #fff;}
</style>