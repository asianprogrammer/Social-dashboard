<script setup>
import PageChart from "./PageChart.vue";
import NavIcon from "./icons/NaveIcon.vue";
</script>

<template>
  <section class="page-star-container flex flex-y-down">
    <div class="chart-info">
      <div class="flex flex-y-center flex-x-between">
        <h6><b>Page Stats</b></h6>
        <div class="icon flex flex-center">
          <NavIcon />
        </div>
      </div>
      
      <div class="flex flex-y-center flex-x-between">
        <span class="T-gray">June 14, Uly 12, 2023</span>
        <div class="show flex flex-y-center flex-x-between">
            <div class="item flex flex-y-center flex-x-even">
                <div class="round green"></div>
                <span>Follow</span>
            </div>
            <div class="item flex-y-center flex flex-x-even">
                <div class="round orange"></div>
                <span>Like</span>
            </div>
        </div>
      </div>
    </div>

    <section class="page-chart flex flex-center">
      <PageChart />
    </section>
  </section>
</template>
<style scoped>
.round {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.green {
    margin-right: 5px;
    background: var(--green);
}
.orange {
    margin-right: 5px;
    background: var(--orange);
}
.show {
    width: 120px;
}
.page-star-container {
  width: 100%;
  height: 400px;
  min-width: 300px;
  border-radius: 12px;
  background: #ffffff;
}
.page-chart {
  width: 100%;
  height: 450px;
}
.chart-info {
  width: 100%;
  padding: 20px 20px;
  margin: 0 auto;
}
</style>
