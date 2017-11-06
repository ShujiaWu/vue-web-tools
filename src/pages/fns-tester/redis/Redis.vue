<template>
  <div class="redis-tester">
    <Card style="margin-bottom:20px;">
      <p slot="title">测试状态数据：</p>
      <div class="redis-tester-info">
        <p v-for="(msg,index) in msgs" :key="index">{{msg}}</p>
      </div>
    </Card>
    <Card>
      <p slot="title">Redis 功能测试</p>
      <div>
        <div style="margin-bottom: 20px">
          <p style="margin-bottom:10px;">String 类型获取测试</p>
          <div>
            <span>Key:</span>
            <Input v-model="form.getString.key" style="width: 100px"></Input>
            <Button type="primary" @click="getString()">获取</Button>
          </div>
        </div>
        <div>
          <p style="margin-bottom:10px;">String 类型写入测试</p>
          <div>
            <span>Key:</span>
            <Input v-model="form.setString.key" style="width: 100px"></Input>
            <span>Value:</span>
            <Input v-model="form.setString.value" style="width: 100px"></Input>
            <Button type="primary" @click="setString()">写入</Button>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
  import Service from './service'
  export default {
    data () {
      return {
        form: {
          getString: {
            key: ''
          },
          setString: {
            key: '',
            value: ''
          }
        },
        msgs: []
      }
    },
    methods: {
      // 获取String类型的值
      getString () {
        if (!this.form.getString.key) {
          this.$Message.error('请填写Key的值')
          return
        }
        Service.getString(this.form.getString.key).then(result => {
          if (result.isSuccess) {
            this.msgs.unshift(`【Success】Redis - getString - ${result.data.key} - ${result.data.value}`)
          } else {
            this.msgs.unshift(`【Error】Redis - getString - ${result.message}`)
          }
        })
      },
      // 获取String类型的值
      setString () {
        if (!this.form.setString.key) {
          this.$Message.error('请填写Key的值')
          return
        }
        if (!this.form.setString.value) {
          this.$Message.error('请填写Value的值')
          return
        }
        Service.setString(this.form.setString.key, this.form.setString.value).then(result => {
          if (result.isSuccess) {
            this.msgs.unshift(`【Success】Redis - setString - ${result.data.key} - ${result.data.value}`)
          } else {
            this.msgs.unshift(`【Error】Redis - setString - ${result.message}`)
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .redis-tester {
    &-info {
      height: 200px;
      overflow: auto;
    }
  }
</style>
