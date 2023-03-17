<template>
  <v-app>
    <AppBarComponent @carrinhoDrawer="carrinhoDrawer = !carrinhoDrawer" @navigationDrawer="navigationDrawer = !navigationDrawer"/>
    <NavigationDrawerComponent :active="navigationDrawer" @closeDrawer="navigationDrawer = false"/>
    <CarrinhoDrawer :active="carrinhoDrawer" @closeCarrinho="carrinhoDrawer = false"/>
    <MainComponent/>
    <FooterComponent/>
  </v-app>
</template>

<script>
import AppBarComponent from "@/components/homeComponents/AppBarComponent.vue";
import NavigationDrawerComponent from "@/components/homeComponents/NavigationDrawerComponent.vue";
import MainComponent from "@/components/homeComponents/MainComponent.vue";
import FooterComponent from "@/components/homeComponents/FooterComponent.vue";
import CarrinhoDrawer from "@/components/homeComponents/CarrinhoDrawer.vue";
export default {
  name: "HomePage",
  components: {CarrinhoDrawer, FooterComponent, MainComponent, NavigationDrawerComponent, AppBarComponent},
  data: () => ({
    navigationDrawer: false,
    carrinhoDrawer: false
  })
}
</script>

<style scoped>

</style>