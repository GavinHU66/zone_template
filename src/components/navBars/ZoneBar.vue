<template>
  <div class="navbar-container">
    <div class="navbar">
      <div class="logo fl">
        <a><router-link to="/zone">空间首页</router-link></a>
      </div>
      <ul class="nav fr">

        <li v-fy-hover="{class:'show'}"
          v-for="(element, index) in $store.state.navBarLinks.links"
          :key="element.name"
          
        >
            <a style="margin-right: 10px;" v-if="element.shouldShow === true" :href="element.linkUrl" >{{element.linkName}}</a>
        </li>

        <li v-fy-hover="{class:'show'}">
          <a href="#"><img src="@/assets/icons/setting.svg" id="icon-setting" alt="icon load fail"/></a>
					<ul class="sub-nav" v-fy-hover="{class:'show'}">
						<li v-fy-hover="{class:'hover'}"><router-link to="/editzone">主页排版</router-link></li>
						<li v-fy-hover="{class:'hover'}"><router-link to="/control_panel">控制面板</router-link></li>
					</ul>
        </li>

        <li v-fy-hover="{class:'show'}">
          <a href="http://localhost:8080/#/personal_info"><img src="@/assets/icons/user.svg" id="icon-user" alt="icon load fail"/></a>
        </li>
        <li v-fy-hover="{class:'show'}"><a href="http://localhost:8080/#/personal_info">陈大文</a></li>
        <li v-fy-hover="{class:'show'}"><a href="http://localhost:8080/#/">退出登录</a></li>
        
      </ul>
    </div>
  </div>
</template>
<script>
import fyHover from '@/directives/hover';
export default {
  name: "ZoneBar",
  
	directives: {
		fyHover
  },

};
</script>


<style lang="scss">
.sub-nav > li {
    font-size: 13px;
    color: #606266;
}

.nav {
    font-weight: 700;
    color: white;

    img {
      cursor: pointer;
    }
}

#icon-user{
    margin-right: 4px;
    margin-left: 10px;
}
.navbar-container .navbar .nav > li > a {
    margin-left: 12px;
    padding-left: 0px;
    padding-right: 0px;
    margin-right: 3px;
}
</style>
