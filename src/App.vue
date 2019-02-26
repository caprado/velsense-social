<template>
  <v-app>
    <AppNav/>
    <main>
      <router-view></router-view>
    </main>
    <AppFooter/>
  </v-app>
</template>

<script>
  import AppLogin from './components/AppLogin.vue'
  import AppNav from './components/AppNav.vue'
  import AppFooter from './components/AppFooter.vue'
  import AppAvatar from './components/AppAvatar.vue'
  import AppStatFollowers from './components/AppStatFollowers.vue'
  import AppStatLikes from './components/AppStatLikes.vue'
  import AppStatHashtags from './components/AppStatHashtags.vue'

  export default {
    components: {
      AppLogin,
      AppNav,
      AppAvatar,
      AppStatFollowers,
      AppStatLikes,
      AppStatHashtags,
      AppFooter
    },
    data () {
      return {}
    }
  }
</script>

<style>
  .container h1 {
    margin: 15px 0px;
  }
  .application--wrap {
    background-color: #f3f3f3;
  }
  .application {
    font-family: 'ABeeZee', sans-serif;
  }
  .v-toolbar__title, h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
</style>