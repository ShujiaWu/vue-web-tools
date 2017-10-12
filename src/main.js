// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import iView from 'iview'
import axios from './backend/index'
import filters from './filters/index'
// import * as MutationType from './store/mutation-types'
// import * as ActionType from './store/action-types'
import SessionStorage from '@/utils/sessionStorage'
import LocalStorage from '@/utils/localStorage'

// import Viewer from 'v-viewer'

// 样式
import 'iview/dist/styles/iview.css' // 使用 CSS
import '@/assets/styles/style.css'
import '@/assets/styles/common.css'

Vue.config.productionTip = false

// 使用iView
Vue.use(iView)

// Vue.use(Viewer)

// 将axios注册成为Vue原型属性
Vue.prototype.http = axios

Vue.prototype.$SessionStorage = SessionStorage
Vue.prototype.$LocalStorage = LocalStorage

// 获取地理位置信息
// if (navigator.geolocation) {
//   navigator.geolocation.watchPosition(position => {
//     store.commit(MutationType.COORDS_CHANGE, {
//       longitude: position.coords.longitude,
//       latitude: position.coords.latitude,
//       altitude: position.coords.altitude,
//       speed: position.coords.speed,
//       heading: position.coords.heading
//     })
//   })
// } else {
//   console.log('该浏览器不支持获取地理位置')
// }

for (var key in filters) {
  if (filters.hasOwnProperty(key)) {
    Vue.filter(key, filters[key])
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
