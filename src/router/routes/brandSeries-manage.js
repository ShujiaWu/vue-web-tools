export default [
  {
    path: '/car/brandseries-manage/list',
    name: 'brandSeriesList',
    meta: {
      title: '品牌系列管理'
    },
    component: resolve => require(['@/pages/car/brandseries-manage/list/List'], resolve)
  },
  {
    path: '/car/brandseries-manage/modification ',
    name: 'seriesName',
    meta: {
      title: '系列管理'
    },
    component: resolve => require(['@/pages/car/brandseries-manage/seriesName/List'], resolve)
  }
]
