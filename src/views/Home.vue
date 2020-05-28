<template>
  <v-container>
    <TitlePage title="Busca tu película favorita"></TitlePage>
    <SearchBox></SearchBox>
    <MovieList></MovieList>
    <Pagination></Pagination>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SearchBox from "@/components/SearchBox.vue";
import MovieList from "@/components/MovieList.vue";
import TitlePage from "@/components/TitlePage.vue";
import Pagination from "@/components/Pagination.vue";
import {mapState} from "vuex";
export default {
  name: "Home",
  components: {
    SearchBox,
    MovieList,
    TitlePage,
    Pagination,
  },
  computed:{
    ...mapState(['movie'])
  },
  mounted() {
    this.movie = null
  }
};
</script>
