<template>
  <div>
      <ZoneBar />
      <div class="func-group-container">
        <div class="func-group">

          <router-link to="/myclass/class_management">
            <div class="func-group-item">
              <img src="@/assets/func_icons/班级管理.png" alt="icon load fail" class="func-icon"/>
              <h3 class="func-title">班级管理</h3>
              <p class="func-desc">班级管理后台</p>
            </div>
          </router-link>

          <router-link to="/myclass/class_notice">
            <div class="func-group-item">
              <img src="@/assets/func_icons/班级通知.png" alt="icon load fail" class="func-icon"/>
              <h3 class="func-title">班级通知</h3>
              <p class="func-desc">班级通知管理</p>
            </div>
          </router-link>

          <router-link to="/myclass/class_timetable">
            <div class="func-group-item">
              <img src="@/assets/func_icons/班级课表.png" alt="icon load fail" class="func-icon"/>
              <h3 class="func-title">班级课表</h3>
              <p class="func-desc">我的班级课程表</p>
            </div>
          </router-link>

          <router-link to="/myclass/class_resource">
            <div class="func-group-item">
              <img src="@/assets/func_icons/班级资源.png" alt="icon load fail" class="func-icon"/>
              <h3 class="func-title">班级资源</h3>
              <p class="func-desc">班级共享资源</p>
            </div>
          </router-link>

          <router-link to="/myclass/class_zone">
            <div class="func-group-item">
              <img src="@/assets/func_icons/班级圈.png" alt="icon load fail" class="func-icon"/>
              <h3 class="func-title">班级圈</h3>
              <p class="func-desc">班级社交圈</p>
            </div>
          </router-link>

          <router-link to="/myclass/class_grades">
            <div class="func-group-item">
              <img src="@/assets/func_icons/学生成绩.png" alt="icon load fail" class="func-icon"/>
              <h3 class="func-title">学生成绩</h3>
              <p class="func-desc">学习成绩管理</p>
            </div>
          </router-link>

          <router-link to="/myclass/teacher_msgs">
            <div class="func-group-item">
              <img src="@/assets/func_icons/教师寄语.png" alt="icon load fail" class="func-icon"/>
              <h3 class="func-title">教师寄语</h3>
              <p class="func-desc">教师寄语管理</p>
            </div>
          </router-link>

          <router-link to="/myclass/QandA">
            <div class="func-group-item">
              <img src="@/assets/func_icons/问题解答.png" alt="icon load fail" class="func-icon"/>
              <h3 class="func-title">问题解答</h3>
              <p class="func-desc">学生问答管理</p>
            </div>
          </router-link>

          <router-link to="/myclass/class_contact">
            <div class="func-group-item">
              <img src="@/assets/func_icons/联系本.png" alt="icon load fail" class="func-icon"/>
              <h3 class="func-title">联系本</h3>
              <p class="func-desc">家校留言管理</p>
            </div>
          </router-link>

        </div>
      </div>
  </div>
</template>

<script>
import ZoneBar from "@/components/navBars/ZoneBar";

export default {
  name: "MyClass",
  components: {
      ZoneBar,
  },

  mounted(){},

  watch: {},

  methods: {},

  computed: {}
};
</script>

<style lang="scss">

.func-group-container {
  position: relative;
  background: #f2f2f2;
  height: 750px;
  width: 750px;
  margin: auto;
}

.func-group {
  width: 100%;
  margin: auto;
}

.func-group-item {
  cursor: pointer;
  height: 240px;
  width: 240px;
  background-color: burlywood;
  margin: 5px;
  display: inline-block;
}

a {
  text-decoration: none;
}
</style>