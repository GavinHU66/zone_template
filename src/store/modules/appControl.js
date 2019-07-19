
let ls_apps = 
[
    { appName:"授课计划", shouldShow: true, appUrl: "https://www.apple.com", imgPath: "@/assets/app_icons/1.svg" },
    { appName:"授课日志 ", shouldShow: true, appUrl: "https://www.apple.com", imgPath: "@/assets/app_icons/2.svg" },
    { appName:"教室申请", shouldShow: true, appUrl: "https://www.apple.com", imgPath: "@/assets/app_icons/3.svg" },
    { appName:"学生评价", shouldShow: true, appUrl: "https://www.apple.com", imgPath: "@/assets/app_icons/4.svg"},
    { appName:"课程申请", shouldShow: true, appUrl: "https://www.apple.com", imgPath: "@/assets/app_icons/5.svg"},
    { appName:"教材申请", shouldShow: true, appUrl: "https://www.apple.com", imgPath: "@/assets/app_icons/6.svg"},
];





try {
    if (localStorage) {
        // console.log("we have localStorage")
        if (localStorage.getItem("ls_apps") !== null){
            ls_apps = JSON.parse(localStorage.getItem("ls_apps"));
        }
    }
} catch (e) {console.log("we don't have localStorage")}

const appControl = {

    namespaced: true,

    state: {
        apps: ls_apps,
    },

    mutations: {

        showApp (state, payload) {
            for (let i=0; i<state.apps.length; i++){
                if (state.apps[i].appName == payload.appName){
                    state.apps[i].shouldShow = true;
                }
            }
            saveEditing (state);
        },
        hideApp (state, payload) {
            for (let i=0; i<state.apps.length; i++){
                if (state.apps[i].appName == payload.appName){
                    state.apps[i].shouldShow = false;
                }
            }
            saveEditing (state);
        },

        addApp(state, payload){
            state.apps.push(payload);
            saveEditing (state);
        },

        deleteApp(state, payload){
            for (let i=0; i<state.apps.length; i++){
                if (state.apps[i].appName == payload.appName){
                    state.apps.splice(i, 1); // remove it
                }
            }
            saveEditing (state);
        },

        editApp(state, payload) {
            for (let i=0; i<state.apps.length; i++){  
                if (state.apps[i].appName == payload.oldAppName){
                    state.apps[i].appName = payload.newAppName;
                    state.apps[i].appUrl = payload.newAppUrl;
                }
            }
            saveEditing (state);
        },

    },

    actions: {
        showApp({commit}, payload){
            commit("showApp", payload);
        },
        hideApp({commit}, payload){
            commit("hideApp", payload);
        },
        addApp({commit}, payload){
            commit("addApp", payload);
        },
        deleteApp({commit}, payload){
            commit("deleteApp", payload);
        },
        editApp({commit}, payload){
            commit("editApp", payload);
        },
    },
}

function saveEditing (state){
    try {
        if (localStorage) {
            localStorage.setItem('ls_apps', JSON.stringify(state.apps));
        }
    } catch (e) {console.log("we don't have localStorage")}
}

export default appControl;
