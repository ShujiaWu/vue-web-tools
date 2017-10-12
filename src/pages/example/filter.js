import Common from '@/components/list-data-filter/common'
import Types from '@/components/list-data-filter/types'
export default (_this) => {
  let object = {
    showFilterContent: true,
    // 搜索的字段
    fields: {
      data0: Types.configs[Types.Input]({
        label: '输入类型'
      }),
      data1: Types.configs[Types.Options]({
        label: '单选下拉类型',
        options: [{
          label: '选项1',
          value: '1'
        }, {
          label: '选项2',
          value: '2'
        }]
      }),
      data3: Types.configs[Types.NumberArea]({
        label: '数字区域'
      }),
      data4: Types.configs[Types.OptionsMulti]({
        label: '下拉多选',
        options: [{
          label: '选项1',
          value: '1'
        }, {
          label: '选项2',
          value: '2'
        }]
      }),
      data5: Types.configs[Types.DataTimeArea]({
        label: '时间范围'
      }),
      data6: Types.configs[Types.DataTime]({
        label: '时间'
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
