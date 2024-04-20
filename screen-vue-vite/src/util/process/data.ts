import {HttpErrorData, HttpRequestMethod} from "@/model/http.ts";
import {DefaultDataResp, TimeRecordData} from "@/model";
import {DEFAULT_NUMBER} from "@/static/predefined.ts";

export function strToHttpMethod(str:string):HttpRequestMethod {
    return str === 'get' ? HttpRequestMethod.GET : HttpRequestMethod.POST;
}

export function getAlignmentDateTime(value:number):string {
    return value.toString().padStart(2, '0');
}

export function isDefaultDataRespValid(res:DefaultDataResp|HttpErrorData):boolean {
    return (res as DefaultDataResp).flag;
}

export function getReactionCongestion(oldValue:number, newValue:number):number {
    return ((newValue - oldValue) / oldValue) * 100;
}

export function isArrayEmpty(data:Array<any>|undefined|null):boolean {
    return data === undefined || data === null || data.length === 0;
}

export function getAvgCongestion(recordList:Array<TimeRecordData>):[number, number] {
    let avgCongestionToEZ = DEFAULT_NUMBER;
    let avgCongestionToWH = DEFAULT_NUMBER;
    if (!isArrayEmpty(recordList)) {
        avgCongestionToEZ = recordList.map(i => i.valueToEZ).reduce((i,j) => (i + j), 0);
        avgCongestionToWH = recordList.map(i => i.valueToWH).reduce((i,j) => (i + j), 0);
        avgCongestionToEZ /= recordList.length;
        avgCongestionToWH /= recordList.length;
    }
    return [avgCongestionToEZ, avgCongestionToWH];
}

