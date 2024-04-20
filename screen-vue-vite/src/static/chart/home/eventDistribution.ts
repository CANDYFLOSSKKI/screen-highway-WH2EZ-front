import * as echarts from "echarts";
import {homeEventDistributionData} from "@/static/data/home.ts";

export const homeEventDistributionOptions:any = {
    grid: {
        top: '25%',
        bottom: '10%',
        left: '10%',
        right: '10%',
    },
    title: {
        left: '2%',
        top: '2%',
        text: '事件分布统计',
        textStyle: {
            color: '#f0f8ff',
            fontWeight: 'normal',
            fontSize: 16,
        }
    },
    legend: { show: false },
    tooltip: {},
    dataset: {
        source: [
            ['断面区间', '事件数'],
            ...homeEventDistributionData,
        ]
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#abaeaf',
            fontSize: 13,
            interval: 0,
            rotate: 0,
        }
    },
    yAxis: {
        type: 'value',
        splitLine: { show: false },
        axisLabel: { color: '#abaeaf' },
    },
    series: [
        {
            type: 'bar',
            z: 1,
            showBackground: true,
            backgroundStyle: {
                color: '#595A5A'
            },
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#7EBBDE'},
                        {offset: 0.5, color: 'rgba(126, 187, 222, 0.8)'},
                        {offset: 1, color: 'rgba(126, 187, 222, 0.2)'}
                    ]
                ),
                borderColor: '#595A5A',
                borderWidth: 3,
                borderRadius: 1,
            },
        }
    ]
}
