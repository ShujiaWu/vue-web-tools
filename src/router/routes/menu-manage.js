export default [
  {
    path: '/menu-manage/group/list',
    name: 'MenuGroupList',
    meta: {
      title: '菜单组管理'
    },
    component: resolve => require(['@/pages/menu-manage/group-list/List'], resolve)
  },
  {
    path: '/menu-manage/menu/list',
    name: 'MenuList',
    meta: {
      title: '菜单管理'
    },
    component: resolve => require(['@/pages/menu-manage/menu-list/List'], resolve)
  },
  {
    path: '/menu-manage/fns/list',
    name: 'PageFnList',
    meta: {
      title: '页面功能点管理'
    },
    component: resolve => require(['@/pages/menu-manage/fn-list/List'], resolve)
  }
]
