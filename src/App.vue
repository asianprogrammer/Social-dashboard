<script setup>
import NaveUI from "./components/NaveUI.vue";
import TopUI from "./components/TopUI.vue";
import PageStarsUI from "./components/PageStarsUI.vue";
import ShortWgetUI from "./components/ShortWgetUI.vue";
import PostActivityUI from "./components/PostActivityUI.vue";
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

        <div class="Section-B flex">
          <div class="quick-UI flex">
            <ShortWgetUI />
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
  width: 100%;
  overflow: hidden;
  padding: 30px 20px;
  margin-left: 25px;
  overflow-x: auto;
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
</style>
