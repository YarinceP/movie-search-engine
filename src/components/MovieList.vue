<template>
  <v-container>
    <v-row>
      <v-col v-for="movie in movies.results" :key="movie.id" cols="12" md="6" lg="4" sm="4">
        <MovieCard :title="movie.title" :posterPath="movie.poster_path"></MovieCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
import { mapActions, mapState } from "vuex";
import api from "@/api";
export default {
  name: "MovieList",
  components: {
    MovieCard
  },
  methods: {
    ...mapActions(["getMoviesList"])
  },
  computed: {
    ...mapState(["movies"])
  },
  mounted() {
    this.getMoviesList();
  }
};
</script>

<style>
</style>