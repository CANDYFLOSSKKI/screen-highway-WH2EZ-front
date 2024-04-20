import {defineStore} from "pinia";
import {ref} from "vue";
import {DefaultDataResp, PositionRecordData, SectionPeriodDataResp, SectionRealTimeDataResp, SectionTimeData} from "@/model";
import {getSectionInfoAPI, getSectionPeriodDataAPI, getSectionRealTimeDataAPI} from "@/api/section.ts";
import {httpErrorOutput} from "@/util/http.ts";
import {isDefaultDataRespValid} from "@/util/process/data.ts";
import {SecInfoData, SecInfoDataResp} from "@/model/interface/section.ts";
import {DEFAULT_NUMBER, DEFAULT_SECTION_INFO_LIST} from "@/static/predefined.ts";

export const useSectionStore = defineStore("section", () => {
    const sectionInfoList = ref<Array<SecInfoData>>(DEFAULT_SECTION_INFO_LIST);
    const sectionFlowRecordList = ref<Array<PositionRecordData>>(Array.of());
    const sectionSpeedRecordList = ref<Array<PositionRecordData>>(Array.of());
    const sectionCongestionRecordList = ref<Array<PositionRecordData>>(Array.of());
    const sectionTimeList = ref<Array<SectionTimeData>>(Array.of());

    const sectionTarget = ref<number>(DEFAULT_NUMBER);
    const directionTarget = ref<number>(DEFAULT_NUMBER);
    const periodTarget = ref<number>(DEFAULT_NUMBER);

    function parseSectionRealTimeData(data:SectionRealTimeDataResp) {
        sectionFlowRecordList.value = data.flowRecordList;
        sectionSpeedRecordList.value = data.speedRecordList;
        sectionCongestionRecordList.value = data.congestionRecordList;
    }

    async function getSectionRealTimeData(timestamp:number) {
        await getSectionRealTimeDataAPI(timestamp).then((res) => {
            if (!isDefaultDataRespValid(res)) { return; }
            parseSectionRealTimeData((<DefaultDataResp>res).data as SectionRealTimeDataResp);
        }).catch((err) => httpErrorOutput(err));
    }

    async function getSectionPeriodData(timestamp:number) {
        await getSectionPeriodDataAPI(timestamp).then((res) => {
            if (!isDefaultDataRespValid(res)) { return; }
            sectionTimeList.value = ((<DefaultDataResp>res).data as SectionPeriodDataResp).sectionTimeList;
        }).catch((err) => httpErrorOutput(err));
    }

    async function getSectionInfo() {
        await getSectionInfoAPI().then((res) => {
            if (!isDefaultDataRespValid(res)) { return; }
            sectionInfoList.value = ((<DefaultDataResp>res).data as SecInfoDataResp).secInfoList;
            sectionTarget.value = sectionInfoList.value[0].value;
        }).catch((err) => httpErrorOutput(err));
    }

    return {
        sectionInfoList,
        sectionFlowRecordList,
        sectionSpeedRecordList,
        sectionCongestionRecordList,
        sectionTarget,
        directionTarget,
        periodTarget,
        getSectionPeriodData,
        getSectionRealTimeData,
        getSectionInfo,
    }
})
