export default [
  {
    path: '/first-trial/information-audition/all',
    name: 'InformationAuditionAll',
    meta: {
      title: '申请资料查询'
    },
    component: resolve => require(['@/pages/approval-process/first-trial/information-audition/list/List'], resolve)
  },
  {
    path: '/first-trial/information-audition/info/:orderCode',
    name: 'InformationAuditionInfo',
    meta: {
      title: '申请资料查询'
    },
    component: resolve => require(['@/pages/approval-process/first-trial/information-audition/info/Info'], resolve)
  },
  {
    path: '/first-trial/information-audition/todo',
    name: 'InformationAuditionTodo',
    meta: {
      title: '申请资料审核'
    },
    component: resolve => require(['@/pages/approval-process/first-trial/information-audition/todo/List'], resolve)
  },
  {
    path: '/first-trial/information-audition/todo/audit/:orderCode',
    name: 'InformationAuditionTodoAudit',
    meta: {
      title: '申请资料审核'
    },
    component: resolve => require(['@/pages/approval-process/first-trial/information-audition/audit/Audit'], resolve)
  },
  {
    path: '/first-trial/credit-report-audition/all',
    name: 'CreditReportAuditionAll',
    meta: {
      title: '征信资料查询'
    },
    component: resolve => require(['@/pages/approval-process/first-trial/credit-report-audition/list/List'], resolve)
  },
  {
    path: '/first-trial/credit-report-audition/info/:orderCode',
    name: 'CreditReportAuditionInfo',
    meta: {
      title: '征信资料查询'
    },
    component: resolve => require(['@/pages/approval-process/first-trial/credit-report-audition/info/Info'], resolve)
  },
  {
    path: '/first-trial/credit-report-audition/todo',
    name: 'CreditReportAuditionTodo',
    meta: {
      title: '征信资料审核'
    },
    component: resolve => require(['@/pages/approval-process/first-trial/credit-report-audition/todo/List'], resolve)
  },
  {
    path: '/first-trial/credit-report-audition/todo/audit/:orderCode',
    name: 'CreditReportAuditionTodoAudit',
    meta: {
      title: '征信资料审核'
    },
    component: resolve => require(['@/pages/approval-process/first-trial/credit-report-audition/audit/Audit'], resolve)
  }
]
