import * as echarts from "echarts";
import {deviceCoverageData} from "@/static/data/device.ts";

export const deviceCoverageOptions:any = {
    grid: {
        top: '25%',
        bottom: '15%',
        left: '10%',
        right: '10%',
        tooltip: { show: false },
    },
    title: {
        left: '2%',
        top: '2%',
        text: '设备覆盖情况',
        textStyle: {
            color: '#f0f8ff',
            fontWeight: 'normal',
            fontSize: 16,
        }
    },
    backgroundColor: 'rgba(5,5,5,0.5)',
    legend: { show: false },
    tooltip: {
        trigger: 'axis',
        formatter: '{c}%'
    },
    dataset: {
        source: [
            ['设备类型', '覆盖率'],
            ...deviceCoverageData,
        ]
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#abaeaf',
            fontSize: 11,
            interval: 0,
            rotate: 0,
        }
    },
    yAxis: {
        splitLine: { show: false },
        axisLabel: { color: '#abaeaf' },
        max: 100
    },
    series: [
        {
            type: 'bar',
            showBackground: true,
            label: {
                show: true,
                position: 'top',
                formatter: '{@覆盖率}%',
                color: '#abaeaf',
                distance: 5,
                fontSize: 12,
            },
            itemStyle: {
                color: function(params:any) {
                    const colorList = ['#80FFA5', '#00F3FF', '#3CB2FF', '#8B8BFF', '#FFD200','#81E563'];
                    const colorListDimMiddle = [
                        'rgba(128, 255, 165, 0.8)',
                        'rgba(0, 243, 255, 0.8)',
                        'rgba(60, 178, 255, 0.8)',
                        'rgba(139, 139, 255, 0.8)',
                        'rgba(255, 210, 0, 0.8)',
                        'rgba(129, 229, 99, 0.8)'
                    ];
                    const colorListDimEnd = [
                        'rgba(128, 255, 165, 0.2)',
                        'rgba(0, 243, 255, 0.2)',
                        'rgba(60, 178, 255, 0.2)',
                        'rgba(139, 139, 255, 0.2)',
                        'rgba(255, 210, 0, 0.2)',
                        'rgba(129, 229, 99, 0.2)'
                    ];
                    return new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: colorList[params.dataIndex]},
                            {offset: 0.5, color: colorListDimMiddle[params.dataIndex]},
                            {offset: 1, color: colorListDimEnd[params.dataIndex]}
                        ]
                    );
                }
            }
        }
    ]
}
