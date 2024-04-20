<template>
  <div class="posture-part-frame">
    <a-row class="data-statistic-next">
      <a-col :flex="2" />
      <a-col :flex="8"><v-chart :option="postureRealTimeSpeedToEZOptions" :init-options="{ width: 160, height: 75 }" autoresize /></a-col>
      <a-col :flex="2" />
      <a-col :flex="8"><v-chart :option="postureRealTimeSpeedToWHOptions" :init-options="{ width: 160, height: 75 }" autoresize /></a-col>
      <a-col :flex="2" />
    </a-row>
    <a-row class="data-statistic-next-tip">
      <a-col :flex="14"><div class="posture-speed-tip-title">武汉至鄂州平均速度</div></a-col>
      <a-col :flex="6"><div class="posture-speed-tip-data">{{ postureStatisticData.speedToEZ }}km/h</div></a-col>
      <a-col :flex="1" />
      <a-col :flex="14"><div class="posture-speed-tip-title">鄂州至武汉平均速度</div></a-col>
      <a-col :flex="6"><div class="posture-speed-tip-data">{{ postureStatisticData.speedToWH }}km/h</div></a-col>
    </a-row>
    <a-row class="posture-chart-height-adjust"><v-chart :option="postureGeneralSpeedOptions" :init-options="{ width: 476, height: 200 }" autoresize /></a-row>
    <a-row class="posture-chart"><v-chart :option="postureSectionSpeedByPositionOptions" :init-options="{ width: 476, height: 200 }" autoresize /></a-row>
    <a-row class="posture-chart"><v-chart :option="postureSectionSpeedByTimeOptions" :init-options="{ width: 476, height: 200 }" autoresize /></a-row>
  </div>
</template>

<script setup lang="ts">
import VChart from "vue-echarts";
import {
  postureRealTimeSpeedToEZOptions,
  postureRealTimeSpeedToWHOptions,
  postureGeneralSpeedOptions,
  postureSectionSpeedByPositionOptions,
  postureSectionSpeedByTimeOptions
} from "@/static/index.ts";
import {usePostureStore} from "@/store/module/posture.ts";
import {storeToRefs} from "pinia";
const postureStore = usePostureStore();
const {postureStatisticData} = storeToRefs(postureStore);
</script>

<style scoped>
@import "@/css/module/posture.scss";
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
</style>
