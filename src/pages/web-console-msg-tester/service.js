import axios from 'axios'

export default {
  /** 发送控制台数据 */
  sendColsoleData (appID, clientID, data) {
    return axios.post('api/monitor/v1', {
      appID: appID,
      clientID: clientID,
      data: data
    })
  }
}
