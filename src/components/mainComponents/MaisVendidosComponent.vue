<template>
  <v-card width="100%" style="margin-top: 25px; background-color: #ebebeb; position: relative">
    <v-btn style="position: absolute; top: 0; right: 0" variant="text" color="black">Ver Mais</v-btn>
    <v-card-title>Mais Vendidos</v-card-title>
    <v-card-text class="d-flex flex-wrap">
      <ProdutoComponent/>
    </v-card-text>
  </v-card>
</template>

<script>
import ProdutoComponent from "@/components/ProdutoComponent.vue";
export default {
  name: "MaisVendidosComponent",
  components: {ProdutoComponent}
}
</script>

<style scoped>

</style>