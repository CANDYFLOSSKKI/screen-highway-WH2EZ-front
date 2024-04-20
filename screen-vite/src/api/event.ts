import {HttpErrorData} from "@/model/index.ts";
import {httpGet} from "@/util/axios.ts";
import {EventData} from "@/model/module.ts";

const enum API {
    GetTodayCarEvent = '/carEventToday',
    GetSpecificDayCarEvent = '/carEventSpecificDay',
}

/**
 * getTodayCarEventAPI()
 * 获取今日车辆事件信息数据
 * @return {EventData} 成功时,返回车辆事件数据
 * @return {HttpErrorData} 失败时,返回错误信息
 */
export async function getTodayCarEventAPI():Promise<EventData|HttpErrorData> {
    return await httpGet<EventData>(API.GetTodayCarEvent);
}

/**
 * getSpecificDayCarEventAPI()
 * 获取特定日期车辆事件信息数据
 * @param date 指定日期(如2022-11-04)
 * @return {EventData} 成功时,返回车辆事件数据
 * @return {HttpErrorData} 失败时,返回错误信息
 */
export async function getSpecificDayCarEventAPI(date:string):Promise<EventData|HttpErrorData> {
    return await httpGet<EventData>(API.GetSpecificDayCarEvent, {
        date: date,
    });
}
