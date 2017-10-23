import axios from 'axios'
export default {
  getAppIDs () {
    return axios.get('api/monitor/v1/appid').then(result => {
      if (result.isSuccess) {
        let data = [
          {
            label: '全部',
            value: '全部'
          }
        ]
        result.data.forEach((element) => {
          data.push({
            label: element,
            value: element
          })
        }, this)
        result.data = {
          list: result.data,
          data: data
        }
      }
      return result
    })
  },
  initInfo () {
    return axios.get('api/monitor/v1/client-id').then(result => {
      return result
    })
  },
  getMessage (filter, page) {
    let params = {
      appID: filter.appID === 'ALL' ? undefined : filter.appID,
      clientID: filter.clientID === 'ALL' ? undefined : filter.clientID,
      level: filter.level,
      current: page.current,
      size: page.size
    }
    console.log(filter)
    return axios.get('api/monitor/v1/message', {params}).then(result => {
      if (result.isSuccess) {
        result.data.list.forEach(element => {
          // if (element.msg instanceof Array) {
          //   element.message = element.
          // }
          element.message = element.msg
          try {
            element.msg = JSON.parse(element.msg)
            if (element.msg instanceof Array) {
              element.message = element.msg.join('')
            }
          } catch (e) {}
        }, this)
      }
      return result
    })
  }
}
