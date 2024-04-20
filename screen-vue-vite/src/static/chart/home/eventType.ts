import {homeEventTypeData} from "@/static/data/home.ts";

export const homeEventTypeOptions:any = {
    legend: {
        show: false
    },
    series: [
        {
            type: 'pie',
            z: 2,
            radius: ['60%', '68%'],
            avoidLabelOverlap: false,
            padAngle: 3,
            width: 320,
            height: 220,
            selectedMode: 'single',
            itemStyle: {
                borderColor: 'rgba(93,88,88,0.5)',
                borderWidth: 2,
                borderRadius: 2,
            },
            label: {
                formatter: '{b}\n{c}起',
                color: 'aliceblue',
                fontSize: 14
            },
            data: [
                ...homeEventTypeData
            ]
        },
        {
            type: 'pie',
            z: 1,
            radius: ['38%', '55%'],
            avoidLabelOverlap: false,
            padAngle: 3,
            width: 320,
            height: 220,
            itemStyle: {
                borderColor: 'rgba(93,88,88,0.5)',
                borderWidth: 2,
                borderRadius: 2,
                opacity: 0.55
            },
            label: {
                show: false
            },
            data: [
                ...homeEventTypeData
            ]
        }
    ]
};
