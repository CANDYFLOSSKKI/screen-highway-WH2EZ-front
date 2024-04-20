<template>
  <div class="right-bottom-frame" id="viewPointFrame">
    <a-row class="view-point-back">
      <a-col :span="11" class="time-point-title">融合数据时间校准</a-col>
      <a-col :span="13">
        <a-date-picker show-time :model-value="trajFixedDatetime" format="YYYY-MM-DD HH:mm:ss" size="large" :disabled="true" />
      </a-col>
    </a-row>
    <a-row class="view-point-row">
      <a-col :flex="10" class="view-point-back">
        <a-input-search placeholder="请输入车牌号" size="large" allow-clear />
      </a-col>
      <a-col :flex="1" />
      <a-col :flex="10" class="view-point-back">
        <a-dropdown :popup-max-height="false">
          <a-button size="large" long><div>选择观察视点<icon-up/></div></a-button>
          <template #content>
            <a-doption v-for="item in DEFAULT_CAMERA_FLY_POSITION" @click="alertViewPointSwitch(item.key)">{{ item.label }}</a-doption>
          </template>
        </a-dropdown>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import {AlertViewEventBus} from "@/util/mitt.ts";
import {useTrajStore} from "@/store/module/traj.ts";
import {storeToRefs} from "pinia";
import {DEFAULT_CAMERA_FLY_POSITION} from "@/static/cesium.ts";
const trajStore = useTrajStore();
const {trajFixedDatetime} = storeToRefs(trajStore);

function alertViewPointSwitch(key:number) {
  AlertViewEventBus.emit('viewPoint',key);
}
</script>

<style scoped>
@import "@/css/module/viewpoint.scss";
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
</style>
