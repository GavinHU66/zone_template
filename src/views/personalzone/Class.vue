<template>
  <div class="container home-container">
    <PersonalZoneHead />
    <h3 style="text-align:center;">这里是班级空间（MyClass.vue）</h3>
    <MyClass />
  </div>
</template>

<script>
import PersonalZoneHead from '@/components/PersonalZoneHead'
import MyClass from "@/components/templates/MyClass";

export default {
  name: 'Class',

  components: {
    PersonalZoneHead,
    MyClass,
  },

  methods: {
    setUser() {
      this.$store.dispatch('initUserInfo', {username: 'dielang'})
    },
  },
}
</script>

<style lang="scss">
.zone-module {
  display: block;
}
.edit-zone-bar-hide {
    max-height: 0;
    transition: max-height 0.5s ease-out;
    overflow: hidden;
    background: #d5d5d5;
}

.edit-zone-bar-show {
    max-height: 500px;
    transition: max-height 0.5s ease-in;
}

</style>
