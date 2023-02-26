<script setup>
import { ref } from "vue"
import AlbumsList from '../components/AlbumsList.vue'
import SearchForm from '../components/SearchForm.vue'
let motcle = ref("")
function handler(texte) {
    console.log(texte)
    motcle.value = texte
}
</script>

<template>
    <div class="about">
        <v-container class="bg-surface-variant  ">
            <SearchForm @submit_f="handler"></SearchForm>
            <AlbumsList :search="motcle"/>
        </v-container>
    </div>
</template>


  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>