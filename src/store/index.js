import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchbox:{
      query: '',
    }
     
  },
  mutations: {
    showQuery(state,query){
      state.searchbox.query = query;
      console.log(state.searchbox.query);
    }
  },
  actions: {
  },
  modules: {
  }
})
