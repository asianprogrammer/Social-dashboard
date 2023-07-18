<script setup>
import UpArrowIcon from "./icons/UpArrowIcon.vue";
import NavIcon from "./icons/NaveIcon.vue";
import ViewIcon from "./icons/ViewIcon.vue";
import {useActivity} from "../store/index";
const data = useActivity()
const activates = data.activity
</script>
<template>
  <section>
    <div v-for="activity in activates" :key="activity.view+activity.up" class="post cursor-point flex flex-y-center flex-x-space">
      <div class="main flex flex-y-center">
        <div class="profile flex flex-center">
          <img
            class="image"
            width="100"
            height="100"
            :src="`../../public/images/${activity.profile}`"
            alt="User Profile Image"
          />
        </div>

        <div class="text">
          <span class="T-gray">{{activity.title}}</span>
        </div>
      </div>

      <span class="T-gray">{{activity.app}}</span>

      <div class="view flex flex-center">
        <div class="icon flex flex-center">
          <ViewIcon />
        </div>
        <span>{{activity.view}}</span>
      </div>

      <div class="up flex flex-center">
        <div class="icon-S flex flex-center">
          <UpArrowIcon />
        </div>
        <span>{{ activity.up }}</span>
      </div>

      <div class="icon flex flex-center">
        <NavIcon />
      </div>
    </div>
  </section>
</template>
<style scoped>
.up {
  color: #a4cd8f;
  padding: 3px 10px;
  border-radius: 4px;
}
.icon svg {
  fill: #666;
}
.icon-S {
  width: 20px;
  height: 20px;
}
.icon-S svg {
  fill: #a4cd8f !important;
}
.main {
  width: 230px;
}
.post {
    margin: 35px 0;
}
.post:hover .T-gray {
  color: black !important;
}
.post:hover .up {
  color: #fff;
  fill: #ffffff;
  background: black;
}
.post:hover .up .icon-S svg {
  fill: #ffffff !important;
}
.profile {
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  border-radius: 12px;
  margin-right: 10px;
}
</style>
