
let ls_links = 
    [
        // { linkName:"学校空间", shouldShow: true,  linkUrl: "/school"},
        // { linkName:"班级空间", shouldShow: true,  linkUrl: "/myclass"},
        // { linkName:"个人空间", shouldShow: true,  linkUrl: "/home"},
        // { linkName:"应用中心", shouldShow: true,  linkUrl: "/control_panel"},
        { linkName:"学校空间", shouldShow: true,  linkUrl: "http://localhost:8080/#/school"},
        { linkName:"班级空间", shouldShow: true,  linkUrl: "http://localhost:8080/#/myclass"},
        { linkName:"个人空间", shouldShow: true,  linkUrl: "http://localhost:8080/#/home"},
        { linkName:"控制面板", shouldShow: true,  linkUrl: "http://localhost:8080/#/control_panel"},
    ];





try {
    if (localStorage) {
        // console.log("we have localStorage")
        if (localStorage.getItem("ls_links") !== null){
            ls_links = JSON.parse(localStorage.getItem("ls_links"));
        }
    }
} catch (e) {console.log("we don't have localStorage")}

const navBarLinks = {

    namespaced: true,

    state: {
        links: ls_links,
    },

    mutations: {

        showLink (state, payload) {
            for (let i=0; i<state.links.length; i++){
                if (state.links[i].linkName == payload.linkName){
                    state.links[i].shouldShow = true;
                }
            }
            saveEditing (state);
        },
        hideLink (state, payload) {
            for (let i=0; i<state.links.length; i++){
                if (state.links[i].linkName == payload.linkName){
                    state.links[i].shouldShow = false;
                }
            }
            saveEditing (state);
        },

        addLink(state, payload){
            state.links.push(payload);
            saveEditing (state);
        },

        deleteLink(state, payload){
            for (let i=0; i<state.links.length; i++){
                if (state.links[i].linkName == payload.linkName){
                    state.links.splice(i, 1); // remove it
                }
            }
            saveEditing (state);
        },

        editLink(state, payload) {
            for (let i=0; i<state.links.length; i++){  
                if (state.links[i].linkName == payload.oldLinkName){
                    state.links[i].linkName = payload.newLinkName;
                    state.links[i].linkUrl = payload.newLinkUrl;
                }
            }
            saveEditing (state);
        },

    },

    actions: {
        showLink({commit}, payload){
            commit("showLink", payload);
        },
        hideLink({commit}, payload){
            commit("hideLink", payload);
        },
        addLink({commit}, payload){
            commit("addLink", payload);
        },
        deleteLink({commit}, payload){
            commit("deleteLink", payload);
        },
        editLink({commit}, payload){
            commit("editLink", payload);
        },
    },
}
  
function saveEditing (state){
    try {
        if (localStorage) {
            localStorage.setItem('ls_links', JSON.stringify(state.links));
        }
    } catch (e) {console.log("we don't have localStorage")}
}

  export default navBarLinks;
  