import {DefaultDataResp} from "@/model";
import {HttpErrorData} from "@/model/http.ts";
import {httpGet} from "@/util/http.ts";

const enum API {
    GET_SECTION_REAL_TIME_DATA = "/section/data/real",
    GET_SECTION_PERIOD_DATA = "/section/data/period",
    GET_SECTION_INFO = "/section/info"
}

export async function getSectionRealTimeDataAPI(timestamp:number):Promise<DefaultDataResp|HttpErrorData> {
    return await httpGet<DefaultDataResp>(API.GET_SECTION_REAL_TIME_DATA, {
        timestamp: timestamp.toString(),
    });
}

export async function getSectionPeriodDataAPI(timestamp:number):Promise<DefaultDataResp|HttpErrorData> {
    return await httpGet<DefaultDataResp>(API.GET_SECTION_PERIOD_DATA, {
        timestamp: timestamp.toString(),
    });
}

export async function getSectionInfoAPI():Promise<DefaultDataResp|HttpErrorData> {
    return await httpGet<DefaultDataResp>(API.GET_SECTION_INFO, {});
}
