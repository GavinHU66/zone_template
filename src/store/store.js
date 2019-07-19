import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import templateControl from '@/store/modules/templateControl'
import editZone from '@/store/modules/editZone'
import navBarLinks from '@/store/modules/navBarLinks'
import appControl from '@/store/modules/appControl'
import footerControl from '@/store/modules/footerControl'
import getters from '@/store/getters'

Vue.use(Vuex)

let ls_isLoggedIn = false; // default
try {
  if (localStorage) {
      // console.log("we have localStorage")
      if (localStorage.getItem("ls_isLoggedIn") !== null){
        ls_isLoggedIn = (localStorage.getItem("ls_isLoggedIn") === 'true');
      }
  }
} catch (e) {console.log("we don't have localStorage")}

export default new Vuex.Store({

  state: {
      isLoggedIn: ls_isLoggedIn 
  },

  modules: {
      user: user,
      editZone: editZone,
      navBarLinks: navBarLinks,
      appControl: appControl,
      footerControl: footerControl,
      templateControl: templateControl,
  },

  mutations: {

    logIn (state) {      
      state.isLoggedIn = true;
      try {
        if (localStorage) {
          localStorage.setItem("ls_isLoggedIn", state.isLoggedIn);
        }
      } catch (e) {console.log("we don't have localStorage")}
    },

    logOut (state) {      
      state.isLoggedIn = false;
      try {
        if (localStorage) {
          localStorage.setItem("ls_isLoggedIn", state.isLoggedIn);
        }
      } catch (e) {console.log("we don't have localStorage")}
    }
  },

  getters
})
