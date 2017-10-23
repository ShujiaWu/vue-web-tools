export default {
  path: '/web-console-msg',
  name: 'WebConsoleMsg',
  meta: {
    title: '控制台信息跟踪',
    hidden: false,
    disabled: true
  },
  component: resolve => require(['@/pages/Main'], resolve),
  children: [
    {
      path: 'realtime',
      name: 'WebConsoleMsgRealtime',
      meta: {
        title: '实时控制台信息'
      },
      component: resolve => require(['@/pages/web-console-msg/Realtime'], resolve)
    },
    {
      path: 'review',
      name: 'WebConsoleMsgReview',
      meta: {
        title: '控制台信息查询'
      },
      component: resolve => require(['@/pages/web-console-msg/Review'], resolve)
    },
    {
      path: '/tester',
      name: 'WebConsoleMsgTester',
      meta: {
        title: '测试工具'
      },
      component: resolve => require(['@/pages/web-console-msg-tester/WebConsoleMsgTester'], resolve)
    }
  ]
}
