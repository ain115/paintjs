<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item router :to="{name: 'Home'}">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="isLogin === false " router :to="{name: 'Login'}" exact>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else router :to="{name: 'Mypage'}" exact>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>마이페이지</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-items>
        <!-- 로그인이 됐으면 웰컴 안됐으면 로그인 창으로이동 -->
        <v-menu offset-y v-if="isLogin">
          <template v-slot:activator="{ on }">
            <v-btn
              dark
              v-on="on"
              flat

            >
            메뉴
            </v-btn>
          </template>
          <v-list>
            <v-list-item router :to="{name: 'Mypage'}">
              <v-list-item-title>마이페이지</v-list-item-title>
            </v-list-item>
            <v-list-item
              @click="$store.dispatch('logout')"
            >
              <v-list-item-title>로그아웃</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn flat v-else router :to="{name: 'Login'}">
          Log In
        </v-btn>
      </v-items>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  computed: {
    ...mapState(['isLogin'])
  }
}
</script>
