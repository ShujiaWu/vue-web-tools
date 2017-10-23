<template>
  <div class="web-console-msg-tester">
    <Card style="margin-bottom:20px;">
      <p slot="title">Socket 连接 -- {{url}}</p>
      <div slot="extra">
        <Button type="primary" size="small" :disabled="online" @click="connect">连接</Button>
        <Button type="error" size="small" :disabled="!online" @click="disconnect">断开连接</Button>
      </div>
      <div>状态信息：</div>
      <div class="web-console-msg-tester-info">
        <p v-for="(msg,index) in msgs" :key="index">{{msg}}</p>
      </div>
    </Card>
    <Card>
      <p slot="title">功能测试</p>
      <div style="margin-bottom:10px;">
        <Button type="primary" :disabled="!online" @click="sendConsoleMsg">模拟发送控制台数据</Button>
      </div>
      <div>
        <Button type="primary" :disabled="!online" @click="sendNewApp">模拟添加新程序</Button>
        <Button type="primary" :disabled="!online || !newApp" @click="sendNewClient">模拟添加新客户端</Button>

        <Button type="primary" :disabled="!online" @click="sendTest">模拟控制台多行数据</Button>
      </div>
    </Card>
  </div>
</template>

<script>
  import io from 'socket.io-client'
  import Service from './service'
  import Socket from '@/backend/socket'
  export default {
    data () {
      return {
        url: Socket.monitor,
        socket: null,
        online: false,
        msgs: [],
        newApp: undefined
      }
    },
    beforeDestroy () {
      this.disconnect()
    },
    methods: {
      connect () {
        if (this.socket && this.online) {
          this.socket.disconnect()
        }
        this.socket = io.connect(this.url)
        this.initSocket()
      },
      disconnect () {
        if (this.socket && this.online) {
          this.socket.disconnect()
        }
      },
      initSocket () {
        if (!this.socket) {
          return
        }
        this.socket.on('connect', socket => {
          this.online = true
          this.msgs.unshift(`Socket 已经连接到： ${this.url}`)
        })
        this.socket.on('disconnect', () => {
          this.online = false
          this.msgs.unshift(`Socket 已经断开连接： ${this.url}`)
        })
      },
      /** 模拟新App加入 */
      sendNewApp () {
        Service.sendColsoleData(`NewApp-${this.newApp = new Date().getTime()}`, 'Tester-NewApp-ClientID', [
          {
            browser: window.navigator.userAgent,
            datetime: new Date().getTime(),
            level: 'info',
            msg: ['New App Join'],
            path: window.location.href
          }
        ]).then(result => {
          if (result.isSuccess) {
            this.msgs.unshift(`添加新 App 成功！`)
          } else {
            this.msgs.unshift(`添加新 App 失败！${result.message}`)
          }
        })
      },
      /** 模拟新Client加入 */
      sendNewClient () {
        Service.sendColsoleData(`NewApp-${this.newApp}`, `Tester-NewApp-ClientID-${new Date().getTime()}`, [
          {
            browser: window.navigator.userAgent,
            datetime: new Date().getTime(),
            level: 'info',
            msg: ['New Client Join'],
            path: window.location.href
          }
        ]).then(result => {
          if (result.isSuccess) {
            this.msgs.unshift(`添加新 Client 成功！`)
          } else {
            this.msgs.unshift(`添加新 Client 失败！${result.message}`)
          }
        })
      },
      /** 模拟发送控制台信息 */
      sendConsoleMsg () {
        Service.sendColsoleData('ConsoleMsgTester', 'ConsoleMsgTester-ClientID', [
          {
            browser: window.navigator.userAgent,
            datetime: new Date().getTime(),
            level: 'info',
            msg: ['A New Console Tester Msg'],
            path: window.location.href
          }
        ]).then(result => {
          if (result.isSuccess) {
            this.msgs.unshift(`发送测试数据成功！`)
          } else {
            this.msgs.unshift(`发送测试数据失败！${result.message}`)
          }
        })
      },
      sendTest () {
        Service.sendColsoleData('ConsoleMsgTester', 'ConsoleMsgTester-ClientID', [
          {
            browser: window.navigator.userAgent,
            datetime: new Date().getTime(),
            level: 'error',
            msg: ['Script error.', '(0行0列)'],
            path: window.location.href
          }
        ]).then(result => {
          if (result.isSuccess) {
            this.msgs.unshift(`发送测试数据成功！`)
          } else {
            this.msgs.unshift(`发送测试数据失败！${result.message}`)
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .web-console-msg-tester {
    &-info {
      height: 200px;
      overflow: auto;
    }
  }
</style>
