<script setup>
import { ref } from "vue"

import SearchForm from '../components/SearchForm.vue'
let motcle = ref("")
function handler(texte) {
    console.log(texte)
    motcle.value = texte
}
</script>

<template>
    <div class="artist">
        <v-container class="bg-surface-variant  ">
            <h1>Recherche d'artistes</h1>
            <SearchForm @submit_f="handler"></SearchForm>
        </v-container>
    </div>
</template>


  <style>
    .artist {
    min-height: 100vh;
    text-align: center;
  }
  </style>