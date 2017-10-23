<template>
  <div class="web-console-msg">
    <!-- <ListDataFilter :data="filter"></ListDataFilter> -->
    <Affix :offset-top="55">
      <div class="web-console-msg-filter">
        <div class="web-console-msg-filter-item">
          <span>App ID：</span>
          <Select v-model="filterData.appID" style="width:200px" @on-change="appIDsChange">
            <Option value="ALL">全部</Option>
            <Option v-for="item in options.appIDs" :value="item" :key="item">{{ item }}</Option>
          </Select>
        </div>
        <div class="web-console-msg-filter-item">
          <span>Level：</span>
          <Select v-model="filterData.level" style="width:300px" :multiple="true">
            <Option v-for="item in options.levels" :value="item" :key="item">{{ item }}</Option>
          </Select>
        </div>
        <div class="web-console-msg-filter-item">
          <span>Client ID：</span>
          <Select v-model="filterData.clientID" style="width:300px">
            <Option value="ALL">全部</Option>
            <Option v-for="item in options.clientIDs" :value="item" :key="item">{{ item }}</Option>
          </Select>
        </div>
      </div>
    </Affix>
    

    <!-- 信息列表 -->
    <div>
      <Alert show-icon closable v-for="(msg, index) in msgs" :key="index" :type="getType(msg.level)" :hidden="!isShowMsg(msg)">
        <h3>{{msg.clientID}}</h3>
        <template slot="desc">
          <div class="web-console-msg__item"><span class="web-console-msg__title">页面地址：</span><span class="web-console-msg__content">{{msg.path}}</span></div>
          <div class="web-console-msg__item"><span class="web-console-msg__title">客户端时间：</span><span class="web-console-msg__content">{{msg.datetime | datetime('yyyy-MM-dd HH:mm:ss.S')}}</span></div>
          <div class="web-console-msg__item"><span class="web-console-msg__title">浏览器信息：</span><span class="web-console-msg__content">{{msg.browser}}</span></div>
          <div class="web-console-msg__item">
            <span class="web-console-msg__title">控制台信息：</span>
            <div class="web-console-msg__console">
              <div v-for="(detail, index) in msg.msg" :key="index">
                <span v-if="typeof detail !== 'object'">{{detail | trim}}</span>
                <tree-view v-if="typeof detail === 'object'" :data="detail" :options="{maxDepth: 10,rootObjectKey:'object'}"></tree-view>
              </div>
            </div>
          </div>
        </template>
      </Alert>
    </div>
  </div>
</template>

<script>
  import io from 'socket.io-client'
  import TreeView from '@/components/rewrite/vue-json-tree-view/TreeView'
  import ListDataFilter from '@/components/list-data-filter/ListDataFilter'
  import Filter from './filter'
  import Service from './service'
  import Socket from '@/backend/socket'
  export default {
    components: {
      TreeView, ListDataFilter
    },
    mounted () {
      this.initInfo()
      // let clientID = {}
      this.socket = io(Socket.monitor)

      this.socket.on('connect', () => {
        console.log(this.socket.id)
        this.socket.emit('appID', this.filterData.appID)
      })

      // 新信息
      this.socket.on('new-msg', (data) => {
        console.log('接收到新消息')
        this.msgs.unshift(data)
        if (this.msgs.length > this.maxSize) {
          this.msgs.pop()
        }
      })
      // 新的APP 加入
      this.socket.on('new-app', newApp => {
        if (!this.dataSource[newApp]) {
          this.dataSource[newApp] = []
          this.options.appIDs.push(newApp)
        }
      })
      // 新Client加入
      this.socket.on('new-client', client => {
        if (!this.dataSource[client.appID]) {
          // 新的App，加入数据源
          this.dataSource[client.appID] = []
          this.options.appIDs.push(client.appID)
        }
        // 将Client加入数据源
        this.dataSource[client.appID].push(client.clientID)
        // 当前处在该APP下
        if (this.filterData.appID === client.appIDs) {
          this.options.clientIDs.push(client.clientID)
        }
      })
    },
    beforeDestroy () {
      this.socket.disconnect()
    },
    data () {
      return {
        filter: Filter(this),
        filterData: {
          appID: 'ALL',
          level: ['log', 'info', 'warning', 'error'],
          clientID: 'ALL'
        },
        socket: null,
        maxSize: 100,
        dataSource: {},
        options: {
          appIDs: [],
          levels: ['log', 'info', 'warning', 'error'],
          clientIDs: []
        },
        msgs: []
      }
    },
    methods: {
      initInfo () {
        Service.initInfo().then(result => {
          if (result.isSuccess) {
            let object = this.dataSource = result.data
            let all = []
            for (let key in object) {
              if (object.hasOwnProperty(key)) {
                // 加入到APP ID 列表中
                this.options.appIDs.push(key)
                // 加入全部列表
                all.push(...object[key])
              }
            }
            this.dataSource['ALL'] = this.options.clientIDs = all
          } else {
            this.$Notice.error({
              title: '获取数据失败',
              desc: result.message
            })
          }
        })
      },
      getAppIDs () {
        Service.getAppIDs().then(result => {
          if (result.isSuccess) {
            this.options.appIDs = result.data.list
          } else {
            this.$Notice.error({
              title: '获取数据失败',
              desc: result.message
            })
          }
        })
      },
      getType (level) {
        switch (level) {
          case 'log':
            return 'success'
          case 'info':
            return 'info'
          case 'warn':
            return 'warning'
          case 'error':
            return 'error'
        }
      },
      search (data) {
        this.filterData = data
      },
      resetSearch () {
        this.filterData = undefined
      },
      /** 判断消息是否显示 */
      isShowMsg (item) {
        if (!this.filterData) {
          return true
        }
        if (this.filterData.appID !== 'ALL' && this.filterData.appID !== item.appID) {
          return false
        }
        if (this.filterData.level && this.filterData.level.indexOf(item.level) === -1) {
          return false
        }
        if (this.filterData.clientID !== 'ALL' && this.filterData.clientID !== item.clientID) {
          return false
        }
        return true
      },
      /** 切换AppID */
      appIDsChange (value) {
        this.options.clientIDs = this.dataSource[value]
        this.filterData.clientID = 'ALL'
        this.socket.emit('appID', this.filterData.appID)
      }
    }
  }
</script>

<style>
  .web-console-msg .ivu-alert-with-desc .ivu-alert-icon {
    top: 30px;
  }
</style>

<style lang="less" scoped>
  .web-console-msg {
    &-filter {
      background: #FFF;
      border: 1px solid #EEE;
      padding: 10px;
      margin-bottom: 20px;
      box-shadow: 0 2px 1px 1px rgba(99, 99, 99, 0.1);
      &-item {
        display: inline-block;
        margin: 10px;
      }
    }
  }
  .web-console-msg__item {
    display: flex;
    padding: 3px 0;
  }
  .web-console-msg__title {
    display: inline-block;
    font-weight:bolder;
    width: 100px;
    font-size: 12px;
  }
  .web-console-msg__content {
    display: inline-block;
    font-size: 12px;
    flex: 1;
  }
  .web-console-msg__console {
    /* padding-left: 100px; */
    font-size: 12px;
  }
</style>


