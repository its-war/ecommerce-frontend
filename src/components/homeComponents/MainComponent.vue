<template>
  <v-main style="width: 85%; margin: auto">
    <LancamentosComponent/>
  </v-main>
</template>

<script>
import LancamentosComponent from "@/components/mainComponents/LancamentosComponent.vue";
export default {
  name: "MainComponent",
  components: {LancamentosComponent}
}
</script>

<style scoped>

</style>