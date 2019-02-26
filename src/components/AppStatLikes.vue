<template>
  <div class="module__container">
      <div class="stats__graph">
        <div class="likes__graph">
          <h4>Likes</h4>
          <Likes/>
        </div>
      </div>
  </div>
</template>

<script>
import Likes from './stats/Likes.js'
export default {
  components: {
    Likes
  }
}
</script>

<style scoped>
.stats__graph {
  background-color: #FFFEFE;
  padding: 4%;
  /* width: 600px; */
  border: 1px solid #dcdcdc;
  /* border-radius: 10px; */
  -webkit-box-shadow: 0px 0px 5px 5px rgba(232,231,231,1);
  -moz-box-shadow: 0px 0px 5px 5px rgba(232,231,231,1);
  box-shadow: 0px 0px 5px 5px rgba(232,231,231,1);
}
</style>