<template>
  <v-container>
      <v-row>
          <v-col cols="12">
              <h1>{{ title }}</h1>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'TitlePage',
    props:['title']
}
</script>

<style>

</style>