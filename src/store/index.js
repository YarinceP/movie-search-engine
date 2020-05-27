import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchbox:{
      query: '',
    },
    movies:[]
     
  },
  mutations: {
    showQuery(state,query){
      state.searchbox.query = query;
      console.log(state.searchbox.query);
    },
    loadMovies(state,movies){
      state.movies = movies
    }
  },
  actions: {
    async getMoviesList(context,query){
      let movies = await api.getMovies(query,1)
         console.log(movies)
      context.commit('loadMovies',movies)
    },
  },
  modules: {
  }
})
