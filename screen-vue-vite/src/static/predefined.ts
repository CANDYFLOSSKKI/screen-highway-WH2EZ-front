import {
    EventInfoData,
    EventStatisticData,
    PostureStatisticData,
    TrajCarStatisticData,
    TrajInfoData
} from "@/model";
import {SecInfoData} from "@/model/interface/section.ts";

const enum TIMEOUT {
    SECOND = 1000,
    MINUTE = 60 * SECOND,
    HOUR = 60 * MINUTE,
}

export const DEFAULT_HTTP_TIMEOUT:number = 10 * TIMEOUT.SECOND;
export const DEFAULT_DATETIME:string = "2000-01-01 00:00:01";
export const DEFAULT_STRING:string = "DEFAULT";
export const DEFAULT_NUMBER:number = 0;

export const DEFAULT_TRAJ_STATISTIC:TrajCarStatisticData = {
    carNumTotalToWH: DEFAULT_NUMBER,
    carNumTotalToEZ: DEFAULT_NUMBER,
    carNumToWH: DEFAULT_NUMBER,
    carNumToEZ: DEFAULT_NUMBER,
};

export const DEFAULT_EVENT_STATISTIC:EventStatisticData = {
    total: DEFAULT_NUMBER,
    pending: DEFAULT_NUMBER,
    parking: DEFAULT_NUMBER,
    against: DEFAULT_NUMBER,
    fast: DEFAULT_NUMBER,
    slow: DEFAULT_NUMBER,
    occupy: DEFAULT_NUMBER,
};

export const DEFAULT_EVENT_INFO:EventInfoData = {
    uuid: DEFAULT_NUMBER,
    license: DEFAULT_STRING,
    trajId: DEFAULT_NUMBER,
    type: DEFAULT_NUMBER,
    time: DEFAULT_DATETIME,
    position: DEFAULT_STRING,
    status: DEFAULT_NUMBER,
    process: DEFAULT_NUMBER,
}

export const DEFAULT_POSTURE_STATISTIC:PostureStatisticData = {
    flowToWH: DEFAULT_NUMBER,
    flowToEZ: DEFAULT_NUMBER,
    speedToWH: DEFAULT_NUMBER,
    speedToEZ: DEFAULT_NUMBER,
    congestionToWH: DEFAULT_NUMBER,
    congestionToEZ: DEFAULT_NUMBER,
}

export const DEFAULT_SECTION_INFO_LIST:Array<SecInfoData> = [
    { name: "SEC1", value: 1000 },
    { name: "SEC2", value: 2000 },
    { name: "SEC3", value: 3000 },
    { name: "SEC4", value: 4000 },
    { name: "SEC5", value: 5000 },
    { name: "SEC6", value: 6000 },
    { name: "SEC7", value: 7000 },
    { name: "SEC8", value: 8000 },
    { name: "SEC9", value: 9000 },
    { name: "SEC10", value: 10000 },
];

export const DEFAULT_EVENT_INFO_LIST:Array<EventInfoData> = [
    { uuid: 1, license: '鄂A10001*', trajId: 1, type: 1, time: '22/10/09 14:20:25', position: 'K13+990', status: 0, process: 0 },
    { uuid: 1, license: '鄂A10001*', trajId: 1, type: 1, time: '22/10/09 14:20:25', position: 'K13+990', status: 0, process: 0 },
    { uuid: 1, license: '鄂A10001*', trajId: 1, type: 1, time: '22/10/09 14:20:25', position: 'K13+990', status: 0, process: 0 },
    { uuid: 1, license: '鄂A10001*', trajId: 1, type: 1, time: '22/10/09 14:20:25', position: 'K13+990', status: 0, process: 0 },
    { uuid: 1, license: '鄂A10001*', trajId: 1, type: 1, time: '22/10/09 14:20:25', position: 'K13+990', status: 0, process: 0 },
    { uuid: 1, license: '鄂A10001*', trajId: 1, type: 1, time: '22/10/09 14:20:25', position: 'K13+990', status: 0, process: 0 },
    { uuid: 1, license: '鄂A10001*', trajId: 1, type: 1, time: '22/10/09 14:20:25', position: 'K13+990', status: 0, process: 0 },
    { uuid: 1, license: '鄂A10001*', trajId: 1, type: 1, time: '22/10/09 14:20:25', position: 'K13+990', status: 0, process: 0 },
    { uuid: 1, license: '鄂A10001*', trajId: 1, type: 1, time: '22/10/09 14:20:25', position: 'K13+990', status: 0, process: 0 },
    { uuid: 1, license: '鄂A10001*', trajId: 1, type: 1, time: '22/10/09 14:20:25', position: 'K13+990', status: 0, process: 0 },
];

export const DEFAULT_TRAJ_INFO_LIST:Array<TrajInfoData> = [
    { trajId: 1, license: '鄂A10001*', type: 1, direction: 1, speed: 120, position: 'K13+990', frameList: Array.of() },
    { trajId: 1, license: '鄂A10001*', type: 1, direction: 1, speed: 120, position: 'K13+990', frameList: Array.of() },
    { trajId: 1, license: '鄂A10001*', type: 1, direction: 1, speed: 120, position: 'K13+990', frameList: Array.of() },
    { trajId: 1, license: '鄂A10001*', type: 1, direction: 1, speed: 120, position: 'K13+990', frameList: Array.of() },
    { trajId: 1, license: '鄂A10001*', type: 1, direction: 1, speed: 120, position: 'K13+990', frameList: Array.of() },
    { trajId: 1, license: '鄂A10001*', type: 1, direction: 1, speed: 120, position: 'K13+990', frameList: Array.of() },
    { trajId: 1, license: '鄂A10001*', type: 1, direction: 1, speed: 120, position: 'K13+990', frameList: Array.of() },
    { trajId: 1, license: '鄂A10001*', type: 1, direction: 1, speed: 120, position: 'K13+990', frameList: Array.of() },
    { trajId: 1, license: '鄂A10001*', type: 1, direction: 1, speed: 120, position: 'K13+990', frameList: Array.of() },
    { trajId: 1, license: '鄂A10001*', type: 1, direction: 1, speed: 120, position: 'K13+990', frameList: Array.of() },
];
