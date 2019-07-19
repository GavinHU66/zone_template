import createUniqueString from "@/util/uniqueString";

function printStruct(list3d){
    var str = "";
    for (let i=0; i<list3d.length; i++){
      var lists = list3d[i].lists;
      for (let j=0; j<lists.length; j++){
        for (let k=0; k<lists[j].length; k++){
            str += lists[j][k].chiAlias + " ";
        } 
        str += '\n';
      }
    }
    console.log(str);
}

function convertName (chiAlias) {
    if (chiAlias == "个人资料"){
        return "UserInfo";
    } else if (chiAlias == "最新消息"){
        return "LatestNews";
    } else if (chiAlias == "待办消息"){
        return "Todo";
    } else if (chiAlias == "近期文章"){
        return "EssayList";
    } else if (chiAlias == "留言板"){
        return "MsgBoard";
    } else if (chiAlias == "最近访客"){
        return "CurrentVisitor";
    }
}


let ls_moduleLists = [

        {
            moduleId: createUniqueString(),
            scaleType: "t13",
            lists:  
            [
                [
                    { name: "UserInfo", id: createUniqueString(), chiAlias: "个人资料", shouldShow: true },
                    { name: "LatestNews", id: createUniqueString(), chiAlias: "最新消息", shouldShow: true },
                    { name: "Todo", id: createUniqueString(), chiAlias: "待办消息", shouldShow: true },
                ],
                [
                    { name: "EssayList", id: createUniqueString(), chiAlias: "近期文章", shouldShow: true },
                    { name: "ExternalItem", id: createUniqueString(), chiAlias: "外部组件试", shouldShow: true, externalSrc: "http://data.nullehome.com/#/attests/details" },
                    { name: "MsgBoard", id: createUniqueString(), chiAlias: "留言板", shouldShow: true },
                ],
                [
        
                ]
            ]      
        },

        {
            moduleId: createUniqueString(),
            scaleType: "t13",
            lists:  
            [
                [
                    { name: "CurrentVisitor", id: createUniqueString(), chiAlias: "最近访客", shouldShow: true },
                    { name: "UserInfo", id: createUniqueString(), chiAlias: "个人资料", shouldShow: true },
                    { name: "LatestNews", id: createUniqueString(), chiAlias: "最新消息", shouldShow: true },
                    { name: "Todo", id: createUniqueString(), chiAlias: "待办消息", shouldShow: true },
                ],
                [
                    { name: "EssayList", id: createUniqueString(), chiAlias: "近期文章", shouldShow: true },
                    { name: "MsgBoard", id: createUniqueString(), chiAlias: "留言板", shouldShow: true },
                ],
                [
        
                ]
            ]      
        },

    ];



try {
    if (localStorage) {
        if (localStorage.getItem("ls_moduleLists") !== null){
            ls_moduleLists = JSON.parse(localStorage.getItem("ls_moduleLists"));
        }
    }
} catch (e) {console.log("we don't have localStorage")}

