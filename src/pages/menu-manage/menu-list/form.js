export default () => {
  let object = {
    // 表单数据
    data: {
      title: undefined,
      icon: 'ios-paper',
      order: 0,
      name: undefined,
      code: undefined,
      show: 1
    },
    // 表单标签
    label: {
      title: '菜单名',
      icon: '图标',
      order: '排序',
      name: '路径',
      code: '路径编码',
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
      order: '请输入',
      name: '请输入',
      code: '请输入',
      show: '请选择'
    },
    // 校验规则
    rule: {
      title: [{
        required: true,
        message: '菜单名不能为空',
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
      }],
      name: [{
        required: true,
        message: '路径不能为空',
        trigger: 'blur'
      }],
      code: [{
        required: true,
        message: '路径编码不能为空',
        trigger: 'change'
      }],
      show: [{
        required: true,
        type: 'number',
        message: '是否显示不能为空',
        trigger: 'change'
      }]
    }
  }
  return object
}
