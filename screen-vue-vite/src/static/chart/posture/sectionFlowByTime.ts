import * as echarts from "echarts";
import {postureSectionFlowByTimeData, postureSelectSection} from "@/static/data/posture.ts";

export const postureSectionFlowByTimeOptions:any = {
    grid: {
        top: '25%',
        bottom: '15%',
        left: '10%',
        right: '5%',
    },
    title: {
        left: '2%',
        top: '2%',
        text: '断面流量分析',
        textStyle: {
            color: '#f0f8ff',
            fontWeight: 'normal',
            fontSize: 16,
        }
    },
    backgroundColor: 'rgba(5,5,5,0.5)',
    legend: { show: false },
    tooltip: {},
    dataset: {
        source: [
            ['时间', postureSelectSection],
            ...postureSectionFlowByTimeData,
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
            },
        }
    ]
}
