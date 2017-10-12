<template>
  <div>
    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;text-align:right;" v-if="showCheckAll">
      <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="checkAllOptions" :disabled="readonly">全选</Checkbox>
    </div>
    <CheckboxGroup v-model="checked" @on-change="checkChange">
      <Checkbox :label="item.value" v-for="(item,index) in options" :key="index" style="margin-right:20px;" :disabled="readonly">{{item.label}}</Checkbox>
    </CheckboxGroup>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    },
    showCheckAll: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.checked.splice(0, this.checked.length, ...this.value)
    this.checkChange(this.checked)
  },
  data () {
    return {
      indeterminate: false,
      checkAll: false,
      checked: []
    }
  },
  watch: {
    value (newValue, oldValue) {
      this.checked.splice(0, this.checked.length, ...newValue)
      if (this.checked.length === this.options.length) {
        this.indeterminate = false
        this.checkAll = true
      } else if (this.checked.length > 0) {
        this.indeterminate = true
        this.checkAll = false
      } else {
        this.indeterminate = false
        this.checkAll = false
      }
    }
  },
  methods: {
    checkAllOptions () {
      if (this.indeterminate) {
        this.checkAll = false
      } else {
        this.checkAll = !this.checkAll
      }
      this.indeterminate = false

      if (this.checkAll) {
        this.checked = []
        this.options.forEach((element) => {
          this.checked.push(element.value)
        }, this)
      } else {
        this.checked = []
      }
    },
    checkChange (data) {
      if (data.length === this.options.length) {
        this.indeterminate = false
        this.checkAll = true
      } else if (data.length > 0) {
        this.indeterminate = true
        this.checkAll = false
      } else {
        this.indeterminate = false
        this.checkAll = false
      }
      let result = []
      result.splice(0, 0, ...this.checked)
      this.$emit('input', result)
    }
  }
}
</script>