import {defineStore} from "pinia";
import {ref} from "vue";
import {DefaultDataResp, EventDataResp, EventInfoData, EventStatisticData, EventTrackDataResp, EventTrackInfoData, EventTrackReq, PositionRecordData} from "@/model";
import {DEFAULT_EVENT_INFO, DEFAULT_EVENT_INFO_LIST, DEFAULT_EVENT_STATISTIC} from "@/static/predefined.ts";
import {getEventDataAPI, getEventTrackDataAPI} from "@/api/event.ts";
import {httpErrorOutput} from "@/util/http.ts";
import {isDefaultDataRespValid} from "@/util/process/data.ts";

export const useEventStore = defineStore("event", () => {
    const eventStatisticData = ref<EventStatisticData>(DEFAULT_EVENT_STATISTIC);
    const eventPositionRecordList = ref<Array<PositionRecordData>>(Array.of());
    const eventInfoList = ref<Array<EventInfoData>>(DEFAULT_EVENT_INFO_LIST);
    const eventTrackInfo = ref<EventInfoData>(DEFAULT_EVENT_INFO);
    const eventTrackList = ref<Array<EventTrackInfoData>>(Array.of());

    function parseEventData(data:EventDataResp) {
        eventStatisticData.value = data.statisticData;
        eventPositionRecordList.value = data.positionRecordList;
        eventInfoList.value = data.infoList;
    }

    function parseEventTrackData(data:EventTrackDataResp) {
        eventTrackInfo.value = data.eventInfo;
        eventTrackList.value = data.trackInfoList;
    }

    async function getEventData(timestamp:number) {
        await getEventDataAPI(timestamp).then((res) => {
            if (!isDefaultDataRespValid(res)) { return; }
            parseEventData((<DefaultDataResp>res).data as EventDataResp);
        }).catch((err) => httpErrorOutput(err));
    }

    async function getEventTrackData(req:EventTrackReq) {
        await getEventTrackDataAPI(req).then((res) => {
            if (!isDefaultDataRespValid(res)) { return; }
            parseEventTrackData((<DefaultDataResp>res).data as EventTrackDataResp);
        }).catch((err) => httpErrorOutput(err));
    }

    return {
        eventStatisticData,
        eventPositionRecordList,
        eventInfoList,
        eventTrackInfo,
        eventTrackList,
        getEventData,
        getEventTrackData,
    }
})
