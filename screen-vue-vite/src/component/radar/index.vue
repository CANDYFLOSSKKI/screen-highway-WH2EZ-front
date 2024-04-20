<template>
  <div class="left-frame" id="radarFrame">
    <a-card class="frame-card">
      <a-layout class="card-layout">
        <a-layout-header class="card-layout-header">
          <a-row>
            <a-col :flex="1"><icon-tags class="card-icon" :size="25" /></a-col>
            <a-col :flex="25"><div class="card-title">雷达分析</div></a-col>
          </a-row>
          <div class="gradient-line"></div>
        </a-layout-header>
        <a-layout-content class="card-layout-content">
          <a-row class="radar-search-picker">
            <a-col :span="24"><a-cascader :options="radarDeviceSelectData" placeholder="选择雷达设备" allow-clear /></a-col>
          </a-row>
          <a-row class="search-datetime">
            <a-col :span="8"><a-date-picker /></a-col>
            <a-col :span="15" :offset="1"><a-time-picker type="time-range" /></a-col>
          </a-row>
          <a-row class="radar-chart"><v-chart :option="radarFlowOptions" :init-options="{ width: 476, height: 220 }" autoresize /></a-row>
          <a-row class="radar-chart"><v-chart :option="radarSpeedOptions" :init-options="{ width: 476, height: 220 }" autoresize /></a-row>
          <a-row class="radar-chart"><v-chart :option="radarTimeoutOptions" :init-options="{ width: 476, height: 220 }" autoresize /></a-row>
        </a-layout-content>
      </a-layout>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import {radarFlowOptions, radarSpeedOptions, radarTimeoutOptions} from "@/static/index.ts";
import {radarDeviceSelectData} from "@/static/data/radar.ts";
import "echarts";
import VChart from "vue-echarts";
</script>

<style scoped>
@import "@/css/module/radar.scss";
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
</style>
