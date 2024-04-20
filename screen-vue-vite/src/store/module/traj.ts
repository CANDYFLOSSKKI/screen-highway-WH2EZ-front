import {defineStore} from "pinia";
import {ref} from "vue";
import {getCurrentDateTime} from "@/util/process/date.ts";
import {DefaultDataResp, TrajCarStatisticData, TrajDataResp, TrajInfoData, TrajTrackDataResp, TrajTrackInfoData, TrajTrackReq} from "@/model";
import {getTrajTrackDataAPI} from "@/api/traj.ts";
import {httpErrorOutput} from "@/util/http.ts";
import {DEFAULT_DATETIME, DEFAULT_NUMBER, DEFAULT_TRAJ_INFO_LIST, DEFAULT_TRAJ_STATISTIC} from "@/static/predefined.ts";
import {isDefaultDataRespValid} from "@/util/process/data.ts";
import {
    SOCKET_STATUS_CLOSED,
    SOCKET_STATUS_CLOSING,
    SOCKET_STATUS_CONNECTING,
    SOCKET_STATUS_OUT_BUSY,
    SOCKET_STATUS_OUT_CLOSE, SOCKET_STATUS_OUT_OPEN
} from "@/static";

export const useTrajStore = defineStore("traj", () => {
    let socket:WebSocket|undefined = undefined;
    const trajFixedDatetime = ref<string>(DEFAULT_DATETIME);
    const trajFixedTimestamp = ref<number>(DEFAULT_NUMBER);
    const trajCarStatisticData = ref<TrajCarStatisticData>(DEFAULT_TRAJ_STATISTIC);
    const trajInfoListToWH = ref<Array<TrajInfoData>>(DEFAULT_TRAJ_INFO_LIST);
    const trajInfoListToEZ = ref<Array<TrajInfoData>>(DEFAULT_TRAJ_INFO_LIST);
    const trajTrackList = ref<Array<TrajTrackInfoData>>(Array.of());

    function parseTrajRealTimeData(data:TrajDataResp) {
        trajFixedDatetime.value = data.datetime;
        trajFixedTimestamp.value = data.timestamp;
        trajCarStatisticData.value = data.carStatisticData;
        trajInfoListToWH.value = data.infoListToWH;
        trajInfoListToEZ.value = data.infoListToEZ;
    }

    function initFixedDateTime() {
        const now = getCurrentDateTime();
        trajFixedDatetime.value = now[0];
        trajFixedTimestamp.value = now[1];
    }

    function startSocketConnection() {
        socket = new WebSocket(import.meta.env.VITE_BASE_WS);
        socket.onopen = () => {}
        socket.onclose = () => {}
        socket.onmessage = (event) => {
            parseTrajRealTimeData(event.data as TrajDataResp);
        }
    }

    function closeSocketConnection() {
        socket!.close();
    }

    function getSocketStatus():number {
        if (socket === undefined || socket.readyState === SOCKET_STATUS_CLOSED) { return SOCKET_STATUS_OUT_CLOSE; }
        if (socket!.readyState === SOCKET_STATUS_CONNECTING || socket!.readyState === SOCKET_STATUS_CLOSING) { return SOCKET_STATUS_OUT_BUSY; }
        return SOCKET_STATUS_OUT_OPEN;
    }

    async function getTrajTrackData(req:TrajTrackReq) {
        await getTrajTrackDataAPI(req).then((res) => {
            if (!isDefaultDataRespValid(res)) { return; }
            trajTrackList.value = ((<DefaultDataResp>res).data as TrajTrackDataResp).trackInfoList;
        }).catch((err) => httpErrorOutput(err));
    }

    return {
        trajFixedDatetime,
        trajFixedTimestamp,
        trajCarStatisticData,
        trajInfoListToEZ,
        trajInfoListToWH,
        trajTrackList,
        initFixedDateTime,
        startSocketConnection,
        closeSocketConnection,
        getSocketStatus,
        getTrajTrackData,
    }
})
