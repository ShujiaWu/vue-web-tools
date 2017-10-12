<template>
  <div>
    <div class="search-area">
      <span v-for="(object,label) in data.fields" :key="label">
        {{object.label}}：
        <!-- 下拉选项 -->
        <i-select v-model="object.text" :style="object.style" v-if="object.type == types.Options">
          <i-option v-for="option in object.options" :key="option.value" :value="option.value" :placeholder ="object.placeholder">{{option.label}}</i-option>
        </i-select>
        <!-- 下拉多选 -->
        <i-select v-model="object.text" :style="object.style" v-if="object.type == types.OptionsMulti" :multiple="true">
          <i-option v-for="option in object.options" :key="option.value" :value="option.value" :placeholder ="object.placeholder">{{option.label}}</i-option>
        </i-select>
        <!-- 文本输入 -->
        <Input :style="object.style" v-model="object.text" v-if="object.type == types.Input" :placeholder ="object.placeholder"></Input>
        <!-- 数字选择 -->
        <span  v-if="object.type == types.NumberArea">
          <Input :style="object.style" v-model="object.text.min" :placeholder ="object.placeholder"></Input>
          -
          <Input :style="object.style" v-model="object.text.max" :placeholder ="object.placeholder"></Input>
        </span>
        <!-- 日期选择-区间 -->
        <Date-picker v-if="object.type == types.DataTimeArea" v-model="object.text" :format="object.format" 
          :type="object.selectType" :placeholder="object.placeholder" :style="object.style"></Date-picker>
        <!-- 日期选择-单个 -->
        <Date-picker v-if="object.type == types.DataTime" v-model="object.text" :format="object.format" 
          :type="object.selectType" :placeholder="object.placeholder" :style="object.style"></Date-picker>
      </span>
      <span>
        <i-button v-for="(object, label) in data.buttons" :key="label" class="margin-r-5"
          :type="object.type" :icon="object.icon" @click.native="object.method()" :style="object.style">{{object.label}}</i-button>
      </span>
    </div>
    
    <slot></slot>
    
    <Alert show-icon show-icon class="margin-t-10" v-if="data.showFilterContent && showFilterContent">
      当前是查询模式，查询条件为：
      <span v-for="(object,label,index) in data.fields" :key="index" v-if="showFilterContentItem(object)">
        <span v-if="object.type === types.Input">{{object.label}}：{{object.value}}</span>
        <span v-if="object.type === types.Options">{{object.label}}：{{getOptionsLabel(object.options,object.value)}}</span>
        <span v-if="object.type === types.OptionsMulti">{{object.label}}：{{getOptionsLabel(object.options,object.value)}}</span>
        <span v-if="object.type === types.NumberArea && (object.value.min || object.value.max)">{{object.label}}：{{object.value.min ? object.value.min : 0}} - {{object.value.max ? object.value.max : 'Max'}}</span>
        <span v-if="object.type === types.DataTimeArea">{{object.label}}：{{object.value[0] | datetime(object.format)}} - {{object.value[1] | datetime(object.format)}}</span>
        <span v-if="object.type === types.DataTime">{{object.label}}：{{object.value | datetime(object.format)}}</span>
      </span>
    </Alert>
    
  </div>
</template>

<script>
  import Constant from '@/filters/constant'
  import Types from './types'
  export default {
    name: 'ListDataFilter',
    props: {
      data: {
        type: Object,
        default () {
          return {
            fields: {},
            buttons: {}
          }
        }
      }
    },
    data () {
      return {
        types: Types
      }
    },
    computed: {
      /**
       * ===========================================================
       *  计算是否显示搜索的条件
       * ===========================================================
       */
      showFilterContent () {
        let result = false
        for (var key in this.data.fields) {
          if (this.data.fields.hasOwnProperty(key)) {
            let object = this.data.fields[key]
            switch (object.type) {
              case Types.NumberArea:
                result = result || !!object.value.min || !!object.value.max
                break
              case Types.DataTimeArea:
                result = result || !!object.value[0] || !!object.value[1]
                break
              case Types.OptionsMulti:
                result = result || (object.value && object.value.length > 0)
                break
              default:
                if (object.value === 0) {
                  result = result || !!(object.value + '')
                } else {
                  result = result || !!object.value
                }
            }
          }
        }
        return result
      }
    },
    methods: {
      /**
       * ===========================================================
       *  获取静态变量对应的值
       * ===========================================================
       */
      getOptionsLabel (options, values) {
        if (values === undefined || values === null || values === '') {
          return
        }
        let valueArray = []
        if ((typeof values) === 'string') {
          valueArray = [values]
        } else {
          valueArray = values
        }
        let result = ''
        // valueArray.forEach((element) => {
        //   result += Constant.getLabelByValue(options, element) + ','
        // }, this)
        // result = result.substring(0, result.lastIndexOf(','))
        result = Constant(valueArray, options, 'v2l', true, ',')
        return result
      },
      /**
       * ===========================================================
       *  显示搜索的条件项
       * ===========================================================
       */
      showFilterContentItem (object) {
        switch (object.type) {
          case Types.NumberArea:
            return !!object.value.min || !!object.value.max
          case Types.OptionsMulti:
            return object.value && object.value.length > 0
          case this.types.DataTimeArea:
            return object.value.length
          default:
            if (object.value === 0) {
              return !!(object.value + '')
            }
            return !!object.value
        }
      }
    }
  }
</script>

<style scoped>
  .search-area {
    border: 1px solid #d7dde4;
    margin-bottom: 10px;
  }

  .search-area>span {
      padding: 10px;
      display: inline-block;
  }
</style>
