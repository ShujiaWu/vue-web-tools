import * as MutationTypes from '../mutation-types'
// import * as ActionTypes from '../action-types'
export default {
  state: {
    breadcurmb: [],
    permissions: {} // 页面权限
  },
  /**
   * store 中的状态的唯一方法
   * 通过store.commit()方法触发，来改变状态值
   */
  mutations: {
    /**
     * 面包屑改变
     */
    [MutationTypes.PAGE_BREADCRUMB_CHANGE] (state, status) {
      state.breadcurmb.splice(0, state.breadcurmb.length, ...status)
    },
    /**
     * 保存页面权限
     */
    [MutationTypes.PAGE_PERMISSION_SAVE] (state, permissions) {
      Object.assign(state.permissions, permissions)
    },
    /**
     * 清理页面权限 
     */
    [MutationTypes.PAGE_PERMISSION_CLEAR] (state, permissions) {
      for (var key in state.permissions) {
        if (state.permissions.hasOwnProperty(key)) {
          state.permissions[key] = undefined
        }
      }
    }
  },
  /**
   * 通过store.dispatch()方法来触发
   */
  actions: {
  },
  /**
   * 对外暴露的方法
   */
  getters: {

  }
}
