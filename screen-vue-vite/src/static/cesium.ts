import * as Cesium from "cesium";

export const CESIUM_VIEWER_INIT_OPTIONS:{} = {
    shouldAnimate: true,
    baseLayerPicker: false,
    fullscreenButton: false,
    infoBox: false,
    selectionIndicator: false,
};

export const CESIUM_ACCESS_TOKEN:string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmOTlmMjhiNS03NGQzLTQ1OWUtOWQyNy03YjM4YWE2YjM1MTgiLCJpZCI6ODk3NjMsImlhdCI6MTY0OTkyMDI1MH0.VSOf-js_Wy1Xh9snbqtkxJgw4IEZSkDYFd1YSqjLqjE';

// 原道路模型 -> /model/highway/roadOnlySurface.glb
// 原道路装饰模型 -> /model/highway/roadWithoutSurface.glb
export const URI_ROAD_WITH_SURFACE:string = "/model/roadWithSurface.glb";
export const URI_ROAD_WITHOUT_SURFACE:string = "/model/roadWithoutSurface.glb";

export const DEFAULT_ROAD_POSITION = new Cesium.Cartesian3(
    // 笛卡尔坐标系中心点坐标
    -2330944.4049780667,
    4993865.472109023,
    3199942.793547205,
);

export const DEFAULT_ROAD_HPR = new Cesium.HeadingPitchRoll(
    // 航向(绕Z轴负半轴旋转角度)
    Cesium.Math.toRadians(89.01),
    // 俯仰(绕Y轴负半轴旋转角度)
    Cesium.Math.toRadians(0.0),
    // 横滚(绕X轴正半轴旋转角度)
    Cesium.Math.toRadians(0.0),
);

export const DEFAULT_CAMERA_DESTINATION = Cesium.Cartesian3.fromDegrees(
    115.0050483,
    30.2986075,
    600.0000000,
);

export const DEFAULT_CAMERA_ORIENTATION:{} = {
    heading: Cesium.Math.toRadians(357.99),
    pitch: Cesium.Math.toRadians(-35.38),
    roll: Cesium.Math.toRadians(0.00),
};

export const DEFAULT_CAMERA_FLY_POSITION:Array<{ label:string, key:number, position:[number, number, number] }> = [
    { label: "K3+0", key: 0, position: [115.0057112, 30.3014441, 378] },
    { label: "K5+800", key: 1, position: [114.9797447, 30.2943497, 350] },
    { label: "K9+150", key: 2, position: [114.9455515, 30.2941977, 400] },
    { label: "K11+200", key: 3, position: [114.9238365, 30.2935548, 343] },
];

export const DEFAULT_CAMERA_FLY_ORIENTATION:{} = {
    heading: Cesium.Math.toRadians(17.70),
    pitch: Cesium.Math.toRadians(-35.12),
    roll: Cesium.Math.toRadians(0.00),
};
