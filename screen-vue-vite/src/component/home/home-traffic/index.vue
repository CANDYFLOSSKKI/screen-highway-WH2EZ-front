<template>
  <div class="right-frame-home" id="homeFrame">
    <a-card class="frame-card">
      <a-layout class="card-layout">
        <a-layout-header class="card-layout-header">
          <a-row>
            <a-col :flex="1"><icon-tags class="card-icon" :size="25" /></a-col>
            <a-col :flex="25"><div class="card-title">交通运行情况</div></a-col>
          </a-row>
          <div class="gradient-line"></div>
        </a-layout-header>
        <a-layout-content class="card-layout-content">
          <a-row class="home-car-type-chart"><v-chart :option="homeCarTypeOptions" :init-options="{ width: 470, height: 220 }" autoresize /></a-row>
          <a-row class="home-car-speed-chart"><v-chart :option="homeCarSpeedOptions" :init-options="{ width: 470, height: 220 }" autoresize /></a-row>
          <a-row class="home-car-flow-chart"><v-chart :option="homeCarFlowOptions" :init-options="{ width: 470, height: 220 }" autoresize /></a-row>
        </a-layout-content>
      </a-layout>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import VChart from "vue-echarts";
import {homeCarFlowOptions, homeCarSpeedOptions, homeCarTypeOptions} from "@/static/index.ts";
</script>

<style scoped>
@import "@/css/module/home.scss";
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
</style>
