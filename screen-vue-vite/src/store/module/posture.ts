import {defineStore} from "pinia";
import {ref} from "vue";
import {DefaultDataResp, PostureFlowTypeData, PosturePeriodDataResp, PostureRealTimeDataResp, PostureStatisticData, TimeRecordData} from "@/model";
import {DEFAULT_NUMBER, DEFAULT_POSTURE_STATISTIC} from "@/static/predefined.ts";
import {getPosturePeriodDataAPI, getPostureRealTimeDataAPI} from "@/api/posture.ts";
import {httpErrorOutput} from "@/util/http.ts";
import {getAvgCongestion, getReactionCongestion, isDefaultDataRespValid} from "@/util/process/data.ts";

export const usePostureStore = defineStore("posture", () => {
    const postureStatisticData = ref<PostureStatisticData>(DEFAULT_POSTURE_STATISTIC);
    const postureFlowTypeList = ref<Array<PostureFlowTypeData>>(Array.of());
    const postureFlowRecordList = ref<Array<TimeRecordData>>(Array.of());
    const postureSpeedRecordList = ref<Array<TimeRecordData>>(Array.of());
    const postureCongestionRecordList = ref<Array<TimeRecordData>>(Array.of());

    const postureAvgCongestionToEZ = ref<number>(DEFAULT_NUMBER);
    const postureAvgCongestionToWH = ref<number>(DEFAULT_NUMBER);
    const postureReactionCongestionToEZ = ref<number>(DEFAULT_NUMBER);
    const postureReactionCongestionToWH = ref<number>(DEFAULT_NUMBER);

    function parsePostureRealTimeData(data:PostureRealTimeDataResp) {
        postureReactionCongestionToEZ.value = getReactionCongestion(postureStatisticData.value.congestionToEZ, data.statisticData.congestionToEZ);
        postureReactionCongestionToWH.value = getReactionCongestion(postureStatisticData.value.congestionToWH, data.statisticData.congestionToWH);
        postureStatisticData.value = data.statisticData;
        postureFlowTypeList.value = data.flowTypeList;
    }

    function parsePosturePeriodData(data:PosturePeriodDataResp) {
        const avgCongestionTuple = getAvgCongestion(data.congestionRecordList);
        postureAvgCongestionToEZ.value = avgCongestionTuple[0];
        postureAvgCongestionToWH.value = avgCongestionTuple[1];
        postureFlowRecordList.value = data.flowRecordList;
        postureSpeedRecordList.value = data.speedRecordList;
        postureCongestionRecordList.value = data.congestionRecordList;
    }

    async function getPostureRealTimeData(timestamp:number) {
        await getPostureRealTimeDataAPI(timestamp).then((res) => {
            if (!isDefaultDataRespValid(res)) { return; }
            parsePostureRealTimeData((<DefaultDataResp>res).data as PostureRealTimeDataResp);
        }).catch((err) => httpErrorOutput(err));
    }

    async function getPosturePeriodData(timestamp:number) {
        await getPosturePeriodDataAPI(timestamp).then((res) => {
            if (!isDefaultDataRespValid(res)) { return; }
            parsePosturePeriodData((<DefaultDataResp>res).data as PosturePeriodDataResp);
        }).catch((err) => httpErrorOutput(err));
    }

    return {
        postureStatisticData,
        postureFlowTypeList,
        postureFlowRecordList,
        postureSpeedRecordList,
        postureCongestionRecordList,
        postureAvgCongestionToEZ,
        postureAvgCongestionToWH,
        postureReactionCongestionToEZ,
        postureReactionCongestionToWH,
        getPostureRealTimeData,
        getPosturePeriodData,
    }
})
