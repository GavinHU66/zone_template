<template>
    <div>
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div class="modal-header">
                            <slot name="header">
                                default header
                            </slot>
                        </div>

                        <div class="modal-body">
                            <slot name="body">
                                <v-select slot="body" v-model="selectedType" :options="['1:3', '2:2', '3:1', '1:2:1', '整行']">选择比例</v-select>
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
  name: "ModalAddModule",
  data() {
      return {
          selectedType: '',
      }
  },

  methods: {
      handleConfirm(){

          if (this.selectedType !== ""){
              var type = 
                ((this.selectedType === "1:3")? "t13" : "") +
                ((this.selectedType === "2:2")? "t22" : "") +
                ((this.selectedType === "3:1")? "t31" : "") +
                ((this.selectedType === "1:2:1")? "t121" : "") +
                ((this.selectedType === "整行")? "t1" : "");

              this.$store.commit('templateControl/addLists', {scaleType: type});
              this.$emit('close');
          } else {
            alert("请选择一个比例");
          }

      },
  },
};
</script>

<style lang="scss">
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

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
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
</style>

