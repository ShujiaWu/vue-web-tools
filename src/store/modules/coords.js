import * as MutationTypes from '../mutation-types'
export default {
  state: {
    longitude: null,
    latitude: null,
    altitude: null,
    speed: null,
    heading: null
  },
  /**
   * store 中的状态的唯一方法
   * 通过store.commit()方法触发，来改变状态值
   */
  mutations: {
    /**
     * 用户地理位置发生改变
     */
    [MutationTypes.COORDS_CHANGE] (state, coords) {
      state.longitude = coords.longitude
      state.latitude = coords.latitude
      state.altitude = coords.altitude
      state.speed = coords.speed
      state.heading = coords.heading
    }
  },
  /**
   * 通过store.dispatch()方法来触发
   */
  actions: {

  },
  getters: {
    // 对外暴露的方法
    // 经纬度信息 longitude-latitude-altitude-speed-heading
    // 没有数据时为null
    getGeoposition (state) {
      return state.longitude + '-' + state.latitude + '-' +
        state.altitude + '-' + state.speed + '-' + state.heading
    }
  }
}
