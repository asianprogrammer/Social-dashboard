<script setup>
import SearchIcon from "./icons/SearchIcon.vue";
import DownArrowIcon from "./icons/DownArrowIcon.vue";
import AddIcon from "./icons/AddIcon.vue";
import NotifyIcon from "./icons/NotifyIcon.vue";
</script>
<template>
  <br />
  <nav class="flex flex-x-between">
    <section class="flex flex-y-center">
      <section class="flex flex-y-center">
        <div>
          <h4>Social Stats</h4>
          <span class="T-gray">Welcome back, Hamza</span>
        </div>
      </section>

      <section class="flex flex-y-center input">
        <div class="icon flex flex-center">
          <SearchIcon />
        </div>
        <input type="search" placeholder="Search hear.." />
      </section>

      <section class="flex ML-20px flex-y-center select">
        <div class="flex flex-y-center flex-x-even cursor-point SupperBG">
          <span>Linkedin</span>
          <div class="icon flex flex-center">
            <DownArrowIcon />
          </div>
        </div>

        <button class="NativeBtn ML-10px flex flex-center cursor-point">
          <div class="flex flex-center icon">
            <AddIcon />
          </div>
        </button>
      </section>
    </section>

    <section class="flex flex-y-center">
      <div class="Notify flex flex-center">
        <div class="icon flex flex-center">
          <NotifyIcon />
        </div>
      </div>
      <div class="flex flex-center PROFILE-MONO">
        <img
          width="100"
          height="100"
          class="image"
          src="@/../images/PRO7.jpg"
          alt=""
          srcset=""
        />
      </div>
    </section>
  </nav>
</template>
<style scoped>
.input {
  width: 380px;
  height: 50px;
  padding: 9px 10px;
  border-radius: 10px;
  margin-left: 30px;
  background: #ffffff;
  box-shadow: 5px 5px 5px rgba(151, 151, 151, 0.11);
}
.input input {
  height: fit-content;
  width: 100%;
}
.icon {
  width: 20px;
  height: 20px;
}
.input input::placeholder {
  color: #bbb9b7;
}
.NativeBtn {
  width: 50px;
  height: 50px;
}
.SupperBG {
  height: 50px;
  padding: 20px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 5px 5px 5px rgba(151, 151, 151, 0.11);
}
.PROFILE-MONO {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 14px;
  box-shadow: 5px 5px 5px rgba(151, 151, 151, 0.11);
}
nav {
  width: 97.5%;
  margin-top: 30px;
  height: fit-content;
}
.Notify {
  width: 50px;
  height: 50px;
  padding: 20px;
  margin: 0 20px;
  border-radius: 12px;
  position: relative;
  background: #ffffff;
  box-shadow: 5px 5px 5px rgba(151, 151, 151, 0.11);
}
.Notify::after {
  top: 14px;
  content: '';
  width: 10px;
  right: 15px;
  height: 10px;
  background: red;
  position: absolute;
  border-radius: 50%;
  border: solid 2px rgb(255, 255, 255);
}
</style>
