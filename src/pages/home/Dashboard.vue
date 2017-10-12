<template>
  <div class="dashboard">
    <!-- <ul>
      <li v-for="i in 100" :key="i">循环测试</li>
    </ul> -->
    <page-navigator :navigators="navigators"></page-navigator>
  </div>
</template>

<script>
  import PageNavigator from '@/components/page-navigator/PageNavigator'
  import Service from './service'
  export default {
    components: {
      PageNavigator
    },
    mounted () {
      // console.log(JSON.stringify(this.navigators))
      this.getNavigators()
    },
    data () {
      return {
        navigators: [
          // {
          //   name: '配置生成器',
          //   list: [
          //     {
          //       name: '火柴配置生成器（旧）',
          //       icon: 'https://cdn0.iconfinder.com/data/icons/job-seeker/256/checklist_job_seeker_employee_unemployee_work-128.png',
          //       target: {
          //         type: 'LINK',
          //         url: 'http://192.168.1.124:81',
          //         replace: false
          //       }
          //     },
          //     {
          //       name: '火柴配置生成器（新）',
          //       icon: 'https://cdn0.iconfinder.com/data/icons/job-seeker/256/checklist_job_seeker_employee_unemployee_work-128.png',
          //       target: {
          //         type: 'LINK',
          //         url: '192.168.1.124:85',
          //         replace: false
          //       }
          //     }
          //   ]
          // },
          // {
          //   name: '开发',
          //   list: [
          //     {
          //       name: '原型图',
          //       icon: 'https://cdn0.iconfinder.com/data/icons/job-seeker/256/front_office_job_seeker_employee_unemployee_work-128.png',
          //       target: {
          //         type: 'LINK',
          //         url: 'http://192.168.1.124:83',
          //         replace: false
          //       }
          //     },
          //     {
          //       name: '卫国测试专用',
          //       icon: 'https://cdn0.iconfinder.com/data/icons/job-seeker/256/target_job_seeker_employee_unemployee_work-128.png',
          //       target: {
          //         type: 'LINK',
          //         url: 'http://192.168.1.124:92',
          //         replace: false
          //       }
          //     }
          //   ]
          // },
          // {
          //   name: '项目',
          //   list: [
          //     {
          //       name: 'SaaS 后台',
          //       icon: 'https://cdn0.iconfinder.com/data/icons/job-seeker/256/laptop_job_seeker_employee_unemployee_work_1-128.png',
          //       target: {
          //         type: 'LINK',
          //         url: 'http://192.168.1.124:18080',
          //         replace: false
          //       }
          //     },
          //     {
          //       name: 'SaaS C端',
          //       icon: 'https://cdn0.iconfinder.com/data/icons/job-seeker/256/laptop_job_seeker_employee_unemployee_work_1-128.png',
          //       target: {
          //         type: 'LINK',
          //         url: 'http://192.168.1.124:28080',
          //         replace: false
          //       }
          //     },
          //     {
          //       name: '秒个车 后台',
          //       icon: 'https://cdn0.iconfinder.com/data/icons/job-seeker/256/laptop_job_seeker_employee_unemployee_work_1-128.png',
          //       target: {
          //         type: 'LINK',
          //         url: 'http://192.168.1.124:18081',
          //         replace: false
          //       }
          //     },
          //     {
          //       name: '秒个车 C端',
          //       icon: 'https://cdn0.iconfinder.com/data/icons/job-seeker/256/laptop_job_seeker_employee_unemployee_work_1-128.png',
          //       target: {
          //         type: 'LINK',
          //         url: 'http://192.168.1.124:28081',
          //         replace: false
          //       }
          //     }
          //   ]
          // }
        ]
      }
    },
    methods: {
      getNavigators () {
        Service.getMenus().then(result => {
          this.navigators = result.data
        })
      }
    }
  }
</script>

<style scoped>
  .dashboard {
    
  }

</style>
