<template>
  <div>
    <!-- 搜索 -->
    <ListDataFilter :data="filter" class="margin-b-10">
      <div>
        <Button type="primary" size="small" class="margin-r-10" @click="getList(page.current,true)">刷新</Button>
        <Button type="primary" size="small" class="margin-r-10" @click="add" v-if="permission & 2">添加菜单</Button>
      </div>
    </ListDataFilter>
    <!-- 表格 -->
    <Table border :columns="tableColumns" :data="tableData" class="margin-b-10"></Table>
    <!-- 翻页 -->
    <div class="margin-b-10">
      <Page :total="page.total" :page-size="page.size" :current="page.current" show-elevator @on-change="pageChange"></Page>
    </div>
    <!-- 弹窗 -->
    <Modal v-model="dialog.show" title="title" :mask-closable="false">
      <div slot="header">
        <h3 v-if="dialog.type === 'add'">添加菜单</h3>
        <h3 v-if="dialog.type === 'modify'">修改菜单</h3>
      </div>
      <div>
        <Form ref="form" :model="dialog.form.data" :rules="dialog.form.rule">
          <Row :gutter="10">
            <Col :span="8">
              <Form-item :label="`${dialog.form.label.title}：`" prop="title">
                <Input v-model="dialog.form.data.title" :placeholder="dialog.form.placeholder.title" :readonly="readonly"></Input>
              </Form-item>
            </Col>
            <Col :span="8">
              <Form-item :label="`${dialog.form.label.icon}：`" prop="icon">
                <Input v-model="dialog.form.data.icon" :placeholder="dialog.form.placeholder.icon" :readonly="readonly"></Input>
              </Form-item>
            </Col>
            <Col :span="8">
              <Form-item :label="`${dialog.form.label.order}：`" prop="order">
                <Input v-model="dialog.form.data.order" :placeholder="dialog.form.placeholder.order" number :readonly="readonly"></Input>
              </Form-item>
            </Col>
            <Col :span="24">
              <Form-item :label="`${dialog.form.label.name}：`" prop="name">
                <Input v-model="dialog.form.data.name" :placeholder="dialog.form.placeholder.name" :readonly="readonly"></Input>
              </Form-item>
            </Col>
            <Col :span="24">
              <Form-item :label="`${dialog.form.label.code}：`" prop="code">
                <Input v-model="dialog.form.data.code" :placeholder="dialog.form.placeholder.code" :readonly="readonly"></Input>
              </Form-item>
            </Col>
            <Col :span="8">
              <Form-item :label="`${dialog.form.label.show}：`" prop="show">
                <Select v-model="dialog.form.data.show" :placeholder="dialog.form.placeholder.show" :disabled="readonly">
                  <Option v-for="item in dialog.form.options.show" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                </Select>
              </Form-item>
            </Col>
          </Row>
        </Form>
      </div>
      <div slot="footer">
        <Button @click.native="dialog.show = false">关闭</Button>
        <Button type="primary" @click="updateModify" v-if="dialog.type === 'modify' && (permission & 4)" :loading="dialog.btnLoadingStatus.modify">修改</Button>
        <Button type="primary" @click="updateAdd" v-if="dialog.type === 'add'" :loading="dialog.btnLoadingStatus.add">添加</Button>
      </div>
    </Modal>
    <!-- 弹窗移动 -->
    <Modal v-model="dialogMove.show" title="title" :mask-closable="false">
      <div slot="header">
        <h3>移动菜单</h3>
      </div>
      <div>
        <div>
          <h3 class="padding-b-15">菜单所在分组：</h3>
          <Select v-model="dialogMove.groupId">
            <Option v-for="item in dialogMove.groups" :value="item.value" :key="item.value" >{{ item.label }}</Option>
          </Select>
        </div>
      </div>
      <div slot="footer">
        <Button @click.native="dialogMove.show = false">取消</Button>
        <Button type="primary" @click="updateMove" :loading="dialogMove.btnLoadingStatus.modify">移动</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import ListDataFilter from '@/components/list-data-filter/ListDataFilter'
  import Filter from './filter'
  import Table from './table'
  import Service from './service'
  import Form from './form'
  export default {
    components: {
      ListDataFilter
    },
    beforeMount () {
      this.tableColumns = Table(this)
    },
    mounted () {
      this.getList()
    },
    data () {
      return {
        // 用户页面权限
        permission: this.$store.state.page.permissions[this.$route.name] || 0,
        groupId: this.$route.query['id'],
        // 分页数据
        page: {
          total: 0,
          current: 1,
          size: 20
        },
        // 查询
        filter: Filter(this),
        filterData: {
          title: undefined,
          name: undefined
        },
        // 表格结构
        tableColumns: undefined,
        // 表格数据
        tableData: [],
        dialog: {
          show: false,
          type: 'add',
          form: Form(this),
          btnLoadingStatus: {
            add: false,
            modify: false
          }
        },
        dialogMove: {
          show: false,
          groups: undefined,
          menuId: undefined,
          groupId: undefined,
          btnLoadingStatus: {
            move: false
          }
        }
      }
    },
    computed: {
      readonly () {
        return this.dialog.type === 'modify' && !(this.permission & 4)
      }
    },
    methods: {
      /**
       * 搜索
       */
      search (data) {
        Object.assign(this.filterData, data)
        this.getList(1, true, '查询成功')
      },
      /**
       * 重置搜索
       */
      resetSearch () {
        this.filterData.title = undefined
        this.filterData.name = undefined
        this.getList(1)
      },
      /**
       * 翻页
       */
      pageChange (page) {
        this.getList(page)
      },
      /**
       * 获取列表数据
       */
      getList (page) {
        Service.getList(this.groupId, page, this.filterData).then(result => {
          if (result.isSuccess) {
            this.tableData = result.data.list
            Object.assign(this.page, result.data.page)
            if (arguments[1]) {
              this.$Notice.success({
                title: arguments[2] ? arguments[2] : '刷新成功'
              })
            }
          } else {
            this.$Notice.error({
              title: '获取数据失败',
              desc: result.message
            })
          }
        })
      },
      /**
       * 删除数据
       */
      delete (data) {
        let _this = this
        this.$Modal.confirm({
          title: '删除确认！',
          content: `您当前正在删除菜单组（<span class="text-warning">${data.title}</span>），该操作为不可逆操作，确认后删除！`,
          onOk () {
            Service.delete(data.id).then(result => {
              console.log(result)
              if (result.isSuccess) {
                this.$Notice.success({
                  title: '删除成功',
                  desc: result.message
                })
                _this.getList(1)
              } else {
                this.$Notice.error({
                  title: '删除失败',
                  desc: result.message
                })
              }
            })
          }
        })
      },
      /**
       * 添加-Step1
       */
      add () {
        this.$refs['form'].resetFields()
        this.dialog.type = 'add'
        this.dialog.show = true
      },
      /**
       * 添加-Step2
       */
      updateAdd () {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            // 表单合法
            this.dialog.btnLoadingStatus.add = true
            Service.add(this.groupId, this.dialog.form.data).then(result => {
              this.dialog.btnLoadingStatus.add = false
              if (result.isSuccess) {
                // 成功
                this.$Notice.success({
                  title: '添加成功',
                  desc: result.message
                })
                this.dialog.show = false
                this.getList(1)
              } else {
                // 失败
                this.$Notice.error({
                  title: '添加失败',
                  desc: result.message
                })
              }
            })
          } else {
            // 表单不合法
            this.$Message.error('请检查输入的信息是否有误')
          }
        })
      },
      /**
       * 修改-step-1
       */
      modify (data) {
        this.$refs['form'].resetFields()
        this.dialog.type = 'modify'
        this.dialog.show = true
        Object.assign(this.dialog.form.data, data)
      },
      /**
       * 修改-step-2
       */
      updateModify () {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            // 表单合法
            this.dialog.btnLoadingStatus.modify = true
            Service.modify(this.dialog.form.data).then(result => {
              this.dialog.btnLoadingStatus.modify = false
              if (result.isSuccess) {
                // 成功
                this.$Notice.success({
                  title: '修改成功',
                  desc: result.message
                })
                this.dialog.show = false
                this.getList(this.page.current)
              } else {
                // 失败
                this.$Notice.error({
                  title: '修改失败',
                  desc: result.message
                })
              }
            })
          } else {
            this.$Message.error('请检查输入的信息是否有误')
          }
        })
      },
      /**
       * 移动菜单-Step-1
       */
      move (data) {
        if (this.dialogMove.groups) {
          this.dialogMove.groupId = Number(this.$route.query.id)
          this.dialogMove.menuId = data.id
          this.dialogMove.show = true
        } else {
          Service.getAllGroup().then(result => {
            if (result.isSuccess) {
              this.dialogMove.groups = result.data.list
              this.dialogMove.groupId = Number(this.$route.query.id)
              this.dialogMove.menuId = data.id
              this.dialogMove.show = true
            } else {
              this.$Notice.error({
                title: '获取菜单分组失败',
                desc: result.message
              })
            }
          })
        }
      },
      /**
       * 移动菜单-Step-2
       */
      updateMove () {
        this.dialogMove.btnLoadingStatus.move = true
        Service.move(this.dialogMove.menuId, this.dialogMove.groupId).then(result => {
          this.dialogMove.btnLoadingStatus.move = false
          if (result.isSuccess) {
            // 成功
            this.$Notice.success({
              title: '移动成功',
              desc: result.message
            })
            this.dialogMove.show = false
            this.getList(1)
          } else {
            // 失败
            this.$Notice.error({
              title: '移动失败',
              desc: result.message
            })
          }
        })
      },
      fnManage (data) {
        this.$router.push({
          name: 'PageFnList',
          query: {
            id: data.id
          }
        })
      }
    }
  }
</script>

<style>
  
</style>
