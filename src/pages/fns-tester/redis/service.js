import axios from 'axios'
export default {
  getString (key) {
    return axios.get(`api/fns-tester/redis/get/${key}`).then(result => {
      return result
    })
  },
  setString (key, value) {
    return axios.post(`api/fns-tester/redis/set`, {
      key: key,
      value: value
    }).then(result => {
      return result
    })
  }
}
