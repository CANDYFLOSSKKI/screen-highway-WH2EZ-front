export const radarDeviceSelectData:any = [
    {
        value: 'laser',
        label: '激光雷达',
        children: [
            { value: '1', label: '上行' },
            { value: '2', label: '下行' }
        ]
    },
    {
        value: 'wave',
        label: '微波雷达',
        children: [
            {
                value: '1',
                label: '上行',
                children: [
                    { value: 'A444E1AF-2FF6-4ECB-A194-A44C5C24DE48', label: 'A444E1AF-2FF6-4ECB-A194-A44C5C24DE48' }
                ]
            },
            {
                value: '2',
                label: '下行',
                children: [
                    { value: '2C8F2AF2-C9EB-4208-8124-45383FE96878', label: '2C8F2AF2-C9EB-4208-8124-45383FE96878' }
                ]
            }
        ]
    }
]

export const radarFlowData:any = [
    ['14:10', 35, 30],
    ['14:20', 25, 25],
    ['14:30', 30, 40],
    ['14:40', 25, 60],
    ['14:50', 40, 35],
];

export const radarSpeedData:any = [
    ['14:10', 35, 30],
    ['14:20', 25, 25],
    ['14:30', 30, 40],
    ['14:40', 25, 60],
    ['14:50', 40, 35],
];

export const radarTimeoutData:any = [
    ['14:10', 35, 30],
    ['14:20', 25, 25],
    ['14:30', 30, 40],
    ['14:40', 25, 60],
    ['14:50', 40, 35],
];
