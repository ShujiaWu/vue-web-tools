<template>
  <div>
    <ListDataFilter :data="filter"></ListDataFilter>
    <div style="border: 1px solid #EEE" class="margin-b-10 padding-10">
      <p>列表查询过滤数据：</p>
      {{filterData}}
    </div>
    <div>
      <!-- 表格 -->
      <Table border :columns="tableColumns" :data="tableData" class="margin-b-10"></Table>
      <!-- 翻页 -->
      <div class="margin-b-10">
        <Page :total="page.total" :page-size="page.size" :current="page.current" show-elevator @on-change="pageChange"></Page>
      </div>
    </div>

    <div>
      <p>表单示例：</p>
      <Form ref="form" :model="form.data" :rules="form.rule">
        <Form-item :label="`${form.label.title}：`" prop="title">
          <Input v-model="form.data.title" :placeholder="form.placeholder.title"></Input>
        </Form-item>
      </Form>
      <div>
        <Button type="primary" size="small" @click="validateForm" class="margin-r-10">表单校验</Button>
        <Button type="primary" size="small" @click="resetForm" class="margin-r-10">表单重置</Button>
        <Button type="primary" size="small" @click="setForm" class="margin-r-10">表单赋值</Button>
      </div>
    </div>

    <FileUpload @file-change="fileChange" :multiple="false" :max-count="1" buttonName="选择文件" :default-list="files" :disabled="false"></FileUpload>

    <WSection>
      <h3 slot="title">这里显示的是标题</h3>
      <div>测试测试测试测试测试测试</div>
    </WSection>
    
  </div>
</template>

<script>
  import ListDataFilter from '@/components/list-data-filter/ListDataFilter'
  import FileUpload from '@/components/file-upload/FileUpload'
  import WSection from '@/components/w-section/Section'
  import Filter from './filter'
  import Table from './table'
  import Form from './form'
  export default {
    components: {
      ListDataFilter, FileUpload, WSection
    },
    data () {
      return {
        // 查询
        filter: Filter(this),
        filterData: '',
        // 分页数据
        page: {
          total: 0,
          current: 1,
          size: 20,
          pages: 0
        },
        // 表格结构
        tableColumns: Table(this),
        // 表格数据
        tableData: [
          {
            name: '产品1',
            code: 'P001'
          },
          {
            name: '产品2',
            code: 'P002'
          }
        ],
        form: Form(),
        files: [{
          'name': 'img1.jpg',
          'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar',
          'uuid': '97784842-34c2-4cfa-b7f8-bed519bcd260'
        }]
      }
    },
    methods: {
      search (data) {
        this.filterData = data
      },
      resetSearch () {
        this.filterData = undefined
      },
      pageChange (page) {
        alert(page)
      },
      validateForm () {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.$Message.success('输入的信息正确')
          } else {
            this.$Message.error('请检查输入的信息是否有误')
          }
        })
      },
      resetForm () {
        this.$refs['form'].resetFields()
      },
      setForm () {
        this.form.data.title = '值'
      },
      fileChange (list) {
        console.log('文件改变')
        console.log(list)
      }
    }
  }
</script>
