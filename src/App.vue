<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-card
    class="mx-auto"
    max-width="1200"
  >
    <v-layout>
      <v-app-bar
        color="primary"
        density="compact"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Spotify</v-app-bar-title>
        <v-btn>
          <RouterLink to="/">Home</RouterLink>
        </v-btn>
        <v-btn>
        <RouterLink to="/about">About</RouterLink>
        </v-btn>
        <v-btn>
        <RouterLink to="/albums">Albums</RouterLink>
        </v-btn>
        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <RouterView />

          <!--
          <v-row dense>
            <v-col
              v-for="n in 8"
              :key="n"
              cols="3"
            >
              <v-sheet
                color="grey-lighten-2"
                height="96"
              ></v-sheet>
            </v-col>
          </v-row>
          -->
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
</style>
