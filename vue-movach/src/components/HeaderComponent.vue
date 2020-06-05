<template>
    <header>
        <p class="title">MOVACH</p>
        <div class="gnp">
            <button class="gnp_btn" @click="loginpage">로그인</button>
            <button class="gnp_btn" @click="signUppage">회원가입</button>
        </div>
    </header>
</template>
<script>
export default {
    methods: {
        loginpage() {
          this.$router.push({
                name: 'Login'
            })
        },
        signUppage() {
          this.$router.push({
                name: 'SignUp'
            })
        }
    }  
}
</script>
<style>
    header {position:relative; width: 100%; height: 500px; background:url("../assets/img/home_img.jpg");}
    .title {margin: 0; text-align: center; line-height: 500px; font-size:150px; color:#fff;}
    .gnp {position: absolute; top: 50px; right: 60px; width: 320px; height: 50px; }
    .gnp .gnp_btn {width: 150px; height: 50px; border: none; border-radius: 10px; background:#f50057; font-size:25px; color:#fff; cursor: pointer;}
    .gnp .gnp_btn:first-child {margin-right: 20px; background:none;}
</style>