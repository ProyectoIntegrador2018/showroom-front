<template>
<section id="services" style="width:100%;">
    <br>
    <br>
    <br>
    <v-container class="pa-0" grid-list-md text-xs-center>
        <v-container class="pa-0" grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex xs12 sm2>
                    <v-layout column>
                        <v-layout row justify-start>
                            <p class="Admin-title" style="color:#809DED; font:SemiBold Raleway; font-size:40px">Items</p>
                        </v-layout>
                    </v-layout>
                </v-flex>
                <v-flex xs12 sm4 style="padding-top:9px;">
                    <v-layout column>
                        <template>
                            <v-text-field height="40" dense :background-color="'white'" color="#809DED" v-model="search" outlined style="border-color:coral;">
                                <template v-slot:label>
                                    <p v-html="'Búsqueda General...'" />
                                </template>
                            </v-text-field>
                        </template>
                    </v-layout>
                </v-flex>
                <v-flex xs12 sm4>
                    <v-layout column>

                    </v-layout>
                </v-flex>
                <v-flex xs12 sm2>
                    <v-layout column>
                        <v-btn class="mx-2" fab small dark color="#496CAB" @click="dialog = true">
                            <v-icon dark>mdi-plus</v-icon>
                        </v-btn>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>

        <v-card class="mx-auto" :elevation="0">
            <MyItems @updatePage="updatePage" @updatePerPage="updatePerPage" :totalLength="totalLength" :pageCount="pageCount" :page="page" :rowsPerPage="rowsPerPage" :search="search" :items="items" :light="false" :tags="tags" />
        </v-card>
    </v-container>

    <v-dialog v-model="dialog" max-width="800" content-class="dialog-radius">
        <v-card>
            <v-card-title class="headline" style="justify-content:left;color:#809DED;">Crear Nuevo Item</v-card-title>
            <v-card-text>
                <v-container class="pa-0" grid-list-md text-xs-center>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-container class="pa-0" grid-list-md text-xs-left>
                                <v-layout row wrap>
                                    <v-flex xs12 sm8>
                                        <v-layout column>
                                            <v-flex sm6 class="pa-1">
                                                <v-flex sm12 class="pa-1">
                                                    <v-text-field height="40" v-model="newItem.Name" color="#4a6cac" outlined dense style="border-color:coral;">
                                                        <template v-slot:label>
                                                            <p v-html="'Nombre'" />
                                                        </template>
                                                    </v-text-field>
                                                </v-flex>
                                                <v-flex sm12 class="pa-1">
                                                    <v-text-field height="40" v-model="newItem.subtitle" color="#4a6cac" outlined dense style="border-color:coral;">
                                                        <template v-slot:label>
                                                            <p v-html="'Subtitulo'" />
                                                        </template>
                                                    </v-text-field>
                                                </v-flex>

                                                <v-layout row wrap>
                                                    <v-flex sm4 class="pa-1">
                                                        <v-text-field height="40" v-model="newItem.title1" color="#4a6cac" outlined dense style="border-color:coral;">
                                                            <template v-slot:label>
                                                                <p v-html="'Titulo 1'" />
                                                            </template>
                                                        </v-text-field>
                                                    </v-flex>
                                                    <v-flex sm4 class="pa-1">
                                                        <v-text-field height="40" v-model="newItem.title2" color="#4a6cac" outlined dense style="border-color:coral;">
                                                            <template v-slot:label>
                                                                <p v-html="'Titulo 2'" />
                                                            </template>
                                                        </v-text-field>
                                                    </v-flex>
                                                    <v-flex sm4 class="pa-1">
                                                        <v-text-field height="40" v-model="newItem.title3" color="#4a6cac" outlined dense style="border-color:coral;">
                                                            <template v-slot:label>
                                                                <p v-html="'Titulo 3'" />
                                                            </template>
                                                        </v-text-field>
                                                    </v-flex>
                                                </v-layout>

                                                <v-flex sm12 class="pa-1">
                                                    <v-text-field height="40" v-model="newItem.description1" color="#4a6cac" outlined dense style="border-color:coral;">
                                                        <template v-slot:label>
                                                            <p v-html="'Descripcion 1'" />
                                                        </template>
                                                    </v-text-field>
                                                </v-flex>
                                                <v-flex sm12 class="pa-1">
                                                    <v-text-field height="40" v-model="newItem.description2" color="#4a6cac" outlined dense style="border-color:coral;">
                                                        <template v-slot:label>
                                                            <p v-html="'Descripcion 2'" />
                                                        </template>
                                                    </v-text-field>
                                                </v-flex>
                                                <v-flex sm12 class="pa-1">
                                                    <v-text-field height="40" v-model="newItem.description3" color="#4a6cac" outlined dense style="border-color:coral;">
                                                        <template v-slot:label>
                                                            <p v-html="'Descripcion 3'" />
                                                        </template>
                                                    </v-text-field>
                                                </v-flex>

                                                <v-flex sm12 class="pa-1">
                                                    <v-select v-model="newItem.Tags" outlined :items="tags" attach color="#4a6cac" chips label="Tags" multiple>
                                                        <template v-slot:label>
                                                            <p v-html="'Tags'" />
                                                        </template>
                                                    </v-select>
                                                </v-flex>
                                                <v-flex sm12 class="pa-1">
                                                    <v-select v-model="newItem.userContact" outlined :items="users" item-text="name" item-value="id" attach color="#4a6cac" chips label="Usuario de contacto">
                                                        <template v-slot:label>
                                                            <p v-html="'Usuario de contacto'" />
                                                        </template>
                                                    </v-select>
                                                </v-flex>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>

                                    <v-flex xs12 sm4 style="margin-top:3px;">
                                        <v-flex xs12 sm12>
                                            <v-layout column>
                                                <v-text-field height="40" v-model="newItem.imgMain" color="#4a6cac" outlined dense style="border-color:coral;">
                                                    <template v-slot:label>
                                                        <p v-html="'URL Imagen Principal'" />
                                                    </template>
                                                </v-text-field>
                                            </v-layout>
                                        </v-flex>
                                        <v-flex xs12 sm12>
                                            <v-layout column>
                                                <v-text-field height="40" v-model="newItem.img1" color="#4a6cac" outlined dense style="border-color:coral;">
                                                    <template v-slot:label>
                                                        <p v-html="'URL Imagen Seccion 1'" />
                                                    </template>
                                                </v-text-field>
                                            </v-layout>
                                        </v-flex>
                                        <v-flex xs12 sm12>
                                            <v-layout column>
                                                <v-text-field height="40" v-model="newItem.img2" color="#4a6cac" outlined dense style="border-color:coral;">
                                                    <template v-slot:label>
                                                        <p v-html="'URL Imagen Seccion 2'" />
                                                    </template>
                                                </v-text-field>
                                            </v-layout>
                                        </v-flex>
                                                                                <v-flex xs12 sm12>
                                            <v-layout column>
                                                <v-text-field height="40" v-model="newItem.img3" color="#4a6cac" outlined dense style="border-color:coral;">
                                                    <template v-slot:label>
                                                        <p v-html="'URL Imagen Seccion 3'" />
                                                    </template>
                                                </v-text-field>
                                            </v-layout>
                                        </v-flex>
                                    </v-flex>

                                </v-layout>
                            </v-container>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions style="justify-content: center;">
                <v-btn style="text-transform: none; width: 25%; margin-right: 10%;" color="#E36E6E" @click="dialog = false" dark>Cancelar</v-btn>
                <v-btn depressed style="text-transform: none; width: 25%; background-color: #809DED; color: white;" @click="createItem()" color="#809DED">Aceptar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</section>
