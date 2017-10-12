/**
 * 贷后管理
 */
export default [
  {
    path: '/run-manage/home-banner-manage/list',
    name: 'homeBannerManage',
    meta: {
      title: '首页banner图'
    },
    component: resolve => require(['@/pages/run-manage/home-banner-manage/list/List'], resolve)
  },
  {
    path: 'run-manage/new-template-manage/list',
    name: 'newTemplateManage',
    meta: {
      title: '消息模板管理'
    },
    component: resolve => require(['@/pages/run-manage/new-template-manage/list/List'], resolve)
  },
  {
    path: '/run-manage/new-center-manage/list',
    name: 'newCenterManage',
    meta: {
      title: '消息管理'
    },
    component: resolve => require(['@/pages/run-manage/new-center-manage/list/List'], resolve)
  }
]
