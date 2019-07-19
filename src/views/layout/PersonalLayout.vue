<template>
  <div class="zone-personal">
    <!-- <router-view :key="key" name="nav"></router-view> -->
    <router-view></router-view>
    <!-- <Footer /> -->
    <Footer />

  </div>
</template>
<script>
// import Footer from "@/c3omponents/Footer";
export default {
    name: 'PersonalLayout',
}
</script>
<style lang="scss" scoped>
.zone-personal{
  background-color: #fff;
}
</style>
