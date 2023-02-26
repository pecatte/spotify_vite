<script setup>

import { onMounted, onUpdated, reactive, ref, watch} from 'vue';
// -- params de l'API
import {spotifyUrlSearchAlbum, headers, nbResParPage } from '../apiSpotify'
//
let props = defineProps(["search"])
// -- state -> liste des albums
let listeAlbums = reactive([])
// -- pagination
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
// -- req vers l'API à la création du composant
onMounted(() => {
    if (props.search != "") getAlbums(page.value)
})
onUpdated(() => {
   getAlbums(page.value)
})
// -- nouvelle recherche à chaque saisie d'un nouveau mot clé
function handlerSearch(motcle) {
    
}
// -- à chaque fois que l'utilisateur change de num de page
// -- il faut aller chercher les résultats correspondants
watch(page,(nPage) => {
    getAlbums(nPage)
})

</script>

<template>


<v-row><h3>Liste des albums {{ nbRes }}{{ nbPages }}</h3></v-row>
<v-row>
<v-col cols="4">
<v-card
    v-for="album in listeAlbums"
    class="mx-auto"
    width="344"
  >
    <v-img
      :src="album.images[0].url"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      {{ album.name }}
    </v-card-title>
</v-card>
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