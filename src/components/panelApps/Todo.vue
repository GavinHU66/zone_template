<template>
  <div class="panel-app-container todo-container">
      <div class="todo-bar">
          <div class="todo-bar-title" >待办事项</div>
          <div class="todo-bar-option" @click="handleOption1">待我审批</div>
          <div class="todo-bar-option" @click="handleOption2">待我申请</div>
      </div>
      <div v-if="shouldShowOpiton1">
        <p>暂无待审批事项</p>
      </div>
      <div v-if="shouldShowOpiton2">
        <p>暂无待申请事项</p>
      </div>

  </div>
</template>

<script>
export default {
  name: "Todo",

  data(){
    return {
      shouldShowOpiton1: true,
      shouldShowOpiton2: false,
    }
  },

  methods: {
    handleOption1(){
      this.shouldShowOpiton1 = true;
      this.shouldShowOpiton2 = false;
    },
    handleOption2(){
      this.shouldShowOpiton1 = false;
      this.shouldShowOpiton2 = true;
    }
  },

};
</script>

<style lang="scss">
.todo-container {
    position: relative;
}

.todo-bar {
    position: absolute;
    top: 0;
    width: 100%;
}

.todo-bar-title {
    font-weight: normal;
    font-size: 20px;
    color: #222;
    display: inline-block;
    margin: 10px;
}

.todo-bar-option {
    margin: 3px;
    display: inline-block;
    line-height: 20px;
    padding-bottom: 13px;
}
</style>


