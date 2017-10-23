
// import data from '@/mock/menu.json'
import axios from 'axios'
export default {
  getMenus () {
    let params = {
      version: 'v1'
    }
    return axios.get('api/page-navigator', {
      params
    }).then(result => {
      return result
    })
  }
}
