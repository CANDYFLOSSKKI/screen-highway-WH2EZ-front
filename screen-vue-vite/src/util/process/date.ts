import {getAlignmentDateTime} from "@/util/process/data.ts";

export function getCurrentDateTime():[string, number] {
    let datetime = Date.now();
    let date = new Date(datetime);
    let year = date.getFullYear().toString();
    let month = getAlignmentDateTime(date.getMonth() + 1);
    let day = getAlignmentDateTime(date.getDay());
    let hour = getAlignmentDateTime(date.getHours());
    let minute = getAlignmentDateTime(date.getMinutes());
    let second = getAlignmentDateTime(date.getSeconds());
    return [`${year}-${month}-${day} ${hour}:${minute}:${second}`, Number.parseInt(datetime.toString())];
}
