<template>
	<div class="main">
		<header>
			<a class="title" href="/">研发专用</a>
			<!-- <ul>
				<li>
					<a @click="logout">退出登录</a>
				</li>
			</ul> -->
		</header>
		<main>
			<Row style="height:100%;overflow:hidden;">
				<Col :xs="6" :sm="6" :md="5" :lg="4" style="height:100%;overflow:auto;">
					<MainNav></MainNav>
				</Col>
				<Col :xs="18" :sm="18" :md="19" :lg="20" style="height:100%;overflow:auto;">
					<div class="main-layout">
						<Breadcrumb class="breadcrumb">
							<Breadcrumb-item :href="item.path" v-for="(item,index) in $store.state.page.breadcurmb" :key="index">{{item.meta.title}}</Breadcrumb-item>
						</Breadcrumb>
						<div class="main-layoyt-page">
							<router-view></router-view>
						</div>
					</div>
				</Col>
			</Row>
		</main>
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
.main {
	height: 100%;
	position: relative;
}
header {
	border-bottom: 1px solid #dddee1;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
}

header a.title {
	color: #666;
	font-size: 20px;
	padding: 10px 24px;
	line-height: 1.5;
	display: inline-block;
}

header ul {
	float: right;
	padding: 10px;
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
	background: #FAFBFD;
}
.breadcrumb {
	position: absolute;
	tab-size: 0;
	left: 0;
	right: 0;
	padding: 10px;
	border-bottom: 1px solid #dddee1;
}
.main-layoyt-page {
	position: absolute;
	tab-size: 0;
	top:42px;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: auto;
	padding: 20px;
}
</style>
