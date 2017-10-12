export default [
  {
    path: '/final-trial/list',
    name: 'FinalTrialList',
    meta: {
      title: '电审查询'
    },
    component: resolve => require(['@/pages/approval-process/final-trial/list/List'], resolve)
  },
  {
    path: '/final-trial/todo-list',
    name: 'FinalTrialTodoList',
    meta: {
      title: '电审列表'
    },
    component: resolve => require(['@/pages/approval-process/final-trial/todo-list/List'], resolve)
  },
  {
    path: '/final-trial/info/:type/:orderCode',
    name: 'FinalTrialInfo',
    meta: {
      title: '电审资料'
    },
    component: resolve => require(['@/pages/approval-process/final-trial/info/Info'], resolve)
  },
  {
    path: '/final-trial/info/todo/:type/:orderCode',
    name: 'FinalTrialTodoInfo',
    meta: {
      title: '用户电审'
    },
    component: resolve => require(['@/pages/approval-process/final-trial/info/Info'], resolve)
  }
]
