export default {
  path: '/fns-tester',
  name: 'FnsTester',
  meta: {
    title: '功能测试',
    hidden: false,
    disabled: true
  },
  component: resolve => require(['@/pages/Main'], resolve),
  children: [
    {
      path: 'redis',
      name: 'RedisTester',
      meta: {
        title: 'Redis测试'
      },
      component: resolve => require(['@/pages/fns-tester/redis/Redis'], resolve)
    }
  ]
}
