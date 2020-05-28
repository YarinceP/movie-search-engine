<template>
    <v-container>
        <v-container>
            <TitlePage title="Acerca de"></TitlePage>
            <v-row>
                <v-col cols="12" md="3">
                    <v-avatar
                            height="200"
                            width="200"
                    >
                        <v-img
                                height="200"
                                width="200"
                                src="@/assets/img/perfil.jpg"
                                alt="Foto perfil"
                        >

                        </v-img>
                    </v-avatar>
                </v-col>
                <v-col cols="12" md="8">
                    Hola, mi nombre es Yarince Padilla, y hace 8 años compile mi primer Hola Mundo en C#. Actualmente
                    soy
                    ingenierio en ciencias de la computación, amante del desarrollo de software y un apasionado por las
                    tecnologías web y móvil.
                    Hace unos días conocí Vuejs así que decidí realizar algo divertido como un sitio web informativo de
                    películas.
                    <br>
                    <h4 class="mt-5">Contacto</h4>
                    <v-btn icon color="info" href="https://www.linkedin.com/in/yarince-padilla-b624ba147/"
                           target="_blank">
                        <v-icon>mdi-linkedin-box</v-icon>
                    </v-btn>
                    <v-btn icon color="bg-black">
                        <v-icon>mdi-github-circle</v-icon>
                    </v-btn>
                    <v-btn icon color="info" href="https://twitter.com/YarincePadilla" target="_blank">
                        <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    Este sitio web fue desarrollado utilizando Vuejs, Vuetify, HTML5.
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-hover v-slot:default="{ hover }">
                        <v-card :elevation="hover ? 21 : 2" width="200" shaped target="_blank"
                                href="https://vuejs.org/">
                            <v-img src="@/assets/img/logo.png" position="center" contain height="200" width="200">
                            </v-img>
                            <v-card-text class="teal white--text center--text">VueJs</v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="12" md="4">
                    <v-hover v-slot:default="{ hover }">
                        <v-card :elevation="hover ? 21 : 2" width="200" shaped target="_blank"
                                href="https://vuetifyjs.com/">
                            <v-img src="@/assets/img/logo.svg" position="center" contain height="200" width="200">
                            </v-img>
                            <v-card-text class="info white--text center--text">Vuetify</v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="12" md="4">
                    <v-hover v-slot:default="{ hover }">
                        <v-card :elevation="hover ? 21 : 2" width="200" shaped target="_blank"
                                href="https://developer.mozilla.org/es/docs/Web/HTML">
                            <v-img src="@/assets/img/html_logo.png" position="center" contain height="200" width="200">
                            </v-img>
                            <v-card-text class="amber darken-4 white--text center--text">HTML</v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>

        </v-container>
        <v-footer color="teal"
                  padless>
            <v-row>
                <v-col
                        class="teal py-4 text-center white--text"
                        cols="12"
                >
                    {{ new Date().getFullYear() }} — <strong>DevP (Yarince Padilla)</strong>
                </v-col>
            </v-row>
        </v-footer>
    </v-container>
</template>
<script>
    import TitlePage from "../components/TitlePage";

    export default {
        components: {TitlePage}
    }
</script>