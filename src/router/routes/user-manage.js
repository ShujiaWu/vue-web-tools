export default [
  {
    path: '/user-manage/list',
    name: 'UserList',
    meta: {
      title: '用户管理'
    },
    component: resolve => require(['@/pages/user-manage/list/List'], resolve)
  },
  {
    path: '/user-manage/permission/:id',
    name: 'UserPermission',
    meta: {
      title: '用户权限管理'
    },
    component: resolve => require(['@/pages/user-manage/permission/Permission'], resolve)
  }
]
