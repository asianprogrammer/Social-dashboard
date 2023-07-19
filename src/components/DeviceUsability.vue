<script setup>
import NavIcon from "./icons/NaveIcon.vue";
import DesktopIcon from "./icons/DesktopIcon.vue";
import MobileIcon from "./icons/MobileIcon.vue";
import TabletIcon from "./icons/TabIcon.vue";
import AccessIcon from "./icons/AccessIcon.vue";
import ApexCharts from "apexcharts";
import { ref, onMounted } from "vue";

const options = ref({
  series: [30, 68, 58],
  chart: { height: 280, type: "radialBar" },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 160,
      hollow: { margin: 20, size: "70%", background: "transparent" },
      track: { strokeWidth: "10%", background: "transparent" },
      dataLabels: {
        value: { offsetY: 50, fontSize: "16px", formatter: (error) => "" },
      },
    },
  },
  labels: ["Desktop", "Tablet", "Mobile"],
});

const chart = ref(null);

onMounted(() => {
  chart.value = new ApexCharts(document.querySelector("#chart"), options.value);
  chart.value.render();
});
</script>

<template>
  <section>
    <div class="flex flex-y-center flex-x-between">
      <h5><b>Device Usability</b></h5>
      <div class="icon-S flex flex-center">
        <NavIcon />
      </div>
    </div>
    <span class="T-gray">Stats can help to design post.</span>

    <section class="flex flex-center">
      <div id="chart"></div>
      <div class="logo flex flex-center">
        <AccessIcon />
      </div>
    </section>

    <section class="flex flex-y-center flex-x-even">
      <div class="device flex flex-y-down flex-center">
        <div class="logo-dev bg1 flex flex-center">
          <DesktopIcon />
        </div>
        <span class="T-gray">Desktop</span>
        <h5><b>18%</b></h5>
      </div>
      <div class="device">
        <div class="logo-dev bg2 flex flex-center">
          <MobileIcon />
        </div>
        <span class="T-gray">Mobile</span>
        <h5><b>78%</b></h5>
      </div>
      <div class="device">
        <div class="logo-dev bg3 flex flex-center">
          <TabletIcon />
        </div>
        <span class="T-gray">Tablet</span>
        <h5><b>12%</b></h5>
      </div>
    </section>
  </section>
</template>

<style scoped>
.logo {
  width: 60px;
  height: 60px;
  position: absolute;
  border-radius: 50%;
  background: #ffb98a;
}
.icon-S {
  width: 25px;
  height: 25px;
}
.logo-dev {
  width: 30px;
  height: 30px;
  padding: 8px;
  border-radius: 50%;
}

.bg1 {
  background: #ffb98a;
}
.bg2 {
  background: #92c379;
}
.bg3 {
  background: #9abdda;
}
</style>
