/**
 * 组合产品表格
 */
export default (vm) => [{
  title: '产品名称',
  key: 'name',
  // fixed: 'left',
  // width: 100,
  align: 'center'
}, {
  title: '产品编码',
  key: 'code',
  // fixed: 'left',
  // width: 100,
  align: 'center'
}, {
  title: '操作',
  key: 'action',
  // fixed: 'right',
  // width: 180,
  align: 'center',
  render: (h, params) => {
    let buttonArr = []
    buttonArr.push(h('Button', {
      props: {
        type: 'error',
        size: 'small'
      },
      style: {
        marginRight: '5px'
      },
      on: {
        click: () => {
          // vm.deleteProduct(params.row.id)
          alert('删除按钮点击')
        }
      }
    }, '删除'))
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
          // vm.goProductDetail(params.row.type, params.row.id)
          alert('详情按钮点击')
        }
      }
    }, '详情'))

    return h('div', buttonArr)
  }
}]
