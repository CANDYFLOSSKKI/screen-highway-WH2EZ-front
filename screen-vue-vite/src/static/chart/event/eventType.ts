import * as echarts from "echarts";
import {eventTypeData} from "@/static/data/event.ts";

export const eventTypeOptions:any = {
    grid: {
        top: '20%',
        bottom: '10%',
        left: '15%',
        right: '15%',
        tooltip: { show: false },
    },
    title: {
        left: '2%',
        top: '2%',
        text: '事件类型分类',
        textStyle: {
            color: '#f0f8ff',
            fontWeight: 'normal',
            fontSize: 16,
        }
    },
    backgroundColor: 'rgba(5,5,5,0.5)',
    legend: { show: false },
    tooltip: {
        trigger: 'item',
        formatter: '{c}%'
    },
    dataset: {
        source: [
            ['事件类型', '事件数'],
            ...eventTypeData,
        ]
    },
    xAxis: {
        show: false,
        splitLine: { show: false },
        axisLabel: {
            color: '#abaeaf'
        }
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            color: '#abaeaf'
        }
    },
    series: [
        {
            type: 'bar',
            showBackground: true,
            barGap: 0.5,
            label: {
                show: true,
                position: 'right',
                formatter: '{@事件数}起',
                color: '#abaeaf',
                distance: 5,
                fontSize: 12,
            },
            itemStyle: {
                color: function(params:any) {
                    const colorList = ['#80FFA5', '#00F3FF', '#3CB2FF', '#8B8BFF', '#FFD200'];
                    const colorListDimMiddle = [
                        'rgba(128, 255, 165, 0.8)',
                        'rgba(0, 243, 255, 0.8)',
                        'rgba(60, 178, 255, 0.8)',
                        'rgba(139, 139, 255, 0.8)',
                        'rgba(255, 210, 0, 0.8)',
                    ];
                    const colorListDimEnd = [
                        'rgba(128, 255, 165, 0.4)',
                        'rgba(0, 243, 255, 0.4)',
                        'rgba(60, 178, 255, 0.4)',
                        'rgba(139, 139, 255, 0.4)',
                        'rgba(255, 210, 0, 0.4)',
                    ];
                    return new echarts.graphic.LinearGradient(
                        1, 0, 0, 0,
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
