<template>
  <div class="container home-container">
    <PersonalZoneHead />
    <h3 style="text-align:center;">这里是个人主页（Home.vue）</h3>
    <HomeElement />
  </div>
</template>

<script>
import PersonalZoneHead from '@/components/PersonalZoneHead';

export default {
  name: 'Home',

  components: {
    PersonalZoneHead,
  },


  mounted () {
  },
  
  methods: {
    setUser() {
      this.$store.dispatch('initUserInfo', {username: 'dielang'})
    },
  },
}
</script>

<style lang="scss">

.col {
  border: 3px solid rgba(63,194,216,0.84);
  height: 500px;
  float: left;
  margin: 3px;
  border-radius: 10px;
  position: relative;
}

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
