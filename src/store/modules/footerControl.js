
var ls_footerText = 'xx学校 版权所有 Copyright © 2019  xx Information Technology College , All Rights Reserve';

try {
    if (localStorage) {
        if (localStorage.getItem("ls_footerText") !== null){
            ls_footerText = localStorage.getItem("ls_footerText");
        }
    }
} catch (e) {console.log("we don't have localStorage")}

const footerControl = {

    namespaced: true,

    state: {
        footerText: ls_footerText,
    },

    mutations: {
        setFooterText (state, payload) {
            console.log("in mutations: setFooterText" )
            state.footerText = payload.footerText;
            try {
                if (localStorage) {
                    localStorage.setItem('ls_footerText', state.footerText);
                }
            } catch (e) {console.log("we don't have localStorage")}
        },
    },

    // actions: {
    //     setFooterText({commit}, payload){
    //         commit("setFooterText", payload);
    //     }
    // },

  }
  
  export default footerControl
  