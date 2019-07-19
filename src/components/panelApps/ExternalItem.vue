<template>
  <div class="panel-app-container external-item-container">
        <iframe id="iframe" ref="iframe" :src="externalSrc" class="mapFrame" frameborder="0" scrolling="no" />
  </div>
</template>

<script>
export default {
  name: "ExternalItem",

  props: ['externalSrc'],

  data() {
    return {
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