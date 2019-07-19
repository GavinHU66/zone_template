<template>
  <div class="essay-container">
    <p>{{essayTitle}}</p> <p>{{author}}</p>
    <p>{{essayContentPre}}</p>
    <p>{{date}}</p>
    <div class="icon-group icon-group-essay">
      <img src="@/assets/icons/like.svg" alt="like icon load fail" class="icon"/>
      <img src="@/assets/icons/comment.svg" alt="comment icon load fail" class="icon"/>
      <img src="@/assets/icons/reprint.png" alt="reprint icon load fail" class="icon"/>
    </div>

  </div>
</template>
<script>
export default {
  name: "Essay",

  data() {
    return{

      author: "李明",

      essayContentPre : 
      "眼下，“大寒”已过，冬天也许已接近尾声了吧。可我却总感觉这个冬天似乎少缺了点什么，反复寻思过几回，终于找到答案：冬天的那位主角——雪，还迟迟没有登台亮相呢。我总觉得，冬天和雪是不...",

      essayTitle: "《期待一场雪的到来》",

      date: "2018-02-09 17:18"
    }
  }
};
</script>

<style lang="scss">
.essay-container {
  position: relative;
  border: #d9d9d9 solid 1px;
  margin-bottom: 20px;
}
</style>
