<template>
    <div>
        <form @submit.prevent="submit">
            <input type="text" placeholder="아이디" v-model="id">
            <input type="password" placeholder="비밀번호" v-model="password">
            <input type="password" placeholder="비밀번호 재확인" v-model="password2">
            <input type="text" placeholder="이메일을 입력해주세요" v-model="email">
            <button type="submit">가입하기</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'SignUp',
    data() {
        return {
            id: '',
            password: '',
            password2: '',
            email: ''
        }
    },
    methods: {
        submit() {
            const id = this.id
            const password = this.password
            const email = this.email
        }
    }
}
</script>