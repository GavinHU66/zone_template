<template>
  <div class="panel-app-container latest-news-container">
    <p>最新消息</p>
    <div v-for="news in newsList" v-bind:key="news.title">
      <p><b>{{news.title}}</b>: {{news.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "LatestNews",

    data(){
      return {
          newsList: [
            {title: "新闻题目1", content:"这里是新闻内容1"},
            {title: "新闻题目2", content:"这里是新闻内容2"},
            {title: "新闻题目3", content:"这里是新闻内容3"},
            {title: "新闻题目4", content:"这里是新闻内容4"},
            {title: "新闻题目5", content:"这里是新闻内容5"}
          ],
      }
  },
};
</script>
