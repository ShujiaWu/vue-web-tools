import axios from 'axios'
export default {
  getList (menuId, page, filter) {
    let params = {
      menuId: menuId,
      pageNow: page,
      version: 'v1',
      name: filter.title
    }
    return axios.get('cms/menu/operators', {
      params
    }).then(result => {
      if (result.isSuccess) {
        // 列表数据
        let list = []
        for (let i = 0; i < result.data.list.length; i++) {
          let item = result.data.list[i]
          list.push({
            id: item.id,
            title: item.label,
            code: item.value,
            url: item.requestUrl,
            desc: item.description
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
    return axios.delete('cms/menu/operator', {
      params
    })
  },
  /**
   * 添加
   * @param {Object} data 数据对象
   */
  add (menuId, data) {
    return axios.post('cms/menu/operator', {
      version: 'v1',
      menuId: menuId,
      label: data.title,
      description: data.desc,
      value: data.code,
      requestUrl: data.url
    })
  },
  /**
   * 修改
   * @param {Object} data 数据对象
   */
  modify (data) {
    return axios.put('cms/menu/operator', {
      version: 'v1',
      id: data.id,
      label: data.title,
      description: data.desc,
      value: data.code,
      requestUrl: data.url
    })
  }
}
