import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchbox:{
      query: '',
      page:   1,
      total_pages: null,
    },
    movies:[]

  },
  mutations: {
    showQuery(state,query){
      state.searchbox.query = query;
      state.searchbox.page = 1;
      console.log(state.searchbox.query);
    },
    loadMovies(state,movies){
      state.movies = movies
      state.searchbox.total_pages = movies.total_pages
    },
    resetData(state){
      state.movies = []
    }
  },
  actions: {
    async getMoviesList(context,query){
      let movies = await api.getMovies(query,context.state.searchbox.page)
         console.log(movies);
         console.log(context.state.searchbox.page);
      context.commit('loadMovies',movies)
    },
  },
  modules: {
  }
})
