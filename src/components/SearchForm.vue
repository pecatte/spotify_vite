<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const libelle = ref("");
// -- event émis quand la saisie est validée
const emit = defineEmits(["submit_f"]);
</script>

<template>
  <v-sheet class="mx-auto">
    <v-form @submit.prevent="$emit('submit_f', libelle)">
      <v-text-field
        v-model="libelle"
        label="Mot clé"
        required
      ></v-text-field>
      <v-btn color="primary" type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<!--
<template>
  <form @submit.prevent="$emit('submit_f', libelle)">
    <input type="text" v-model="libelle" required placeholder="mot clé ?" />
    <input type="submit" value="valider" />
  </form>
</template>
-->
<style scoped>
.v-sheet {
  background-color: gray;
}
</style>
