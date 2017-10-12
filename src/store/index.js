import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import routes from './modules/routes'
import page from './modules/page'
import coords from './modules/coords'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    routes, page, coords, user
  }
})
