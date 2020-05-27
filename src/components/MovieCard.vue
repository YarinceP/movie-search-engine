<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :elevation="hover ? 21 : 2" width="300" shaped>
      <v-img :src="posterComp" width="300" height="450" :eager="true" :alt="title">
      </v-img>
      <v-card-text class="teal white--text center--text">{{title}}</v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import posterMixin from "@/api/poster.js";
export default {
  name: "movie-card",
  mixins: [posterMixin],
  props: ["title", "posterPath"]
};
</script>