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
          <Select v-model="filterData.level" style="width:300px" :multiple="true" @on-change="getMessage">
            <Option v-for="item in options.levels" :value="item" :key="item">{{ item }}</Option>
          </Select>
        </div>
        <div class="web-console-msg-filter-item">
          <span>Client ID：</span>
          <Select v-model="filterData.clientID" style="width:300px" @on-change="getMessage">
            <Option value="ALL">全部</Option>
            <Option v-for="item in options.clientIDs" :value="item" :key="item">{{ item }}</Option>
          </Select>
        </div>
        <div class="web-console-msg-filter-item">
          <span>自动刷新：</span>
          <i-switch v-model="autoRefresh" @on-change="autoRefreshChange">
            <span slot="open">开</span>
            <span slot="close">关</span>
          </i-switch>
        </div>
      </div>
    </Affix>
    
    <!-- 表格 -->
    <Table border :columns="tableColumns" :data="tableData" :stripe="true" class="margin-b-10"></Table>
    <!-- 翻页 -->
    <div class="margin-b-10">
      <Page :total="page.total" :page-size="page.size" :current="page.current" show-elevator @on-change="pageChange"></Page>
    </div>

    <!-- 信息列表 -->
    <!-- <div>
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
    </div> -->
  </div>
</template>

<script>
  import TreeView from '@/components/rewrite/vue-json-tree-view/TreeView'
  import ListDataFilter from '@/components/list-data-filter/ListDataFilter'
  import Filter from './filter'
  import Service from './service'
  import Table from './table'
  export default {
    components: {
      TreeView, ListDataFilter
    },
    beforeMount () {
      this.tableColumns = Table(this)
    },
    mounted () {
      this.initInfo()
      this.getMessage()
    },
    beforeDestroy () {
      if (this.autoRefreshHandle) {
        clearInterval(this.autoRefreshHandle)
      }
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
        appID: 'UNKNOW',
        maxSize: 100,
        dataSource: {},
        options: {
          appIDs: [],
          levels: ['log', 'info', 'warning', 'error'],
          clientIDs: []
        },
        msgs: [],
        // 分页数据
        page: {
          total: 0,
          current: 1,
          size: 20
        },
        // 表格结构
        tableColumns: undefined,
        // 表格数据
        tableData: [],
        autoRefresh: false,
        autoRefreshHandle: null,
        autoRefreshInterval: 3000
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
      /**
       * 翻页
       */
      pageChange (page) {
        this.autoRefresh = false
        if (this.autoRefreshHandle) {
          clearInterval(this.autoRefreshHandle)
        }
        this.getMessage(page)
      },
      getMessage (page) {
        Service.getMessage(this.filterData, {
          current: page,
          size: this.page.size
        }).then(result => {
          if (result.isSuccess) {
            this.tableData = result.data.list
            Object.assign(this.page, result.data.page)
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
      /** 切换AppID */
      appIDsChange (value) {
        this.options.clientIDs = this.dataSource[value]
        this.filterData.clientID = 'ALL'
        this.getMessage()
      },
      autoRefreshChange (value) {
        console.log(value)
        this.autoRefresh = value
        if (value) {
          this.autoRefreshHandle = setInterval(this.getMessage, this.autoRefreshInterval)
        } else {
          clearInterval(this.autoRefreshHandle)
        }
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


