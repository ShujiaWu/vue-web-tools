<template>
	<div class="main">
		<!-- 头部 -->
		<header>
			<Breadcrumb class="breadcrumb">
				<Breadcrumb-item :href="item.path" v-for="(item,index) in $store.state.page.breadcurmb" :key="index">{{item.meta.title}}</Breadcrumb-item>
			</Breadcrumb>
			<ul class="header-right-fns">
				<li>
					<a @click="logout">退出登录</a>
				</li>
			</ul>
		</header>
		<!-- 左侧菜单 -->
		<div class="main-left-nav">
			<div class="logo">
				<a>
					<img src="../assets/logo.png" alt="">
					<h1>研发专用</h1>
				</a>
			</div>
			<MainNav></MainNav>
		</div>
		<!-- 主页面 -->
		<div class="main-layoyt-page">
			<router-view style="padding: 20px;background:#FFF;"></router-view>
		</div>
	</div>
</template>

<script>
  import MainNav from '@/components/main-nav/MainNav'
  // import UserService from '@/pages/account/common/service'
  export default {
    components: { MainNav },
    methods: {
      logout () {
        // UserService.logout().then(result => {
        //   if (result.isSuccess) {
        //     this.$router.push('/login')
        //   } else {
        //     this.$Notice.error({
        //       title: '登出失败',
        //       desc: result.message
        //     })
        //   }
        // })
      }
    }
  }
</script>

<style scoped>
.main-left-nav {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 230px;
	z-index: 10;
	background: #495060;
}
.logo {
	height: 55px;
	padding: 0 10px;
	border-bottom: 1px solid #444d61;
	box-shadow: 0 2px 1px 1px rgba(99, 99, 99, 0.1);
}
.logo a {
	display: block;
	max-height: 100%;
}
.logo img {
	max-height: 54px;
	display: inline-block;
	vertical-align: top;
}
.logo h1 {
	display: inline-block;
	vertical-align: bottom;
	color: #FFF;
}
.main-left-nav a.title {
	color: #666;
	padding: 0 10px;
	display: inline-block;
}

header {
	border-bottom: 1px solid #dddee1;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding-left: 230px;
	z-index: 10;
	height: 54px;
	box-shadow: 0 2px 1px 1px hsla(0,0%,39%,.1);
	background: #FFF;
}

.header-right-fns {
	float: right;
	padding: 10px 20px 10px 0;
	height: 54px;
	line-height: 30px;
}

main {
	position: absolute;
	top: 51px;
	left: 0;
	right: 0;
	bottom: 0;
}

nav {
	display: inline-block;
}

.main-layout {
	position: relative;
	height: 100%;
	overflow: hidden;
}
.breadcrumb {
	display: inline-block;
	line-height: 54px;
	margin-left: 20px;
}
.main-layoyt-page {
	overflow: auto;
	padding-left: 230px;
	padding-top: 54px;
}
</style>
