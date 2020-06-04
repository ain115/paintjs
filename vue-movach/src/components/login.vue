<template>
    <div class="login">
        <h1>로그인</h1>
        <form class="login_form">
            <input type="text" class="login_input" placeholder="아이디를 입력해주세요" />
            <input type="password" class="login_input" placeholder="비밀번호를 입력해주세요" />
            <button class="login_btn">로그인</button>
            <router-link :to="{name: 'Home'}" tag="button" class="login_btn">취소</router-link>
        </form>
    </div>
</template>
<script>
export default {
    name: 'Login'
}
</script>
<style>
    .login {width: 100%; height: 100%; margin: 100px auto 0}
    .login h1 {text-align: center;}
    .login .login_form {width:30vw; height:25vh; margin:50px auto; padding:100px; border:1px solid #ccc;}
    .login .login_form .login_input {width: 30vw; height: 5vh; margin-bottom: 20px; border-radius: 5px; text-indent: 10px;}
    .login .login_form .login_input:focus {outline-color:#bb3b5b;}
    .login .login_form .login_btn {width:13vw; height: 6vh; margin:50px 8px 0; border-radius: 5px; border: none; background:#bb3b5b; font-size: 25px; color: #fff;}
</style>