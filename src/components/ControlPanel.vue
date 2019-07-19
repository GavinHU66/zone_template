<template>
  <div>
    <PersonalZoneHead />
    <h3 style="text-align:center;">这里是控制面板（ControlPanel.vue）</h3>
    <ZoneBar />

    <div class="control-panel-container">


        <div class="control-panel-navbar">
            <button @click="showAppManagement">应用管理</button>
            <button @click="showLinkManagement">链接管理</button>
            <button @click="showFooterManagement">页脚管理</button>
        </div>

        <div v-if="shouldShowAppManagement">
          <AppCenter />
        </div>

        <div v-if="shouldShowLinkManagement">
          <LinkCenter />
        </div>

        <div v-if="shouldShowFooterManagement">
          <FooterControl />
        </div>

    </div>
  </div>
</template>
<script>
import PersonalZoneHead from "@/components/PersonalZoneHead";
import AppCenter from "@/components/controlPanelSubModule/AppCenter";
import LinkCenter from "@/components/controlPanelSubModule/LinkCenter";
import FooterControl from "@/components/controlPanelSubModule/FooterControl";

export default {
  name: "ControlPanel",

  data() {
    return {
      shouldShowAppManagement: true,  
      shouldShowLinkManagement: false,
      shouldShowFooterManagement: false,
    }
  },

  components: {
      PersonalZoneHead,
      AppCenter,
      LinkCenter,
      FooterControl,
  },

  methods: {
    showAppManagement(){
      this.shouldShowAppManagement = true;
      this.shouldShowLinkManagement = false;
      this.shouldShowFooterManagement = false;
    },

    showLinkManagement(){
      this.shouldShowAppManagement = false;
      this.shouldShowLinkManagement = true;
      this.shouldShowFooterManagement = false;
    },

    showFooterManagement(){
      this.shouldShowAppManagement = false;
      this.shouldShowLinkManagement = false;
      this.shouldShowFooterManagement = true;
    },
  },
};
</script>

<style lang="scss">

.control-panel-container {
  position: relative;
  background: #f2f2f2;
  width: 80%;
  margin: auto;
}

.control-panel-navbar {
  position: relative;
  margin-left: 10px;
  padding-top: 20px;
}
</style>
