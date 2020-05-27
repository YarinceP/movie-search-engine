<template>
    <v-container>
        <v-row justify="center">
            <v-col>
                <v-pagination
                        v-model="searchbox.page"
                        class="my-4"
                        :length="searchbox.total_pages"
                        :total-visible="15"
                        @input="goToPage()"
                ></v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapActions, mapMutations, mapState} from "vuex";

    export default {
        name: "Pagination",
        computed: {
            ...mapState(['searchbox']),
        },
        methods: {
            ...mapMutations(['resetData']),
            ...mapActions(['getMoviesList']),
            goToPage() {//TODO: Hacer que el query solo se actualice al buscar.
                this.resetData()
                this.getMoviesList(this.searchbox.query)
            }

        },
    };
</script>