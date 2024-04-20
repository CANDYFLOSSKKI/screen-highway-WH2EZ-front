<template>
  <div class="full-frame-posture" id="postureAllFrame">
    <a-card class="frame-card">
      <a-layout class="card-layout">
        <a-layout-header class="card-layout-header">
          <a-row>
            <a-col :flex="2" />
            <a-col :flex="3"><div class="posture-all-toolbar-text">时间区间</div></a-col>
            <a-col :flex="7">
              <a-radio-group type="button" v-model="periodTarget">
                <a-radio :value="PERIOD_TODAY">今日</a-radio>
                <a-radio :value="PERIOD_WEEK">本周</a-radio>
                <a-radio :value="PERIOD_MONTH">本月</a-radio>
              </a-radio-group>
            </a-col>
            <a-col :flex="7"><a-date-picker /></a-col>
            <a-col :flex="1" />
            <a-col :flex="11"><a-time-picker type="time-range" /></a-col>
            <a-col :flex="2" />
            <a-col :flex="3"><div class="posture-all-toolbar-text">路段区间</div></a-col>
            <a-col :flex="12">
              <a-radio-group type="button" v-model="directionTarget">
                <a-radio :value="DIRECTION_ALL">双向</a-radio>
                <a-radio :value="DIRECTION_TO_EZ">武汉至鄂州方向</a-radio>
                <a-radio :value="DIRECTION_TO_WH">鄂州至武汉方向</a-radio>
              </a-radio-group>
            </a-col>
            <a-col :flex="7">
              <a-select placeholder="选择断面" v-model="sectionTarget">
                <a-option v-for="item of sectionInfoList" :value="item.value" :label="sectionInfoLabel(item)" />
              </a-select>
            </a-col>
            <a-col :flex="2" />
            <a-col :flex="5"><a-button long>生成分析报告</a-button></a-col>
            <a-col :flex="2" />
            <a-col :flex="1">
              <div class="posture-all-toolbar-icon"><a-button type="text" size="mini">
                  <template #icon>
                    <icon-double-down :size="25" class="card-off-icon" @click="alertPostureAnalyze" />
                  </template>
              </a-button></div>
            </a-col>
          </a-row>
        </a-layout-header>
        <a-layout-content class="card-layout-content">
          <a-row class="posture-all-content">
            <a-col :flex="2" />
            <a-col :flex="40">
              <a-layout class="card-layout">
                <a-layout-header class="card-layout-header">
                  <a-row class="posture-all-part-card-tip">
                    <a-col :flex="7" />
                    <a-col :flex="4"><div class="posture-all-part-card-title">流量态势</div></a-col>
                    <a-col :flex="7" />
                  </a-row>
                </a-layout-header>
                <a-layout-content class="card-layout-content">
                  <a-card class="posture-all-part-card">
                    <a-row>
                      <a-col :flex="20" class="data-statistic-next">
                        <a-row>
                          <a-layout class="card-layout">
                            <a-layout-header class="data-statistic-title"><div class="data-statistic-title-text">武汉至鄂州小时平均流量</div></a-layout-header>
                            <a-layout-footer class="data-statistic-data"><div class="data-statistic-data-text" style="color:yellow;">{{ postureStatisticData.flowToEZ }}</div></a-layout-footer>
                          </a-layout>
                        </a-row>
                        <a-row>
                          <a-layout class="card-layout">
                            <a-layout-header class="data-statistic-title"><div class="data-statistic-title-text">武汉至鄂州小时平均流量</div></a-layout-header>
                            <a-layout-footer class="data-statistic-data"><div class="data-statistic-data-text" style="color:yellow;">{{ postureStatisticData.flowToWH }}</div></a-layout-footer>
                          </a-layout>
                        </a-row>
                      </a-col>
                      <a-col :flex="1" />
                      <a-col :flex="25"><v-chart :option="postureRealTimeFlowDistributionOptions" :init-options="{ width: 320, height: 150 }" autoresize /></a-col>
                    </a-row>
                    <a-row class="posture-chart"><v-chart :option="postureGeneralFlowOptions" :init-options="{ width: 560, height: 200 }" autoresize /></a-row>
                    <a-row class="posture-chart"><v-chart :option="postureSectionFlowByPositionOptions" :init-options="{ width: 560, height: 200 }" autoresize /></a-row>
                    <a-row class="posture-chart"><v-chart :option="postureSectionFlowByTimeOptions" :init-options="{ width: 560, height: 200 }" autoresize /></a-row>
                  </a-card>
                </a-layout-content>
              </a-layout>
            </a-col>
            <a-col :flex="1" />
            <a-col :flex="40">
              <a-layout class="card-layout">
                <a-layout-header class="card-layout-header">
                  <a-row class="posture-all-part-card-tip">
                    <a-col :flex="7" />
                    <a-col :flex="4"><div class="posture-all-part-card-title">速度态势</div></a-col>
                    <a-col :flex="7" />
                  </a-row>
                </a-layout-header>
                <a-layout-content class="card-layout-content">
                  <a-card class="posture-all-part-card">
                    <a-row>
                      <a-col :flex="80">
                        <a-row class="data-statistic-next">
                          <a-col :span="5" />
                          <a-col :span="8"><v-chart :option="postureRealTimeSpeedToEZOptions" :init-options="{ width: 160, height: 85 }" autoresize /></a-col>
                        </a-row>
                      </a-col>
                      <a-col :flex="3" />
                      <a-col :flex="80">
                        <a-row class="data-statistic-next">
                          <a-col :span="5" />
                          <a-col :span="8"><v-chart :option="postureRealTimeSpeedToWHOptions" :init-options="{ width: 160, height: 85 }" autoresize /></a-col>
                        </a-row>
                      </a-col>
                    </a-row>
                    <a-row >
                      <a-col :flex="80">
                        <a-row class="data-statistic-next-tip">
                          <a-layout class="card-layout">
                            <a-layout-header class="data-statistic-title-next"><div class="data-statistic-title-text">武汉至鄂州平均速度</div></a-layout-header>
                            <a-layout-footer class="data-statistic-data-next"><div class="data-statistic-data-text" style="color:yellow;">{{ postureStatisticData.speedToEZ }} km/h</div></a-layout-footer>
                          </a-layout>
                        </a-row>
                      </a-col>
                      <a-col :flex="3" />
                      <a-col :flex="80">
                        <a-row class="data-statistic-next-tip">
                          <a-layout class="card-layout">
                            <a-layout-header class="data-statistic-title-next"><div class="data-statistic-title-text">鄂州至武汉平均速度</div></a-layout-header>
                            <a-layout-footer class="data-statistic-data-next"><div class="data-statistic-data-text" style="color:yellow;">{{ postureStatisticData.speedToWH }} km/h</div></a-layout-footer>
                          </a-layout>
                        </a-row>
                      </a-col>
                    </a-row>
                    <a-row class="posture-chart"><v-chart :option="postureGeneralSpeedOptions" :init-options="{ width: 560, height: 200 }" autoresize /></a-row>
                    <a-row class="posture-chart"><v-chart :option="postureSectionSpeedByPositionOptions" :init-options="{ width: 560, height: 200 }" autoresize /></a-row>
                    <a-row class="posture-chart"><v-chart :option="postureSectionSpeedByTimeOptions" :init-options="{ width: 560, height: 200 }" autoresize /></a-row>
                  </a-card>
                </a-layout-content>
              </a-layout>
            </a-col>
            <a-col :flex="1" />
            <a-col :flex="40">
              <a-layout class="card-layout">
                <a-layout-header class="card-layout-header">
                  <a-row class="posture-all-part-card-tip">
                    <a-col :flex="7" />
                    <a-col :flex="4"><div class="posture-all-part-card-title">拥堵态势</div></a-col>
                    <a-col :flex="7" />
                  </a-row>
                </a-layout-header>
                <a-layout-content class="card-layout-content">
                  <a-card class="posture-all-part-card">
                    <a-row>
                      <a-col :flex="20" class="data-statistic-next">
                        <a-row>
                          <a-col :flex="1" />
                          <a-col :flex="5"><a-layout>
                            <a-layout-header class="data-statistic-title-posture"><div class="data-statistic-title-text">武汉至鄂州</div></a-layout-header>
                            <a-layout-content class="data-statistic-sub-title"><div class="data-statistic-title-text">拥堵指数</div></a-layout-content>
                          </a-layout></a-col>
                          <a-col :flex="5"><div class="data-statistic-data-posture" style="color:yellow;">{{ postureStatisticData.congestionToEZ }}</div></a-col>
                          <a-col :flex="1" />
                        </a-row>
                        <a-row class="posture-congestion-sub-data-row-up">
                          <a-col :flex="6" />
                          <a-col :flex="6"><div class="posture-congestion-sub-data">今日平均&nbsp:</div></a-col>
                          <a-col :flex="10"><div class="posture-congestion-sub-data-num">{{ postureAvgCongestionToEZ }}</div></a-col>
                        </a-row>
                        <a-row class="posture-congestion-sub-data-row-down">
                          <a-col :flex="6" />
                          <a-col :flex="4"><div class="posture-congestion-sub-data">环比&nbsp:</div></a-col>
                          <a-col :flex="10">
                            <div v-show="postureReactionCongestionToEZ <= 0">
                              <div class="posture-congestion-sub-data-num" style="color:red;">{{ postureReactionCongestionToEZ }}%<icon-arrow-down style="color:red;" /></div>
                            </div>
                            <div v-show="postureReactionCongestionToEZ > 0">
                              <div class="posture-congestion-sub-data-num" style="color:lime;">{{ postureReactionCongestionToEZ }}%<icon-arrow-up style="color:lime;" /></div>
                            </div>
                          </a-col>
                        </a-row>
                      </a-col>
                      <a-col :flex="1" />
                      <a-col :flex="20"  class="data-statistic-next">
                        <a-row>
                          <a-col :flex="1" />
                          <a-col :flex="5"><a-layout>
                            <a-layout-header class="data-statistic-title-posture"><div class="data-statistic-title-text">鄂州至武汉</div></a-layout-header>
                            <a-layout-content class="data-statistic-sub-title"><div class="data-statistic-title-text">拥堵指数</div></a-layout-content>
                          </a-layout></a-col>
                          <a-col :flex="5"><div class="data-statistic-data-posture" style="color:yellow;">{{ postureStatisticData.congestionToWH }}</div></a-col>
                          <a-col :flex="1" />
                        </a-row>
                        <a-row class="posture-congestion-sub-data-row-up">
                          <a-col :flex="6" />
                          <a-col :flex="6"><div class="posture-congestion-sub-data">今日平均&nbsp:</div></a-col>
                          <a-col :flex="10"><div class="posture-congestion-sub-data-num">{{ postureAvgCongestionToWH }}</div></a-col>
                        </a-row>
                        <a-row class="posture-congestion-sub-data-row-down">
                          <a-col :flex="6" />
                          <a-col :flex="4"><div class="posture-congestion-sub-data">环比&nbsp:</div></a-col>
                          <a-col :flex="10">
                            <div v-show="postureReactionCongestionToWH <= 0">
                              <div class="posture-congestion-sub-data-num" style="color:red;">{{ postureReactionCongestionToWH }}%<icon-arrow-down style="color:red;" /></div>
                            </div>
                            <div v-show="postureReactionCongestionToWH > 0">
                              <div class="posture-congestion-sub-data-num" style="color:lime;">{{ postureReactionCongestionToWH }}%<icon-arrow-up style="color:lime;" /></div>
                            </div>
                          </a-col>
                        </a-row>
                      </a-col>
                    </a-row>
                    <a-row class="posture-chart"><v-chart :option="postureGeneralCongestionOptions" :init-options="{ width: 560, height: 200 }" autoresize /></a-row>
                    <a-row class="posture-chart"><v-chart :option="postureSectionCongestionByPositionOptions" :init-options="{ width: 560, height: 200 }" autoresize /></a-row>
                    <a-row class="posture-chart"><v-chart :option="postureSectionCongestionByTimeOptions" :init-options="{ width: 560, height: 200 }" autoresize /></a-row>
                  </a-card>
                </a-layout-content>
              </a-layout>
            </a-col>
            <a-col :flex="2" />
          </a-row>
        </a-layout-content>
      </a-layout>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import {AlertViewEventBus} from "@/util/mitt.ts";
