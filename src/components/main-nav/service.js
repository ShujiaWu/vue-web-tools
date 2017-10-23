
// import data from '@/mock/menu.json'
import axios from 'axios'
export default {
  getMenus () {
    let params = {
      version: 'v1'
    }
    return axios.get('api/menus', {
      params
    }).then(result => {
      // if (result.isSuccess) {
      //   // 列表数据
      //   let list = []
      //   result.data.forEach((group) => {
      //     let obj = {
      //       title: group.name,
      //       id: group.id,
      //       icon: group.icon,
      //       menus: []
      //     }
      //     group.menus.forEach((menu) => {
      //       obj.menus.push({
      //         title: menu.title,
      //         name: menu.pageUrl,
      //         id: menu.id,
      //         icon: menu.icon
      //       })
      //     }, this)
      //     list.push(obj)
      //   }, this)
      //   result.data = {
      //     list
      //   }
      // }
      return result
    })
  }
}
