const editZone = {

    namespaced: true,

    state: {
        shouldShowTemplate: true, // default
        shouldShowBackground: false,
        shouldShowModule: false,
    },

    mutations: {
        showTemplate (state) {
            console.log("in mutation: showTemplate")
            state.shouldShowTemplate = true;
            state.shouldShowModule = false;
        },
        showModule (state) {
            console.log("in mutation: shouldShowModule")
            state.shouldShowTemplate = false;
            state.shouldShowModule = true;
        },
        showBackground (state) {
            console.log("in mutation: showBackground")
        },
    },

  }
  
  export default editZone
  