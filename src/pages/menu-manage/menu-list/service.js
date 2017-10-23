import axios from 'axios'
export default {
  getList (groupId, page, filter) {
    let params = {
      parentId: groupId,
      pageNow: page,
      version: 'v1',
      pageUrl: filter.name,
      name: filter.title
    }
    return axios.get('cms/menus', {
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
            name: item.pageUrl,
            icon: item.icon,
            order: item.seq,
            code: item.pageCode,
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
  getAllGroup () {
    let params = {
      version: 'v1'
    }
    return axios.get('cms/menu/groups/simple', {
      params
    }).then(result => {
      if (result.isSuccess) {
        // 列表数据
        let list = []
        for (let i = 0; i < result.data.length; i++) {
          let item = result.data[i]
          list.push({
            value: item.id,
            label: item.title
          })
        }
        result.data = {
          list: list
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
    return axios.delete('cms/menu', {
      params
    })
  },
  /**
   * 添加
   * @param {Object} data 数据对象
   */
  add (groupId, data) {
    return axios.post('cms/menu', {
      version: 'v1',
      parentId: groupId,
      name: data.title,
      pageUrl: data.name,
      icon: data.icon,
      seq: data.order,
      isShowMain: data.show,
      pageCode: data.code
    })
  },
  /**
   * 修改
   * @param {Object} data 数据对象
   */
  modify (data) {
    return axios.put('cms/menu', {
      version: 'v1',
      id: data.id,
      name: data.title,
      pageUrl: data.name,
      icon: data.icon,
      seq: data.order,
      isShowMain: data.show,
      pageCode: data.code
    })
  },
  /**
   * 
   * @param {String|Number} menuId 菜单id
   * @param {String|Number} groupId 菜单组id
   */
  move (menuId, groupId) {
    return axios.put('cms/menu', {
      version: 'v1',
      parentId: groupId,
      id: menuId
    })
  }
}
