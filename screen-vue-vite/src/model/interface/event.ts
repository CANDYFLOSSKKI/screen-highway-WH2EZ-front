import {PositionRecordData} from "@/model/interface/index.ts";

export type EventStatisticData = {
    total:number,
    pending:number,
    parking:number,
    against:number,
    fast:number,
    slow:number,
    occupy:number,
};

export type EventInfoData = {
    uuid:number,
    license:string,
    trajId:number,
    type:number,
    time:string,
    position:string,
    status:number,
    process:number,
};

export type EventDataResp = {
    statisticData:EventStatisticData,
    positionRecordList:Array<PositionRecordData>,
    infoList:Array<EventInfoData>,
};
