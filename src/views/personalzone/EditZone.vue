<template>
  <div class="container ez-container">
    <EditZoneBar/>
    <PersonalZoneHead />
    <h3 style="text-align:center;">这里是空间装扮（EditZone.vue）</h3>
    <TemplateModules />
  </div>
</template>

<script>
import PersonalZoneHead from '@/components/PersonalZoneHead';
import EditZoneBar from '@/components/editBars/EditZoneBar';
import TemplateModules from "@/components/templates/TemplateModules";

export default {
  name: 'EditZone',

  components: {
    EditZoneBar,
    PersonalZoneHead,
    TemplateModules,
  },

}
</script>

<style lang="scss">
</style>
