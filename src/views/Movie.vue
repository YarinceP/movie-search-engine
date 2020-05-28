<template>
    <v-container>
        <TitlePage title="Detalle de la película"></TitlePage>
        <SubTitlePage :title="movie.title"></SubTitlePage>
        <v-row>
            <v-col cols="12" md="4">
                <MovieCard :posterPath="movie.posterPath" :id="movie.id"></MovieCard>
            </v-col>
            <v-col cols="12" md="8">
                <v-chip color="warning" class="mr-4" v-for="genre in movie.genres"> {{ genre.name }}</v-chip>
                <h4 class="mt-5">Sinópsis</h4>
                <v-card-text>
                    {{movie.overview}}
                </v-card-text>
                <v-chip color="primary" class="mr-4"> Votos: {{ formatVotos }}</v-chip>
                <v-chip color="primary" class="mr-4"> Valoración: {{ formatValoracion }}</v-chip>
                <v-btn
                        v-if="movie.homepage !== ''"
                        :href="movie.homepage"
                        target="_blank"
                        color="info"
                >
                    <span class="mr-2">Sitio web</span>
                    <v-icon>mdi-open-in-new</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import SubTitlePage from "../components/SubTitlePage";
    import MovieCard from "../components/MovieCard";
    import {mapActions, mapState} from "vuex";


    export default {
        name: "Movie",
        components: {MovieCard, SubTitlePage, TitlePage},
        props: ['id'],
        computed: {
            ...mapState(['movie']),
            formatVotos(){
                return new Intl.NumberFormat().format(this.movie.voteCount)
            },formatValoracion(){
                return new Intl.NumberFormat().format(this.movie.voteAverage)
            }
        },
        methods: {
            ...mapActions(['getMovie']),
            scrollToTop() {
                window.scrollTo(0,0);
            }
        },
        mounted() {
            this.getMovie(this.$route.params.id),
            this.scrollToTop()
        },
    }
</script>

<style scoped>

</style>