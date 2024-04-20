<template>
  <div class="right-frame-device" id="deviceTableFrame">
    <a-card class="frame-card">
      <a-layout class="card-layout">
        <a-layout-header class="card-layout-header">
          <a-row>
            <a-col :flex="1"><icon-tags class="card-icon" :size="25" /></a-col>
            <a-col :flex="25"><div class="card-title">设备覆盖与分布</div></a-col>
          </a-row>
          <div class="gradient-line"></div>
        </a-layout-header>
        <a-layout-content class="card-layout-content">
          <a-row class="device-location">
            <v-chart :option="deviceCoverageOptions" :init-options="{ width: 473, height: 210 }" autoresize />
          </a-row>
          <a-row class="device-location-hot">
            <a-row><div class="device-location-hot-title">设备分布情况</div></a-row>
            <v-chart :option="deviceDistributionOptions" :init-options="{ width: 470, height: 220 }" autoresize />
          </a-row>
        </a-layout-content>
      </a-layout>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import {deviceDistributionOptions, deviceCoverageOptions} from "@/static/index.ts";
import VChart from "vue-echarts";
</script>

<style scoped>
@import "@/css/module/device.scss";
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
</style>
