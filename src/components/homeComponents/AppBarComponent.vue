<template>
  <v-app-bar density="comfortable" theme="dark">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="$emit('navigationDrawer')"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Main Title</v-app-bar-title>
    <template v-slot:append>
      <v-btn @click.stop="$emit('carrinhoDrawer')" icon="mdi-cart-variant" color="red"></v-btn>
      <div v-click-outside="{
          handler: pesquisaClickOutSide
        }">
        <v-text-field v-model="pesquisa.texto" @click:appendInner="pesquisar" style="margin-top: 20px; width: 170px" variant="outlined" label="Pesquisar" density="compact" append-inner-icon="mdi-magnify" v-show="pesquisa.active"></v-text-field>
        <v-btn icon="mdi-magnify" v-show="!pesquisa.active" @click="pesquisa.active = true"></v-btn>
      </div>
      <AccountComponent/>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import AccountComponent from "@/components/appBarComponents/AccountComponent.vue";
export default {
  name: "AppBarComponent",
  components: {AccountComponent},
  data: () => ({
    pesquisa: {
      active: false,
      texto: ''
    }
  }),
  methods: {
    pesquisaClickOutSide(){
      this.pesquisa.active = false;
    },
    pesquisar(){}
  }
}
</script>

<style scoped>

</style>