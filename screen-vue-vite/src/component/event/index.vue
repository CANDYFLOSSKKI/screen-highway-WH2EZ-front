<template>
  <div class="left-frame" id="eventFrame">
    <a-card class="frame-card">
      <a-layout class="card-layout">
        <a-layout-header class="card-layout-header">
          <a-row>
            <a-col :flex="1"><icon-tags class="card-icon" :size="25" /></a-col>
            <a-col :flex="25"><div class="card-title">事件检测</div></a-col>
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
                <a-layout-header class="data-statistic-title"><div class="data-statistic-title-text">事件总数</div></a-layout-header>
                <a-layout-content class="data-statistic-data"><div class="data-statistic-data-text" style="color:yellow;">{{ eventStatisticData.total }}起</div></a-layout-content>
              </a-layout>
            </a-col>
            <a-col :flex="8">
              <a-layout class="card-layout">
                <a-layout-header class="data-statistic-title"><div class="data-statistic-title-text">待处理事件数</div></a-layout-header>
                <a-layout-content class="data-statistic-data"><div class="data-statistic-data-text" style="color:orange;">{{ eventStatisticData.pending }}起</div></a-layout-content>
              </a-layout>
            </a-col>
          </a-row>
          <a-row class="event-chart"><v-chart :option="eventTypeOptions" :init-options="{ width: 476, height: 210 }" autoresize /></a-row>
          <a-row class="event-chart"><v-chart :option="eventDistributionOptions" :init-options="{ width: 476, height: 210 }" autoresize /></a-row>
          <a-row class="event-table-title-border"><a-col flex="auto">
            <div class="event-table-title">待处理事件列表</div>
          </a-col></a-row>
          <a-table :data="eventInfoList" :pagination="false" size="small" class="event-table" :scroll="{ x: 470, y: 220 }" :scrollbar="true">
            <template #columns>
              <a-table-column title="车牌号" data-index="license" :width="110" align="center"></a-table-column>
              <a-table-column title="类型" data-index="type" :width="60" align="center">
                <template #cell="{ record }">
                  <div>{{ eventTypeLabel((record as EventInfoData).type) }}</div>
                </template>
              </a-table-column>
              <a-table-column title="时间" data-index="time" :width="95" align="center">
                <template #cell="{ record }">
                  <a-layout class="card-layout">
                    <a-layout-header class="data-layout-half-part">{{ eventTimeLabelUp((record as EventInfoData).time) }}</a-layout-header>
                    <a-layout-content class="data-layout-half-part">{{ eventTimeLabelDown((record as EventInfoData).time) }}</a-layout-content>
                  </a-layout>
                </template>
              </a-table-column>
              <a-table-column title="位置" data-index="position" :width="95" align="center"></a-table-column>
              <a-table-column title="状态" :width="60" align="center">
                <template #cell="{ record }">
                  <div v-show="record.status === EVENT_STATUS_PENDING">
                    <a-popover content="待处理">
                      <icon-exclamation-circle-fill :size="18" style="color:red;" v-show="record.status === EVENT_STATUS_PENDING" />
                    </a-popover>
                  </div>
                  <div v-show="record.status === EVENT_STATUS_PROGRESS">
                    <a-popover content='处理中'>
                      <icon-question-circle-fill :size="18" style="color:orange;" v-show="record.status === EVENT_STATUS_PROGRESS" />
                    </a-popover>
                  </div>
                </template>
              </a-table-column>
              <a-table-column title="" :width="50">
                <template #cell>
                  <a-button type="text" size="mini" @click="alertEventProcess">
                    <template #icon>
                      <icon-send :size="18" class="card-off-icon" />
                    </template>
                  </a-button>
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
  EVENT_STATUS_PENDING,
  EVENT_STATUS_PROGRESS,
  eventDistributionOptions,
  eventTypeOptions
} from "@/static/index.ts";
import {EVENT_TYPE_DATA} from "@/static/data/event.ts";
import {AlertViewEventBus} from "@/util/mitt.ts";
import {useEventStore} from "@/store/module/event.ts";
import {storeToRefs} from "pinia";
import {EventInfoData} from "@/model";
const eventStore = useEventStore();
const {eventStatisticData, eventInfoList} = storeToRefs(eventStore);

const eventTypeLabel = (type:number) => EVENT_TYPE_DATA.find(i => i.key === type)!.name;
const eventTimeLabelUp = (time:string) => time.split(" ")[0];
const eventTimeLabelDown = (time:string) => time.split(" ")[1];

function alertEventProcess() {
  AlertViewEventBus.emit('eventProcess',true);
}
</script>

<style scoped>
@import "@/css/module/event.scss";
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
</style>
