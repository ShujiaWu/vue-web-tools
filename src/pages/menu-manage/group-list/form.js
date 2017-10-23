export default () => {
  let object = {
    // 表单数据
    data: {
      title: undefined,
      icon: 'ios-paper',
      order: 0,
      show: 1
    },
    // 表单标签
    label: {
      title: '菜单名',
      icon: '图标',
      order: '排序',
      show: '是否在主菜单显示'
    },
    // 下拉选项数据
    options: {
      show: [
        {
          label: '显示',
          value: 1
        }, {
          label: '隐藏',
          value: 0
        }
      ]
    },
    // 提示
    placeholder: {
      title: '请输入',
      icon: '请输入',
      order: '请输入'
    },
    // 校验规则
    rule: {
      title: [{
        required: true,
        message: '分组名不能为空',
        trigger: 'blur'
      }],
      icon: [{
        required: true,
        message: '图标不能为空',
        trigger: 'blur'
      }],
      order: [{
        required: true,
        type: 'number',
        message: '排序不能为空',
        trigger: 'blur'
      }]
    }
  }
  return object
}
