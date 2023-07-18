<script setup>
import RateUpIcon from "./icons/AltIcon.vue"
import UpRightIcon from "./icons/UpRightIcon.vue";
const props = defineProps(["view", "object", "rate", "date", "bg"]);
</script>
<template>
  <section class="quick_container">
    <div class="box" :class="`bg${props.bg}`">
      <div>
        <div class="head flex flex-x-between">
          <div class="box-Icon flex flex-center">
            <slot name="icon"></slot>
          </div>
          <div class="users flex flex-center">
            <div class="profile-S flex flex-center">
              <img src="@/../images/PRO4.jpg" alt="Account Users" />
            </div>
            <div class="profile-S flex flex-center">
              <img src="@/../images/PRO10.jpg" alt="Account Users" />
            </div>
            <div class="profile-S flex flex-center">
              <img src="@/../images/PRO9.jpg" alt="Account Users" />
            </div>
          </div>
        </div>

        <div class="body">
          <h2>{{ props.view }}</h2>
          <span class="T-gray">{{ props.object }}</span>
        </div>

        <div class="bottom flex flex-x-between flex-y-center">
          <div class="bottom flex flex-between flex-y-center">
            <div class="rate-up flex flex-y-center">
              <div class="icon-tiny flex flex-center">
                <RateUpIcon />
              </div>
              <span>{{ props.rate }}</span>
            </div>
            <span class="T-gray ML-15px">{{ props.date }}</span>
          </div>
          
          <div class="NativeBtn flex flex-center cursor-point">
              <UpRightIcon />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.NativeBtn {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.body {
  margin-top: 25px;
}
.bottom {
  font-size: 0.8rem;
  margin-top: 15px;
}
.bottom .T-gray {
  margin-left: 10px;
}
.icon-tiny  {
  width: 15px;
  height: 15px;
  margin-right: 3px;
}
.quick_container{
  margin: 0 10px;
}
.box {
  z-index: 99;
  width: 280px;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}
.box::after {
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  z-index: -9;
  background: url(../../public/images/pattern.png);
  background-repeat: repeat;
  background-size: 20%;
  opacity: 0.03;
  position: absolute;
}
.bg1 {
  background: #9cc98544;
}
.bg2 {
  background: #FCEEDA;
}
.bg3 {
  background: #F9E0E1;
}
.profile-S {
  width: 30px;
  height: 30px;
  overflow: hidden;
  margin-left: -7px;
  border-radius: 50%;
  border: solid 2px #fff;
}
.profile-S img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.box-Icon {
  width: 50px;
  height: 50px;
  padding: 15px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgba(151, 151, 151, 0.11);
}
.rate-up {
  padding: 5px;
  border-radius: 5px;
  background: #fff;
  color: #1A9B1A;
}
</style>
