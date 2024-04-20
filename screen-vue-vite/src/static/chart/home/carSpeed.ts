import * as echarts from "echarts";
import {homeCarSpeedData} from "@/static/data/home.ts";

export const homeCarSpeedOptions:any = {
    grid: {
        top: '25%',
        bottom: '15%',
        left: '10%',
        right: '5%',
    },
    title: {
        left: '2%',
        top: '2%',
        text: '运行速度监测',
        textStyle: {
            color: '#f0f8ff',
            fontWeight: 'normal',
            fontSize: 16,
        }
    },
    legend: {
        left: '72%',
        textStyle: { color: '#abaeaf' }
    },
    tooltip: {},
    dataset: {
        source: [
            ['时间', '武汉至鄂州方向', '鄂州至武汉方向'],
            ...homeCarSpeedData,
        ]
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#abaeaf',
            fontSize: 10,
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
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#5C7BD9'},
                        {offset: 0.5, color: 'rgba(92, 123, 217, 0.8)'},
                        {offset: 1, color: 'rgba(92, 123, 217, 0.2)'}
                    ]
                )
            },
            emphasis: {
                focus: 'series'
            }
        },
        {
            type: 'line',
            smooth: true,
            stack: 'Total',
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#9FE080'},
                        {offset: 0.5, color: 'rgba(159, 224, 128, 0.8)'},
                        {offset: 1, color: 'rgba(159, 224, 128, 0.2)'}
                    ]
                )
            },
            emphasis: {
                focus: 'series'
            }
        },
    ]
}
