<template>
    <div>
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container-add-item">
                        <div class="modal-header">
                            <slot name="header">
                                default header
                            </slot>
                        </div>

                        <div class="modal-body">
                            <slot name="body">
                                <div>
                                    <div class="add-item-navbar">
                                        <button @click="showInItem">内部组件</button>
                                        <button @click="showExItem">外部组件</button>
                                    </div>
                                    <div v-if="shouldShowInItem">
                                        <v-select slot="body" v-model="selectedType" :options="['个人资料', '近期文章', '留言板', '待办消息', '最近访客', '最新消息']"></v-select>
                                    </div>
                                    <div v-if="shouldShowExItem">
                                        <div class="input-itemName">模块名称: <input type="text" id="itemName" v-model="itemName"></div>
                                        <div class="input-itemUrl">模块地址: <input type="text" id="itemUrl" v-model="itemUrl"></div>
                                    </div>
                                    <div class="position-display-container">
                                        <p>点击下方图标选择添加内容的位置，即将添加到第{{col+1}}列，第{{row+1}}行</p>
                                        <div class="icons">
                                            <div v-for="(list, cIndex) in listsStruct" :class="'col' + [`-${cIndex}`]">
                                                <div v-for="(elem, rIndex) in list" :class="'row' + [`-${rIndex}`]">
                                                    <img src="@/assets/icons/place.svg" @click="handlePositionSelect(cIndex,rIndex)" :id="'place'+ [`-${rIndex}`] + [`${cIndex}`]" alt="icon load fail"/>
                                                </div>                                    
                                            </div>
                                        </div>                    
                                    </div>
                                </div>
                            </slot>
                        </div>

                        <div class="modal-footer">
                            <slot name="footer">
                                <button class="modal-default-button" @click="$emit('close')">取消</button>
                                <button class="modal-default-button" @click="handleConfirm">确认</button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Vue from 'vue';
import vSelect from 'vue-select';
import "vue-select/src/scss/vue-select.scss";

Vue.component('v-select', vSelect);

export default {
  name: "ModalAddItem",

  props: ["moduleId", "listsStruct"],

  data() {
        return {
            selectedType: '',
            itemName: '',
            itemUrl: '',
            shouldShowInItem: true,
            shouldShowExItem: false,
            row: 0,
            col: 0,
        }
  },

  methods: {
        handleConfirm(){

            if (this.shouldShowInItem){ // add internal item
                if (this.selectedType != ''){
                    // make a commit
                    this.$store.commit('templateControl/addNewItem', {itemType: "internal", itemName: this.selectedType, moduleId: this.moduleId, rowIndex: this.row, colIndex: this.col});
                    this.$emit('close');
                } else {
                    alert("请选择内部组件类型");
                }
            } else if (this.shouldShowExItem) { // add external item
                if (this.itemName != '' && this.itemUrl != ''){
                  // make a commit
                  this.$store.commit('templateControl/addNewItem', {itemType: "external", itemName: this.itemName, itemUrl: this.itemUrl, moduleId: this.moduleId, rowIndex: this.row, colIndex: this.col});
                  this.$emit('close');
                } else {
                    alert("请补全外部模块的名称和链接");
                }
            }
      },

      showInItem(){
          this.shouldShowInItem = true;
          this.shouldShowExItem = false;
          this.itemName = '';
          this.itemUrl = '';
      },

      showExItem(){
          this.shouldShowInItem = false;
          this.shouldShowExItem = true;
          this.selectedType = '';
      },

      handlePositionSelect(col, row){
          console.log("col", col);
          console.log("row", row);
          this.row = row;
          this.col = col;
      }
  },

  components: {
  }
};
</script>

<style lang="scss">
.add-item-navbar {
  margin-bottom: 10px;
}
.input-itemName {
  margin-bottom: 10px;
}
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container-add-item {
    width: 600px;
    height: 500px;
    margin: 0px auto;
    padding: 40px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-footer {
    padding-bottom: 10px;
}

.modal-default-button {
    float: right;
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

[class*="col-"] {
    float: left;
    margin-right: 10px;
}

.position-display-container {
    margin: 3px;
}

[id*="place-"]{
    height: 25px;
    cursor: pointer;
}

</style>


