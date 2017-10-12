/**
 * 贷后管理
 */
export default [
  // {
  //   path: '/loans-manage/refund/overTree/list',
  //   name: 'ReferOverTree',
  //   meta: {
  //     title: '逾期超过3天'
  //   },
  //   component: resolve => require(['@/pages/loans-manage/refund/overTree/list/List'], resolve)
  // },
  {
    path: '/loans-manage/refund/refer/list',
    name: 'ReferList',
    meta: {
      title: '逾期列表查询'
    },
    component: resolve => require(['@/pages/loans-manage/refund/refer/list/List'], resolve)
  },
  {
    path: '/loans-manage/refund/refer/refer-info',
    name: 'ReferInfo',
    meta: {
      title: '逾期详情页'
    },
    component: resolve => require(['@/pages/loans-manage/refund/refer/refer-info/Info'], resolve)
  },
  // {
  //   path: '/loans-manage/refund/tree/list',
  //   name: 'ReferTree',
  //   meta: {
  //     title: '逾期3天以内'
  //   },
  //   component: resolve => require(['@/pages/loans-manage/refund/tree/list/List'], resolve)
  // },
  {
    path: '/loans-manage/repayment/repayment-refer/list',
    name: 'RepaymentRefer',
    meta: {
      title: '还款列表查询'
    },
    component: resolve => require(['@/pages/loans-manage/repayment/repayment-refer/list/List'], resolve)
  },
  {
    path: '/loans-manage/repayment/repayment-refer/repayment-refer-info',
    name: 'RepaymentReferInfo',
    meta: {
      title: '还款详情页'
    },
    component: resolve => require(['@/pages/loans-manage/repayment/repayment-refer/repayment-refer-info/Info'], resolve)
  },
  {
    path: '/loans-manage/repayment/refund-list/list',
    name: 'RefundList',
    meta: {
      title: '近期还款'
    },
    component: resolve => require(['@/pages/loans-manage/repayment/refund-list/list/List'], resolve)
  }
  // {
  //   path: '/loans-manage/backCar/collect-car/list',
  //   name: 'CollectCar',
  //   meta: {
  //     title: '收车管理'
  //   },
  //   component: resolve => require(['@/pages/loans-manage/backCar/collect-car/list/List'], resolve)
  // }
  // {
  //   path: '/loans-manage/backCar/redeem-car/list',
  //   name: 'RedeemCar',
  //   meta: {
  //     title: '赎车管理'
  //   },
  //   component: resolve => require(['@/pages/loans-manage/backCar/redeem-car/list/List'], resolve)
  // },
  // {
  //   path: '/loans-manage/backCar/resell/list',
  //   name: 'Resell',
  //   meta: {
  //     title: '转卖管理'
  //   },
  //   component: resolve => require(['@/pages/loans-manage/backCar/resell/list/List'], resolve)
  // },
  // {
  //   path: '/loans-manage/backCar/collect-car/user-back-car-info',
  //   name: 'UserBackCarInfo',
  //   meta: {
  //     title: '收车'
  //   },
  //   component: resolve => require(['@/pages/loans-manage/backCar/collect-car/user-back-car-info/Info'], resolve)
  // },
  // {
  //   path: '/loans-manage/backCar/redeem-car/user-redeem-info',
  //   name: 'UserRedeemInfo',
  //   meta: {
  //     title: '赎车'
  //   },
  //   component: resolve => require(['@/pages/loans-manage/backCar/redeem-car/user-redeem-info/Info'], resolve)
  // },
  // {
  //   path: '/loans-manage/backCar/resell/user-resell-info',
  //   name: 'UserResellInfo',
  //   meta: {
  //     title: '转卖'
  //   },
  //   component: resolve => require(['@/pages/loans-manage/backCar/resell/user-resell-info/Info'], resolve)
  // }
]
