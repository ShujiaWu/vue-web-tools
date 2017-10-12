<template>
  <nav style="height:100%;">
    <Menu @on-select="menuSelect" :open-names="openNames" :active-name="activeName" v-if="menus.length" width="auto" :accordion="true" style="min-height:100%;">
      <Submenu v-for="(category, category_index) in menus" :key="category_index" :name="category.title">
        <template slot="title">
          <Icon :type="category.icon" ></Icon>{{category.title}}</template>
        <Menu-item v-for="(item, menu_index) in category.menus" :key="menu_index" :name="item.name">
          <Icon :type="item.icon"></Icon>{{$store.state.routes.map[item.name]?$store.state.routes.map[item.name].meta.title:item.title}}
        </Menu-item>
      </Submenu>
    </Menu>
  </nav>
</template>

<script>
  import Service from './service'
  export default {
    beforeMount () {
      Service.getMenus().then(result => {
        this.menus = result.data.list
        result.data.list.forEach((element) => {
          let category = element.title
          element.menus.forEach(element => {
            this.map[element.name] = category
          }, this)
        }, this)
      })
    },
    data () {
      return {
        menus: [],
        map: {}
      }
    },
    computed: {
      /**
       * 激活的菜单名
       */
      activeName () {
        return this.$store.state.page.breadcurmb[this.$store.state.page.breadcurmb.length - 1].name
      },
      /**
       * 展开的菜单组名
       */
      openNames () {
        return [this.map[this.activeName]]
      }
    },
    methods: {
      /**
       * 菜单选择
       */
      menuSelect (name) {
        if (name.indexOf('http') === 0) {
          window.location.href = name
        } else {
          if (this.$store.state.routes.map[name]) {
            this.$router.push({
              name: name
            })
          } else {
            this.$router.push({
              name: '404'
            })
          }
        }
      }
    }
  }
</script>

<style scoped>
  nav {
    display: block;
  }
</style>
