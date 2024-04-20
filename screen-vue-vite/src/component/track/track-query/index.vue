<template>
  <div class="middle-down-frame" id="trackQueryFrame">
    <a-card class="frame-card">
      <a-layout class="card-layout">
        <a-layout-header class="card-layout-header">
          <a-row>
            <a-col :flex="1"><icon-tags class="card-icon" :size="25" /></a-col>
            <a-col :flex="23"><div class="middle-card-title">查询结果</div></a-col>
            <a-col :flex="1">
              <a-button type="text" size="mini" @click="alertTrackQueryOff">
                <template #icon>
                  <icon-double-down size="20" class="card-off-icon"/>
                </template>
              </a-button>
            </a-col>
          </a-row>
          <div class="middle-gradient-line"></div>
        </a-layout-header>
        <a-layout-content class="card-layout-content">
          <div class="track-query-table-frame">
            <a-table :data="trackQueryTableData" size="small" class="track-table" :pagination="trackQueryTablePagination">
              <template #columns>
                <a-table-column title="车牌号" data-index="carId"></a-table-column>
                <a-table-column title="车型" data-index="type"></a-table-column>
                <a-table-column title="行驶方向" data-index="roadDirect"></a-table-column>
                <a-table-column title="起始时间" data-index="startTime"></a-table-column>
                <a-table-column title="起始桩号" data-index="startPosition"></a-table-column>
                <a-table-column title="结束时间" data-index="endTime"></a-table-column>
                <a-table-column title="结束桩号" data-index="endPosition"></a-table-column>
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
          </div>
        </a-layout-content>
      </a-layout>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import {trackQueryTableData, trackQueryTablePagination} from "@/static/data/track.ts";
import {AlertViewEventBus} from "@/util/mitt.ts";
function alertTrackQueryOff() {
  AlertViewEventBus.emit('trackQuery',false);
}
</script>

<style scoped>
@import "@/css/module/track.scss";
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
</style>
