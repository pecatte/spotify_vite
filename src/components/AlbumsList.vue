<script setup>

import { onMounted, onUpdated,onBeforeUpdate, reactive, ref, watch} from 'vue';
// -- params de l'API
import {spotifyUrlSearchAlbum, headers, nbResParPage } from '../apiSpotify'

// -- param d'entrée de ce composant = le mot clé de recherche
let props = defineProps(["search"])

// -- state -> liste des albums
let listeAlbums = reactive([])

// -- pagination des résultats
//   utilisation du composant 'v-pagination' de Vuetify
let page = ref(1)  // - numéro de page actuel 
let nbRes = ref(0)  // -- nb de résultats total trouvés par la recherche
let nbPages = ref(0) // -- nb de pages (dépend de la taille d'une page)

// -- booléen pour l'affichage d'une popup (dialog)
//    pour indquer que le token est périmé
//    Le code HTML de la popup est prévu dans le template ci-dessous
//    Ce code s'affichera en fonction de la valeur du booléen (false par défaut)
let dialogToken = ref(false)

// -- récupération des résultats de la recherche
// -- en param le numéro de page (pagination)
function getAlbums(nPage) {
    const fetchOptions = {
        headers : headers, // la constante 'headers' est défini dans 'apiSpotify.js'
        method : "GET"
    }
    // -- il faut insérer le motclé dans l'url
    //   et aussi la page de résultats à l'aide de l'offset
    //   qui indique à partir de quelle position on veut les résultats
    //   donc (le numéro de la page souhaitée - 1)*(taille d'une page)
    fetch(spotifyUrlSearchAlbum + props.search + "&offset="+ (nPage-1)*nbResParPage, fetchOptions)
    .then((response) => {
      // -- on ne traite le résultat que si la req AJAX est ok (status code 200...)
      if (response.ok) return response.json();
      // -- si le code status est 401 cela veut dire dans ce cas
      // que la requete AJAX n'a pas abouti car le token est obsolete
      if (response.status == 401) { 
        // -- alors dans ce cas, on veut afficher la popup prévue dans le template
        // -- et pour cela il suffit de positionner le booléen 'dialogToken' à 'vrai'
        dialogToken.value = true
        // -- et aller directement au 'catch'
        throw new Error('Token périmé');
      }
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // -- pagination : nb total de résultats de la recherche
      nbRes.value = dataJSON.albums.total;
      // -- et donc calcul du nb de pages (pagination)
      nbPages.value = Math.round(nbRes.value / nbResParPage)

      // -- actualisation de la liste des albums
      listeAlbums.splice(0,listeAlbums.length)
      for(let album of dataJSON.albums.items) listeAlbums.push(album)
    })
    .catch((error) => console.log(error));
}
// -- req vers l'API à la création du composant -> pas utile car pas encore de mot clé saisi
onMounted(() => {})

// -- req vers l'API à chaque chgt DOM --> pas utile dans ce cas
onBeforeUpdate(() => {})

// -- par contre, il faut refaire une req AJAX quand la props 'search' change
watch(
  ()=>props.search,
  () => {
    console.log("watch props")
    if (props.search != "") getAlbums(page.value)
})

// -- à chaque fois que l'utilisateur change de num de page (en cliquant sur un num)
// -- il faut aller chercher les résultats correspondants
watch(
  ()=>page.value,
  (nPage) => {
  console.log("watch page")
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
    <!-- utilisation du router pour changer de vue (au clic sur l'album)
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
            <!-- le composant pagination a besoin de  2 paramètres 
                 - 'length' -> le nb de pages total -> nbPages
                 - 'v-model' -> une variable comme 'model' ici 'page'
                  ainsi quand l'utilisateur clique sur un 'numéro de page'
                  on récupère la valeur associée et on fait la req AJAX en conséquence
            -->
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
  <!-- popup pour indiquer que le token spotitify est périmé 
      - la popup s'affiche ou pas en fonction de la variable booléenne 'dialogToken'
  -->
  <v-dialog
      v-model="dialogToken"
      width="auto"
    >
      <v-card>
        <v-card-text>
          Le token spotify est périmé.
        </v-card-text>
        <v-card-actions>
          <!-- quand l'utilsateur ferme la popup 
              on met la variable 'dialogToken' a false
              qui aura pour effet de cacher la popup
          -->
          <v-btn color="primary" block @click="dialogToken = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<style scoped>
.v-container {
  padding: 2px;
}
</style>