export default [
  {
    path: '/home-visit/list',
    name: 'HomeVisitList',
    meta: {
      title: '家访查询'
    },
    component: resolve => require(['@/pages/approval-process/home-visit/list/List'], resolve)
  },
  {
    path: '/home-visit/undistributed/list',
    name: 'HomeVisitUndistributedList',
    meta: {
      title: '家访分配'
    },
    component: resolve => require(['@/pages/approval-process/home-visit/undistributed-list/List'], resolve)
  },
  {
    path: '/home-visit/todo/list',
    name: 'HomeVisitTodoList',
    meta: {
      title: '家访列表'
    },
    component: resolve => require(['@/pages/approval-process/home-visit/todo-list/List'], resolve)
  },
  {
    path: '/home-visit/info/:type/:orderCode',
    name: 'HomeVisitInfo',
    meta: {
      title: '家访资料'
    },
    component: resolve => require(['@/pages/approval-process/home-visit/info/Info'], resolve)
  },
  {
    path: '/home-visit/info/undistributed/:type/:orderCode',
    name: 'HomeVisitDistribute',
    meta: {
      title: '家访人员分配'
    },
    component: resolve => require(['@/pages/approval-process/home-visit/info/Info'], resolve)
  },
  {
    path: '/home-visit/info/todo/:type/:orderCode',
    name: 'HomeVisitInfoUpdate',
    meta: {
      title: '家访信息提交'
    },
    component: resolve => require(['@/pages/approval-process/home-visit/info/Info'], resolve)
  }
]
