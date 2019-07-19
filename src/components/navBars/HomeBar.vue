<template>
  <div class="navbar-container">
    <div class="homebar navbar">
      <div class="logo fl">
        <a><router-link to="/zone">空间首页</router-link></a>
      </div>
      <ul class="nav fr">
        <li><a href="#">文章</a></li>
        <li><a href="#">资源</a></li>
        <li><a href="#">相册</a></li>
        <li><a href="#"><router-link to="/zone">退出主页</router-link></a></li>
        <li v-fy-hover="{class:'show'}">
          <a href="#">设置</a>
					<ul class="sub-nav" v-fy-hover="{class:'show'}">
						<li v-fy-hover="{class:'hover'}"><router-link to="/editzone">主页装扮</router-link></li>
					</ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import fyHover from '@/directives/hover';
export default {
	name: "HomeBar",
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
</style>
