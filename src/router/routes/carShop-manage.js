export default [
  {
    path: '/carShop-manage/list',
    name: 'CarShopList',
    meta: {
      title: '门店车辆管理'
    },
    component: resolve => require(['@/pages/carShop-manage/list/List'], resolve)
  }
]
