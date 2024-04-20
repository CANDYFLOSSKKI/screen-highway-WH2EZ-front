import { createApp } from 'vue'
import App from '@/App.vue'
import {router} from '@/router'
import {pinia} from '@/store'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'
import '@/css/app.css'

async function bootstrap(){
    const app = createApp(App);
    app.use(router);
    app.use(pinia);
    app.use(ArcoVue);
    app.use(ArcoVueIcon);
    app.component("HomePage", () => import('@/component/home/index.vue'));
    app.component("HomePageTraffic", () => import('@/component/home/home-traffic/index.vue'));
    app.component("AnimeView", () => import('@/component/anime/index.vue'));
    app.component('TrackAnalyze', () => import('@/component/track/index.vue'));
    app.component('TrackAnalyzeQuery', () => import('@/component/track/track-query/index.vue'));
    app.component('RadarAnalyze', () => import('@/component/radar/index.vue'));
    app.component('PostureAnalyze', () => import('@/component/posture/index.vue'));
    app.component('InfoMatter', () => import('@/component/matter/index.vue'));
    app.component('DeviceManage', () => import('@/component/device/index.vue'));
    app.component('DeviceManageTable', () => import('@/component/device/device-table/index.vue'));
    app.component('EventManage', () => import('@/component/event/index.vue'));
    app.component('EventManageProcess', () => import('@/component/event/event-process/index.vue'));
    app.component('ViewPoint', () => import('@/component/viewpoint/index.vue'));
    app.component("PostureAnalyzeFlow", () => import('@/component/posture/posture-flow/index.vue'));
    app.component("PostureAnalyzeSpeed", () => import('@/component/posture/posture-speed/index.vue'));
    app.component("PostureAnalyzeCongestion", () => import('@/component/posture/posture-congestion/index.vue'));
    app.component("PostureAnalyzeAll", () => import('@/component/posture/posture-all/index.vue'));
    app.mount('#app');
}

bootstrap().then(() => {})
