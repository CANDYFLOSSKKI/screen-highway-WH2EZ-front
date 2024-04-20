import {DefaultDataResp, TrajTrackReq} from "@/model";
import {HttpErrorData} from "@/model/http.ts";
import {httpPost} from "@/util/http.ts";

const enum API {
    GET_TRAJ_TRACK_DATA = "/traj/track",
}

export async function getTrajTrackDataAPI(req:TrajTrackReq):Promise<DefaultDataResp|HttpErrorData> {
    return await httpPost<DefaultDataResp>(API.GET_TRAJ_TRACK_DATA, req);
}
