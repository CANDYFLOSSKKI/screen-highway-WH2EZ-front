import {DefaultDataResp, EventTrackReq} from "@/model";
import {HttpErrorData} from "@/model/http.ts";
import {httpGet, httpPost} from "@/util/http.ts";

const enum API {
    GET_EVENT_DATA = "/event/data",
    GET_EVENT_TRACK_DATA = "/event/track",
}

export async function getEventDataAPI(timestamp:number):Promise<DefaultDataResp|HttpErrorData> {
    return await httpGet<DefaultDataResp>(API.GET_EVENT_DATA, {
        timestamp: timestamp.toString(),
    });
}

export async function getEventTrackDataAPI(req:EventTrackReq):Promise<DefaultDataResp|HttpErrorData> {
    return await httpPost<DefaultDataResp>(API.GET_EVENT_TRACK_DATA, req);
}
