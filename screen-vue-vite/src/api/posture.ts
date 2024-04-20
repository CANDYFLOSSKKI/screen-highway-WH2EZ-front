import {DefaultDataResp} from "@/model";
import {HttpErrorData} from "@/model/http.ts";
import {httpGet} from "@/util/http.ts";

const enum API {
    GET_POSTURE_REAL_TIME_DATA = "/posture/data/real",
    GET_POSTURE_PERIOD_DATA = "/posture/data/period",
}

export async function getPostureRealTimeDataAPI(timestamp:number):Promise<DefaultDataResp|HttpErrorData> {
    return await httpGet<DefaultDataResp>(API.GET_POSTURE_REAL_TIME_DATA, {
        timestamp: timestamp.toString(),
    });
}

export async function getPosturePeriodDataAPI(timestamp:number):Promise<DefaultDataResp|HttpErrorData> {
    return await httpGet<DefaultDataResp>(API.GET_POSTURE_PERIOD_DATA, {
        timestamp: timestamp.toString(),
    });
}
