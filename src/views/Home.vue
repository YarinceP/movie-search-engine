<template>
  <v-container>
    <TitlePage title="Busca tu película favorita"></TitlePage>
    <SearchBox></SearchBox>
    <MovieList></MovieList>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SearchBox from "@/components/SearchBox.vue";
import MovieList from "@/components/MovieList.vue";
import TitlePage from "@/components/TitlePage.vue";
export default {
  name: "Home",
  components: {
    SearchBox,
    MovieList,
    TitlePage
  }
};
</script>
