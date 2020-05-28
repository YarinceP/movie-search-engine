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
    movies:[],
    movie:{
      id: '',
      title: '',
      genres: '',
      overview: '',
      posterPath: '',
      voteAverage: '',
      voteCount: '',
      budget: 0,
      homepage:'',
    }

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
    },
    loadMovie(state,movie){
      state.movie.id = movie.id
      state.movie.title = movie.title
      state.movie.genres = movie.genres
      state.movie.overview = movie.overview
      state.movie.posterPath = movie.poster_path
      state.movie.voteAverage = movie.vote_average
      state.movie.voteCount = movie.vote_count
      state.movie.budget = movie.budget
      state.movie.homepage = movie.homepage

    }
  },
  actions: {
    async getMoviesList(context,query){
      let movies = await api.getMovies(query,context.state.searchbox.page)
         console.log(movies);
         console.log(context.state.searchbox.page);
      context.commit('loadMovies',movies)
    },
    async getMovie(context,id){
      let movie = await api.getMovieById(id)
      console.log(movie)

      context.commit('loadMovie',movie)
    }
  },
  modules: {
  }
})
