
export const postureRealTimeSpeedToEZOptions:any ={
    tooltip:{},
    grid: {
        top: 1,
        bottom: 1,
        left: 1,
        right: 1,
    },
    series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            clockwise: true,
            min: 0,
            max: 160,
            splitNumber: 4,
            center: ['50%', '90%'],
            radius: '165%',
            axisLine: {
                lineStyle: {
                    width: 12,
                    color: [
                        [0.3, '#67e0e3'],
                        [0.7, '#37a2da'],
                        [1, '#fd666d']
                    ]
                }
            },
            pointer: {
                width: 4,
                itemStyle: {
                    color: 'auto'
                }
            },
            axisTick: {
                distance: -4,
                length: 4,
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            },
            splitLine: {
                distance: -12,
                length: 12,
                lineStyle: {
                    color: '#fff',
                    width: 3
                }
            },
            axisLabel: {
                color: 'inherit',
                distance: 20,
                fontSize: 12
            },
            detail: {
                show: false
            },
            data: [
                {
                    value: 79.5,
                }
            ]
        }
    ]
}
