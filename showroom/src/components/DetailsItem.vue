<template>
<div>
    <v-card class="detailItem">
        <v-card-title class="headline" style="justify-content:center;color:white;font-size:2em;font-weight:bolder;">{{data.name}}</v-card-title>
        <v-card-text>
            <v-container class="pa-0" grid-list-md text-xs-center>
                <v-layout row wrap>
                    <v-flex>
                        <v-container class="pa-0" grid-list-md text-xs-left>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>

                                        <ul class="nav nav-tabs">
                                            <li>
                                                <a class="nav-link active" @click="showImg1()" :style="{'color':coli1,'cursor':'pointer'}">Imagen 1</a>
                                            </li>
                                            <li>
                                                <a class="nav-link active" @click="showImg2()" :style="{'color':coli2,'cursor':'pointer'}">Imagen 2</a>
                                            </li>
                                    
                                        </ul>

                                    <v-layout column>
                                        <v-flex xs12 sm12 class="pa-1">
                                            <div v-if="seli1"> 
                                            <v-img :src="data.cardImg1" style="border-radius: 10px;"></v-img>
                                            </div>
                                            <div v-else-if="seli2">
                                            <v-img :src="data.cardImg2" style="border-radius: 10px;"></v-img>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>

                                <v-flex xs12 sm3 style="margin-left:50px;">
                                    <v-layout column>
                                        <ul class="nav nav-tabs">
                                            <li>
                                                <a class="nav-link active" @click="showDesc1()" :style="{'color':col1,'cursor':'pointer'}"> {{data.title1}}</a>
                                            </li>
                                            <li>
                                                <a class="nav-link active" @click="showDesc2()" :style="{'color':col2,'cursor':'pointer'}">{{data.title2}}</a>
                                            </li>
                                            <li>
                                                <a class="nav-link active" @click="showDesc3()" :style="{'color':col3,'cursor':'pointer'}">{{data.title3}}</a>
                                            </li>                                            
                                        </ul>
                                        <div style="color:white;padding-top: 20px !important;">

                                            <div v-if="sel1"> 
                                            {{data.description1}}
                                            </div>
                                            <div v-else-if="sel2">
                                            {{data.description2}}
                                            </div>
                                            <div v-else>
                                            {{data.description3}}
                                            </div>

                                        </div>
                                    </v-layout>
                                </v-flex>

                                <v-flex xs12 sm5 style="margin-left:35px;margin-top:30px;">
                                    <v-layout column>

                                        <v-container class="pa-0" grid-list-md text-xs-left>
                                            <v-layout row wrap>

                                                <v-flex xs12 sm6>
                                                    <v-img src="../assets/aws-certif.png" :max-width="85" :max-height="40" contain class="grey lighten-2"></v-img>
                                                </v-flex>
                                                <v-flex xs12 sm6>
                                                    <v-img src="../assets/iso-certif.png" :max-width="120" :max-height="40" contain class="grey lighten-2"></v-img>
                                                </v-flex>
                                                <v-flex xs12 sm6>
                                                    <v-img src="../assets/microsoft-certif.png" :max-width="120" :max-height="30" contain class="grey lighten-2"></v-img>
                                                </v-flex>
                                                <v-flex xs12 sm6>
                                                    <v-img src="../assets/istob-certf.png" :max-width="70" :max-height="40" contain class="grey lighten-2"></v-img>
                                                </v-flex>
                                                <v-flex xs12 sm12>

                                                    <v-container class="pa-0" grid-list-md text-xs-left>
                                                        <v-layout row wrap>

                                                            <v-flex xs12 sm4>
                                                                <v-img src="../assets/user-def.png" style="border-radius: 50%;" class="grey lighten-2"></v-img>
                                                            </v-flex>
                                                            <v-flex xs12 sm8 v-if="data.userContact">
                                                                <v-flex xs12 style="color:white;">
                                                                    <v-icon medium color="white">mdi-account</v-icon>
                                                                    {{data.userContact.name}}
                                                                </v-flex>
                                                                <v-flex xs12 style="color:white;">
                                                                    <v-icon medium color="white">mdi-phone</v-icon>
                                                                    {{data.userContact.phone}}
                                                                </v-flex>

                                                                <v-flex xs12 style="color:white;">
                                                                    <v-icon medium color="white">mdi-email</v-icon>
                                                                    {{data.userContact.email}}
                                                                </v-flex>

                                                                <v-flex xs12>
                                                                    <div class="tags">
                                                                        <ul v-for="(tag,j) in data.tags" :key="j"> <a href="#" class="badge badge-pill badge-primary"> {{tag}} </a></ul>
                                                                    </div>
                                                                </v-flex>
                                                            </v-flex>
                                                        </v-layout>
                                                    </v-container>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-text>
    </v-card>
</div>
</template>

<script>
export default {
  props: {
    data: {
        type: Object
    }
  },
  data () {
    return {
      stringy: 'Henlo snek',
      isTrue: false,
      sel1: true,
      sel2: false,
      sel3: false,
      col1: "blue",
      col2: "gray",
      col3: "gray",
      coli1: "blue",
      coli2: "gray",
      seli1: true,
      seli2: false
    }
  },
  mounted () {
    console.log(this.data)
  },
  methods:{
      showDesc1(){
          this.col1 = "blue"
          this.col2 = "gray"
          this.col3 = "gray"
          this.sel1 = true
          this.sel2 = false
          this.sel3 = false
      },
      showDesc2(){
          this.sel1 = false
          this.sel2 = true
          this.sel3 = false
          this.col1 = "gray"
          this.col2 = "blue"
          this.col3 = "gray"
      },
      showDesc3(){
          this.sel1 = false
          this.sel2 = false
          this.sel3 = true
          this.col1 = "gray"
          this.col2 = "gray"
          this.col3 = "blue"
      },
      showImg1(){
          this.coli1 = "blue"
          this.coli2 = "gray"
          this.seli1 = true
          this.seli2 = false
      },
      showImg2(){
          this.coli1 = "gray"
          this.coli2 = "blue"
          this.seli1 = false
          this.seli2 = true
      },
  },
}
</script>

<style>
.detailItem {
    background: radial-gradient(rgb(20, 72, 114), rgba(0, 0, 0, .9));
}

.phone,
.user,
.mail {
    height: 20px;
    filter: brightness(0) invert(1);

}

.v-icon.notranslate.mdi.mdi-account.theme--light.white--text,
.v-icon.notranslate.mdi.mdi-phone.theme--light.white--text,
.v-icon.notranslate.mdi.mdi-email.theme--light.white--text {
    color: white !important;
}
</style>
