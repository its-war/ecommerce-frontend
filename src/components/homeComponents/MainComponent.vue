<template>
  <v-main style="width: 85%; margin: auto; padding-bottom: 25px">
    <LancamentosComponent/>
    <MaisVendidosComponent/>
  </v-main>
</template>

<script>
import LancamentosComponent from "@/components/mainComponents/LancamentosComponent.vue";
import MaisVendidosComponent from "@/components/mainComponents/MaisVendidosComponent.vue";
export default {
  name: "MainComponent",
  components: {MaisVendidosComponent, LancamentosComponent}
}
</script>

<style scoped>

</style>