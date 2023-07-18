<script setup>
import RadarIcon from "./icons/RadarIcon.vue";
import LightIcon from "./icons/LightIcon.vue";
import EarningIcon from "./icons/EarningIcon.vue";
import PieIcon from "./icons/PieIcon.vue";
import MovieIcon from "./icons/MovieIcon.vue";
import AutomationIcon from "./icons/AutomationIcon.vue";
import SlideIcon from "./icons/SlideIcon.vue";
import SettingIcon from "./icons/SettingIcon.vue";
import LogoutIcon from "./icons/LogoutIcon.vue";
</script>
<template>
  <nav>
    <section class="logo flex flex-center">
      <div class="img flex flex-center">
        <img class="no-select no-drag" width="100" height="100" src="@/../images/logo.png" alt="Socmai" />
      </div>
      <h4>&nbsp;Al Sabar</h4>
    </section>

    <main>
      <div class="list flex flex-y-center">
        <div class="icon flex flex-center">
          <RadarIcon />
        </div>
        <span class="T-gray">Dashboard</span>
      </div>
      <div class="list flex flex-y-center">
        <div class="icon flex flex-center">
          <LightIcon />
        </div>
        <span class="T-gray">Overview</span>
      </div>
      <div class="list flex flex-y-center">
        <div class="icon flex flex-center">
          <EarningIcon />
        </div>
        <span class="T-gray">Earnings</span>
      </div>
      <div class="list flex flex-y-center active cursor-point">
        <div class="icon flex flex-center">
          <PieIcon />
        </div>
        <span class="T-gray">Social Stats</span>
      </div>
      <div class="list flex flex-y-center">
        <div class="icon flex flex-center">
          <MovieIcon />
        </div>
        <span class="T-gray">Media Kit</span>
      </div>
      <div class="list flex flex-y-center">
        <div class="icon flex flex-center">
          <AutomationIcon />
        </div>
        <span class="T-gray">Automation</span>
      </div>
      <div class="list flex flex-y-center">
        <div class="icon flex flex-center">
          <SlideIcon />
        </div>
        <span class="T-gray">Template</span>
      </div>

      <div class="ads flex flex-center flex-y-down">
        <h6>Want to increase your followers?</h6>
        <img class="image" src="@/../images/follow.png" alt="" srcset="" />
        <span class="T-gray">Upgrade with premium package</span>
        <button class="NativeBtn cursor-point">Buy Now</button>
      </div>

      <div class="list flex flex-y-center">
        <div class="icon flex flex-center">
          <SettingIcon />
        </div>
        <span class="T-gray">Settings</span>
      </div>
      <div class="list flex flex-y-center">
        <div class="icon flex flex-center">
          <LogoutIcon />
        </div>
        <span class="T-gray">Logout</span>
      </div>
    </main>
  </nav>
</template>
<style scoped>
.logo {
  width: 100%;
  height: 70px;
  margin: 30px 0;
  margin-top: 10px;
}
.img {
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  margin-left: 15px;
}
.img img {
  width: 100%;
  object-fit: contain;
}
.list.active span {
  color: #000;
}
.list.active {
  color: #000;
}
.list.active span {
  width: 100%;
  border-right: solid 3px #ffb98a;
}
.list span {
  margin-left: 10px;
}
.ads {
  width: 155px;
  padding: 20px 12px;
  text-align: center;
  border-radius: 12px;
  margin-left: 15px;
  margin-top: 40px;
  margin-bottom: 40px;
  background: linear-gradient(177deg, #eac8d9, #fde3d0 60%);
}
.ads h6 {
  font-weight: 600;
  color: #673ab7;
}
.NativeBtn {
  width: 120px;
  padding: 13px 0;
  margin-top: 20px;
}
.image {
  width: 60%;
  margin: 20px 0;
}
</style>
