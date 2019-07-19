<template>
  <div>
      <div class="container zone-container">
          <PersonalZoneHead />
          <h3 style="text-align:center;">这里是空间首页（Zone.vue）</h3>
          <ZoneElement />
      </div>
  </div>
</template>

<script>

export default {
  name: 'Zone',
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
</style>
