export default () => {
  let object = {
    // 表单数据
    data: {
      title: undefined
    },
    // 表单标签
    label: {
      title: '标题'
    },
    // 下拉选项数据
    options: {
    },
    // 提示
    placeholder: {
      title: '请输入'
    },
    // 校验规则
    rule: {
      title: [{
        required: true,
        message: '标题不能为空',
        trigger: 'blur'
      }]
    }
  }
  return object
}
