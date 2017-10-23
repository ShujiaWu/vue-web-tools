import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store/index'
import iView from 'iview'
import * as MutationsType from '@/store/mutation-types'
// import UserService from '@/pages/account/common/service'

Vue.use(Router)

// let routesMap = {}
// let getRouttes = (object) => {
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       let element = object[key]
//       routesMap[element.name] = element
//       if (element.children) {
//         getRouttes(element.children)
//       }
//     }
//   }
// }
// getRouttes(routes)
// store.commit(MutationsType.ROUTES_MAP, routesMap)

let router = new Router({
  routes: routes
})

router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start()
  console.log(`离开页面: ${from.path}`)
  switch (to.name) {
    case 'Home':
      next('/dashboard')
      break
    default:
      // 处理完后必须调用next()
      iView.LoadingBar.start()
      next()
      break
  }
})

router.afterEach(route => {
  iView.LoadingBar.finish()
  console.log(`成功浏览到: 【${route.name}】 ${route.path}`)

  // 面包屑
  let breadcurmb = []
  // 如果不是主页，则加入主页
  if (route.name !== 'Dashboard') {
    breadcurmb.push({
      meta: {
        title: '主页'
      },
      name: 'Home',
      path: '/'
    })
  }
  // 遍历页面匹配路由，加入到面包屑中
  route.matched.forEach(function (element) {
    // console.log(element)
    if (!element.meta.hidden) {
      breadcurmb.push({
        meta: element.meta,
        name: element.name,
        path: element.meta.disabled ? undefined : (element.path === '') ? '/' : element.path
      })
    }
  }, this)

  store.commit(MutationsType.PAGE_BREADCRUMB_CHANGE, breadcurmb)
})

export default router
