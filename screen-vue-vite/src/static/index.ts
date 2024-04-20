import {homeCarFlowOptions} from "@/static/chart/home/carFlow.ts";
import {homeCarSpeedOptions} from "@/static/chart/home/carSpeed.ts";
import {homeCarTypeOptions} from "@/static/chart/home/carType.ts";
import {homeEventDistributionOptions} from "@/static/chart/home/eventDistribution.ts";
import {homeEventTypeOptions} from "@/static/chart/home/eventType.ts";
import {radarFlowOptions} from "@/static/chart/radar/radarFlow.ts";
import {radarSpeedOptions} from "@/static/chart/radar/radarSpeed.ts";
import {radarTimeoutOptions} from "@/static/chart/radar/radarTimeout.ts";
import {deviceCoverageOptions} from "@/static/chart/device/deviceCoverage.ts";
import {deviceDistributionOptions} from "@/static/chart/device/deviceDistribution.ts";
import {deviceTimeoutByPositionOptions} from "@/static/chart/device/deviceTimeoutByPosition.ts";
import {deviceTimeoutByTimeOptions} from "@/static/chart/device/deviceTimeoutByTime.ts";
import {eventDistributionOptions} from "@/static/chart/event/eventDistribution.ts";
import {eventTypeOptions} from "@/static/chart/event/eventType.ts";
import {postureGeneralFlowOptions} from "@/static/chart/posture/generalFlow.ts";
import {postureGeneralSpeedOptions} from "@/static/chart/posture/generalSpeed.ts";
import {postureGeneralCongestionOptions} from "@/static/chart/posture/generalCongestion.ts";
import {postureRealTimeSpeedToEZOptions} from "@/static/chart/posture/realTimeSpeedToEZ.ts";
import {postureRealTimeSpeedToWHOptions} from "@/static/chart/posture/realTimeSpeedToWH.ts";
import {postureSectionFlowByTimeOptions} from "@/static/chart/posture/sectionFlowByTime.ts";
import {postureSectionFlowByPositionOptions} from "@/static/chart/posture/sectionFlowByPosition.ts";
import {postureSectionSpeedByPositionOptions} from "@/static/chart/posture/sectionSpeedByPosition.ts";
import {postureSectionSpeedByTimeOptions} from "@/static/chart/posture/sectionSpeedByTime.ts";
import {postureSectionCongestionByPositionOptions} from "@/static/chart/posture/sectionCongestionByPosition.ts";
import {postureSectionCongestionByTimeOptions} from "@/static/chart/posture/sectionCongestionByTime.ts";
import {postureRealTimeFlowDistributionOptions} from "@/static/chart/posture/realTimeFlowDistribution.ts";

export const MAIN_VIEW_SHOW_NONE:number = 0;
export const MAIN_VIEW_SHOW_HOME:number = 1;
export const MAIN_VIEW_SHOW_TRACK:number = 2;
export const MAIN_VIEW_SHOW_RADAR:number = 3;
export const MAIN_VIEW_SHOW_POSTURE:number = 4;
export const MAIN_VIEW_SHOW_POSTURE_ALL:number = 5;
export const MAIN_VIEW_SHOW_DEVICE:number = 6;
export const MAIN_VIEW_SHOW_EVENT:number = 7;
export const SUB_VIEW_SHOW_NONE:number = 0;
export const SUB_VIEW_SHOW_TRACK_QUERY:number = 1;
export const SUB_VIEW_SHOW_EVENT_PROCESS:number = 2;
export const TOOL_VIEW_SHOW_ON:number = 0;
export const TOOL_VIEW_SHOW_OFF:number = 1;
export const POSTURE_TAB_VIEW_FLOW:number = 1;
export const POSTURE_TAB_VIEW_SPEED:number = 2;
export const POSTURE_TAB_VIEW_CONGESTION:number = 3;
export const SOCKET_STATUS_CONNECTING:number = 0;
export const SOCKET_STATUS_OPEN:number = 1;
export const SOCKET_STATUS_CLOSING:number = 2;
export const SOCKET_STATUS_CLOSED:number = 3;
export const DIRECTION_ALL:number = 0;
export const DIRECTION_TO_EZ:number = 1;
export const DIRECTION_TO_WH:number = 2;
export const PERIOD_TODAY:number = 0;
export const PERIOD_WEEK:number = 1;
export const PERIOD_MONTH:number = 2;
export const SOCKET_STATUS_OUT_OPEN:number = 1;
export const SOCKET_STATUS_OUT_CLOSE:number = -1;
export const SOCKET_STATUS_OUT_BUSY:number = 0;
export const EVENT_STATUS_PENDING:number = 0;
export const EVENT_STATUS_PROGRESS:number = 1;

export {
    homeCarFlowOptions,
    homeCarSpeedOptions,
    homeCarTypeOptions,
    homeEventTypeOptions,
    homeEventDistributionOptions,
    radarFlowOptions,
    radarSpeedOptions,
    radarTimeoutOptions,
    deviceCoverageOptions,
    deviceDistributionOptions,
    deviceTimeoutByPositionOptions,
    deviceTimeoutByTimeOptions,
    eventDistributionOptions,
    eventTypeOptions,
    postureGeneralSpeedOptions,
    postureGeneralFlowOptions,
    postureGeneralCongestionOptions,
    postureRealTimeSpeedToEZOptions,
    postureRealTimeSpeedToWHOptions,
    postureSectionFlowByPositionOptions,
    postureSectionFlowByTimeOptions,
    postureSectionSpeedByPositionOptions,
    postureSectionCongestionByTimeOptions,
    postureSectionCongestionByPositionOptions,
    postureSectionSpeedByTimeOptions,
    postureRealTimeFlowDistributionOptions,
}
