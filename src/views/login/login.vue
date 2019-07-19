<template>
  <div class="login-container">
    <div class="login-input-container">
      <div class="form-input-element">
        <div class="login-inputbox"><input class="login-input-field" v-model="username" placeholder="用户名(abc)" /></div>
        <div class="login-inputbox"><input class="login-input-field" v-model="password" placeholder="密码(123)" v-on:keyup.enter="handleLogin"/></div>
        <div class="login-inputbox"><button class="login-button" @click="handleLogin">立即登录</button></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',

  date(){
    return {
      username: 'abc',
      password: '123',
    }
  },

  methods: {
    handleLogin(){
      if (this.username === "abc" && this.password === "123"){
        this.$store.commit("logIn");
        this.$router.push('/zone');
      } else {
        alert("登录失败");
      } 
    }
  }
}


</script>

<style lang="scss">
  .login-container{
      .form-input-element{
        display: inline-block;
        height: 48px;
        line-height: 48px;
      }
  }

  .login-container {
      background-repeat: no-repeat;
      background-image: url("../../assets/background/loginbm.jpg");
      // background-size: 100% 100%;
  }

  .login-input-container {

      position: relative;
      background-color: skyblue;
      width: 300px;
      height: 350px;

      .login-inputbox {
        // margin: 10px;
      }
      .login-input-field {
          float: left;
          width: calc(100% - 40px);
          height: 50px;
          line-height: 50px;
          border-radius: 8px;
          padding: 0 10px;
          border: 1px solid #dedede;
          margin: 9px 0 1px 21px;
          font-size: 14px;
          color: #999;
          box-shadow: none;
          margin-bottom: 10px;
      }

      .login-button {
          float: left;
          // background: transparent;
          width: 100%;
          height: 50px;
          cursor: pointer;
          font-family: "Microsoft YaHei";
          font-size: 18px;
          border-radius: 6px;
          position: relative;
          left: 0px;
          top: 0px;
          box-sizing: border-box;
      }
  }


</style>

