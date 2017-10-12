export default [
  {
    path: '/client-info-manage/list',
    name: 'clientInfoManage',
    meta: {
      title: '客户信息管理'
    },
    component: resolve => require(['@/pages/client-info-manage/list/List'], resolve)
  },
  {
    path: '/client-info-manage/client-info',
    name: 'ClientInfo',
    meta: {
      title: '客户信息详情'
    },
    component: resolve => require(['@/pages/client-info-manage/client-info/Info'], resolve)
  }
]
