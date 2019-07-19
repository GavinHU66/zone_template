<template>
    <div>
        <!-- {{cList.moduleId}} -->
        <div class="change-config-container">
            <div class="change-option-bar">
                <button @click="shouldShowItem = !shouldShowItem;">显示/隐藏内容</button>
                <button @click="shouldShowScale = !shouldShowScale;">改变比例</button>   
                <button @click="shouldShowModalAddItem = true">添加新内容</button>
                <button @click="shouldShowModalMoveModule = true">移动本模块</button>
                <button @click="handleDeleteModule" id="deleteModuleButton">删除本模块</button>          
            </div>

            <div class="change-scale change-list">
                <div class="change-scale-bar-container" v-if="shouldShowScale" style="margin: 10px;">
                    <button @click="handleToggleTemplate('t121')">1:2:1</button>
                    <button @click="handleToggleTemplate('t13')">1:3</button>
                    <button @click="handleToggleTemplate('t22')">2:2</button>
                    <button @click="handleToggleTemplate('t31')">3:1</button>
                    <button @click="handleToggleTemplate('t1')">占满整行</button>
                </div>
            </div>

            <div class="change-item change-list">
                <div class="change-item-bar-container" v-if="shouldShowItem" style="margin: 10px;">
                    <span v-for="(list, index) in cList.lists">
                        <button 
                            v-for="(element, index) in list"
                            :key="element.id"
                            @click="toggleItem(element.id)"
                        >
                            {{element.shouldShow? element.chiAlias : element.chiAlias + "(已隐藏)"}}
                        </button>
                    </span>
                </div>
            </div>

            <ModalAddItem v-if="shouldShowModalAddItem" @close="shouldShowModalAddItem = false" :moduleId="cList.moduleId" :listsStruct="cList.lists">
                <h3 slot="header">请选择内部/外部组件</h3>
            </ModalAddItem>

            <ModalMoveModule v-if="shouldShowModalMoveModule" @close="shouldShowModalMoveModule = false" :moduleId="cList.moduleId">
                <h3 slot="header">请选择目标位置</h3>
            </ModalMoveModule>
            
        </div>

        <!-- a row, eg t13-0 -->
        <div v-for="(list,index) in cList.lists" :class="cList.scaleType + [`-${index}`]">
            <!-- cList.lists is a 2D array -->
            <!-- {{list}}  1D array -->

            <draggable class="list-group" :list="list" v-bind="dragOptions" group="people" @change="log" @start="isDragging = true"
                @end="isDragging = false" tag="ul">
                <transition-group type="transition" name="flip-list">
                    <li
                        v-for="(element, index) in list"
                        :key="element.id"
                    >
                        <div 
                            class="list-group-item"
                            :class="'list-group-item' + [`-${element.name}`]"
                            v-if="element.shouldShow === true"
                        >
                            <img src="@/assets/icons/delete.svg" @click="handleDeleteItem(element.id)" alt="icon load fail" id="delete-button"/>

                            <div v-if="element.name === 'ExternalItem' "><div class="zone-module"><component :is="element.name" :externalSrc="element.externalSrc"></component></div></div>
                            <div v-else><div class="zone-module"><component :is="element.name"></component></div></div>      
                        </div>
                    </li>
                </transition-group>
            </draggable>
        </div>
    </div>
</template>

<script>

import { log } from 'util';

export default {
    name: "TemplateSingleModule",
    components: {},

    props: ["lists"],

    data() {
        return {
            display: "Transition",
            cList: [],
            shouldShowScale: false,
            shouldShowItem: false,
            shouldShowAddItem: false,
            shouldShowModalAddItem: false,
            shouldShowModalMoveModule: false,
        };
    },


    mounted() {
        this.cList = this.lists;
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

     watch: {
        lists:{
            handler (newV, oldV) {
                this.cList = newV;
            },
            deep:true
        }
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
            
        handleToggleTemplate(mode){
            var payload = {newScaleType: mode, moduleId: this.cList.moduleId};
            this.$store.dispatch('templateControl/switchModeTmp', payload);
        },

        handleDeleteModule(){
            console.log("in methods: handleDeleteModule");
            if (confirm("确定要删除本模块所有内容？")) {
                console.log("你点了确定");   
                this.$store.commit('templateControl/deleteModule', {moduleId: this.cList.moduleId});                
            } else {
            }
        },

        toggleItem(elemId){
            console.log("in methods: toggleItem");
            this.$store.commit('templateControl/toggleItemDisplay', {moduleId: this.cList.moduleId, id: elemId });
        },


        addNewItem(){
            console.log("in methods: toggleItem");
            this.$store.commit('templateControl/addNewItem', {moduleId: this.cList.moduleId});
            alert("已添加");
            shouldShowAddItem = !shouldShowAddItem
        },

        handleDeleteItem(itemId){
            console.log("in methods: handleDeleteItem");
            if (confirm("确定要删除此内容？")) {
                console.log("你点了确定");
                this.$store.commit('templateControl/deleteItem', {moduleId: this.cList.moduleId, id: itemId});                
            } else {
            }
        }
    },
};


function printStruct(lists){
    var str = "";
    for (let j=0; j<lists.lists.length; j++){
        for (let k=0; k<lists.lists[j].length; k++){
            str += lists.lists[j][k].chiAlias + " ";
        } 
        str += '\n';
    }
    
    console.log(str);
}
</script>

<style lang="scss">
.change-list {
    margin: 10px;
}
.change-option-bar {

    padding-bottom: 10px;
    #deleteModuleButton {
        font-weight: bold;
        float: right;
        background-image: none;
        color: white;
        padding: 6px;
        background-color: #ff9800;
    }
    #deleteModuleButton:hover{
        background: #f44336;
    }
}

.add-item-workplace {
    margin: 10px;

    .input-button {
        display: inline-block;
    }
    .input-itemName {
        display: inline-block;
        margin-right: 10px;
        margin-left: 10px;
    }
    .input-itemUrl {
        display: inline-block;
        margin-right: 10px;
    }
}

#delete-button {
    top: -3px;
    position: absolute;
    height: 15px;
    border-style: none;
    right: -3px;
    z-index: 1;
    cursor: pointer;
}

</style>