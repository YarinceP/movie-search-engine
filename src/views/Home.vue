<template>
  <v-container>
    <SearchBox></SearchBox>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SearchBox from "@/components/SearchBox.vue";
export default {
  name: "Home",
  components: {
    SearchBox,
  }
};
</script>
