export default [
  {
    path: '/car/cars-manage/list',
    name: 'CarsList',
    meta: {
      title: '车型管理'
    },
    component: resolve => require(['@/pages/car/cars-manage/list/List'], resolve)
  }, {
    path: '/car/cars-manage/modification',
    name: 'CarsModification',
    meta: {
      title: '车型信息'
    },
    component: resolve => require(['@/pages/car/cars-manage/modifi/List'], resolve)
  }, {
    path: '/car/cars-manage/addCar',
    name: 'CarsAdd',
    meta: {
      title: '车型信息'
    },
    component: resolve => require(['@/pages/car/cars-manage/addCar/List'], resolve)
  }, {
    path: '/car/cars-manage/detailDeploy',
    name: 'detailDeploy',
    meta: {
      title: '详细配置'
    },
    component: resolve => require(['@/pages/car/cars-manage/detailDeploy/List'], resolve)
  }
]
