<template>
  <v-row>
    <v-col>
      <v-banner single-line>
        <v-icon slot="icon" color="error" size="36">mdi-movie</v-icon>
        {{title}}
      </v-banner>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SubTitlePage",
  props: ["title"]
};
</script>