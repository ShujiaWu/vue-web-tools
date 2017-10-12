export default [
  {
    path: '/member-manage/list',
    name: 'MemberList',
    meta: {
      title: '客户列表'
    },
    component: resolve => require(['@/pages/member-manage/list/List'], resolve)
  },
  {
    path: '/member-manage/info/:id',
    name: 'MemberInfo',
    meta: {
      title: '客户信息'
    },
    component: resolve => require(['@/pages/member-manage/info/Info'], resolve)
  }
]
