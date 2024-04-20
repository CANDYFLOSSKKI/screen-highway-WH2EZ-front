<template>
  <a-layout class="main-layout">
    <a-layout-header class="main-layout-header">
      <a-row justify="center" align="center" class="main-toolbar-back" id="mainToolbarBack">
        <img alt="" src="@/asset/back/toolbar.png" class="main-toolbar-img">
      </a-row>
      <a-row justify="center" align="center" class="main-toolbar" id="mainToolbar">
        <a-col :flex="1" />
        <a-space size="medium">
          <a-col :flex="1"><a-button class="main-toolbar-button" @click="switchToHome">数字孪生</a-button></a-col>
          <a-col :flex="1"><a-button class="main-toolbar-button" @click="switchToTrack">轨迹跟踪</a-button></a-col>
          <a-col :flex="1"><a-button class="main-toolbar-button" @click="switchToRadar">雷达分析</a-button></a-col>
          <a-col :flex="1"><a-button class="main-toolbar-button" @click="switchToPosture">态势分析</a-button></a-col>
        </a-space>
        <a-col class="main-toolbar-title" flex="50"><div class="main-toolbar-title-text">智能交通信息管理平台</div></a-col>
        <a-space size="medium">
          <a-col :flex="1"><a-button class="main-toolbar-button" @click="switchToDevice">设备管理</a-button></a-col>
          <a-col :flex="1"><a-button class="main-toolbar-button" @click="switchToEvent">事件检测</a-button></a-col>
          <a-col :flex="1"><a-button class="main-toolbar-button" @click="resetViewShow">实时动画</a-button></a-col>
          <a-col :flex="1"><a-button class="main-toolbar-button">数据看板</a-button></a-col>
        </a-space>
        <a-col :flex="1" />
      </a-row>
    </a-layout-header>
    <a-layout-content class="main-layout-content">
      <anime-view />
      <!-- @/component/matter -->
      <transition :name="transitionTop" mode="out-in"><info-matter v-show="isToolShow" /></transition>
      <!-- @/component/viewpoint -->
      <transition :name="transitionBottom" mode="out-in"><view-point v-show="isToolShow" /></transition>
      <!-- @/component/home -->
      <transition :name="transitionLeft" mode="out-in"><home-page v-show="isHomeShow" /></transition>
      <transition :name="transitionRight" mode="out-in"><home-page-traffic v-show="isHomeShow" /></transition>
      <!-- @/component/track -->
      <transition :name="transitionLeft" mode="out-in"><track-analyze v-show="isTrackShow" /></transition>
      <transition :name="transitionLeft" mode="out-in"><track-analyze-query v-show="isTrackQueryShow" /></transition>
      <!-- @/component/radar -->
      <transition :name="transitionLeft" mode="out-in"><radar-analyze v-show="isRadarShow" /></transition>
      <!-- @/component/posture -->
      <transition :name="transitionLeft" mode="out-in"><posture-analyze v-show="isPostureShow" /></transition>
      <transition :name="transitionWhole" mode="out-in"><posture-analyze-all v-show="isPostureAllShow" /></transition>
      <!-- @/component/device -->
      <transition :name="transitionLeft" mode="out-in"><device-manage v-show="isDeviceShow" /></transition>
      <transition :name="transitionRight" mode="out-in"><device-manage-table v-show="isDeviceShow" /></transition>
      <!-- @/component/event -->
      <transition :name="transitionLeft" mode="out-in"><event-manage v-show="isEventShow" /></transition>
      <transition :name="transitionLeft" mode="out-in"><event-manage-process v-show="isEventProcessShow" /></transition>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import HomePage from "@/component/home/index.vue";
import HomePageTraffic from "@/component/home/home-traffic/index.vue";
import AnimeView from "@/component/anime/index.vue";
import TrackAnalyze from "@/component/track/index.vue";
import RadarAnalyze from "@/component/radar/index.vue";
import PostureAnalyze from "@/component/posture/index.vue";
import InfoMatter from "@/component/matter/index.vue";
import DeviceManage from "@/component/device/index.vue";
import DeviceManageTable from "@/component/device/device-table/index.vue";
import EventManage from "@/component/event/index.vue";
import TrackAnalyzeQuery from "@/component/track/track-query/index.vue";
import EventManageProcess from "@/component/event/event-process/index.vue";
import ViewPoint from "@/component/viewpoint/index.vue";
import PostureAnalyzeAll from "@/component/posture/posture-all/index.vue";
import {computed, onMounted, ref} from "vue";
import {AlertViewEventBus} from "@/util/mitt.ts";
import {
  MAIN_VIEW_SHOW_DEVICE, MAIN_VIEW_SHOW_EVENT,
  MAIN_VIEW_SHOW_HOME,
  MAIN_VIEW_SHOW_NONE, MAIN_VIEW_SHOW_POSTURE, MAIN_VIEW_SHOW_POSTURE_ALL, MAIN_VIEW_SHOW_RADAR,
  MAIN_VIEW_SHOW_TRACK, SUB_VIEW_SHOW_EVENT_PROCESS,
  SUB_VIEW_SHOW_NONE, SUB_VIEW_SHOW_TRACK_QUERY, TOOL_VIEW_SHOW_OFF,
  TOOL_VIEW_SHOW_ON
} from "@/static";

