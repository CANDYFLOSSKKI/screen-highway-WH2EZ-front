import * as echarts from "echarts";
import {postureGeneralFlowData} from "@/static/data/posture.ts";

export const postureGeneralFlowOptions:any = {
    grid: {
        top: '25%',
        bottom: '15%',
        left: '10%',
        right: '5%',
    },
    title: {
        left: '2%',
        top: '2%',
        text: '总体流量趋势',
        textStyle: {
            color: '#f0f8ff',
            fontWeight: 'normal',
            fontSize: 16,
        }
    },
    backgroundColor: 'rgba(5,5,5,0.5)',
    legend: {
        left: '72%',
        textStyle: { color: '#abaeaf' }
    },
    tooltip: {},
    dataset: {
        source: [
            ['时间', '武汉至鄂州方向', '鄂州至武汉方向'],
            ...postureGeneralFlowData,
        ]
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#abaeaf',
            fontSize: 8,
            interval: 0,
            rotate: 30,
        }
    },
    yAxis: {
        splitLine: { show: false },
        axisLabel: { color: '#abaeaf' }
    },
    series: [
        {
            type: 'line',
            smooth: true,
            stack: 'Total',
            emphasis: {
                focus: 'series'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#5C7BD9'},
                        {offset: 0.5, color: 'rgba(92, 123, 217, 0.8)'},
                        {offset: 1, color: 'rgba(92, 123, 217, 0.2)'}
                    ]
                )
            }
        },
        {
            type: 'line',
            smooth: true,
            stack: 'Total',
            emphasis: {
                focus: 'series'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#9FE080'},
                        {offset: 0.5, color: 'rgba(159, 224, 128, 0.8)'},
                        {offset: 1, color: 'rgba(159, 224, 128, 0.2)'}
                    ]
                )
            }
        },
    ]
};
