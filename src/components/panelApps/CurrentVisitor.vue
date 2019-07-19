<template>
  <div class="panel-app-container current-visitor-container">
    <p>最近访客</p>
    <div id="c1"></div>
  </div>
</template>
<script>
import G2 from "@antv/g2";
export default {
  name: "CurrentVisitor",
  data() {
    return {
      data: [
        { genre: "Sports", sold: 275 },
        { genre: "Strategy", sold: 1150 },
        { genre: "Action", sold: 120 },
        { genre: "Shooter", sold: 350 },
        { genre: "Other", sold: 150 }
      ]
    };
  },
  mounted() {
    this.thandler = setTimeout(function(_this) {
      const that = _this;
      const chart = new G2.Chart({
        container: "c1",
        width: 400,
        height: 250
      });

      chart.source(that.data);
      chart
        .interval()
        .position("genre*sold")
        .color("genre");
      chart.render();
      clearTimeout(that.handler)
    }.bind(undefined,this), 50);
  }
};
</script>
