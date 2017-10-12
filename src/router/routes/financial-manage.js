/**
 * 财务管理
 */
export default [
  {
    path: '/financial-manage/cash-pledge/list',
    name: 'CashPledgeList',
    meta: {
      title: '押金查询'
    },
    component: resolve => require(['@/pages/financial-manage/cash-pledge/list/List'], resolve)
  },
  {
    path: '/financial-manage/cash-pledge/info/:type/:orderCode',
    name: 'CashPledgeInfo',
    meta: {
      title: '押金详情'
    },
    component: resolve => require(['@/pages/financial-manage/cash-pledge/info/Info'], resolve)
  },
  {
    path: '/financial-manage/cash-pledge/verify/:type/:orderCode',
    name: 'CashPledgeVerify',
    meta: {
      title: '押金确认'
    },
    component: resolve => require(['@/pages/financial-manage/cash-pledge/info/Info'], resolve)
  },
  {
    path: '/financial-manage/cash-pledge/send-back/:type/:orderCode',
    name: 'CashPledgeSendBack',
    meta: {
      title: '押金退回'
    },
    component: resolve => require(['@/pages/financial-manage/cash-pledge/info/Info'], resolve)
  },
  {
    path: '/financial-manage/cash-pledge/verify/list',
    name: 'CashPledgeVerifyList',
    meta: {
      title: '押金确认列表'
    },
    component: resolve => require(['@/pages/financial-manage/cash-pledge/verify/List'], resolve)
  },
  {
    path: '/financial-manage/cash-pledge/send-back/list',
    name: 'CashPledgeSendBackList',
    meta: {
      title: '押金退回列表'
    },
    component: resolve => require(['@/pages/financial-manage/cash-pledge/send-back/List'], resolve)
  },
  {
    path: '/financial-manage/fine/list/all',
    name: 'FineAllList',
    meta: {
      title: '罚金查询'
    },
    component: resolve => require(['@/pages/financial-manage/fine/all-list/List'], resolve)
  },
  {
    path: '/financial-manage/fine/list/todo',
    name: 'FineTodoList',
    meta: {
      title: '罚金列表'
    },
    component: resolve => require(['@/pages/financial-manage/fine/todo-list/List'], resolve)
  },
  {
    path: '/financial-manage/fine/info/:type/all/:orderCode',
    name: 'FineAllInfo',
    meta: {
      title: '罚金详情'
    },
    component: resolve => require(['@/pages/financial-manage/fine/info/Info'], resolve)
  },
  {
    path: '/financial-manage/fine/info/:type/todo/:orderCode',
    name: 'FineTodoInfo',
    meta: {
      title: '罚金详情'
    },
    component: resolve => require(['@/pages/financial-manage/fine/info/Info'], resolve)
  }
]
