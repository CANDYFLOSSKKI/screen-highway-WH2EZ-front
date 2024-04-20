import {postureRealTimeFlowDistributionData} from "@/static/data/posture.ts";

export const postureRealTimeFlowDistributionOptions:any = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        top: '20%',
        left: "2%",
        orient: 'vertical',
        textStyle: {
            color: 'aliceblue',
        },
    },
    backgroundColor: 'rgba(5,5,5,0.5)',
    title: {
        left: '2%',
        top: '2%',
        text: '流量构成',
        textStyle: {
            color: '#f0f8ff',
            fontWeight: 'normal',
            fontSize: 16,
        }
    },
    series: [
        {
            type: 'pie',
            avoidLabelOverlap: false,
            width: 250,
            height: 170,
            selectedMode: false,
            center: [ "82%", "44%" ],
            itemStyle: {
                borderColor: 'rgba(93,88,88,0.5)',
                borderWidth: 1,
                borderRadius: 2,
            },
            label: {
                formatter: (param:any) => `${Math.floor(param.data.value)}%`,
                color: 'aliceblue',
                fontSize: 12,
            },
            labelLine: {
                length: 2,
            },
            data: [
                ...postureRealTimeFlowDistributionData
            ]
        }
    ]
};
