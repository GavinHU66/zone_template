<template>
  <div class="panel-app-container msg-board-container">
    <p style="text-align: center">留言板</p>
    <div v-for="msg in msgs" v-bind:key=msg.name>
      <p>{{msg.name}}: {{msg.content}}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "MsgBoard",

  data(){
    return {
        msgs: [
          {name: "小明", content:"来自小明的留言"},
          {name: "小李", content:"来自小李的留言"},
          {name: "小王", content:"来自小王的留言"},
          {name: "小张", content:"来自小张的留言"},
          {name: "小红", content:"来自小红的留言"}
        ],
    }
  },

};
</script>



