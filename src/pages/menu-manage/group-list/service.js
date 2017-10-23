import axios from 'axios'
export default {
  getList (page, filter) {
    let params = {
      pageNow: page,
      version: 'v1',
      name: filter.title
    }

    return axios.get('cms/menu/groups', {
      params
    }).then(result => {
      if (result.isSuccess) {
        // 列表数据
        let list = []
        for (let i = 0; i < result.data.list.length; i++) {
          let item = result.data.list[i]
          list.push({
            id: item.id,
            title: item.name,
            icon: item.icon,
            order: item.seq,
            show: Number(item.isShowMain)
          })
        }
        result.data = {
          list: list,
          // 分页数据
          page: {
            total: result.data.pageMsg.total,
            current: result.data.pageMsg.pageNum,
            size: result.data.pageMsg.pageSize
          }
        }
      }
      return result
    })
  },
  /**
   * 删除
   */
  delete (id) {
    let params = {
      id: id,
      version: 'v1'
    }
    return axios.delete('cms/menu/group', {
      params
    })
  },
  /**
   * 添加
   * @param {Object} data 数据对象
   */
  add (data) {
    return axios.post('cms/menu/group', {
      version: 'v1',
      name: data.title,
      icon: data.icon,
      seq: data.order,
      isShowMain: data.show
    })
  },
  /**
   * 修改
   * @param {Object} data 数据对象
   */
  modify (data) {
    return axios.put('cms/menu/group', {
      version: 'v1',
      id: data.id,
      name: data.title,
      icon: data.icon,
      seq: data.order,
      isShowMain: data.show
    })
  }
}
