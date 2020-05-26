<template>
  <v-form>
    <v-container>
      <v-row>
        <h1 >Search your favorite movie</h1>
      </v-row>
      <v-row>
        <v-col cols="10">
          <v-text-field v-model="searchbox.query" placeholder="Cinema Master" color="teal"  filled shaped clearable />
        </v-col>
        <v-col cols="2">
          <v-btn @click="showQuery(searchbox.query)" color="warning" x-large rounded>Search</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    name: 'SearchBox',
    computed:{
      ...mapState(['searchbox'])
    },
    methods:{
      ...mapMutations(['showQuery'])
    }
}
</script>

