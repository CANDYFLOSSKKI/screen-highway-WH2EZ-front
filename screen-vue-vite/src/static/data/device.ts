
export const deviceTimeoutByPositionData:any = [
    ['SEC1', 5, 20],
    ['SEC2', 15, 30],
    ['SEC3', 40, 10],
    ['SEC4', 30, 25],
];

export const deviceSelectDevice:string = "雷达1";
export const deviceTotalNum:number = 40;
export const deviceOnlineNum:number = 25;
export const deviceHighTimeoutNum:number = 10;
export const deviceOfflineNum:number = 12;
export const devicePendingNum:number = 10;
export const deviceAvgTimeout:number = 2888;

export const deviceTableScroll:any = {
    x: 500,
    y: 230,
}

export const deviceTimeoutByTimeData:any = [
    ['14:10', 5],
    ['15:10', 15],
    ['16:10', 25],
    ['17:10', 20],
    ['18:10', 40],
    ['19:10', 30],
];

export const deviceTableData:any = [
    { deviceId: '雷达1', location: 'K1+254', roadDirect: '右侧', state: '正常' },
    { deviceId: '雷达2', location: 'K1+254', roadDirect: '右侧', state: '正常' },
    { deviceId: '雷达3', location: 'K1+254', roadDirect: '右侧', state: '正常' },
    { deviceId: '雷达4', location: 'K1+254', roadDirect: '右侧', state: '正常' },
    { deviceId: '雷达5', location: 'K1+254', roadDirect: '右侧', state: '正常' },
    { deviceId: '雷达6', location: 'K1+254', roadDirect: '右侧', state: '正常' },
    { deviceId: '雷达7', location: 'K1+254', roadDirect: '右侧', state: '正常' },
    { deviceId: '雷达8', location: 'K1+254', roadDirect: '右侧', state: '正常' },
    { deviceId: '雷达9', location: 'K1+254', roadDirect: '右侧', state: '正常' },
    { deviceId: '雷达10', location: 'K1+254', roadDirect: '右侧', state: '正常' },
];

export const deviceCoverageData:any = [
    ['光纤设备', 95],
    ['激光雷达', 30],
    ['微波雷达', 95],
    ['摄像头', 20],
    ['可变情报板', 10],
    ['其他设备', 95],
];

export const deviceDistributionData = [
    [0, 0, 4], [0, 1,  1], [0, 2,  1], [0, 3,  3], [0, 4,  4], [0, 5, 6], [0, 6, 4], [0, 7,  4], [0, 8, 3], [0, 9, 3], [0, 10, 2], [0, 11, 5],
    [1, 0, 2], [1, 1,  6], [1, 2,  9], [1, 3, 11], [1, 4,  6], [1, 5, 7], [1, 6, 8], [1, 7, 12], [1, 8, 5], [1, 9, 5], [1, 10, 7], [1, 11, 2],
    [2, 0, 1], [2, 1,  9], [2, 2,  8], [2, 3, 10], [2, 4,  6], [2, 5, 5], [2, 6, 5], [2, 7,  5], [2, 8, 7], [2, 9, 4], [2, 10, 2], [2, 11, 4],
    [3, 0, 7], [3, 1, 14], [3, 2, 13], [3, 3, 12], [3, 4,  9], [3, 5, 5], [3, 6, 5], [3, 7, 10], [3, 8, 6], [3, 9, 4], [3, 10, 4], [3, 11, 1],
    [4, 0, 2], [4, 1,  4], [4, 2,  4], [4, 3, 14], [4, 4, 12], [4, 5, 1], [4, 6, 8], [4, 7,  5], [4, 8, 3], [4, 9, 7], [4, 10, 3], [4, 11, 0],
    [5, 0, 5], [5, 1, 10], [5, 2,  5], [5, 3,  7], [5, 4, 11], [5, 5, 6], [5, 6, 0], [5, 7,  5], [5, 8, 3], [5, 9, 4], [5, 10, 2], [5, 11, 0]
].map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});
