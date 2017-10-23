<template>
  <div class="web-console-msg-extend-row">
    <div class="web-console-msg-extend-row-item">
      <span class="web-console-msg-extend-row-item__title">Client ID：</span>
      <span class="web-console-msg-extend-row-item__content">{{row.clientID}}</span>
    </div>
    <div class="web-console-msg-extend-row-item">
      <span class="web-console-msg-extend-row-item__title">页面地址：</span>
      <span class="web-console-msg-extend-row-item__content">{{row.path}}</span>
    </div>
    <div class="web-console-msg-extend-row-item">
      <span class="web-console-msg-extend-row-item__title">客户端时间：</span>
      <span class="web-console-msg-extend-row-item__content">{{row.datetime | datetime('yyyy-MM-dd HH:mm:ss.S')}}</span>
    </div>
    <div class="web-console-msg-extend-row-item">
      <span class="web-console-msg-extend-row-item__title">浏览器信息：</span>
      <span class="web-console-msg-extend-row-item__content">{{row.browser}}</span>
    </div>
    <div class="web-console-msg-extend-row-item">
      <span class="web-console-msg-extend-row-item__title">控制台信息：</span>
      <div class="web-console-msg-extend-row-item__console">
        <div v-for="(detail, index) in row.msg" :key="index">
          <span v-if="typeof detail !== 'object'">{{detail | trim}}</span>
          <tree-view v-if="typeof detail === 'object'" :data="detail" :options="{maxDepth: 10,rootObjectKey:'object'}"></tree-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TreeView from '@/components/rewrite/vue-json-tree-view/TreeView'
  export default {
    components: {
      TreeView
    },
    props: {
      row: {
        type: Object,
        require: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .web-console-msg-extend-row {
    &-item {
      display: flex;
      padding: 3px 0;
      &__title {
        display: inline-block;
        font-weight:bolder;
        width: 100px;
        font-size: 12px;
      }
      &__content {
        display: inline-block;
        font-size: 12px;
        flex: 1;
      }
      &__console {
        /* padding-left: 100px; */
        font-size: 12px;
      }
    }
  }
</style>

