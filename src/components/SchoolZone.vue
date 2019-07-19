<template>
  <div>
    <ZoneBar />
    <p style="position: relative; top: 100px; right: 100px">这是学校空间</p>

    <div class="schoolzone-container">
      <div class="schoolzone-left">
        <div class="school-module"><SchoolNotice /></div>
        <div class="school-module"><SchoolNews /></div>
      </div>
      <div class="schoolzone-left">
        <div class="school-module"><SchoolActivity /></div>
      </div>
    </div>

  </div>
</template>
<script>
import ZoneBar from "@/components/navBars/ZoneBar";
import SchoolActivity from "@/components/schoolZoneSubModule/SchoolActivity";
import SchoolNotice from "@/components/schoolZoneSubModule/SchoolNotice";
import SchoolNews from "@/components/schoolZoneSubModule/SchoolNews";


export default {
  name: "SchoolZone",
  components: {
      ZoneBar,
      SchoolActivity,
      SchoolNotice,
      SchoolNews
  },
};
</script>

<style lang="scss">
.schoolzone-container {
    position: relative;
    background: #f2f2f2;
    width: 750px;
    margin: auto;
    margin-top: 50px;
}

.schoolzone-left {
    width: 30%;
    float: left;
    margin-right: 20px;
}

.schoolzone-right {
  width: 65%;
  float: left;
}

.school-module {
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
}

</style>