import {TrajFrameData} from "@/model/interface/index.ts";
import {EventInfoData} from "@/model/interface/event.ts";

export type EventTrackInfoData = {
    trajId:number,
    license:string,
    type:number,
    direction:number,
    time:string,
    timestamp:number,
    speed:number,
    position:string,
    frameList:Array<TrajFrameData>,
};

export type TrajTrackInfoData = {
    trajId:number,
    license:string,
    match:string,
    type:number,
    direction:number,
    startTime:string,
    startTimestamp:number,
    startPosition:string,
    endTime:string,
    endTimestamp:number,
    endPosition:string,
    frameList:Array<TrajFrameData>,
};

export type EventTrackDataResp = {
    eventInfo:EventInfoData,
    trackInfoList:Array<EventTrackInfoData>,
};

export type TrajTrackDataResp = {
    trackInfoList:Array<TrajTrackInfoData>,
};

export type EventTrackReq = {
    timestamp:number,
    uuid:number,
};

export type TrajTrackReq = {
    timestamp:number,
    license:string,
};

