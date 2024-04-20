import {PositionRecordData, TimeRecordData} from "@/model/interface/index.ts";

export type SectionTimeData = {
    xsecName:string,
    xsecValue:number,
    flowRecordList:Array<TimeRecordData>,
    speedRecordList:Array<TimeRecordData>,
    congestionRecordList:Array<TimeRecordData>,
};

export type SectionRealTimeDataResp = {
    flowRecordList:Array<PositionRecordData>,
    speedRecordList:Array<PositionRecordData>,
    congestionRecordList:Array<PositionRecordData>,
};

export type SecInfoData = {
    name:string,
    value:number,
};

export type SectionPeriodDataResp = {
    sectionTimeList:Array<SectionTimeData>,
};

export type SecInfoDataResp = {
    secInfoList:Array<SecInfoData>,
};

