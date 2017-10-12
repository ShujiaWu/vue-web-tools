// import UserService from '@/pages/account/common/service'
import * as ActionTypes from '../action-types'
import * as MutationTypes from '../mutation-types'
export default {
  state: {
    id: undefined,
    email: undefined
  },
  /**
   * store 中的状态的唯一方法
   * 通过store.commit()方法触发，来改变状态值
   */
  mutations: {
    // 存储用户信息
    [MutationTypes.USER_SAVE_INFO] (state, playload) {
      state = Object.assign(state, playload)
    },
    // 清理用户信息
    [MutationTypes.USER_CLEAR_INFO] (state, playload) {
      state.id = undefined
      state.email = undefined
    }
  },
  /**
   * 通过store.dispatch()方法来触发
   */
  actions: {
    /**
     * 用户登录成功，清理路由数据，并获取用户基础信息
     */
    [ActionTypes.USER_LOGIN] (context) {
      context.commit(MutationTypes.ROUTES_CLEAR_PREV_PAGE)
      context.commit(MutationTypes.PAGE_PERMISSION_CLEAR)
      // context.commit(MutationTypes.CONSTANTS_CLEAR_ALL)
      // 获取用户基础信息
      context.dispatch(ActionTypes.USER_GET_INFO)
    },
    /**
     * 用户登出
     */
    [ActionTypes.USER_LOGOUT] (context) {
      context.commit(MutationTypes.ROUTES_CLEAR_PREV_PAGE)
      // context.commit(MutationTypes.CONSTANTS_CLEAR_ALL)
      // 清理用户基础信息
      context.commit(MutationTypes.USER_CLEAR_INFO)
    },
    /**
     * 获取用户基础信息
     */
    [ActionTypes.USER_GET_INFO] (context) {
      // 获取用户基础信息
      // UserService.getBaseInfo().then(result => {
      //   if (result.isSuccess) {
      //     // 获取成功
      //     context.commit(MutationTypes.USER_SAVE_INFO, result.data)
      //   } else {
      //     // 获取失败
      //     console.log('【Store】获取用户基础数据失败，', result.message)
      //   }
      // })
    }
  }
}
