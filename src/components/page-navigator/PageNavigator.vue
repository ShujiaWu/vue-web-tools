<template>
  <div class="navigator">
    <div v-for="(group, index) in navigators" :key="index">
      <div class="navigator-group-name">
        <h2>{{group.name}}</h2>
      </div>
      <ul>
        <li v-for="(nav,index) in group.list" :key="index">
          <a @click="navClick(nav)">
            <span class="icon" v-if="nav.icon.indexOf('http') === 0 || nav.icon.indexOf('//') === 0" :style="{'background-image': `url(${nav.icon})`}"></span>
            <Icon v-else :type="nav.icon" size="40"></Icon>
            <div style="margin-top:5px">{{nav.name}}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      navigators: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data () {
      return {
      }
    },
    methods: {
      navClick (nav) {
        switch (nav.target.type) {
          case 'LINK':
            if (nav.target.replace) {
              location.replace(nav.target.url)
            } else {
              location.href = nav.target.url
            }
            break
          case 'ROUTE':
            let target = {
              name: nav.target.url,
              params: nav.target.params,
              query: nav.target.query
            }
            if (nav.target.replace) {
              this.$router.replace(target)
            } else {
              this.$router.push(target)
            }
            break
        }
      }
    }
  }
</script>

<style scoped>
  .navigator-group-name {
    margin-bottom: 20px;
  }

  .navigator ul {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .navigator li {
    display: inline-block;
    min-width: 200px;
    max-width: 200px;
    margin: 10px 20px;
    border-radius: 5px;
    background: #FFF;
    border: 1px solid #EFEFEF;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    padding: 20px;
  }

  .navigator li a {
    color: #666;
    display: block;
  }

  .navigator li:hover {
    box-shadow: 0 0 10px rgba(77, 161, 255, 1);
    border: 1px
  }

  .navigator li:hover a {
    color: #4DA1FF;
  }

  .navigator li a .icon {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-size: cover;
  }
</style>