const templateControl = {

    namespaced: true,

    state: {
        moduleListsTmp: ls_moduleLists, // render at template page (when doing changes, apply changes to this tmp variable)
        moduleLists: ls_moduleLists, // render elsewhere (eg home page)
    },

    mutations: {

        addLists(state, payload){
            var newModuleId = createUniqueString();
            var newScaleType = payload.scaleType;
            var newLists = []; 

            if (newScaleType.length === 2){
                newLists = [
                    [
                        { name: "UserInfo", id: createUniqueString(), chiAlias: "个人资料", shouldShow: true },
                    ],
                    [],
                    [],
                ];
            } else if (newScaleType.length === 3){
                newLists = [
                    [
                        { name: "UserInfo", id: createUniqueString(), chiAlias: "个人资料", shouldShow: true },
                    ],
                    [
                        { name: "UserInfo", id: createUniqueString(), chiAlias: "个人资料", shouldShow: true },
                    ],
                    [],
                ];
            } else if (newScaleType.length === 4){
                newLists = [
                    [
                        { name: "UserInfo", id: createUniqueString(), chiAlias: "个人资料", shouldShow: true },
                    ],
                    [
                        { name: "UserInfo", id: createUniqueString(), chiAlias: "个人资料", shouldShow: true },
                    ],
                    [
                        { name: "UserInfo", id: createUniqueString(), chiAlias: "个人资料", shouldShow: true },
                    ],
                ];
            }
            var newLists = {
                moduleId: newModuleId,
                scaleType: newScaleType,
                lists: newLists,    
            };
            state.moduleListsTmp.push(newLists);
            state.moduleListsTmp = JSON.parse(JSON.stringify(state.moduleListsTmp));
        }, // end of addLists

        deleteModule(state, payload) {
            for(let i=0; i<state.moduleListsTmp.length; i++){
                if (state.moduleListsTmp[i].moduleId === payload.moduleId){
                    state.moduleListsTmp.splice(i, 1);
                }
            }
            state.moduleListsTmp = JSON.parse(JSON.stringify(state.moduleListsTmp));
        }, // end of deleteModule

        moveModule(state, payload) {
            for (let i=0; i<state.moduleListsTmp.length; i++){
                if (state.moduleListsTmp[i].moduleId == payload.moduleId){
                    var moduleTmp = state.moduleListsTmp[i]; // copy of target module
                    state.moduleListsTmp.splice(i, 1);
                }
            }
            state.moduleListsTmp.splice(payload.newIdx, 0, moduleTmp);
            state.moduleListsTmp = JSON.parse(JSON.stringify(state.moduleListsTmp));         
        }, // end of moveModule

        deleteItem(state, payload) {
            console.log("in mutations: deleteItem");
            for(let i=0; i<state.moduleListsTmp.length; i++){
                if (state.moduleListsTmp[i].moduleId === payload.moduleId){
                    for (let j=0; j<state.moduleListsTmp[i].lists.length; j++){
                        for (let k=0; k<state.moduleListsTmp[i].lists[j].length; k++){
                            if (state.moduleListsTmp[i].lists[j][k].id === payload.id){
                                state.moduleListsTmp[i].lists[j].splice(k, 1);
                            }
                        }   
                    }
                }
            }
            state.moduleListsTmp = JSON.parse(JSON.stringify(state.moduleListsTmp));
        }, // end of deleteItem

        toggleItemDisplay(state, payload){
            for(let i=0; i<state.moduleListsTmp.length; i++){
                if (state.moduleListsTmp[i].moduleId === payload.moduleId){
                    for (let j=0; j<state.moduleListsTmp[i].lists.length; j++){
                        for (let k=0; k<state.moduleListsTmp[i].lists[j].length; k++){
                            if (state.moduleListsTmp[i].lists[j][k].id === payload.id){
                                state.moduleListsTmp[i].lists[j][k].shouldShow = !state.moduleListsTmp[i].lists[j][k].shouldShow;
                            }
                        }   
                    }
                }
            }
            state.moduleListsTmp = JSON.parse(JSON.stringify(state.moduleListsTmp));         
        }, // end of toggleItemDisplay


        addNewItem(state, payload) {
            console.log("in mutations: addNewItem");
            console.log("payload", payload);

            var newItem = new Object();

            if (payload.itemType == "external"){
                // {itemType: "external", itemName: this.itemName, itemUrl: this.itemUrl}
                var newItem = { name: "ExternalItem", id: createUniqueString(), chiAlias: payload.itemName, shouldShow: true, externalSrc: payload.itemUrl};

            } else if (payload.itemType == "internal"){
                // {itemType: "internal", itemName: this.selectedType}
                console.log("payload", payload);
                var newItem = { name: convertName(payload.itemName), id: createUniqueString(), chiAlias: payload.itemName, shouldShow: true};
            }

            for (let i=0; i<state.moduleListsTmp.length; i++){
                if (state.moduleListsTmp[i].moduleId === payload.moduleId){

                    for (let j=0; j<state.moduleListsTmp[i].lists.length; j++){
                        for (let k=0; k<state.moduleListsTmp[i].lists[j].length; k++){
                            if (j == payload.colIndex && k == payload.rowIndex){
                                state.moduleListsTmp[i].lists[j].splice(k, 0, newItem);           
                            }
                        }
                    }

                }
            }
            state.moduleListsTmp = JSON.parse(JSON.stringify(state.moduleListsTmp));

        }, // end of addNewItem

        switchModeTmp(state, payload){

            // payload
            // {newScaleType: "t121", moduleId: "2"}

            var newType = payload.newScaleType;

            for (let i=0; i<state.moduleListsTmp.length; i++) {
                if (state.moduleListsTmp[i].moduleId === payload.moduleId){
                    var oldType = state.moduleListsTmp[i].scaleType;
                    state.moduleListsTmp[i].scaleType = newType;

                    // modify the array if necessary
                    if (oldType.length !== newType.length){
                        if (oldType.length == 4 && newType.length == 3){
                            console.log(" 3->2 ");
                            if (state.moduleListsTmp[i].lists[2].length !== 0){
                                state.moduleListsTmp[i].lists[1] = state.moduleListsTmp[i].lists[1].concat(state.moduleListsTmp[i].lists[2]);
                                state.moduleListsTmp[i].lists[2] = []; // 3rd col become empty
                            }
                        }
                        else if (oldType.length == 3 && newType.length == 4){
                            console.log(" 2->3 ");
                            if (state.moduleListsTmp[i].lists[1].length >= 2){
                                state.moduleListsTmp[i].lists[2].push(state.moduleListsTmp[i].lists[1].pop()); // push last module in 2nd col to the 3rd col
                            }
                        }
                        else if (oldType.length == 3 && newType.length == 2){
                            console.log(" 2->1 ");
                            if (state.moduleListsTmp[i].lists[1].length !== 0){
                                state.moduleListsTmp[i].lists[0] = state.moduleListsTmp[i].lists[0].concat(state.moduleListsTmp[i].lists[1]);
                                state.moduleListsTmp[i].lists[1] = []; // 3rd col become empty
                            }
                        }
                        else if (oldType.length == 4 && newType.length == 2){
                            console.log(" 3->1 ");
                            // move the last module in the 2nd col to the 3rd col
                            if (state.moduleListsTmp[i].lists[1].length !== 0){
                                state.moduleListsTmp[i].lists[0] = state.moduleListsTmp[i].lists[0].concat(state.moduleListsTmp[i].lists[1]);
                                state.moduleListsTmp[i].lists[1] = []; // 3rd col become empty
                            }
                            if (state.moduleListsTmp[i].lists[2].length !== 0){
                                state.moduleListsTmp[i].lists[0] = state.moduleListsTmp[i].lists[0].concat(state.moduleListsTmp[i].lists[2]);
                                state.moduleListsTmp[i].lists[2] = []; // 3rd col become empty
                            }
                        }
                        else if (oldType.length == 2 && newType.length == 3){
                            console.log(" 1->2 ");
                            if (state.moduleListsTmp[i].lists[0].length >= 2){
                                state.moduleListsTmp[i].lists[1].push(state.moduleListsTmp[i].lists[0].pop()); // push last module in 1st col to the 2nd col
                            }
                        }
                        else if (oldType.length == 2 && newType.length == 4){
                            console.log(" 1->3 ");
                            if (state.moduleListsTmp[i].lists[0].length >= 3){
                                state.moduleListsTmp[i].lists[1].push(state.moduleListsTmp[i].lists[0].pop()); // push last module in 1st col to the 2nd col
                                state.moduleListsTmp[i].lists[2].push(state.moduleListsTmp[i].lists[0].pop()); // push last module in 1st col to the 3rd col
                            }
                        }


                    }
                }
            }
            state.moduleListsTmp = JSON.parse(JSON.stringify(state.moduleListsTmp));
        },

        setModuleListsTmp(state, payload){            
            for (let i=0; i<state.moduleListsTmp.length; i++) {
                if (state.moduleListsTmp[i].moduleId === payload.moduleId){
                    state.moduleListsTmp[i].lists = payload.lists;
                    break;
                }
            }
            state.moduleListsTmp = JSON.parse(JSON.stringify(state.moduleListsTmp));
        },

        saveEditing (state) { // apply the change to moduleLists
            state.moduleLists = state.moduleListsTmp;
            state.moduleLists = JSON.parse(JSON.stringify(state.moduleLists));
            try {
                if (localStorage) {
                  localStorage.setItem('ls_moduleLists', JSON.stringify(state.moduleLists));
                  alert("已保存");
                }
              } catch (e) {console.log("we don't have localStorage")}
        },



    },

    actions: {
        toggleModuleDisplayTmp({commit}, payload){
            commit("toggleModuleDisplayTmp", payload);
        },
        switchModeTmp({commit}, payload){
            commit("switchModeTmp", payload);
        },
        setModuleListsTmp({commit}, payload){
            commit("setModuleListsTmp", payload);
        },
        saveEditing({commit}, payload){
            commit("saveEditing", payload);
        },
        
    },

  }
  
  export default templateControl
  