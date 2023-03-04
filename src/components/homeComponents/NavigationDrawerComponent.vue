<template>
  <v-navigation-drawer v-model="$props.active" location="left" expand-on-hover rail theme="dark" v-click-outside="{
          handler: clickOutSide
        }">
    <v-list color="transparent">
      <v-list-item prepend-icon="mdi-home" title="Início"></v-list-item>
      <v-list-item prepend-icon="mdi-alert-decagram" title="Lançamentos"></v-list-item>
      <v-list-item prepend-icon="mdi-cash-multiple" title="Mais Vendidos"></v-list-item>
      <v-list-item prepend-icon="mdi-elevation-decline" title="Promoção"></v-list-item>
      <v-list-item prepend-icon="mdi-comment-account" title="Atendimento"></v-list-item>
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
  }
}
</script>

<style scoped>

</style>