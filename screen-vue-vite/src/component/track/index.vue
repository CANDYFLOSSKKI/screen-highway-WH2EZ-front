<template>
  <div class="left-frame" id="trackFrame">
    <a-card class="frame-card">
      <a-layout class="card-layout">
        <a-layout-header class="card-layout-header">
          <a-row>
            <a-col :flex="1"><icon-tags class="card-icon" :size="25" /></a-col>
            <a-col :flex="25"><div class="card-title">实时车辆信息</div></a-col>
          </a-row>
          <div class="gradient-line"></div>
        </a-layout-header>
        <a-layout-content class="card-layout-content">
          <a-row class="track-table-title-border"><a-col flex="auto">
            <div class="track-table-title">武汉至鄂州机场方向</div>
          </a-col></a-row>
          <a-table :data="trajInfoListToEZ" :pagination="false" size="small" class="track-table" :scroll="{ x: 400, y: 190 }" :scrollbar="true">
            <template #columns>
              <a-table-column title="车牌号" data-index="license" :width="55" align="center"></a-table-column>
              <a-table-column title="车型" data-index="type" :width="45" align="center">
                <template #cell="{ record }">
                  <div>{{ carTypeLabel((record as TrajInfoData).type) }}</div>
                </template>
              </a-table-column>
              <a-table-column title="速度" data-index="speed" :width="40" align="center">
                <template #cell="{ record }">
                  <div>{{ carSpeedLabel((record as TrajInfoData).speed) }}</div>
                </template>
              </a-table-column>
              <a-table-column title="位置" data-index="position" :width="45" align="center"></a-table-column>
              <a-table-column title="" :width="25" align="center">
                <template #cell>
                  <a-button type="text" size="mini">
                    <template #icon>
                      <icon-play-circle-fill :size="18" class="card-off-icon" />
                    </template>
                  </a-button>
                </template>
              </a-table-column>
            </template>
          </a-table>
          <a-row class="track-table-title-border"><a-col flex="auto">
            <div class="track-table-title">鄂州机场至武汉方向</div>
          </a-col></a-row>
          <a-table :data="trajInfoListToWH" :pagination="false" size="small" class="track-table" :scroll="{ x: 400, y: 190 }" :scrollbar="true">
            <template #columns>
              <a-table-column title="车牌号" data-index="license" :width="55" align="center"></a-table-column>
              <a-table-column title="车型" data-index="type" :width="45" align="center">
                <template #cell="{ record }">
                  <div>{{ carTypeLabel((record as TrajInfoData).type) }}</div>
                </template>
              </a-table-column>
              <a-table-column title="速度" data-index="speed" :width="40" align="center">
                <template #cell="{ record }">
                  <div>{{ carSpeedLabel((record as TrajInfoData).speed) }}</div>
                </template>
              </a-table-column>
              <a-table-column title="位置" data-index="position" :width="45" align="center"></a-table-column>
              <a-table-column title="" :width="25" align="center">
                <template #cell>
                  <a-button type="text" size="mini">
                    <template #icon>
                      <icon-play-circle-fill :size="18" class="card-off-icon" />
                    </template>
                  </a-button>
                </template>
              </a-table-column>
            </template>
          </a-table>
        </a-layout-content>
      </a-layout>
      <a-row class="track-search-title-row">
        <a-col :flex="1"><icon-tags class="card-icon" :size="25" /></a-col>
        <a-col :flex="25"><div class="card-title">轨迹查询</div></a-col>
      </a-row>
      <div class="gradient-line"></div>
      <a-row class="track-search-input">
        <a-col :span="24"><a-input-search placeholder="请输入车牌号" button-text="查询" :allow-clear="true" v-model="licenseTarget" @search="alertTrackQuery" /></a-col>
      </a-row>
      <a-row class="search-datetime">
        <a-col :span="8"><a-date-picker value-format="YYYY-MM-DD" v-model="dateTarget" /></a-col>
        <a-col :span="15" :offset="1"><a-time-picker type="time-range" format="HH:mm:ss" v-model="timeTarget" /></a-col>
      </a-row>
      <div v-for="history in trackQueryHistory">
        <a-tag checkable class="track-history-tag" :closable="true" color="lime" @click="fillTrackQueryTarget(history)" >{{ trackQueryHistoryLabel(history) }}</a-tag>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import {CAR_TYPE_DATA} from "@/static/data/track.ts";
import {AlertViewEventBus} from "@/util/mitt.ts";
import {useTrajStore} from "@/store/module/traj.ts";
import {storeToRefs} from "pinia";
import {TrajInfoData} from "@/model";
import {onMounted, ref} from "vue";
const trajStore = useTrajStore();
const {trajInfoListToEZ, trajInfoListToWH} = storeToRefs(trajStore);
const licenseTarget = ref<string>('');
const dateTarget = ref<string>('');
const timeTarget = ref<Array<string>>(['', '']);
const trackQueryHistory = ref<Array<{ license:string, date:string, timeStart:string, timeEnd:string }>>(Array.of());

const carTypeLabel = (type:number) => CAR_TYPE_DATA.find(i => i.key === type)!.name;
const carSpeedLabel = (speed:number) => speed.toFixed(2);
const trackQueryHistoryLabel = (history:{ license:string, date:string, timeStart:string, timeEnd:string }) => `${history.license} ${history.date} ${history.timeStart} ${history.timeEnd}`;

function initTrackQueryTarget() {
  licenseTarget.value = '';
  dateTarget.value = '';
  timeTarget.value = ['', ''];
}

function fillTrackQueryTarget(history:{ license:string, date:string, timeStart:string, timeEnd:string }) {
  licenseTarget.value = history.license;
  dateTarget.value = history.date;
  timeTarget.value = [history.timeStart, history.timeEnd];
}

function recordTrackQueryHistory() {
  let data = { key: 0, license: licenseTarget.value, date: dateTarget.value, timeStart: timeTarget.value[0], timeEnd: timeTarget.value[1] };
  if (trackQueryHistory.value.push(data) > 5) {
    trackQueryHistory.value.shift();
  }
}

function alertTrackQuery() {
  recordTrackQueryHistory();
  initTrackQueryTarget();
  AlertViewEventBus.emit('trackQuery',true);
}

onMounted(() => {
  initTrackQueryTarget();
})
</script>

<style scoped>
@import "@/css/module/track.scss";
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
</style>
