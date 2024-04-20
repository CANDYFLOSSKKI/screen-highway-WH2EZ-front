import {TimeRecordData} from "@/model/interface/index.ts";

export type PostureStatisticData = {
    flowToWH:number,
    flowToEZ:number,
    speedToWH:number,
    speedToEZ:number,
    congestionToWH:number,
    congestionToEZ:number,
};

export type PostureFlowTypeData = {
    name:string,
    type:number,
    carNumToWH:number,
    carNumToEZ:number,
    flowToWH:number,
    flowToEZ:number,
};

export type PostureRealTimeDataResp = {
    statisticData:PostureStatisticData,
    flowTypeList:Array<PostureFlowTypeData>,
};

export type PosturePeriodDataResp = {
    flowRecordList:Array<TimeRecordData>,
    speedRecordList:Array<TimeRecordData>,
    congestionRecordList:Array<TimeRecordData>,
};
