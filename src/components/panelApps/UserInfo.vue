<template>
  <div class="panel-app-container user-info-container">
    <a href="#"><router-link to="/personal_info"><p>个人资料</p></router-link></a>
    <div>用户名 <p>{{ username }}</p></div>
    <div>性别 <p>{{ gender }}</p></div>
    <div>活跃度 <p>{{ activeness }}</p></div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  // props: ['username', 'gender', 'activness']

  data() {
    return {
      username: "陈大文",
      gender: "男",
      activeness: "93%",
    }
  }
};
</script>

<style lang="scss">
.user-info p {
  display: inline-block;
}

iframe {
  display: block;
  width: 100%;
}
</style>