</template>

<script src="https://unpkg.com/filepond-plugin-image-preview"></script>
<script src="https://unpkg.com/filepond"></script>
<script src="https://unpkg.com/vue-filepond"></script>
<script>
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
);
import Axios from "axios";
import Authentication from "@/components/Authentication";
export default {
    data: () => ({
        pageCount: 0,
        totalLength: 0,
        rowsPerPage: 10,
        page: 1,
        newItem: {
            Name: "",
            subtitle: "",
            title1: "",
            title2: "",
            title3: "",
            description1: "",
            description2: "",
            description3: "",
            imgMain: "",
            img1: "",
            img2: "",
            img3: "",
            Tags: [],
            userContact: ""
        },
        search: "",
        dialog: false,
        tags: ['foo', 'bar', 'fizz', 'buzz'],
        items: [{
                _id: "12345",
                name: "Angel Figueroa",
                tags: 5
            },
            {
                _id: "13245",
                name: "Jesus Lugo",
                tags: 5
            },
            {
                _id: "74526",
                name: "Gonzalo Adrian",
                tags: 5
            },
            {
                _id: "23948",
                name: "Jorge Sabella",
                tags: 5
            },
        ],
        users: []
    }),
    watch: {

    },
    computed: {

    },
    methods: {
        getServer(i) {
            var server = {
                process: (fieldName, file, metadata, load, error, progress, abort) => {
                    const formData = new FormData();
                    formData.append(fieldName, file, file.name);
                    this.rows[0].images[i].title = URL.createObjectURL(file);
                    if (i == 0) {
                        this.imageform1 = formData;
                    }
                    abort();
                }
            };
            return server;
        },
        updatePage(page) {
            this.page = page;
            // this.getHistorial();
        },
        updatePerPage(per) {
            this.rowsPerPage = per;
            // this.getHistorial();
        },
        getTags() {
            //SetItems
            this.tags = [];
            db.get(
                    `${BAPI}/tags/`, {
                        headers: {
                            Authorization: authentication.getAuthenticationHeader(this)
                        },
                        params: {}
                    }
                )
                .then(response => {

                    for (var i = 0; i < response.data.length; i++) {
                        console.log(i)
                        this.tags.push(response.data[i].name)
                    }
                    console.log("mis tags", this.tags)
                })
                .catch(error => {
                    this.$store.commit("toggle_alert", {
                        color: "red",
                        text: error.message
                    });
                });
        },
        getItems() {
            //SetItems
            this.items = [];
            db.get(
                    `${BAPI}/items/`, {
                        headers: {
                            Authorization: authentication.getAuthenticationHeader(this)
                        },
                        params: {}
                    }
                )
                .then(response => {
                    this.items = response.data;
                    console.log(this.items)
                })
                .catch(error => {
                    this.$store.commit("toggle_alert", {
                        color: "red",
                        text: error.message
                    });
                });
        },
        getUsers() {
            //SetItems
            this.users = [];
            db.get(
                `${BAPI}/users/`, {
                    headers: {
                        Authorization: authentication.getAuthenticationHeader(this)
                    },
                    params: {}
                }
            )
            .then(response => {
                this.users = response.data;
                console.log(this.users)
            })
            .catch(error => {
                this.$store.commit("toggle_alert", {
                    color: "red",
                    text: error.message
                });
            });
        },
        createItem() {
            if (this.newItem.Name != "") {
                var body = {
                    name: this.newItem.Name,
                    subtitle: this.newItem.subtitle,
                    title1: this.newItem.title1,
                    title2: this.newItem.title2,
                    title3: this.newItem.title3,
                    description1: this.newItem.description1,
                    description2: this.newItem.description2,
                    description3: this.newItem.description3,
                    tags: this.newItem.Tags,
                    image: this.newItem.imgMain,
                    cardImg1: this.newItem.img1,
                    cardImg2: this.newItem.img2,
                    cardImg3: this.newItem.img3,
                    userContact: this.newItem.userContact
                }

                Axios.post(`${BAPI}/items`, body, {
                        headers: {
                            Authorization: authentication.getAuthenticationHeader(this)
                        },
                        params: {}
                    })
                    .then(res => {
                        return res.data;
                    })
                    .then(res => {
                        if (this.imageform1 != null) {
                            return Promise.all([
                                Axios.post(
                                    `${BAPI}/api/${res.data.id}/images/`,
                                    this.imageform1
                                )
                            ]);
                        }
                    })
                    .then(res => {
                        this.loader = null
                        this.waitforload = false
                        this.dialog = false;
                        this.$store.commit("toggle_alert", {
                            color: "green",
                            text: "Registro exitoso!"
                        });
                        this.newItem.Name = ""
                        this.newItem.subtitle = ""
                        this.newItem.title1 = ""
                        this.newItem.title2 = ""
                        this.newItem.title3 = ""
                        this.newItem.description1 = ""
                        this.newItem.description2 = ""
                        this.newItem.description3 = ""
                        this.newItem.Tags = []
                        this.newItem.imgMain = ""
                        this.newItem.img1 = ""
                        this.newItem.img2 = ""
                        this.newItem.img3 = ""
                        this.newItem.userContact = ""
                        this.getItems()
                    })
                    .catch(err => {
                        this.loader = null
                        this.waitforload = false
                        console.warn(err);
                        this.$store.commit("toggle_alert", {
                            color: "error",
                            text: err.response.data.message
                        });
                    });
            } else {
                this.loader = null
                this.waitforload = false
                console.warn("No se puede registrar, faltan obligatorios");
                this.$store.commit("toggle_alert", {
                    color: "red",
                    text: "Las contraseñas deben de ser iguales"
                });
            }
        },
        handleFilePondInit: function (a) {

        },
    },
    mounted() {
        this.getItems()
        this.getTags()
        this.getUsers()
    },
    components: {
        MyItems: () => import("@/components/viewComponents/Items/Items-Table")
    }
};
</script>

<style>
.selected-title-category {
    font-family: "Open sans", sans-serif;
    color: black;
    font-size: 20px;
}

.stat_title-Statistics {
    font-family: "Open sans", sans-serif;
}

.not_logged_in {
    background-color: black;
}

.content_title-Requests {
    background-color: rgba(250, 250, 250, 1);
}

.title_app-App {
    font-family: "Open sans", "sans-serif";
    color: black;
}

.add-btn {
    background-color: #4DAF7C !important;
    color: white !important;
    font-size: 30px !important;
    font-weight: 200 !important;
    width: 40px !important;
    height: 40px !important;
    min-width: 0 !important;
}

/**
 * Page Styles
 */
</style>
