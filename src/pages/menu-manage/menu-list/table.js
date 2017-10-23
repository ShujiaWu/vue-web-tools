/**
 * 菜单组
 */
export default (vm) => [{
  title: '名称',
  key: 'title',
  align: 'center'
}, {
  title: '路径',
  key: 'name',
  align: 'center'
}, {
  title: '排序',
  key: 'order',
  align: 'center'
}, {
  title: '图标',
  key: 'icon',
  align: 'center'
}, {
  title: '操作',
  key: 'action',
  width: (100 + 40 * (+Boolean(vm.permission & 8) + +Boolean(vm.permission & 16) + +Boolean(vm.permission & 32))),
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
    if (vm.permission & 16) {
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
            vm.move(params.row)
          }
        }
      }, '移动'))
    }

    if (vm.permission & 32) {
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
            vm.fnManage(params.row)
          }
        }
      }, '功能'))
    }

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
