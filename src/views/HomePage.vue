<template>
  <v-app>
    <AppBarComponent @navigationDrawer="navigationDrawer = !navigationDrawer"/>
    <NavigationDrawerComponent :active="navigationDrawer" @closeDrawer="navigationDrawer = false"/>
    <MainComponent/>
    <FooterComponent/>
  </v-app>
</template>

<script>
import AppBarComponent from "@/components/homeComponents/AppBarComponent.vue";
import NavigationDrawerComponent from "@/components/homeComponents/NavigationDrawerComponent.vue";
import MainComponent from "@/components/homeComponents/MainComponent.vue";
import FooterComponent from "@/components/homeComponents/FooterComponent.vue";
export default {
  name: "HomePage",
  components: {FooterComponent, MainComponent, NavigationDrawerComponent, AppBarComponent},
  data: () => ({
    navigationDrawer: false
  })
}
</script>

<style scoped>

</style>