<template>
  <SlideComponent/>
  <LancamentosComponent/>
  <MaisVendidosComponent/>
</template>

<script>
import SlideComponent from "@/components/mainComponents/SlideComponent.vue";
import MaisVendidosComponent from "@/components/mainComponents/MaisVendidosComponent.vue";
import LancamentosComponent from "@/components/mainComponents/LancamentosComponent.vue";

export default {
  name: "InicioComponent",
  components: {SlideComponent, MaisVendidosComponent, LancamentosComponent}
}
</script>

<style scoped>

</style>