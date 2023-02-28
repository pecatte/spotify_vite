<script setup>

import { onMounted, onUpdated, reactive, ref, watch} from 'vue';
// -- params de l'API
import {spotifyUrlSearchAlbum, headers, nbResParPage } from '../apiSpotify'

// -- param d'entrée de ce composant = le mot clé de recherche
let props = defineProps(["search"])

// -- state -> liste des albums
let listeAlbums = reactive([])

// -- pagination des résultats
let page = ref(1)  // - numéro de page actuel 
let nbRes = ref(0)  // -- nb de résultats total trouvés par la recherche
let nbPages = ref(0) // -- nb de pages (dépend de la taille d'une page)

// -- récupération des résultats de la recherche
// -- en param le numéro de page (pagination)
function getAlbums(nPage) {
    console.log(props.search)
    const fetchOptions = {
        headers : headers,
        method : "GET"
    }
    // -- il faut insérer le motclé dans l'url
    //   et aussi la page de résultats à l'aide de l'offset
    //   qui indique à partir de quelle position on veut les résultats
    //   donc (le numéro de la page souhaitée - 1)*(taille d'une page)
    fetch(spotifyUrlSearchAlbum + props.search + "&offset="+ (nPage-1)*nbResParPage, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // -- nb total de résultats de la recherche
      nbRes.value = dataJSON.albums.total;
      // -- et donc nb de pages (pagination)
      nbPages.value = Math.round(nbRes.value / nbResParPage)

      // -- actualisation de la liste des albums
      listeAlbums.splice(0,listeAlbums.length)
      for(let album of dataJSON.albums.items) listeAlbums.push(album)
    })
    .catch((error) => console.log(error));
}
// -- req vers l'API à la création du composant -> pas utile car pas encore de mot clé saisi
/*
onMounted(() => {
    if (props.search != "") getAlbums(page.value)
})
*/
// -- req vers l'API à chaque chgt de la props, c'est à dire du mot clé de recherche
onUpdated(() => {
  if (props.search != "") getAlbums(page.value)
})

// -- à chaque fois que l'utilisateur change de num de page (en cliquant sur un num)
// -- il faut aller chercher les résultats correspondants
watch(page,(nPage) => {
    getAlbums(nPage)
})

</script>

<template>
<v-row dense>
  <v-col   
    v-for="album in listeAlbums"     
    :key="album.id"           
    cols="12"
    sm="6" 
    md="3" 
    lg="2"
    xl="2">
    <!-- utilisation du router pour changer de vue
         et passer à la vue detail 
         en lui passant en param l'id de l'album
    -->
    <router-link :to="{ name: 'detail', params: { idAlbum: album.id } }">
    <v-card color="primary">
        <v-img
          :src="album.images[0].url"
          height="200px"
          cover
        ></v-img>
        <v-card-title>
          {{ album.name }}
        </v-card-title>
      </v-card>
    </router-link>
  </v-col>
</v-row>

<!-- pagination des résultats -->
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="nbPages"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<style scoped>
.v-container {
  padding: 2px;
}
</style>