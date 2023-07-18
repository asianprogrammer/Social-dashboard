<template>
  <div ref="chart" style="width: 100%; height: 100%"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";

const chart = ref(null);
const Month = ["Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const randomMoneyData = [9000, 8050, 9800, 2900, 4000, 10000, 100, 100, 20];
const rand2 = [800, 8000, 900, 30000, 10500, 900, 600, 3000, 800, 5000];

onMounted(() => {
  if (chart.value !== null) {
    const testChart = echarts.init(chart.value);

    // Calculate yAxis boundaries for the mark areas
    const followersMax = Math.max(...randomMoneyData);
    const likesMax = Math.max(...rand2);

    // Set the chart options
    testChart.setOption({
      // Set the x-axis
      xAxis: {
        type: "category",
        data: Month,
      },

      // Set the y-axis
      yAxis: {
        type: "value",
        min: 0,
        max: 30000,
        interval: 10000,
        axisLabel: {
          formatter: function (value) {
            if (value >= 1000) {
              return value / 1000 + "k";
            }
            return value;
          },
        },
      },

      // Set the datasets
      series: [
        {
          name: "Followers",
          data: randomMoneyData,
          smooth: true,
          type: "line",
          symbol: "none",
          color: "#A0CB8B",
          markPoint: {
            data: [
              {
                type: "max",
                name: "Max",
                value: 8050,
                label: {
                  formatter: function (params) {
                    return params.value / 1000 + "k";
                  },
                },
              },
            ],
          },
          markArea: {
            // Set the area style for "Mar to Apr" interval
            data: [
              [
                {
                  xAxis: "Mar",
                  yAxis: 0,
                },
                {
                  xAxis: "Apr",
                  yAxis: followersMax,
                },
              ],
            ],
            // Remove the dots and line symbol
            symbol: "none",
            itemStyle: {
              color: "rgba(160, 203, 139, 0.259)", // Set the color for the area
              // Make the area curved
              areaStyle: {
                type: "linear",
                curve: "smooth",
              },
            },
          },
        },
        {
          name: "Likes",
          data: rand2,
          smooth: true,
          type: "line",
          symbol: "none",
          color: "#FFBB8C",
          markPoint: {
            data: [
              {
                type: "max",
                name: "Max",
                label: {
                  formatter: function (params) {
                    return params.value / 1000 + "k";
                  },
                  symbolOffset: [40, 0],
                },
                symbolOffset: [0, 0],
              },
            ],
          },
          markArea: {
            // Set the area style for "May to Jun" interval
            data: [
              [
                {
                  xAxis: "May",
                  yAxis: 0,
                },
                {
                  xAxis: "Jun",
                  yAxis: likesMax,
                },
              ],
            ],
            // Remove the dots and line symbol
            symbol: "none",
            itemStyle: {
              color: "rgba(255, 188, 140, 0.259)", // Set the color for the area
              // Make the area curved
              areaStyle: {
                type: "linear",
                curve: "smooth",
              },
            },
          },
        },
      ],
    });
  }
});
</script>
