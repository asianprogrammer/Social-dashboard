<script setup>
import NaveUI from "./components/NaveUI.vue";
import TopUI from "./components/TopUI.vue";
import PageStarsUI from "./components/PageStarsUI.vue";
import ShortWgetUI from "./components/ShortWgetUI.vue";
import PostActivityUI from "./components/PostActivityUI.vue";
import DeviceUsability from "./components/DeviceUsability.vue";
import LinkClickUI from "./components/LinkClick.vue";
import PostClickUI from "./components/PostClick.vue";
</script>
<template>
  <section class="flex">
    <section class="flex Nave_Bar">
      <NaveUI />
    </section>

    <section class="flex flex-basis flex-y-down main">
      <nav class="flex Navigation_Top">
        <TopUI />
      </nav>

      <main class="flex main-content">
        <div class="Section-A flex flex-y-down">
          <div class="quick-Chart">
            <PageStarsUI />
          </div>
          <div class="post-Activity">
            <PostActivityUI />
          </div>
        </div>

        <div class="Section-B flex flex-y-down">
          <div class="quick-UI flex">
            <ShortWgetUI />
          </div>

          <div class="CallSupper flex flex-y-start">
            <div class="Device_usability flex">
              <DeviceUsability />
            </div>

            <section class="flex flex-y-down">
              <div class="card_chart">
                <LinkClickUI />
              </div>
              <div class="card_chart">
                <PostClickUI/>
              </div>
            </section>
          </div>
        </div>
      </main>
    </section>
  </section>
</template>
<style scoped>
.Nave_Bar {
  width: 100%;
  max-width: 250px;
  min-height: 100vh;
  padding: 10px 20px;
  background: #ffffff;
}
.main {
  padding-left: 35px;
}
.main-content {
  width: 100%;
  margin-top: 30px;
}
.quick-UI {
  width: 97%;
  overflow: hidden;
  padding: 30px 20px;
  margin-left: 25px;
  height: fit-content;
  border-radius: 12px;
  background: #ffffff;
}
.quick-Chart {
  width: 100%;
}
.Section-A {
  width: 40%;
}
.Section-B {
  width: 60%;
}
.post-Activity {
  margin-top: 25px;
  padding: 20px;
  border-radius: 12px;
  background: #ffffff;
}
.Device_usability {
  width: 300px;
  padding: 30px 15px;
  border-radius: 12px;
  background: #ffffff;
}
.CallSupper {
  margin-top: 15px;
  margin-left: 25px;
}
.Link_counter {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border-radius: 12px;
  margin-left: 20px;
  background: #ffffff;
}
.card_chart {
  padding: 20px;
  height: 250px;
  width: 600px;
  overflow: hidden;
  margin-bottom: 20px;
  background: #ffffff;
  margin-left: 20px;
  border-radius: 12px;
}
</style>
