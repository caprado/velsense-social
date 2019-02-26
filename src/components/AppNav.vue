<template>
      <v-toolbar dark>
      <v-toolbar-side-icon @click="AppNav = true"></v-toolbar-side-icon>
      <v-toolbar-title>Social Data</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-toolbar 
          class="search-box" 
          dense 
          floating>
          <v-text-field 
            hide-details 
            prepend-icon="search" 
            single-line
            >
          </v-text-field>
        </v-toolbar>
        <!-- <v-btn flat><v-icon left>account_box</v-icon>Login</v-btn> -->
        <v-btn flat to="/login"><v-icon left>add</v-icon>Signup</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>
