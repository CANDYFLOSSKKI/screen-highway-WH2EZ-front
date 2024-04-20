import * as echarts from "echarts";
import {homeCarTypeData} from "@/static/data/home.ts";

export const homeCarTypeOptions:any = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    title: {
        left: '2%',
        top: '2%',
        text: '车辆构成比例',
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
    grid: {
        top: '20%',
        left: '5%',
        right: '10%',
        bottom: '10%',
        containLabel: true
    },
    dataset: {
        source: [
            ['车辆类型', '鄂州至武汉方向', '武汉至鄂州方向'],
            ...homeCarTypeData,
        ]
    },
    xAxis: {
        type: 'value',
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
            stack: 'total',
            emphasis: {
                focus: 'series'
            },
            color: new echarts.graphic.LinearGradient(
                1, 0, 0, 0,
                [
                    {offset: 0, color: '#5C7BD9'},
                    {offset: 0.5, color: 'rgba(92, 123, 217, 0.8)'},
                    {offset: 1, color: 'rgba(92, 123, 217, 0.4)'}
                ]
            )
        },
        {
            type: 'bar',
            stack: 'total',
            emphasis: {
                focus: 'series'
            },
            color: new echarts.graphic.LinearGradient(
                1, 0, 0, 0,
                [
                    {offset: 0, color: '#9FE080'},
                    {offset: 0.5, color: 'rgba(159, 224, 128, 0.8)'},
                    {offset: 1, color: 'rgba(159, 224, 128, 0.4)'}
                ]
            )
        },
    ]
}
