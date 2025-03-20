const { defineConfig } = require('@vue/cli-service')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'BIBLE GROUPS',
    themeColor: '#942EFB',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#fff',

    // Workbox 플러그인 설정
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // 서비스 워커 파일의 위치
      swSrc: 'src/service-worker.js',
      // 서비스 워커가 제어할 범위
      exclude: [/\.map$/, /_redirects/],
    },

    // 아이콘 설정
    iconPaths: {
      favicon16: 'images/icons/favicon-16x16.png',
      appleTouchIcon: 'images/icons/icon-152x152.png',
      msTileImage: 'images/icons/icon-144x144.png'
    }
  },
  
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },

  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      args[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = JSON.stringify(false);
      return args;
    });

    // HtmlWebpackPlugin 타이틀 설정 추가
    config.plugin('html').tap(args => {
      args[0].title = 'BIBLE GROUPS';
      return args;
    });
  }
})
