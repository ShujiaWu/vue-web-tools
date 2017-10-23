/**
 * 菜单组
 */
export default (vm) => [{
  title: '名称',
  key: 'title',
  align: 'center'
}, {
  title: '编码',
  key: 'code',
  align: 'center'
}, {
  title: '备注',
  key: 'desc',
  align: 'center'
}, {
  title: '操作',
  key: 'action',
  width: (100 + 40 * (+Boolean(vm.permission & 8))),
  align: 'center',
  render: (h, params) => {
    let buttonArr = []

    buttonArr.push(h('Button', {
      props: {
        type: 'primary',
        size: 'small'
      },
      style: {
        marginRight: '5px'
      },
      on: {
        click: () => {
          vm.modify(params.row)
        }
      }
    }, '查看'))

    // 权限控制
    if (vm.permission & 8) {
      buttonArr.push(h('Button', {
        props: {
          type: 'error',
          size: 'small'
        },
        on: {
          click: () => {
            vm.delete(params.row)
          }
        }
      }, '删除'))
    }

    return h('div', buttonArr)
  }
}]
