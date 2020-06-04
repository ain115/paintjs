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
export default {
    name: 'SignUp',
    data() {
        return {
            users: [],
            id: '',
            password: '',
            confirmPwd: '',
            email: ''
        }
    },
    methods: {
        handleRegister() {
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
            //USERS 로컬스토리지에 가입정보 추가
            if(localStorage.getItem('USERS') != undefined) {
                this.users = JSON.parse(localStorage.getItem('USERS'))
            }
            this.users.push({
                id,password,email
            })
            localStorage.setItem('USERS', JSON.stringify(this.users))

            //home으로 이동
            this.$router.push({
                name: 'Home'
            })
        }

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