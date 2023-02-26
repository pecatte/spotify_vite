<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const libelle = ref("");
// -- event émis quand la saisie est validée
const emit = defineEmits(["submit_f"]);
</script>

<template>
  <form @submit.prevent="$emit('submit_f', libelle)">
    <input type="text" v-model="libelle" required placeholder="mot clé ?" />
    <input type="submit" value="valider" />
  </form>
</template>

<style scoped>
</style>
