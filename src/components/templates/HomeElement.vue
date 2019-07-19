<template>
    <div>
        <HomeBar />
        <div class="fy-row" v-for="(lists, index) in listObj"> 
            <div v-for="(list, index) in lists.lists" :class="lists.scaleType + [`-${index}`]">         
                <div class="list-group" :list="list[index]">
                    <li
                      v-for="(element, index) in list"
                      :key="element.id"
                    >

                        <div 
                          class="list-group-item myhome-list-group-item"
                          :class="'list-group-item' + [`-${element.name}`]"
                          v-if="element.shouldShow === true" 
                        > 
                            <div v-if="element.name === 'ExternalItem' ">
                                <div class="zone-module"><component :is="element.name" :externalSrc="element.externalSrc"></component></div>
                            </div>
                            <div v-else>
                                <div class="zone-module"><component :is="element.name"></component></div>
                            </div>     
                        </div>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { log } from 'util';

export default {
  name: "HomeElement",
  components: {},

  data() {
    return {
      display: "Transition",

      listObj: [] // initialized inside mounted(), updated inside watch
    };
  },

  mounted(){
    this.listObj = this.$store.state.templateControl.moduleLists;
  },

  watch: {
      '$store.state.templateControl.moduleLists': {
        deep: true,
        handler: function(newVal, oldVal){
          this.listObj = newVal;
        }
      }
  },

  methods: {
    replace: function() {
      this.listObj = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    },
  },

  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "people",
        disabled: false,
        ghostClass: "ghost"
      };
    },
  }
};
</script>

<style lang="scss">
.myhome-list-group-item {
  cursor: default;
}
</style>