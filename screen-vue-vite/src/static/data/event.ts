
export const EVENT_TYPE_DATA:Array<{ name:string, key:number }> = [
    { name: '违停', key: 1 },
    { name: '逆行', key: 2 },
    { name: '超速', key: 3 },
    { name: '慢速', key: 4 },
    { name: '占道', key: 5 },
];


export const eventDistributionData:any = [
    ['K5+100', 0, 0],
    ['K6+100', 9, 6],
    ['K7+100', 0, 0],
    ['K8+100', 9, 7],
    ['K9+100', 0, 0],
    ['K10+100', 8, 4],
    ['K11+100', 0, 0],
    ['K12+100', 8, 5],
];

export const eventProcessTableData:any = [
    { carId: '鄂A335H1', type: '货车', speed: 30, position: 'K2+150'},
    { carId: '鄂A335H1', type: '货车', speed: 30, position: 'K2+150'},
    { carId: '鄂A335H1', type: '货车', speed: 30, position: 'K2+150'},
    { carId: '鄂A335H1', type: '货车', speed: 30, position: 'K2+150'},
    { carId: '鄂A335H1', type: '货车', speed: 30, position: 'K2+150'},
    { carId: '鄂A335H1', type: '货车', speed: 30, position: 'K2+150'},
    { carId: '鄂A335H1', type: '货车', speed: 30, position: 'K2+150'},
];

export const eventProcessTablePagination:any = {
    pageSize: 5,
    pageItemStyle: {
        backgroundColor: 'grey',
    },
    activePageItemStyle: {
        backgroundColor: 'aliceblue',
        color: 'black',
    },
};

export const eventTypeData:any = [
    ['违停', 15],
    ['逆行', 5],
    ['超速', 10],
    ['低速', 3],
    ['占道', 12],
];

export const eventDescriptionData: {
    type: string,
    time: string,
    position: string,
    status: string,
    process:string,
} = {
    type: "占用应急车道",
    time: "17:20",
    position: "K2+150",
    status: "处理中",
    process: "派遣相关人员",
}

export const eventProcessSelectData:any = [
    "远程通知当事车辆",
    "派遣相关人员",
    "通知执法人员",
];