import {
  DIRECTION_ALL, DIRECTION_TO_EZ, DIRECTION_TO_WH, PERIOD_MONTH, PERIOD_TODAY, PERIOD_WEEK,
  postureGeneralCongestionOptions,
  postureGeneralFlowOptions,
  postureGeneralSpeedOptions,
  postureRealTimeFlowDistributionOptions,
  postureRealTimeSpeedToEZOptions,
  postureRealTimeSpeedToWHOptions, postureSectionCongestionByPositionOptions, postureSectionCongestionByTimeOptions,
  postureSectionFlowByPositionOptions,
  postureSectionFlowByTimeOptions,
  postureSectionSpeedByPositionOptions,
  postureSectionSpeedByTimeOptions
} from "@/static";
import VChart from "vue-echarts";
import {usePostureStore} from "@/store/module/posture.ts";
import {storeToRefs} from "pinia";
import {useSectionStore} from "@/store/module/section.ts";
import {SecInfoData} from "@/model/interface/section.ts";
const postureStore = usePostureStore();
const sectionStore = useSectionStore();
const {postureStatisticData, postureAvgCongestionToEZ, postureAvgCongestionToWH, postureReactionCongestionToWH, postureReactionCongestionToEZ} = storeToRefs(postureStore);
const {sectionInfoList, sectionTarget, directionTarget, periodTarget} = storeToRefs(sectionStore);

const sectionInfoLabel = (item:SecInfoData) => `${item.name} : ${item.value}`;

function alertPostureAnalyze() {
  AlertViewEventBus.emit('postureAnalyze',false);
}
</script>

<style scoped>
@import "@/css/module/posture.scss";
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
</style>
