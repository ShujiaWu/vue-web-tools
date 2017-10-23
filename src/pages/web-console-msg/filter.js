import Common from '@/components/list-data-filter/common'
import Types from '@/components/list-data-filter/types'
export default (_this) => {
  let object = {
    showFilterContent: true,
    // 搜索的字段
    fields: {
      appID: Types.configs[Types.Options]({
        label: 'APP ID ',
        options: [],
        style: {
          width: '250px'
        }
      }),
      level: Types.configs[Types.OptionsMulti]({
        label: '信息类型',
        options: [{
          label: 'log',
          value: 'log'
        }, {
          label: 'info',
          value: 'info'
        }, {
          label: 'warning',
          value: 'warning'
        }, {
          label: 'error',
          value: 'error'
        }]
      }),
      clientID: Types.configs[Types.Options]({
        label: '客户端ID',
        options: [],
        style: {
          width: '350px'
        }
      })
    },
    // 按钮
    buttons: {
      search: {
        type: 'primary',
        icon: 'ios-search',
        label: '过滤',
        method () {
          // 调用页面函数
          _this['search'](Common.search(object.fields))
        }
      },
      resetSearch: {
        type: 'primary',
        icon: 'ios-refresh-empty',
        label: '重置',
        method () {
          // 清空搜索字段
          Common.resetSearch(object.fields)
          // 调用页面函数
          _this['resetSearch']()
        }
      }
    }
  }

  return object
}
