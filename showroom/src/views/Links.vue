<template>
  <div class='home'>
<div class="topNavBar">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top" @click="resetItems()">
                <img class="logo-img" src="../assets/BPLogoTAG_RGB-72dpi_Ver01-Blanco.png">
            </a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item" v-for="category in link.categories" :key="category">
                        <a class="nav-link js-scroll-trigger" href="#searchAnchor" @click="navGenerated(tag)">{{category}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>

    <CoreHeader></CoreHeader>
    <v-layout >
      <div class="container-fluid">
    <div class="row rowCards">
        <div class="card-group col-12 nopadding" id="searchAnchor">
            <v-flex xs12 sm4 md4 v-for="itemObj in items" :key="itemObj.id">
                <a class="card" data-toggle="modal" data-target=".bd-example-modal-lg" @click="selectProject(itemObj)">
                    <img :src="itemObj.image" class="card-img h-100" alt="...">
                    <div class="card-img-overlay">
                        <h1 class="card-title">{{itemObj.name}}</h1>
                        <div class="overlay">
                            <p class="card-text">{{itemObj.subtitle}}</p>
                        </div>
                        <div class="badge-position">
                            <ul v-for="(tag,j) in itemObj.tags" :key="j"> <a href="#" class="badge badge-pill badge-primary"> {{tag}} </a></ul>
                        </div>

                    </div>
                </a>

                <!-- Moadal show details -->

                <div class="modal fade bd-example-modal-lg" tabindex="-1 " role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <DetailsItem :data="selected"></DetailsItem>
                        </div>
                    </div>
                </div>

            </v-flex>
        </div>
    </div>
</div>
</v-layout>
  </div>

</template>

<script>
import Axios from "axios";
import DetailsItem from '../components/DetailsItem.vue'
import CoreHeader from '../components/Header.vue'

export default {
  components: {
    DetailsItem,
    CoreHeader
  },
  name: 'home',
  data: () => ({
    currentId: '',
    link: '',
    items: '',
    selected: Object,
  }),
  methods: {
    getlink() {
            Axios.get(`https://shrouded-plains-43003.herokuapp.com/links/` + this.currentId, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
              console.log(res.data)
              this.link = res.data
              this.items = this.link.items
            })
        },
        selectProject(project) {
            this.selected = project
        },
  },
  created () {
   this.currentId = this.$route.params.id
   this.getlink()
  }
}
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;

  font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";}

.rowCards {
    height: 500px;
}

.card-group {
    height: 500px;
}

.card {
    height: 500px;
}

.card-title {
    color: #ffffff;
}

.card-text {
    color: #ffffff;
}

.card-img-overlay:hover {
    transition: 1s !important;
    transition-delay: 1s !important;
    background-image: linear-gradient(to top, rgba(46, 46, 46, 0), rgba(46, 46, 46, 1));
}

.badge {
    margin: 1px;
    font-size: 130% !important;
}

.badge-primary {
    background-color: #5576d1 !important;
}

.badge-primary:hover {
    background-color: #7e9df2 !important;
}

.badge-light {
    color: #5576d1 !important;
    border-color: #5576d1;
}

.badge-position {
    position: absolute;
    left: 0px;
    bottom: 5px;
    padding: 5px 10px;
}

.overlay {

    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .2s ease;
}

.card:hover .overlay {
    opacity: 1;
}

.nopadding {
    padding: 0 !important;
    margin: 0 !important;
}

.detailsItem {
    position: absolute;
}

ul,
a {
    display: inline;

}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 5px;
}

nav.scroll {
    background-color: red;
    height: 12%;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

#mainNav {
    /* background-color: #2c3e5094; */
    height: 12%;

}

#mainNav .navbar-toggler {
    font-size: 12px;
    right: 0;
    padding: 5px;

    text-transform: uppercase;
    color: white;
    border: 0;
    background-color: #333366;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

#mainNav .navbar-brand {
    color: #0370fe;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

#mainNav .navbar-brand.active,
#mainNav .navbar-brand:active,
#mainNav .navbar-brand:focus,
#mainNav .navbar-brand:hover {
    color: #0370fe;
}

#mainNav .navbar-nav .nav-item .nav-link {
    font-size: 90%;
    font-weight: 600;
    padding: 10px;
    letter-spacing: 1px;
    color: white;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

#mainNav .navbar-nav .nav-item .nav-link.active,
#mainNav .navbar-nav .nav-item .nav-link:hover {
    color: #333366;
}

.logo-img {
    display: flex;
    width: 120px;
    height: 70px;

}

@media (min-width: 992px) {
    #mainNav {
        padding-top: 25px;
        padding-bottom: 25px;
        transition: padding-top 0.3s, padding-bottom 0.3s;
        border: none;

    }

    #mainNav .navbar-brand {
        font-size: 1.75em;
        transition: all 0.3s;
    }

    #mainNav .navbar-nav .nav-item .nav-link {
        padding: 1.1em 1em !important;
    }

    #mainNav.navbar-shrink {
        padding-top: 0;
        padding-bottom: 0;

    }

    #mainNav.navbar-shrink .navbar-brand {
        font-size: 1.25em;
        padding: 12px 0;
    }
}
</style>
