<template>
  <div class="middle-down-frame" id="eventProcessFrame">
    <a-card class="frame-card">
      <a-layout class="card-layout">
        <a-layout-header class="card-layout-header">
          <a-row>
            <a-col :flex="1"><icon-tags class="card-icon" :size="25" /></a-col>
            <a-col :flex="23"><div class="middle-card-title">事件处理</div></a-col>
            <a-col :flex="1">
              <a-button type="text" size="mini" @click="alertEventProcessOff">
                <template #icon>
                  <icon-double-down size="20" class="card-off-icon"/>
                </template>
              </a-button>
            </a-col>
          </a-row>
          <div class="middle-gradient-line"></div>
        </a-layout-header>
        <a-layout-content class="card-layout-content">
          <a-row class="event-process-row">
            <a-col :flex="20">
              <a-row class="event-process-table-title-border"><a-col flex="auto">
                <div class="event-table-title">相关车辆列表</div>
              </a-col></a-row>
              <a-table :data="eventProcessTableData" size="small" class="event-table" :pagination="eventProcessTablePagination">
                <template #columns>
                  <a-table-column title="车牌号" data-index="carId"></a-table-column>
                  <a-table-column title="车型" data-index="type"></a-table-column>
                  <a-table-column title="速度" data-index="speed"></a-table-column>
                  <a-table-column title="桩号" data-index="position"></a-table-column>
                  <a-table-column title="">
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
            </a-col>
            <a-col :flex="1" />
            <a-col :flex="15">
              <div class="event-process-info">
                <a-descriptions size="medium" :column="1" :bordered="true" class="event-process-info-desp">
                  <a-descriptions-item label="事件类型">
                    {{ eventDescriptionData.type }}
                  </a-descriptions-item>
                  <a-descriptions-item label="事件发生时间">
                    {{ eventDescriptionData.time }}
                  </a-descriptions-item>
                  <a-descriptions-item label="事件发生位置">
                    {{ eventDescriptionData.position }}
                  </a-descriptions-item>
                  <a-descriptions-item label="事件状态"><div style="color:lime;">
                    {{ eventDescriptionData.status }}
                  </div></a-descriptions-item>
                  <a-descriptions-item label="事件处理方式"><div style="color:orange;">
                    {{ eventDescriptionData.process }}
                  </div></a-descriptions-item>
                </a-descriptions>
              </div>
              <div class="event-process-select">
                <a-select placeholder="选择处理方式">
                  <a-option v-for="item in eventProcessSelectData">{{ item }}</a-option>
                </a-select>
              </div>
              <div class="event-process-button">
                <a-button type="primary" long>处理事件进度</a-button>
              </div>
              <div class="event-process-button">
                <a-button type="primary" status="danger" long>结束当前事件</a-button>
              </div>
            </a-col>
          </a-row>
        </a-layout-content>
      </a-layout>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import {
  eventDescriptionData,
  eventProcessSelectData,
  eventProcessTableData,
  eventProcessTablePagination
} from "@/static/data/event.ts";
import {AlertViewEventBus} from "@/util/mitt.ts";
function alertEventProcessOff() {
  AlertViewEventBus.emit('eventProcess',false);
}
</script>

<style scoped>
@import "@/css/module/event.scss";
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
</style>
