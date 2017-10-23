import Common from '@/components/list-data-filter/common'
import Types from '@/components/list-data-filter/types'
export default (_this) => {
  let object = {
    showFilterContent: true,
    // 搜索的字段
    fields: {
      title: Types.configs[Types.Input]({
        label: '菜单名称'
      }),
      name: Types.configs[Types.Input]({
        label: '菜单路径'
      })
    },
    // 按钮
    buttons: {
      search: {
        type: 'primary',
        icon: 'ios-search',
        label: '查询',
        method () {
          // 调用页面函数
          _this['search'](Common.search(object.fields))
        }
      },
      resetSearch: {
        type: 'primary',
        icon: 'ios-refresh-empty',
        label: '重置查询',
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
