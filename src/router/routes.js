export default [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '主页'
    },
    component: resolve => require(['@/pages/Main'], resolve),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
          title: '主面板'
        },
        component: resolve => require(['@/pages/home/Dashboard'], resolve)
      },
      {
        path: '/example',
        name: 'Example',
        meta: {
          title: '样例'
        },
        component: resolve => require(['@/pages/example/Example'], resolve)
      },
      {
        path: '/no-permission',
        name: 'NoPermission',
        meta: {
          title: '错误'
        },
        component: resolve => require(['@/pages/error/NoPermission'], resolve)
      },
      {
        path: '/404',
        name: '404',
        meta: {
          title: '错误'
        },
        component: resolve => require(['@/pages/error/404'], resolve)
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]
