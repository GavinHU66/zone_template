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
                                    <div class="position-display-container">
                                        <p>一共有{{this.$store.state.templateControl.moduleListsTmp.length}}个模块，即将把本模块所有内容移动到第             
                                        <select v-model="row">
                                            <option v-for="row in this.$store.state.templateControl.moduleListsTmp.length" :value="row">{{row}}</option>
                                        </select>
                                        位</p>
                                        <!-- <select v-model="place">
                                            <option v-for="place in ['前面', '后面']" :value="place">{{place}}</option>
                                        </select> -->

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
  name: "ModalMoveModule",

  props: ["moduleId", "listsStruct"],

  data() {
        return {
            row: -100,
        }
  },

  methods: {
      handleConfirm(){
            console.log("in methods: handleConfirm");
            console.log("this.row", this.row);
            // console.log("this.place", this.place);

            if (this.row !== -100){
                // make commit
                var index = this.row - 1;
                this.$store.commit('templateControl/moveModule', { moduleId: this.moduleId, newIdx: index });
                this.$emit('close');
            } else {
                alert("请将位置信息填写完整");
            }
      },

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


