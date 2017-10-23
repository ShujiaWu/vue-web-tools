export default () => {
  let object = {
    // 表单数据
    data: {
      title: undefined,
      desc: undefined,
      url: undefined,
      code: 0
    },
    // 表单标签
    label: {
      title: '功能点名称',
      desc: '备注',
      code: '编码 2^n',
      url: '接口名称 GET URL1 | POST URL2'
    },
    // 下拉选项数据
    options: {
    },
    // 提示
    placeholder: {
      title: '请输入',
      desc: '请输入',
      url: '请输入',
      code: '请输入'
    },
    // 校验规则
    rule: {
      title: [{
        required: true,
        message: '功能点名称不能为空',
        trigger: 'blur'
      }],
      code: [{
        required: true,
        type: 'number',
        message: '编码不能为空',
        trigger: 'blur'
      }]
    }
  }
  return object
}
