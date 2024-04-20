import {httpGet} from "@/util/axios.ts";
import {HttpErrorData} from "@/model/index.ts";
import {RealTimeCarData, RealTimeCarEntity, SpecificCarData} from "@/model/module.ts";

const enum API {
    GetRealTimeCarData = '/realTimeCarData',
    GetCarDataByCarId = '/getCarDataByCarId',
    GetCarDataByTimeAndTrajId = 'getCarDataByTimeAndTrajId',
}

/**
 * getRealTimeCarDataAPI()
 * (GET)获取实时车辆数据信息
 * @return {Promise<RealTimeCarData>} 成功时,返回实时车辆的轨迹数据
 * @return {Promise<HttpErrorData>} 失败时,返回错误信息
 */
export async function getRealTimeCarDataAPI():Promise<RealTimeCarData|HttpErrorData>{
    // return await httpGet<RealTimeCarData>(API.GetRealTimeCarData);
    return await getRealTimeCarMockData();
}

/**
 * getCarDataByCarIdAPI()
 * (GET)轨迹回放模式前置,根据车牌照获取全天的车辆数据
 * @param id 指定的车牌号
 * @return {Promise<SpecificCarData>} 成功时,返回目标车辆全天的轨迹数据
 * @return {Promise<HttpErrorData>} 失败时,返回错误信息
 */
export async function getCarDataByCarIdAPI(id:string):Promise<SpecificCarData|HttpErrorData>{
    return await httpGet<SpecificCarData>(API.GetCarDataByCarId, {
        id: id,
    });
}

/**
 * getCarDataByTimeAndTrajIdAPI()
 * (GET)历史回放模式前置,根据时间和轨迹号获取指定时间段前后的车辆数据
 * @param str 时间和轨迹号拼接的字符串(如2022-11-04_17:15:54_1667553332189)
 * @return {Promise<RealTimeCarData>} 成功时,返回目标车辆发生事件前后10秒的轨迹数据
 * @return {Promise<HttpErrorData>} 失败时,返回错误信息
 */
export async function getCarDataByTimeAndTrajIdAPI(str:string):Promise<SpecificCarData|HttpErrorData>{
    return await httpGet<SpecificCarData>(API.GetCarDataByTimeAndTrajId, {
        id: str,
    });
}



let count = -1;
export function resetCount() { count = -1; }
async function getRealTimeCarMockData() {
    if (count < 2) { count++; }
    return Promise.resolve({
        timeStamp: timeMockData[count],
        count: 3,
        leftCarCount: 2,
        rightCarCount: 1,
        entities: carMockData[count]
    });
}
const timeMockData:Array<string> = [
    "2022-10-09|10:00:00",
    "2022-10-09|10:01:00",
    "2022-10-09|10:02:00"
]
const carMockData:Array<Array<RealTimeCarEntity>> = [
    [
        {carNumber: "鄂AS858E", trajId: 1665280800001, angle: 73.4444, location: "K4+520", position: [114.9861699, 30.2998329], speed: 148, direction: 2},
        {carNumber: "鄂A9T97W", trajId: 1665280800003, angle: 263.654, location: "K11+880", position: [114.94110107421875, 30.297504425048828], speed: 90, direction: 1},
        {carNumber: "鄂GT0673", trajId: 1665280800005, angle: 84.1764, location: "K11+574", position: [114.92427062988281, 30.29817771911621], speed: 102, direction: 2}
    ],
    [
        {carNumber: "鄂AS858E", trajId: 1665280800001, angle: 73.4444, location: "K4+520", position: [114.9863846, 30.2999221], speed: 148, direction: 2},
        {carNumber: "鄂A9T97W", trajId: 1665280800003, angle: 263.654, location: "K11+880", position: [114.94110107421875, 30.297504425048828], speed: 90, direction: 1},
        {carNumber: "鄂GT0673", trajId: 1665280800005, angle: 84.1764, location: "K11+574", position: [114.92427062988281, 30.29817771911621], speed: 102, direction: 2}
    ],
    [
        {carNumber: "鄂AS858E", trajId: 1665280800001, angle: 73.4444, location: "K4+520", position: [114.9826570, 30.2986429], speed: 148, direction: 2},
        {carNumber: "鄂A9T97W", trajId: 1665280800003, angle: 263.654, location: "K11+880", position: [114.94110107421875, 30.297504425048828], speed: 90, direction: 1},
        {carNumber: "鄂GT0673", trajId: 1665280800005, angle: 84.1764, location: "K11+574", position: [114.92427062988281, 30.29817771911621], speed: 102, direction: 2}
    ]
]
