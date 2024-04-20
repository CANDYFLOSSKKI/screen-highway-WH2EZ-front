<template>
  <div class="matter-frame" id="matterFrame">
    <a-row class="matter-frame-row-out">
       <a-col :span="8" :offset="1">
         <a-layout>
           <a-layout-header class="matter-statistic-title">
             <div class="matter-statistic-title-text">武汉至鄂州方向</div>
           </a-layout-header>
           <a-layout-content class="matter-statistic-content">
             <a-row class="matter-frame-row">
               <a-col :span="8"><div class="matter-statistic-content-text">累计车辆数</div></a-col>
               <a-col :span="8"><div class="matter-statistic-content-text">在途车辆数</div></a-col>
               <a-col :span="8"><div class="matter-statistic-content-text">平均车速</div></a-col>
             </a-row>
           </a-layout-content>
           <a-layout-footer class="matter-statistic-data">
             <a-row class="matter-frame-row">
               <a-col :span="8"><div class="matter-statistic-data-text">{{ trajCarStatisticData.carNumTotalToEZ }}</div></a-col>
               <a-col :span="8"><div class="matter-statistic-data-text">{{ trajCarStatisticData.carNumToEZ }}</div></a-col>
               <a-col :span="8"><div class="matter-statistic-data-text">{{ postureSpeedLabel(postureStatisticData.speedToEZ) }}</div></a-col>
             </a-row>
           </a-layout-footer>
         </a-layout>
       </a-col>
       <a-col :span="8" :offset="1">
         <a-layout>
           <a-layout-header class="matter-statistic-title">
             <div class="matter-statistic-title-text">鄂州至武汉方向</div>
           </a-layout-header>
           <a-layout-content class="matter-statistic-content">
             <a-row class="matter-frame-row">
               <a-col :span="8"><div class="matter-statistic-content-text">累计车辆数</div></a-col>
               <a-col :span="8"><div class="matter-statistic-content-text">在途车辆数</div></a-col>
               <a-col :span="8"><div class="matter-statistic-content-text">平均车速</div></a-col>
             </a-row>
           </a-layout-content>
           <a-layout-footer class="matter-statistic-data">
             <a-row class="matter-frame-row">
               <a-col :span="8"><div class="matter-statistic-data-text">{{ trajCarStatisticData.carNumTotalToWH }}</div></a-col>
               <a-col :span="8"><div class="matter-statistic-data-text">{{ trajCarStatisticData.carNumToWH }}</div></a-col>
               <a-col :span="8"><div class="matter-statistic-data-text">{{ postureSpeedLabel(postureStatisticData.speedToWH) }}</div></a-col>
             </a-row>
           </a-layout-footer>
         </a-layout>
       </a-col>
       <a-col :span="6">
         <a-layout>
           <a-layout-header class="matter-situation-title">
             <div class="matter-situation-title-text">拥堵状态</div>
           </a-layout-header>
           <a-layout-content class="matter-situation-content">
             <div class="matter-situation-content-text">{{ postureCongestionLabel([postureStatisticData.congestionToEZ, postureStatisticData.congestionToWH]) }}</div>
           </a-layout-content>
         </a-layout>
       </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import {useTrajStore} from "@/store/module/traj.ts";
import {usePostureStore} from "@/store/module/posture.ts";
import {storeToRefs} from "pinia";
const trajStore = useTrajStore();
const postureStore = usePostureStore();
const {trajCarStatisticData} = storeToRefs(trajStore);
const {postureStatisticData} = storeToRefs(postureStore);

const postureSpeedLabel = (speed:number) => speed.toFixed(2);
const postureCongestionLabel = (congestion:[number, number]) => (congestion.reduce((i,j) => (i + j), 0)) < 4 ? '通畅' : '拥堵';
</script>

<style scoped>
@import "@/css/module/matter.scss";
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
</style>
