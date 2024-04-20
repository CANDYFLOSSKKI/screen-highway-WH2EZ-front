<template>
  <div id="cesiumContainer" />
</template>

<script setup lang="ts">
import * as Cesium from "cesium";
import {onMounted, ref} from "vue";
import {
  CESIUM_ACCESS_TOKEN, CESIUM_VIEWER_INIT_OPTIONS,
  DEFAULT_CAMERA_DESTINATION, DEFAULT_CAMERA_FLY_ORIENTATION, DEFAULT_CAMERA_FLY_POSITION,
  DEFAULT_CAMERA_ORIENTATION,
  DEFAULT_ROAD_HPR,
  DEFAULT_ROAD_POSITION, URI_ROAD_WITH_SURFACE, URI_ROAD_WITHOUT_SURFACE
} from "@/static/cesium.ts";
import {AlertViewEventBus} from "@/util/mitt.ts";
Cesium.Ion.defaultAccessToken = CESIUM_ACCESS_TOKEN;
const viewer = ref<Cesium.Viewer>();
const scene = ref<Cesium.Scene>();
const roadWithSurface = ref<Cesium.Entity>();
const roadWithoutSurface = ref<Cesium.Entity>();

function initCesiumFramework(){
  viewer.value = new Cesium.Viewer("cesiumContainer", CESIUM_VIEWER_INIT_OPTIONS);
  scene.value = viewer.value!.scene;
  scene.value!.globe.depthTestAgainstTerrain = true;
  viewer.value!.entities.removeAll();
  roadWithSurface.value = viewer.value!.entities.add({
    id: "roadWithSurface",
    position: DEFAULT_ROAD_POSITION,
    orientation: Cesium.Transforms.headingPitchRollQuaternion(DEFAULT_ROAD_POSITION, DEFAULT_ROAD_HPR),
    model: { uri: URI_ROAD_WITH_SURFACE },
  })
  roadWithoutSurface.value = viewer.value!.entities.add({
    id: "roadWithoutSurface",
    position: DEFAULT_ROAD_POSITION,
    orientation: Cesium.Transforms.headingPitchRollQuaternion(DEFAULT_ROAD_POSITION, DEFAULT_ROAD_HPR),
    model: { uri: URI_ROAD_WITHOUT_SURFACE },
  });
  initCesiumSceneCamera();
  initScreenClickEventHandler();
}

function initCesiumSceneCamera() {
  scene.value!.camera.flyTo({
    destination: DEFAULT_CAMERA_DESTINATION,
    orientation: DEFAULT_CAMERA_ORIENTATION,
  })
}

function initScreenClickEventHandler() {
  let canvas = viewer.value!.scene.canvas;
  let handler = new Cesium.ScreenSpaceEventHandler(canvas);
  handler.setInputAction( function (lclickment:any) {
    let ellipsoid = scene.value!.globe.ellipsoid;
    let cartesian = viewer.value!.scene.pickPosition(lclickment.position);
    let camera = viewer.value!.camera;
    if (cartesian) {
      let cartographic = ellipsoid.cartesianToCartographic(cartesian);
      let lon = Cesium.Math.toDegrees(cartographic.longitude).toFixed(7);
      let lat = Cesium.Math.toDegrees(cartographic.latitude).toFixed(7);
      let height = camera.positionCartographic.height.toFixed(0);
      let heading = Cesium.Math.toDegrees(camera.heading).toFixed(2);   // 围绕Z轴旋转
      let pitch = Cesium.Math.toDegrees(camera.pitch).toFixed(2);       // 围绕Y轴旋转
      let roll = Cesium.Math.toDegrees(camera.roll).toFixed(2);         // 围绕X轴旋转
      console.log(`目标位置与视角高度:\nlon:\t\t${lon}\nlat:\t\t${lat}\nheight:\t\t${height}\nheading:\t${heading}\npitch:\t\t${pitch}\nroll:\t\t${roll}`);
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
}

AlertViewEventBus.on('viewPoint', async (key) => {
  const keyValue = key as number;
  scene.value!.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(...DEFAULT_CAMERA_FLY_POSITION[keyValue].position),
    orientation: DEFAULT_CAMERA_FLY_ORIENTATION,
  })
});

onMounted(() => {
  initCesiumFramework();
})
</script>

<style scoped>
@import "@/css/data.scss";
@import "@/css/frame.scss";
@import "@/css/overlap.scss";
@import "@/css/view.scss";
</style>
