<script setup>
import { RouterView } from 'vue-router'
import {mainStore} from "@/stores/mainStore";
const store = mainStore();
</script>

<template>
  <v-overlay
      :model-value="store.getOverlay"
      class="align-center justify-center"
  >
    <v-progress-circular
        color="primary"
        indeterminate
        size="64"
    ></v-progress-circular>
  </v-overlay>
  <RouterView />
</template>

<style scoped>

</style>
