<template>

    <div>
        <div class="appcenter-container">

            <div class="appcenter-head">
                <p class="appcenter-title" style="font-weight: bold;">我的应用</p>
            </div>    
            <div class="app-item-container">
                <p>{{appPrompt}}</p>
                <div v-for="(element, index) in $store.state.appControl.apps" style="display: inline-block;">
                    <div v-if="element.shouldShow === true" class="app-item">
                        <a :href="element.appUrl">
                            <img :src="element.imgPath" :alt="'icon' + [`-${index+1}`] + ' load fail'" class="app-icon"/>
                            <p>{{element.appName}}</p>
                        </a>
                        <div>
                          <button @click="deleteApp(element)">删除</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="appcenter-head">
                <p class="appcenter-title" style="font-weight: bold;">全部应用</p>
            </div>    
            <div class="app-item-container">
                <div class="app-item" v-for="(element, index) in $store.state.appControl.apps">
                    <div>
                        <img :src="element.imgPath" :alt="'icon' + [`-${index+1}`] + ' load fail'" class="app-icon"/>
                        <p>{{element.appName}}</p>
                        <div v-if="element.shouldShow"><p>已添加</p></div>
                        <div v-else><button @click="addApp(element)">添加</button></div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

</template>

<script>
export default {
  name: "AppCenter",

  methods: {
    deleteApp(element){
      var payload = { appName: element.appName};
      this.$store.dispatch('appControl/hideApp', payload); // hide but not delete
    },

    addApp(element){
      var payload = { appName: element.appName};
      this.$store.dispatch('appControl/showApp', payload); // show but not add
    }
  },

  computed: {
    appPrompt(){
      for (let i=0; i<this.$store.state.appControl.apps.length; i++)
        if (this.$store.state.appControl.apps[i].shouldShow)
          return '';
        
      return "您还未添加任何应用，请在下方全部应用里添加";
    }
  }
};
</script>


<style lang="scss">
.appcenter-container {
    height: auto;
    width: 100%;
    margin: auto;

    button {
      margin-left: 35px;
    }

}

.appcenter-head {
  margin-left: 60px;
  p {
    cursor: pointer;
    list-style: none;
    display: inline-block;
    margin-right: 40px;
    font-size: large;
  }
  .appcenter-title {
    font-size: x-large;
    position: relative;
    margin-right: 70px;
    cursor: default;
  }
}

.app-item-container {
  margin-left: 37px;
  p {
    margin-left: 25px;
  }
}

.app-item {
  margin: 25px;
  display: inline-block;
  cursor: pointer;
  p {
    text-align: center;
    font-size: smaller;
  }
}

.app-icon {
  width: 60px;
  height: 60px;
  border-radius: 8px;
}
</style>
