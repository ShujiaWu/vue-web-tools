export default [
  {
    path: '/car/deploylight-manage/list',
    name: 'deployLight',
    meta: {
      title: '亮点配置'
    },
    component: resolve => require(['@/pages/car/deploylight-manage/list/List'], resolve)
  }
]
