<template>
  <div>   <!-- ez = editzone -->
    <div class="ez-container">

      <div class="ez-head navbar-container">
      <!-- <div class="ez-head"> -->
        <div class="navbar">
          <div class="logo fl">
            <a href="#">空间装扮</a>
          </div>
          <ul class="nav fr">
            <li><a href="#" @click="saveEditing">保存</a></li>
            <li><a href="#" @click="exitEdit">退出</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "EditZoneBar",
  methods: {
    saveEditing(){
      console.log("in methods: saveEditing");
      this.$store.dispatch('templateControl/saveEditing');
    },

    exitEdit(){
        if (confirm("确定退出？记得要保存噢！")) {
          this.$router.push('/home');
        } else {
          // txt = "您按了取消";
        }
    }
  }
};
</script>

<style lang="scss">

</style>
