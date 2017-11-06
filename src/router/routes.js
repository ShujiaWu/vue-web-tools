import WebConsoleMsg from './routes/web-console-msg'
import FnsTester from './routes/fns-tester'
export default [
  {
    path: '/',
    name: 'Home',
    redirect: '/dashboard',
    meta: {
      title: '主页',
      hidden: true
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
      }
    ]
  },
  WebConsoleMsg,
  FnsTester,
  {
    path: '/401',
    name: '401',
    meta: {
      title: '401'
    },
    component: resolve => require(['@/pages/error/401'], resolve)
  },
  {
    path: '/*',
    name: '404',
    meta: {
      title: '404'
    },
    component: resolve => require(['@/pages/error/404'], resolve)
  }
]
