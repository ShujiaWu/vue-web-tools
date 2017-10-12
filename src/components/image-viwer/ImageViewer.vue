<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
// 配置及其他方法详见 https://github.com/fengyuanchen/viewerjs
// https://github.com/mirari/v-viewer

import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

const defaults = {
  zIndex: 100000000
}
export default {
  props: {
    options: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    createViewer () {
      const options = Object.assign({}, defaults, this.options)
      this.$viewer && this.$viewer.destroy()
      this.$viewer = new Viewer(this.$el, options)
      this.$emit('inited', this.$viewer)
    },
    renew () {
      this.$nextTick(() => {
        this.createViewer()
      })
    }
  },
  watch: {
    images () {
      this.$nextTick(() => {
        this.createViewer()
      })
    },
    options: {
      handler: function () {
        this.$nextTick(() => {
          this.createViewer()
        })
      },
      deep: true
    }
  },
  mounted () {
    this.createViewer()
  },
  destroyed () {
    this.$viewer && this.$viewer.destroy()
  }
}
</script>