<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import NavIcon from "./icons/NaveIcon.vue";

const chart = ref(null);
const M = ["a", "b", "c", "d", "e", "f", '2', 2, 3];
const D = [0, 530, 0, 1290, 80, 1200, 250, 80, 50, 10, 30, 1];

onMounted(() => {
  if (chart.value) {
    const c = echarts.init(chart.value);

    c.setOption({
      xAxis: { type: "category", data: M, show: false },
      yAxis: {
        type: "value",
        min: 0,
        show: false,
        axisLabel: {
          formatter: 0,
        },
      },
      series: [
        {
          name: "F",
          data: D,
          smooth: true,
          type: "line",
          symbol: "none",
          lineStyle: {
            width: 1.5, // Adjust the line width as desired
          },
          color: "#FFB98A",
        },
      ],
    });
  }
});
</script>

<template>
  <section>
    <div class="flex flex-y-center flex-x-between">
      <h5><b>Link Clicks</b></h5>
      <div class="icon flex flex-center">
        <NavIcon />
      </div>
    </div>
    <span class="T-gray">Male 40% &nbsp;&nbsp;&nbsp; Female 60%</span>

    <section>
      <div class="text">
        <span>VISITORS</span>
        <h5>22.658</h5>
      </div>
      <div id="chart" ref="chart" style="width: 100%; height: 180px"></div>
    </section>
  </section>
</template>

<style scoped>
.text {
  margin-top: 20px;
  right: 50px;
  position: absolute;
}

#chart {
  margin-top: 40px;
  -webkit-transform-origin: 350px;
  -ms-transform-origin: 350px;
  transform-origin: 350px;
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}
</style>
