<script setup>
</script>

<template>
  <main class="home">
    <h1>Mon application d'écoute de musique</h1>
    <!-- exemple pour montrer une mise en page 
        qui s'adapte à la taille de l'écran
    -->
    <v-row dense>
        <v-col
              v-for="n in 12"
              :key="n"
                  cols="12"
                  sm="6" 
                  md="3" 
                  lg="2"
                  xl="2"
        >
          <v-sheet
            color="grey-lighten-2"
            height="96"
          ></v-sheet>
        </v-col>
    </v-row>
  </main>
</template>

<style>
  .home {
    min-height: 100vh;
    text-align: center;
  }
</style>