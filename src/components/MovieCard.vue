<template>
  <v-hover>
    <v-card >
        <v-img :src="posterComp" :title="title" width="250" height="400">

        </v-img>
    </v-card>
  </v-hover>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "movie-card",

};
</script>