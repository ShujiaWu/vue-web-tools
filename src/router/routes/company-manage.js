export default [
  {
    path: '/company-manage/list',
    name: 'CompanyList',
    meta: {
      title: '门店搜索'
    },
    component: resolve => require(['@/pages/company-manage/list/List'], resolve)
  }
]
