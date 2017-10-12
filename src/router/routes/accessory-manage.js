export default [
  {
    path: '/accessory-manage/list',
    name: 'AccessoryList',
    meta: {
      title: '附件管理'
    },
    component: resolve => require(['@/pages/accessory-manage/list/List'], resolve)
  }
]
