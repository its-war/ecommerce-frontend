<template>
  <v-navigation-drawer v-model="$props.active" location="left" expand-on-hover rail theme="dark" v-click-outside="{
          handler: clickOutSide
        }">
    <v-list color="transparent">
      <v-list-item :class="$route.path === '/' ? 'page-active' : ''" @click="$router.push({path: '/'})" prepend-icon="mdi-home" title="Início"></v-list-item>
      <v-list-item :class="$route.path === '/lancamentos' ? 'page-active' : ''" @click="$router.push({path: '/lancamentos'})" prepend-icon="mdi-alert-decagram" title="Lançamentos"></v-list-item>
      <v-list-item :class="$route.path === '/maisVendidos' ? 'page-active' : ''" @click="$router.push({path: '/maisVendidos'})" prepend-icon="mdi-cash-multiple" title="Mais Vendidos"></v-list-item>
      <v-list-item :class="$route.path === '/promocoes' ? 'page-active' : ''" @click="$router.push({path: '/promocoes'})" prepend-icon="mdi-elevation-decline" title="Promoção"></v-list-item>
      <v-list-item :class="$route.path === '/atendimento' ? 'page-active' : ''" @click="$router.push({path: '/atendimento'})" prepend-icon="mdi-comment-account" title="Atendimento"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawerComponent",
  props:{
    active:{
      required: true,
      default: false
    }
  },
  methods: {
    clickOutSide(){
      this.$emit('closeDrawer');
    }
  },
  mounted() {
    console.log(this.$route);
  }
}
</script>

<style scoped>
.page-active {
  border-left: 3px solid #FFFFFF;
}
</style>