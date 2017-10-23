import ExpandRow from './ExpandRow'
import datetime from '@/filters/datetime'
export default (vm) => {
  let result = [
    {
      type: 'expand',
      width: 50,
      render: (h, params) => {
        return h(ExpandRow, {
          props: {
            row: params.row
          }
        })
      }
    },
    {
      title: 'Level',
      key: 'level',
      align: 'center',
      width: '80px'
    },
    {
      title: 'App ID',
      key: 'appID',
      align: 'left',
      width: '200px'
    }, {
      title: '时间',
      key: 'datetime',
      align: 'center',
      width: '150px',
      render: (h, params) => {
        return h('span', datetime(params.row.datetime, 'yyyy-MM-dd HH:mm:ss'))
      }
    }, {
      title: '消息概要',
      key: 'message',
      align: 'left',
      ellipsis: true
    }
  ]
  return result
}
