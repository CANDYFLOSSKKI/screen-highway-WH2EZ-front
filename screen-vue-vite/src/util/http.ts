import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import {HttpErrorData, HttpErrorType, HttpRequestMethod} from "@/model/http.ts";
import {strToHttpMethod} from "@/util/process/data.ts";
import {DEFAULT_HTTP_TIMEOUT} from "@/static/predefined.ts";

const service: AxiosInstance = axios.create({
    baseURL: '/api/v1',
    timeout: DEFAULT_HTTP_TIMEOUT,
    responseType: 'json',
    withCredentials: false,
});

export async function httpGet<T>(url:string , params = {}):Promise<T|HttpErrorData> {
    return await request<T>({
        url: url,
        params: params,
        method: HttpRequestMethod.GET
    });
}

export async function httpPost<T>(url:string, data = {}):Promise<T|HttpErrorData>{
    return await request<T>({
        url: url,
        data: data,
        method: HttpRequestMethod.POST
    });
}

export function httpErrorOutput(err: any) {
    const httpError = err as HttpErrorData;
    console.log(`请求${httpError.type} ${httpError.url}时发生错误 => ${httpError.type}\n错误信息 => ${httpError.message}`);
}

async function request<T>(config: AxiosRequestConfig):Promise<T|HttpErrorData> {
    try {
        const res = await service.request<T,AxiosResponse<T>>(config);
        return Promise.resolve(res.data);
    } catch (err) {
        const errData = handleRequestError(config.url!, config.method!, err as AxiosError);
        return Promise.reject(errData);
    }
}

function handleRequestError(url:string, method:string, err:AxiosError):HttpErrorData{
    // 请求发送错误(无请求,默认值)
    let errType:HttpErrorType = HttpErrorType.REQUEST_ERROR;
    let errMessage:string = err.message;
    // 响应状态错误(有请求有响应)
    if (err.response) {
        errType = HttpErrorType.RESPONSE_EXCEPTION;
        errMessage = `${err.response.status} ${err.response.statusText}`;
    // 响应接收错误(有请求无响应)
    } else if (err.request) {
        errType = HttpErrorType.RESPONSE_ERROR;
        errMessage = err.request.message;
    }
    return {
        url: url,
        method: strToHttpMethod(method),
        type: errType,
        message: errMessage,
    };
}
