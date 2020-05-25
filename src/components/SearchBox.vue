<template>
  <v-form>
    <v-container>
      <v-row>
        <h1 >Search your favorite movie</h1>
      </v-row>
      <v-row>
        <v-col cols="10">
          <v-text-field label="Cinema" placeholder="Example" outlined />
        </v-col>
        <v-col cols="2">
          <v-btn color="warning" large rounded>Search</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
    name: 'SearchBox'
}
</script>