document.body.setAttribute('arco-theme', 'dark')
const mainViewShow = ref<Number>(MAIN_VIEW_SHOW_NONE);
const subViewShow = ref<Number>(SUB_VIEW_SHOW_NONE);
const toolViewShow = ref<Number>(TOOL_VIEW_SHOW_ON);

const transitionLeft = ref<string>("leftin");
const transitionRight = ref<string>("rightin");
const transitionTop = ref<string>("topin");
const transitionBottom = ref<string>("bottomin");
const transitionWhole = ref<string>("wholein");

const isHomeShow = computed(() => mainViewShow.value === MAIN_VIEW_SHOW_HOME);
const isTrackShow = computed(() => mainViewShow.value === MAIN_VIEW_SHOW_TRACK);
const isRadarShow = computed(() => mainViewShow.value === MAIN_VIEW_SHOW_RADAR);
const isPostureShow = computed(() => mainViewShow.value === MAIN_VIEW_SHOW_POSTURE);
const isPostureAllShow = computed(() => mainViewShow.value === MAIN_VIEW_SHOW_POSTURE_ALL);
const isDeviceShow = computed(() => mainViewShow.value === MAIN_VIEW_SHOW_DEVICE);
const isEventShow = computed(() => mainViewShow.value === MAIN_VIEW_SHOW_EVENT);
const isTrackQueryShow = computed(() => subViewShow.value === SUB_VIEW_SHOW_TRACK_QUERY);
const isEventProcessShow = computed(() => subViewShow.value === SUB_VIEW_SHOW_EVENT_PROCESS);
const isToolShow = computed(() => toolViewShow.value === TOOL_VIEW_SHOW_ON);

function resetViewShow() {
  mainViewShow.value = MAIN_VIEW_SHOW_NONE;
  subViewShow.value = SUB_VIEW_SHOW_NONE;
  toolViewShow.value = TOOL_VIEW_SHOW_ON;
}

function mainViewSwitchNextProcess() {
  subViewShow.value = SUB_VIEW_SHOW_NONE;
  toolViewShow.value = TOOL_VIEW_SHOW_ON;
}

function switchToHome() {
  if (isHomeShow.value) { return resetViewShow(); }
  mainViewShow.value = MAIN_VIEW_SHOW_HOME;
  mainViewSwitchNextProcess();
}

function switchToTrack() {
  if (isTrackShow.value) { return resetViewShow(); }
  mainViewShow.value = MAIN_VIEW_SHOW_TRACK;
  mainViewSwitchNextProcess();
}

function switchToRadar() {
  if (isRadarShow.value) { return resetViewShow(); }
  mainViewShow.value = MAIN_VIEW_SHOW_RADAR;
  mainViewSwitchNextProcess();
}

function switchToPosture() {
  if (isPostureShow.value) { return resetViewShow(); }
  mainViewShow.value = MAIN_VIEW_SHOW_POSTURE;
  mainViewSwitchNextProcess();
}

function switchToDevice() {
  if (isDeviceShow.value) { return resetViewShow(); }
  mainViewShow.value = MAIN_VIEW_SHOW_DEVICE;
  mainViewSwitchNextProcess();
}

function  switchToEvent() {
  if (isEventShow.value) { return resetViewShow(); }
  mainViewShow.value = MAIN_VIEW_SHOW_EVENT;
  mainViewSwitchNextProcess();
}

AlertViewEventBus.on('trackQuery',async (flag) => {
  subViewShow.value = flag ? SUB_VIEW_SHOW_TRACK_QUERY : SUB_VIEW_SHOW_NONE;
});

AlertViewEventBus.on('eventProcess', async (flag) => {
  subViewShow.value = flag ? SUB_VIEW_SHOW_EVENT_PROCESS : SUB_VIEW_SHOW_NONE;
});

AlertViewEventBus.on('postureAnalyze', async (flag) => {
  mainViewShow.value = flag ? MAIN_VIEW_SHOW_POSTURE_ALL : MAIN_VIEW_SHOW_POSTURE;
  toolViewShow.value = flag ? TOOL_VIEW_SHOW_OFF : TOOL_VIEW_SHOW_ON;
  subViewShow.value = SUB_VIEW_SHOW_NONE;
});

onMounted(() => {
  resetViewShow();
})
</script>

<style scoped>
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
@import "@/css/transition.scss";
</style>
