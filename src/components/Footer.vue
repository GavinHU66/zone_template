<template>
  <div class="footer-container">
      <p>{{footerText}}</p>
  </div>
</template>
<script>
export default {
  name: 'Footer',

  computed: {
      footerText(){
          // console.log("this.$store.state.footerControl.footerText", this.$store.state.footerControl.footerText);
          return this.$store.state.footerControl.footerText;
      }
  }

  
}
</script>
<style lang="scss">
.footer-container {
    height: 70px;
    width: 100%;
    float: left;
    margin-top: 10px;
    bottom: 0;
    background: #f5f5f5;
    p {
        margin-top: 15px;
        margin-left: 15px;
    }
}

</style>

