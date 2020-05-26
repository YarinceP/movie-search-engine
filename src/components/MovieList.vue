<template>
  <v-container>
      <v-row>
          <v-col
          v-for="n in 3"
          :key="n"
          cols="12"
          sm="4"
          >

          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'
import api from '@/api'
export default {
    name: 'MovieList',
    data() {
        return {
            movies:null
        }
    },
    methods: {
        api:getMovies('a',1)
        .then(console.log(response)
        )
        
        
    },
}
</script>

<style>

</style>