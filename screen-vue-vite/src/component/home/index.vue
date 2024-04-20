<template>
  <div class="left-frame" id="homeFrame">
    <a-card class="frame-card-home-left-up">
      <a-layout class="card-layout">
        <a-layout-header class="card-layout-header">
          <a-row>
            <a-col :flex="1"><icon-tags class="card-icon" :size="25" /></a-col>
            <a-col :flex="25"><div class="card-title">设备运行状态</div></a-col>
          </a-row>
          <div class="gradient-line"></div>
        </a-layout-header>
        <a-layout-content class="card-layout-content">
          <a-row class="home-device-top-row">
            <a-col :flex="1" />
            <a-col :flex="7"><img alt="" src="@/asset/logo/total.png" class="home-img"></a-col>
            <a-col :flex="6" class="home-device-all-col">
              <a-layout class="card-layout">
                <a-layout-header class="data-statistic-title"><div class="home-statistic-title-text">设备总数</div></a-layout-header>
                <a-layout-content class="data-statistic-data"><div class="home-statistic-data-text" style="color:yellow;">{{ deviceTotalNum }}</div></a-layout-content>
              </a-layout>
            </a-col>
            <a-col :flex="6" class="home-device-all-col">
              <a-layout class="card-layout">
                <a-layout-header class="data-statistic-title"><div class="home-statistic-title-text">在线设备数</div></a-layout-header>
                <a-layout-content class="data-statistic-data"><div class="home-statistic-data-text" style="color:lime;">{{ deviceOnlineNum }}</div></a-layout-content>
              </a-layout>
            </a-col>
            <a-col :flex="1" />
          </a-row>
          <a-row class="home-device-middle-row">
            <a-col :flex="1" />
            <a-col :flex="2"><img alt="" src="@/asset/logo/device.png" class="home-img-item"></a-col>
            <a-col :flex="3">
              <a-layout class="card-layout">
                <a-layout-header class="data-statistic-title"><div class="data-statistic-title-text">离线设备数</div></a-layout-header>
                <a-layout-content class="data-statistic-data"><div class="data-statistic-data-text">{{ deviceOfflineNum }}</div></a-layout-content>
              </a-layout>
            </a-col>
            <a-col :flex="1" />
            <a-col :flex="2"><img alt="" src="@/asset/logo/device.png" class="home-img-item"></a-col>
            <a-col :flex="3">
              <a-layout class="card-layout">
                <a-layout-header class="data-statistic-title"><div class="data-statistic-title-text">高延时设备数</div></a-layout-header>
                <a-layout-content class="data-statistic-data"><div class="data-statistic-data-text">{{ deviceHighTimeoutNum }}</div></a-layout-content>
              </a-layout>
            </a-col>
            <a-col :flex="1" />
          </a-row>
          <a-row class="home-device-down-row">
            <a-col :flex="1" />
            <a-col :flex="2"><img alt="" src="@/asset/logo/device.png" class="home-img-item"></a-col>
            <a-col :flex="3">
              <a-layout class="card-layout">
                <a-layout-header class="data-statistic-title"><div class="data-statistic-title-text">需处理设备数</div></a-layout-header>
                <a-layout-content class="data-statistic-data"><div class="data-statistic-data-text">{{ devicePendingNum }}</div></a-layout-content>
              </a-layout>
            </a-col>
            <a-col :flex="1" />
            <a-col :flex="2"><img alt="" src="@/asset/logo/timeout.png" class="home-img-item"></a-col>
            <a-col :flex="3">
              <a-layout class="card-layout">
                <a-layout-header class="data-statistic-title"><div class="data-statistic-title-text">设备平均时延</div></a-layout-header>
                <a-layout-content class="data-statistic-data"><div class="data-statistic-data-text">{{ deviceAvgTimeout }}</div></a-layout-content>
              </a-layout>
            </a-col>
            <a-col :flex="1" />
          </a-row>
        </a-layout-content>
      </a-layout>
    </a-card>
    <a-card class="frame-card-home-left-down">
      <a-layout class="card-layout">
        <a-layout-header class="card-layout-header">
          <a-row>
            <a-col :flex="1"><icon-tags class="card-icon" :size="25" /></a-col>
            <a-col :flex="25"><div class="card-title">交通事件状况</div></a-col>
          </a-row>
          <div class="gradient-line"></div>
        </a-layout-header>
        <a-layout-content class="card-layout-content">
          <a-row class="home-event-chart">
            <a-col :flex="15"><v-chart :option="homeEventTypeOptions" :init-options="{ width: 330, height: 220 }" autoresize /></a-col>
            <a-col :flex="6" class="home-event-chart-right">
              <a-row>
                <a-layout class="card-layout">
                  <a-layout-header class="data-statistic-title"><div class="home-statistic-title-text">事件总数</div></a-layout-header>
                  <a-layout-content class="data-statistic-data"><div class="home-statistic-data-text" style="color:yellow;">{{ eventStatisticData.total }}</div></a-layout-content>
                </a-layout>
              </a-row>
              <a-row class="home-event-chart-right-sep">
                <a-layout class="card-layout">
                  <a-layout-header class="data-statistic-title"><div class="home-statistic-title-text">待处理事件数</div></a-layout-header>
                  <a-layout-content class="data-statistic-data"><div class="home-statistic-data-text" style="color:orange;">{{ eventStatisticData.pending }}</div></a-layout-content>
                </a-layout>
              </a-row>
            </a-col>
            <a-col :flex="2" />
          </a-row>
          <a-row class="home-event-bar-chart"><v-chart :option="homeEventDistributionOptions" :init-options="{ width: 473, height: 210 }" autoresize /></a-row>
        </a-layout-content>
      </a-layout>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import VChart from "vue-echarts";
import {homeEventDistributionOptions, homeEventTypeOptions} from "@/static/index.ts";
import {
  deviceAvgTimeout,
  deviceHighTimeoutNum,
  deviceOfflineNum,
  deviceOnlineNum,
  devicePendingNum,
  deviceTotalNum
} from "@/static/data/device.ts";
import {useEventStore} from "@/store/module/event.ts";
import {storeToRefs} from "pinia";
const eventStore = useEventStore();
const {eventStatisticData} = storeToRefs(eventStore);

</script>

<style scoped>
@import "@/css/module/home.scss";
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
</style>
