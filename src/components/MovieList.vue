<template>
  <v-container>
    <SubTitlePage
            v-if="movies.length !== 0"
            :title="movies.length === 0 ? '' : 'Se encontraron ' + formatNumber + ' resultados'"></SubTitlePage>
    <v-row>
      <v-col v-for="movie in movies.results" :key="movie.id" cols="12" md="6" lg="4" sm="4">
        <MovieCard :title="movie.title" :posterPath="movie.poster_path"></MovieCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
import SubTitlePage from "@/components/SubTitlePage.vue";
import { mapActions, mapState } from "vuex";
import api from "@/api";
export default {
  name: "MovieList",
  components: {
    MovieCard,
    SubTitlePage,
  },
  computed: {
    ...mapState(["movies"]),
    formatNumber(){
     return new Intl.NumberFormat().format(this.movies.total_results)
    }
  },
};
</script>