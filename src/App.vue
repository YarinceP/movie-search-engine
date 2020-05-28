<template>
  <v-app>
    <v-app-bar
      app
      color="teal"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/img/carrete-de-pelicula.svg"
          transition="scale-transition"
          width="40"
        />

  	    <h2>Peliculas</h2>
      </div>
      <v-tabs right>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/about">About</v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/YarinceP/movie-search-engine"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',



  data: () => ({
    //
  }),
};
</script>
