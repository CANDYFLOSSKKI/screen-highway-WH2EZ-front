<template>
  <div class="posture-part-frame">
    <a-row class="data-statistic-next">
      <a-col :flex="8">
        <a-layout class="card-layout">
          <a-layout-header class="data-statistic-title"><div class="data-statistic-title-text">武汉至鄂州</div></a-layout-header>
          <a-layout-content class="data-statistic-sub-title"><div class="data-statistic-title-text">小时平均流量</div></a-layout-content>
          <a-layout-footer class="data-statistic-data"><div class="data-statistic-data-text" style="color:yellow;">{{ postureStatisticData.flowToEZ }}</div></a-layout-footer>
        </a-layout>
      </a-col>
      <a-col :flex="8">
        <a-layout class="card-layout">
          <a-layout-header class="data-statistic-title"><div class="data-statistic-title-text">鄂州至武汉</div></a-layout-header>
          <a-layout-content class="data-statistic-sub-title"><div class="data-statistic-title-text">小时平均流量</div></a-layout-content>
          <a-layout-footer class="data-statistic-data"><div class="data-statistic-data-text" style="color:yellow;">{{ postureStatisticData.flowToWH }}</div></a-layout-footer>
        </a-layout>
      </a-col>
    </a-row>
    <a-row class="posture-chart"><v-chart :option="postureGeneralFlowOptions" :init-options="{ width: 476, height: 200 }" autoresize /></a-row>
    <a-row class="posture-chart"><v-chart :option="postureSectionFlowByPositionOptions" :init-options="{ width: 476, height: 200 }" autoresize /></a-row>
    <a-row class="posture-chart"><v-chart :option="postureSectionFlowByTimeOptions" :init-options="{ width: 476, height: 200 }" autoresize /></a-row>
  </div>
</template>

<script setup lang="ts">
import VChart from "vue-echarts";
import {
  postureGeneralFlowOptions,
  postureSectionFlowByPositionOptions,
  postureSectionFlowByTimeOptions
} from "@/static/index.ts";
import {storeToRefs} from "pinia";
import {usePostureStore} from "@/store/module/posture.ts";
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
