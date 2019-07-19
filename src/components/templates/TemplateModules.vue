<template>
    <div class="template-container">

        <div class="fy-row fy-row-template" v-for="(lists, index) in listObj" :key="lists.moduleId">
            <TemplateSingleModule :lists="lists" />
        </div> 

        <div class="add-module">
            <img src="@/assets/icons/add.svg" alt="icon load fail" id="add-icon" @click="showModal = true"/>
        </div>

        <ModalAddModule v-if="showModal" @close="showModal = false">
            <h3 slot="header">请选择一个比例</h3>
        </ModalAddModule>
    </div>
</template>
<script>

import { log } from 'util';
import Vue from 'vue';

export default {
    name: "TemplateModules",
    components: {},

    data() {
        return {
            display: "Transition",
            listObj: [], // initialized inside mounted(), updated inside watch
            showModal: false,
        };
    },

    mounted(){
        this.listObj = this.$store.state.templateControl.moduleListsTmp;
    },

    methods: {
        replace: function() {
            this.list = [{ name: "Edgard" }];
        },
        clone: function(el) {
            return {
                name: el.name + " cloned"
            };
        },
        log: function(evt) {
            window.console.log(evt);
            this.$store.dispatch('templateControl/setModuleListsTmp', this.cList);
        },
    },

    watch: {
        '$store.state.templateControl.moduleListsTmp': {
            deep: true,
            handler: function(newVal, oldVal){
                this.listObj = newVal;
            }
        }
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
    },
};

</script>

<style lang="scss">
.add-module {
    width: 100%;
    position: relative;
    height: 200px;
    border: 3px dashed rgba(28,110,164,0.97);
    border-radius: 25px;
    margin-bottom: 50px;

    #add-icon {
        cursor: pointer;
        width: 100px;
        height: 100px;
        position: absolute;
        top: 24%;
        left: 45.5%;
        text-align: center;
        display: block;
    }
}

.fy-row-template {
    margin-bottom: 50px;
}


</style>