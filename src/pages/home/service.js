
// import data from '@/mock/menu.json'
import axios from 'axios'
export default {
  getMenus () {
    let params = {
      version: 'v1'
    }
    return axios.get('/mock/page-navigator/menu.json', {
      params
    }).then(result => {
      return result
    })
  }
}
