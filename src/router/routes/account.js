export default [
  {
    path: '/account/info',
    name: 'AccountInfo',
    meta: {
      title: '账号信息管理'
    },
    component: resolve => require(['@/pages/account/info/Info'], resolve)
  },
  {
    path: '/account/pwd/modify',
    name: 'PwdModify',
    meta: {
      title: '密码修改'
    },
    component: resolve => require(['@/pages/account/pwd-modify/Modify'], resolve)
  }
]
