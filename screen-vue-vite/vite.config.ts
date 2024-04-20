import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import EnvironmentPlugin from 'vite-plugin-environment';
import path from 'path'
import cesium from "vite-plugin-cesium";
import {viteMockServe} from "vite-plugin-mock";
import {vitePluginForArco} from "@arco-plugins/vite-vue";

export default({mode} : {mode: any}) => {
  const env = loadEnv(mode,process.cwd());
  return defineConfig({
    plugins: [
      vue(),
      cesium(),
      EnvironmentPlugin('all'),
      viteMockServe({
        mockPath: 'src/mock',
        watchFiles: true,
        enable: env.VITE_USE_MOCK === 'true',
      }),
      vitePluginForArco({
        style: 'css'
      })
    ],
    server: {
      port: Number(env.VITE_SERVER_PORT),
      proxy: {
        '/api/v1': {
          target: env.VITE_BASE_API,
          changeOrigin: true,
        },
        '/socket': {
          target: env.VITE_BASE_WS,
          changeOrigin: true,
          ws: true,
        }
      }
    },
    assetsInclude: [
      '**/*.glb',
      '**/*.gltf',
      '**/*.bin',
      '**/*.fbx'
    ],
    resolve: {
      alias: { "@": path.join(__dirname, "./src") }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/css/color.scss";',
        }
      }
    },
  })
}
