<template>
  <v-footer class="pa-3">
    <v-spacer></v-spacer>
    <div class="footer_title">Social Data | &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.pa-3 {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
}
.footer_title {
  font-family: 'Roboto', sans-serif;
}
.pa-3 {
  background-color: white;
}
</style>
