<template>
<div class="main-wrapper-login">
    <v-container grid-list-sm>
        <v-layout row wrap>

            <v-flex xs12 sm12 style="position: center;text-align: left;">
                <v-layout column>

                    <v-container class="pa-0" grid-list-md text-xs-center>
                        <v-layout row wrap>

                            <v-flex xs12 sm12>

                                <v-layout column>

                                    <p class="title-login">
                                        <v-img height="150px" contain style=";" :src="smallLogo"></v-img>

                                    </p>
                                </v-layout>
                            </v-flex>

                            <v-flex xs12 sm4 style="margin-top: 10vh;">
                                <v-layout column style="margin-left:3%">

                                </v-layout>
                            </v-flex>

                            <v-flex xs12 sm4 style="margin-top: 10vh;">
                                <v-layout column style="margin-left:3%">
                                    <v-text-field color="#4A6BAE" dense :background-color="'white'" v-on:keyup.enter="submitAuthentication()" v-model="credentials.email" required>
                                        <template v-slot:label>
                                            <p v-html="'Correo electrónico'" />
                                        </template>
                                    </v-text-field>

                                </v-layout>
                            </v-flex>

                            <v-flex xs12 sm4 style="margin-top: 10vh;">
                                <v-layout column style="margin-left:3%">

                                </v-layout>
                            </v-flex>

                            <v-flex xs12 sm4 style="margin-top: 10vh;">
                                <v-layout column style="margin-left:3%">

                                </v-layout>
                            </v-flex>

                            <v-flex xs12 sm4>
                                <v-layout column style="margin-left:3%">
                                    <br>
                                    <br>
                                    <p v-text="texts.desc_2" class="field-title" />
                                    <v-text-field :background-color="'white'" color="#4A6BAE" :append-icon="loginPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'" @click:append="() => (loginPasswordVisible = !loginPasswordVisible)" v-on:keyup.enter="submitAuthentication()" v-model="credentials.password" :type="loginPasswordVisible ? 'text' : 'password'">
                                        <template v-slot:label>
                                            <p v-html="'Contraseña'" />
                                        </template>
                                    </v-text-field>
                                </v-layout>
                            </v-flex>

                            <v-flex xs12 sm4 style="margin-top: 10vh;">
                                <v-layout column style="margin-left:3%">

                                </v-layout>
                            </v-flex>

                            <v-flex xs12 sm4 style="margin-top: 10vh;">
                                <v-layout column style="margin-left:3%">

                                </v-layout>
                            </v-flex>

                            <v-flex xs12 sm4 style="margin-left:1%">
                                <br>
                                <v-btn width="100%" color="#4A6BAE" @click.native="submitAuthentication()" dark>Iniciar Sesión</v-btn>
                            </v-flex>

                            <v-flex xs12 sm4 style="margin-top: 10vh;">
                                <v-layout column style="margin-left:3%">

                                </v-layout>
                            </v-flex>


                            <v-flex xs12 sm4 style="margin-left:1%">
                                <br>
                                <v-btn width="100%" color="#4A6BAE" @click.native="dialog = true" dark>Recuperar Contraseña</v-btn>
                            </v-flex>

                            <v-flex xs12 sm4 style="margin-top: 10vh;">
                                <v-layout column style="margin-left:3%">

                                </v-layout>
                            </v-flex>

                        </v-layout>
                    </v-container>
                </v-layout>
            </v-flex>

            <v-flex xs12 sm8 style="margin-left: 0vh;">
                <v-layout column>

                    <figure>
                        <div>
                        </div>
                    </figure>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>

    <v-dialog v-model="dialog" max-width="800" content-class="dialog-radius">
      <v-card>
        <v-card-title class="headline" style="justify-content:left;color:#809DED;">Recuperar Contraseña</v-card-title>
        <v-card-text>
            <v-container class="pa-0" grid-list-md text-xs-center>
                    <v-layout row wrap>
                    <v-flex xs12>
                            <v-container class="pa-0" grid-list-md text-xs-left>
                            <v-layout row wrap>
                                <v-flex xs12 sm12>
                                <v-layout column>
                                        <v-flex sm12 class="pa-1">
                                            <v-text-field
                                            height="40"
                                            color="#4a6cac"
                                            outlined
                                            dense
                                            v-model="email"
                                            style="border-color:coral;"
                                            >
                                            <template v-slot:label>
                                                <p v-html="'Correo'" />
                                            </template>
                                            </v-text-field>
                                        </v-flex>
                                </v-layout>
                                </v-flex>
                            </v-layout>
                            </v-container>
                    </v-flex>
                    </v-layout>
            </v-container>
        </v-card-text>
        <v-card-actions style="justify-content: center;">
          <v-btn
            style="text-transform: none; width: 25%; margin-right: 10%;"
            color="#E36E6E"
            @click="dialog = false"
            dark
          >Cancelar</v-btn>
          <v-btn
            depressed
            style="text-transform: none; width: 25%; background-color: #809DED; color: white;"
            @click="RecoverPass()"
            color="#809DED"
          >Confirmar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogEmail" max-width="800" content-class="dialog-radius">
      <v-card>
        <v-card-title class="headline" style="justify-content:left;color:#809DED;">Email de recuperación enviado</v-card-title>
        <v-card-actions style="justify-content: center;">
          <v-btn
            depressed
            style="text-transform: none; width: 25%; background-color: #809DED; color: white;"
            @click="dialogEmail = false"
            color="#809DED"
          >Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <br />
    <br />

</div>
</template>

<script>
import Authentication from '@/components/Authentication'
import router from '@/router'
import Axios from "axios";

export default {
    beforeMount() {
        if (this.loggedIn) {
            this.$router.push('/requests')
        }
    },
    data: () => ({
        loginPasswordVisible: false,
        dialog: false,
        dialogEmail: false,
        email: "",
        isBooted: false,
        smallLogo: "https://pbs.twimg.com/profile_images/991710919456509952/CFSBX8vW_400x400.jpg",
        bigLogo: "https://pbs.twimg.com/profile_images/991710919456509952/CFSBX8vW_400x400.jpg",
        credentials: {
            email: '',
            password: ''
        },
        loadLogin: false

    }),
    methods: {
        submitAuthentication() {
            this.loadLogin = true
            Authentication.authenticate(this, this.credentials)
        },
        RecoverPass(){
            var vm = this
            let body = {
                email: this.email
            }

            Axios.post(`${BAPI}/password-resets`, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                console.log('Email sent successfully')
                console.log(res.data)
                vm.dialogEmail = true
                return res.data;
            })
            .catch(err => {
                console.log(err)
                console.warn(err);
                this.$store.commit("toggle_alert", {
                    color: "error",
                    text: err.response.data.message
                });
            });
            //after recover call
            this.dialog = false
        }
    },
    mounted() {
        document.title = "BP Inicio de sesión";
        setTimeout(() => {
            this.isBooted = true
        }, 200)
    },
    computed: {
        loggedIn() {
            return this.$cookies.get('H1BPidLo') !== null
        },
        isHome() {
            return this.$route.path === '/'
        },
        namespace() {
            return this.$route.name
        },
        texts() {
            return this.$t("userIntreactions.texts");
        },
        titles() {
            return this.$t("userIntreactions.login");
        },
        titleLogo: function () {
            if (this.mini) {
                return this.smallLogo
            } else {
                return this.bigLogo
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>

<style>

</style>
