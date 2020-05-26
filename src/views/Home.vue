<template>
  <v-container>
    <SearchBox></SearchBox>
    <MovieList></MovieList>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SearchBox from "@/components/SearchBox.vue";
import MovieList from "@/components/MovieList.vue";
export default {
  name: "Home",
  components: {
    SearchBox,
    MovieList
  }
};
</script>
