<template>
  <div class="searchBar-space">
    <div class="searchBar">
      <v-text-field v-model="search" label="Search tags"  outlined rounded solo clearable></v-text-field>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="badge-foreground">
             <a href="#searchAnchor" class="badge badge-pill badge-light" v-for="(tag,i) in tagsFunc" :key="i"  @click="searchGenerated(tag); resetTags() ">{{tag}}</a>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
 import {mapState} from 'vuex';

  export default {
    name: "SearchBar",
    data: () => ({
      items: [
        {tag: 'Financiero'},
        {tag: 'Comercial'},
        {tag: 'Educativo'},
        {tag: 'Administrativo'},
        {tag: 'Transporte'},
        {tag: 'Tag1'},
        {tag: 'Tag2'},
        {tag: 'Tag3'},
        {tag: 'Tag4'},
        {tag: 'Tag5'},
        {tag: 'Tag6'},
        {tag: 'Tag7'},
        {tag: 'Tag8'},
      ],
      search: '',
    }),

    computed:{

    ...mapState(['distinct_tags']),


    tagsFunc () {
        if (!this.search) return []
        const tagsBD = []
        for (const search of this.searching) {
          tagsBD.push(search)
        }
        return tagsBD
      },
      searching () {
        if (!this.search) return this.distinct_tags

        const search = this.search.toLowerCase()

        return this.distinct_tags.filter(item => {
          const text = item.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
    },
    methods: {
      searchGenerated(tag){
        this.$store.dispatch('loadItemsByTag',tag) //llamada para buscar por tag   
        //alert('Se genera una busqueda para reorganizar los proyectos con el Tag= "'+tag+'" !')
      },
      resetTags(){
        this.search = null
      }  
    },
    
      
  }
  
</script>


<style >
  v-chip{
    color:#ffffff;
    background-color: #5576d1 !important;
  }

  .badge-foreground{
    position: absolute;
    padding:5px 10px;
    animation: fadeIn 5s ease;
  }

  .badge{
  margin: 1px;
  font-size: 130% !important;
  }

  .badge-primary{
    background-color: #5576d1 !important;
  }

  .badge-primary:hover{
    background-color: #7e9df2 !important;
  }

  .badge-light{
    color:#5576d1 !important;
    border-color: #5576d1;
  }

 /* .searchBar-space{
    margin-bottom: 20px;
  }*/

</style>