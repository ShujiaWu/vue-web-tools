export default [
  {
    path: '/user-assets/did-car/list/all',
    name: 'UserAssetsDidCarAllList',
    meta: {
      title: '提车查询'
    },
    component: resolve => require(['@/pages/user-assets/did-car/all-list/List'], resolve)
  },
  {
    path: '/user-assets/did-car/list/todo',
    name: 'UserAssetsDidCarTodoList',
    meta: {
      title: '提车列表'
    },
    component: resolve => require(['@/pages/user-assets/did-car/todo-list/List'], resolve)
  },
  {
    path: '/user-assets/did-car/info/all/:type/:orderCode',
    name: 'UserAssetsDidCarAllInfo',
    meta: {
      title: '提车详情'
    },
    component: resolve => require(['@/pages/user-assets/did-car/Info/info'], resolve)
  },
  {
    path: '/user-assets/did-car/info/todo/:type/:orderCode',
    name: 'UserAssetsDidCarTodoInfo',
    meta: {
      title: '提车详情'
    },
    component: resolve => require(['@/pages/user-assets/did-car/Info/info'], resolve)
  },
  // {
  //   path: '/user-assets/recycle-car/list/all',
  //   name: 'UserAssetsRecycleCarAllList',
  //   meta: {
  //     title: '收车查询'
  //   },
  //   component: resolve => require(['@/pages/user-assets/recycle-car/all-list/List'], resolve)
  // },
  {
    path: '/user-assets/recycle-car/list/todo',
    name: 'UserAssetsRecycleCarTodoList',
    meta: {
      title: '收车列表'
    },
    component: resolve => require(['@/pages/user-assets/recycle-car/todo-list/List'], resolve)
  },
  {
    path: '/user-assets/recycle-car/list/info',
    name: 'UserAssetsRecycleCarTodoListInfo',
    meta: {
      title: '收车详情'
    },
    component: resolve => require(['@/pages/user-assets/recycle-car/info/Info'], resolve)
  },
  {
    path: '/user-assets/turn-car-over/list/all',
    name: 'UserAssetsTurnCarOverAllList',
    meta: {
      title: '产权转移查询'
    },
    component: resolve => require(['@/pages/user-assets/turn-car-over/all-list/List'], resolve)
  },
  {
    path: '/user-assets/turn-car-over/list/todo',
    name: 'UserAssetsTurnCarOverTodoList',
    meta: {
      title: '产权转移列表'
    },
    component: resolve => require(['@/pages/user-assets/turn-car-over/todo-list/List'], resolve)
  },
  {
    path: '/user-assets/turn-car-over/info/all/:type/:orderCode',
    name: 'UserAssetsTurnCarOverAllInfo',
    meta: {
      title: '产权转移详情'
    },
    component: resolve => require(['@/pages/user-assets/turn-car-over/Info/info'], resolve)
  },
  {
    path: '/user-assets/turn-car-over/info/todo/:type/:orderCode',
    name: 'UserAssetsTurnCarOverTodoInfo',
    meta: {
      title: '产权转移详情'
    },
    component: resolve => require(['@/pages/user-assets/turn-car-over/Info/info'], resolve)
  },
  // {
  //   path: '/user-assets/redeem/list/all',
  //   name: 'UserAssetsRedeemAllList',
  //   meta: {
  //     title: '赎车查询'
  //   },
  //   component: resolve => require(['@/pages/user-assets/redeem/all-list/List'], resolve)
  // },
  {
    path: '/user-assets/redeem/list/todo',
    name: 'UserAssetsRedeemTodoList',
    meta: {
      title: '赎车列表'
    },
    component: resolve => require(['@/pages/user-assets/redeem/todo-list/List'], resolve)
  },
  {
    path: '/user-assets/redeem/info/all/:type/:orderCode',
    name: 'UserAssetsRedeemAllInfo',
    meta: {
      title: '赎车详情'
    },
    component: resolve => require(['@/pages/user-assets/redeem/Info/info'], resolve)
  },
  {
    path: '/user-assets/redeem/info/todo/:type/:orderCode',
    name: 'UserAssetsRedeemTodoInfo',
    meta: {
      title: '赎车详情'
    },
    component: resolve => require(['@/pages/user-assets/redeem/Info/info'], resolve)
  },
  {
    path: '/user-assets/resell/list/todo',
    name: 'UserAssetsResellTodoList',
    meta: {
      title: '转卖列表'
    },
    component: resolve => require(['@/pages/user-assets/resell/todo-list/List'], resolve)
  },
  {
    path: '/user-assets/resell/resell-info/info',
    name: 'UserAssetsResellResellInfo',
    meta: {
      title: '转卖详情'
    },
    component: resolve => require(['@/pages/user-assets/resell/resell-info/List'], resolve)
  }
]
