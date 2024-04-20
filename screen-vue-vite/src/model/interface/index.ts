export type DefaultMsgResp = {
    code:number,
    flag:boolean,
    info:string,
    msg:string,
};

export type MsgResp = {
    flag:boolean,
    msg:string,
};

export type DefaultDataResp = {
    code:number,
    flag:boolean,
    info:string,
    data:{},
};

export type PositionRecordData = {
    xsecName:string,
    xsecValue:number,
    valueToWH:number,
    valueToEZ:number,
};

export type TimeRecordData = {
    time:string,
    timestamp:number,
    valueToEZ:number,
    valueToWH:number,
};

export type TrajFrameData = {
    timestamp:number,
    longitude:number,
    latitude:number,
    angle:number,
    position:string,
    speed:number,
};
