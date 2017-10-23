<template>
  <nav style="height:100%;">
    <Menu @on-select="menuSelect" :open-names="openNames" :active-name="activeName" v-if="menus.length" width="auto" :accordion="true" style="min-height:100%;" theme="dark">
      <Submenu v-for="(category, category_index) in menus" :key="category_index" :name="category.name">
        <template slot="title">
          <Icon :type="category.icon" ></Icon>{{category.name}}</template>
          <Menu-item v-for="(item, menu_index) in category.menus" :key="menu_index" :name="item.target.url" @click.native="menuItemClick(item)">
            <Icon :type="item.icon"></Icon>{{item.name}}
            <!-- <Icon :type="item.icon"></Icon>{{$store.state.routes.map[item.name]?$store.state.routes.map[item.name].meta.title:item.title}} -->
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
        this.menus = result.data
        // 形成‘菜单-菜单组’的映射
        result.data.forEach((element) => {
          let category = element.name
          element.menus.forEach(element => {
            this.map[element.target.url] = category
          }, this)
        }, this)
      })
    },
    data () {
      return {
        menus: [], // 菜单列表
        map: {} // 菜单与菜单组的映射关系
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
      menuItemClick (item) {
        switch (item.target.type) {
          case 'LINK':
            if (item.target.replace) {
              location.replace(item.target.url)
            } else {
              location.href = item.target.url
            }
            break
          case 'ROUTE':
            let target = {
              name: item.target.url,
              params: item.target.params,
              query: item.target.query
            }
            if (item.target.replace) {
              this.$router.replace(target)
            } else {
              this.$router.push(target)
            }
            break
        }
      },
      /**
       * 菜单选择
       */
      menuSelect (name) {
        console.log(name)
        // if (name.indexOf('http') === 0) {
        //   window.location.href = name
        // } else {
        //   if (this.$store.state.routes.map[name]) {
        //     this.$router.push({
        //       name: name
        //     })
        //   } else {
        //     this.$router.push({
        //       name: '404'
        //     })
        //   }
        // }
        // switch (item.target.type) {
        //   case 'LINK':
        //     if (item.target.replace) {
        //       location.replace(item.target.url)
        //     } else {
        //       location.href = item.target.url
        //     }
        //     break
        //   case 'ROUTE':
        //     let target = {
        //       name: item.target.url,
        //       params: item.target.params,
        //       query: item.target.query
        //     }
        //     if (item.target.replace) {
        //       this.$router.replace(target)
        //     } else {
        //       this.$router.push(target)
        //     }
        //     break
        // }
      }
    }
  }
</script>

<style scoped>
  nav {
    display: block;
  }
</style>
