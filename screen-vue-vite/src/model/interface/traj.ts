import {TrajFrameData} from "@/model/interface/index.ts";

export type TrajCarStatisticData = {
    carNumTotalToWH:number,
    carNumTotalToEZ:number,
    carNumToWH:number,
    carNumToEZ:number,
};

export type TrajInfoData = {
    trajId:number,
    license:string,
    type:number,
    direction:number,
    speed:number,
    position:string,
    frameList:Array<TrajFrameData>,
};

export type TrajDataResp = {
    timestamp:number,
    datetime:string,
    carStatisticData:TrajCarStatisticData,
    infoListToWH:Array<TrajInfoData>,
    infoListToEZ:Array<TrajInfoData>,
};
