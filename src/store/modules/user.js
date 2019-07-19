const user = {
  state: {
    userinfo: null 
  },
  mutations: {
    SET_USER_INFO (state, user) {
      state.userinfo = user
    }
  },
  actions: {
    initUserInfo ({ commit }, data) {
      commit('SET_USER_INFO', data)
    }
  }
}

export default user
