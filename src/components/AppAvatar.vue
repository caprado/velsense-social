<template>
  <div class="module__container">
      <div class="user__profile">
        <div class="img_profile">
          <img src="https://scontent-lax3-1.cdninstagram.com/vp/2170093955f9b63d01a0279afc8a49fd/5BED1F9B/t51.2885-19/11017586_953035901381515_1619288648_a.jpg" />
          <h3>{{ profileName }}</h3> @<span>{{ profileId }}</span>
        </div>
        <div class="profile_stats">
          <div class="item__post">
            <span>Post:</span><span id="Data_profile"> {{ postDataCurent }}</span>
          </div>
          <div class="item__followers">
            <span>Followers:</span><span id="Data_profile"> {{ followerDataCurent }}</span>
          </div>
          <div class="item__following">
            <span>Following:</span><span id="Data_profile"> {{ followDataCurent }}</span>
          </div>
          <div class="item__engagemment">
            <span>Engagement Rating:</span><span id="Data_profile"> {{ engagementDataCurent }}%</span>
          </div>
                <div class="item__comments">
            <span>Avg Comments Per Post:</span><span id="Data_profile"> {{ engagementCommentsAvg }}</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      postDataCurent: '1,876',
      followerDataCurent: '3.2m',
      followDataCurent: '1,545',
      engagementDataCurent: 62.21,
      engagementCommentsAvg: 153.32,
      profileId: 'caseyneistat',
      profileName: 'Casey Neistat'
    })
  }
</script>

<style scoped>
.user__profile {
  background-color: #FFFEFE;
  padding: 4%;
  /* width: 500px; */
  border: 1px solid #dcdcdc;
  /* border-radius: 10px; */
  -webkit-box-shadow: 0px 0px 5px 5px rgba(232,231,231,1);
  -moz-box-shadow: 0px 0px 5px 5px rgba(232,231,231,1);
  box-shadow: 0px 0px 5px 5px rgba(232,231,231,1);
}
#Data_profile {
  font-weight: bold;
}
.img_profile img{
  border-radius: 100px;
  width: 75px;
}
.img_profile {
  padding-bottom: 10px;
}
.img_profile::after {
    margin-top: 10px;
    height: 1px;
    display: block;
    width: 100%;
    background: #ececec;
    border-bottom: 1px black;
    content: '';
}
.profile_stats {
  font-size: 15px;
  text-transform: uppercase;
}
</style>