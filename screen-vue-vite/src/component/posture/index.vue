<template>
  <div class="left-frame" id="postureFrame">
    <a-card class="frame-card">
      <a-layout class="card-layout">
        <a-layout-header class="card-layout-header">
          <a-row>
            <a-col :flex="1"><icon-tags class="card-icon" :size="25" /></a-col>
            <a-col :flex="25"><div class="card-title">态势分析</div></a-col>
            <a-col :flex="1">
              <a-button type="text" size="mini">
                <template #icon>
                  <icon-expand :size="20" class="card-off-icon" @click="alertPostureAnalyzeAll" />
                </template>
              </a-button>
            </a-col>
          </a-row>
          <div class="gradient-line"></div>
        </a-layout-header>
        <a-layout-content class="card-layout-content">
          <a-row class="search-datetime">
            <a-col :span="8"><a-date-picker /></a-col>
            <a-col :span="15" :offset="1"><a-time-picker type="time-range" /></a-col>
          </a-row>
          <a-row class="search-section">
            <a-col :span="16">
              <a-radio-group type="button" v-model="directionTarget">
                <a-radio :value="DIRECTION_ALL">双向</a-radio>
                <a-radio :value="DIRECTION_TO_EZ">武汉至鄂州方向</a-radio>
                <a-radio :value="DIRECTION_TO_WH">鄂州至武汉方向</a-radio>
              </a-radio-group>
            </a-col>
            <a-col :span="8">
                <a-select placeholder="选择断面" v-model="sectionTarget">
                  <a-option v-for="item of sectionInfoList" :value="item.value" :label="sectionInfoLabel(item)" />
                </a-select>
            </a-col>
          </a-row>
          <a-row class="posture-part-tab">
            <a-menu mode="horizontal" class="posture-part-tab-menu" :default-selected-keys="['1']" @menuItemClick="switchTabView">
              <a-menu-item :key="POSTURE_TAB_VIEW_FLOW.toString()"><div style="font-size: 15px;">流量态势</div></a-menu-item>
              <a-menu-item :key="POSTURE_TAB_VIEW_SPEED.toString()"><div style="font-size: 15px;">速度态势</div></a-menu-item>
              <a-menu-item :key="POSTURE_TAB_VIEW_CONGESTION.toString()"><div style="font-size: 15px;">拥堵态势</div></a-menu-item>
            </a-menu>
          </a-row>
          <a-row>
            <posture-analyze-flow v-show="tabViewFlow" />
            <posture-analyze-speed v-show="tabViewSpeed" />
            <posture-analyze-congestion v-show="tabViewCongestion" />
          </a-row>
        </a-layout-content>
      </a-layout>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import {AlertViewEventBus} from "@/util/mitt.ts";
import PostureAnalyzeFlow from "@/component/posture/posture-flow/index.vue";
import PostureAnalyzeSpeed from "@/component/posture/posture-speed/index.vue";
import PostureAnalyzeCongestion from "@/component/posture/posture-congestion/index.vue";
import {computed, ref} from "vue";
import {
  DIRECTION_ALL,
  DIRECTION_TO_EZ, DIRECTION_TO_WH,
  POSTURE_TAB_VIEW_CONGESTION,
  POSTURE_TAB_VIEW_FLOW,
  POSTURE_TAB_VIEW_SPEED
} from "@/static";
import {useSectionStore} from "@/store/module/section.ts";
import {storeToRefs} from "pinia";
import {SecInfoData} from "@/model/interface/section.ts";
const sectionStore = useSectionStore();
const {sectionInfoList, sectionTarget, directionTarget} = storeToRefs(sectionStore);
const postureTabView = ref<number>(POSTURE_TAB_VIEW_FLOW);

const tabViewFlow = computed(() => postureTabView.value === POSTURE_TAB_VIEW_FLOW);
const tabViewSpeed = computed(() => postureTabView.value === POSTURE_TAB_VIEW_SPEED);
const tabViewCongestion = computed(() => postureTabView.value === POSTURE_TAB_VIEW_CONGESTION);
const sectionInfoLabel = (item:SecInfoData) => `${item.name} : ${item.value}`;
const switchTabView = (key:string) => postureTabView.value = Number.parseInt(key);

function alertPostureAnalyzeAll() {
  AlertViewEventBus.emit('postureAnalyze',true);
}
</script>

<style scoped>
@import "@/css/module/posture.scss";
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
</style>
