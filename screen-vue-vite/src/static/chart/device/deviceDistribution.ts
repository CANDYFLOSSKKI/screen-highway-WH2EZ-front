import {deviceDistributionData} from "@/static/data/device.ts";

export const deviceDistributionOptions:any = {
    tooltip: {
        position: 'top'
    },
    grid: {
        top: '6%',
        bottom: '12%',
        left: '16%',
        right: '2%',
        tooltip: { show: false },
    },
    xAxis: {
        type: 'category',
        data: ['K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'K10', 'K11', 'K12'],
        axisLabel: { color: '#abaeaf' },
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: ['光纤设备', '激光雷达', '微波雷达', '摄像头', '可变情报板', '其他设备'],
        axisLabel: { color: '#abaeaf' },
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 0,
        max: 10,
        show: false,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%'
    },
    series: [
        {
            type: 'heatmap',
            data: deviceDistributionData,
            label: {
                show: true
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
