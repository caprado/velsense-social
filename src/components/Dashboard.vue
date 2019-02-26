<template>
  <v-app id="inspire">
    <AppLogin/>
      <div class="container">
        <h1>Overview</h1>
        <div class="row">
          <div class="col-4">
              <AppAvatar/>
            </div>
        </div>
        <h1>Stats</h1>
        <div class="row">
          <div class="col-3">
            <AppStatFollowers/>
          </div>
          <div class="col-3">
            <AppStatLikes/>
          </div>
          <div class="col-3">
            <AppStatHashtags/>
          </div>
        </div>
      </div>
  </v-app>
</template>

<script>
import AppAvatar from './AppAvatar.vue'
import AppStatFollowers from './AppStatFollowers.vue'
import AppStatLikes from './AppStatLikes.vue'
import AppStatHashtags from './AppStatHashtags.vue'

export default {
  components: {
    AppAvatar,
    AppStatFollowers,
    AppStatLikes,
    AppStatHashtags
  },
  data () {
    return {}
  }
}
</script>