<template>
    <v-container fill-height style="max-width:500px;">
        <v-layout align-center row wrap>
            <v-fex xs12>
                <v-alert class="mb-3" :value="isLoginError" type="error">
                이메일과 비밀번호를 확인해주세요
            </v-alert>
            <v-alert class="mb-3" :value="isLogin" type="sucess">
                로그인이 완료되었습니다.
            </v-alert>
            <v-card>
                <v-toolbar flat>
                    <v-toolbar-title>로그인</v-toolbar-title>
                </v-toolbar>
                <div class="pa-3">
                    <v-text-field
                        v-model="email"
                        label="이메일을 입력하세요"
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        type="password"
                        label="패스워드를 입력하세요"
                    ></v-text-field>
                    <v-btn
                        @click="login({
                            email,
                            password
                        })"
                        color="indigo"
                        depressed
                        block
                        large
                    >로그인</v-btn>
                </div>
                <!-- <v-btn @click="test">테스트</v-btn>
                <v-btn @click="posttest">포스트테스트</v-btn> -->
            </v-card>
            </v-fex>
        </v-layout>
    </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      email: null,
      password: null
    //   isError: false,
    //   loginSucess: false
    }
  },
  computed: {
    ...mapState(['isLogin', 'isLoginError'])
  },
  methods: {
    ...mapActions(['login'])
    // login () {
    // 전체 유저에서 해당 이메일로 유저를 찾는다
    //   let selectedUser = null
    //   this.allUsers.forEach(user => {
    //     if (user.email === this.email) selectedUser = user
    //   })
    //   if (selectedUser === null) {
    //     this.isError = true
    //   } else {
    //     selectedUser.password !== this.password
    //       ? this.isError = true
    //       : this.loginSucess = true
    //   }
    // 그 유저의 비밀번호와 입력된 비밀번호를 비교한다.
    // console.log(this.email, this.password)
    // }
    // test () {
    //   // function(){}익명함수를 쓰게되면 함수 안에 this가 임명함수가 받은 인가값을 가르키기때문에
    //   // 외부data값을 this로 가져올려면 arrow함수를 써야함

    //   axios.get('https://reqres.in/api')
    //     .then(res => {
    //       // handle success
    //       console.log(res)
    //     })
    //     .catch(err => {
    //       // handle error
    //       console.log(err)
    //     })
    //     .then(() => {
    //       console.log('test')
    //     })
    // },

  }
}
</script>
