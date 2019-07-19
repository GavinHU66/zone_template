<template>
  <div class="panel-app-container essay-list-container">
      <li v-for="index in essayList" :key="index">
          <Essay />
      </li>
  </div>
</template>
<script>
import Essay from "@/components/panelApps/Essay";

export default {
  name: "EssayList",

  data() {
    return{
        essayList: 3,
    }
  },

  components: {
      Essay,
  }
};
</script>