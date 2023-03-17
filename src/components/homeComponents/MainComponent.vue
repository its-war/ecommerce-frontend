<template>
  <v-main style="width: 85%; margin: auto; padding-bottom: 25px">
    <SlideComponent/>
    <LancamentosComponent/>
    <MaisVendidosComponent/>
  </v-main>
</template>

<script>
import LancamentosComponent from "@/components/mainComponents/LancamentosComponent.vue";
import MaisVendidosComponent from "@/components/mainComponents/MaisVendidosComponent.vue";
import SlideComponent from "@/components/mainComponents/SlideComponent.vue";
export default {
  name: "MainComponent",
  components: {SlideComponent, MaisVendidosComponent, LancamentosComponent}
}
</script>

<style scoped>

</style>