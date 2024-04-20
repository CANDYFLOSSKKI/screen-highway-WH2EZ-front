<template>
  <div class="left-frame" id="deviceFrame">
    <a-card class="frame-card">
      <a-layout class="card-layout">
        <a-layout-header class="card-layout-header">
          <a-row>
            <a-col :flex="1"><icon-tags class="card-icon" :size="25" /></a-col>
            <a-col :flex="25"><div class="card-title">设备状态</div></a-col>
          </a-row>
          <div class="gradient-line"></div>
        </a-layout-header>
        <a-layout-content class="card-layout-content">
          <a-row class="search-datetime">
            <a-col :span="8"><a-date-picker /></a-col>
            <a-col :span="15" :offset="1"><a-time-picker type="time-range" /></a-col>
          </a-row>
          <a-row class="data-statistic">
            <a-col :flex="8">
              <a-layout class="card-layout">
                <a-layout-header class="data-statistic-title"><div class="data-statistic-title-text">在线设备</div></a-layout-header>
                <a-layout-content class="data-statistic-data"><div class="data-statistic-data-text" style="color:yellow;">
                  {{ deviceOnlineNum }}
                </div></a-layout-content>
              </a-layout>
            </a-col>
            <a-col :flex="6">
              <a-layout class="card-layout">
                <a-layout-header class="data-statistic-title"><div class="data-statistic-title-text">高延时设备</div></a-layout-header>
                <a-layout-content class="data-statistic-data"><div class="data-statistic-data-text" style="color:orange;">
                  {{ deviceHighTimeoutNum }}
                </div></a-layout-content>
              </a-layout>
            </a-col>
            <a-col :flex="8">
              <a-layout class="card-layout">
                <a-layout-header class="data-statistic-title"><div class="data-statistic-title-text">离线设备</div></a-layout-header>
                <a-layout-content class="data-statistic-data"><div class="data-statistic-data-text" style="color:red;">
                  {{ deviceOfflineNum }}
                </div></a-layout-content>
              </a-layout>
            </a-col>
          </a-row>
          <a-row class="device-timeout-chart">
            <v-chart :option="deviceTimeoutByPositionOptions" :init-options="{ width: 476, height: 210 }" autoresize />
          </a-row>
          <a-row class="device-timeout-chart">
            <v-chart :option="deviceTimeoutByTimeOptions" :init-options="{ width: 476, height: 210 }" autoresize id="deviceTimeoutChart" class="device-timeout-chart-v" />
            <a-col :offset="6" id="deviceTimeoutChartTag" class="device-timeout-chart-tag-col">
              <a-tag class="device-timeout-chart-tag" color="lime">{{ deviceSelectDevice }}</a-tag>
            </a-col>
          </a-row>
          <a-row class="device-table-title-border"><a-col flex="auto">
            <div class="device-table-title">设备列表</div>
          </a-col></a-row>
          <a-table row-key="deviceId" :data="deviceTableData" :pagination="false" size="small" class="device-table" :row-selection="{type: 'radio'}" :scroll="deviceTableScroll" :scrollbar="true">
            <template #columns>
              <a-table-column title="设备名称" data-index="deviceId" :width="120"></a-table-column>
              <a-table-column title="位置" data-index="location" :width="90"></a-table-column>
              <a-table-column title="道路幅向" data-index="roadDirect" :width="90"></a-table-column>
              <a-table-column title="设备状态">
                <template #cell="{ record }">
                  <div :style="rowStateStyle(record.state)">{{ record.state }}</div>
                </template>
              </a-table-column>
            </template>
          </a-table>
        </a-layout-content>
      </a-layout>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import VChart from "vue-echarts";
import {
  deviceHighTimeoutNum,
  deviceOfflineNum,
  deviceOnlineNum,
  deviceSelectDevice,
  deviceTableData, deviceTableScroll
} from "@/static/data/device.ts";
import {deviceTimeoutByPositionOptions, deviceTimeoutByTimeOptions} from "@/static/index.ts";
function rowStateStyle(state:string) {
  if (state === '正常') { return { color: 'green' }; }
  if (state === '高延时') { return { color: 'orange' }; }
  return { color: 'red' };
}
</script>

<style scoped>
@import "@/css/module/device.scss";
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
</style>
