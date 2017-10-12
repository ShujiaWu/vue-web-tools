# 页面导航组件

该组件可以分组显示导航

每一组由 `分组名称` + `导航列表` 组成

导航项由 `名称` + `icon` + `目标` 组成

导航目标有两种类型： URL链接(`LINK`) 、 路由(`ROUTE`)

## navigators 配置参考
```
[
  {
    name: '配置生成器',
    list: [
      {
        name: '火柴配置生成器（旧）',
        icon: 'https://cdn0.iconfinder.com/data/icons/job-seeker/256/checklist_job_seeker_employee_unemployee_work-128.png',
        target: {
          type: 'LINK',
          url: 'http://www.baidu.com',
          replace: false
        }
      },
      {
        name: '用户中心',
        icon: 'https://cdn0.iconfinder.com/data/icons/job-seeker/256/rating_job_seeker_employee_unemployee_work-128.png',
        target: {
          type: 'ROUTE',
          url: 'UserCenterMain',
          params: {},
          query: {},
          replace: false
        }
      }
    ]
  }
]
```