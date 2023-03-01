<script setup>
import { ref } from "vue"
import AlbumsList from '../components/AlbumsList.vue'
import SearchForm from '../components/SearchForm.vue'

let motcle = ref("")  // donnée réactive
function handler(texte) { // handler pour récupérer la valeur saisie dans le form
    //console.log(texte)
    motcle.value = texte
}
</script>

<template>
    <div class="album">
        <v-container class="bg-surface-variant  ">
            <!-- le titre de la vue -->
            <h1>Recherche d'albums</h1>
            <!-- le formulaire de saisie du mot clé -->
            <SearchForm @submit_f="handler"></SearchForm>
            <!-- liste des albums correspondant au mot clé passé en paramètre 
                 elle sera actualisée automatiquement à chaque nouvelle saisie d'un mot clé
            -->
            <AlbumsList :search="motcle"/>
        </v-container>
    </div>
</template>


<style>
    .album {
    min-height: 100vh;
    text-align: center;
    }
</style>