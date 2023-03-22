<template>
  <v-navigation-drawer
      v-model="carrinhoDrawer" @update:modelValue="carrinhoClickOut" location="right" theme="dark" temporary>
    <template v-slot:prepend>
      <h3 style="text-align: center">Carrinho de Compras</h3>
      <v-divider :thickness="3"/>
    </template>
    <v-list>
      <v-list-item class="item-lista">
        <v-list-item-title>Este é o nome do produto</v-list-item-title>
        <v-list-item-subtitle>Quantidade 4</v-list-item-subtitle>
        <v-list-item-subtitle>Valor: R$ 45,99</v-list-item-subtitle>
        <v-list-item-subtitle>Total: R$ 257,86</v-list-item-subtitle>
        <v-list-item-action>
          <v-btn icon="mdi-minus" size="x-small"></v-btn>
          <v-btn icon="mdi-plus" size="x-small"></v-btn>
          <v-btn icon="mdi-delete" size="x-small"></v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-divider :thickness="3"/>
      <span style="margin-left: 5px; margin-bottom: 5px; font-size: 14px; color: #94f794">Valor Total: R$ 794,74</span>
    </template>
  </v-navigation-drawer>
  <v-overlay :model-value="carrinhoDrawer" @click="carrinhoClickOut"></v-overlay>
</template>

<script>
export default {
  name: "CarrinhoDrawer",
  data: () => ({
    carrinhoDrawer: false
  }),
  props: {
    active: {
      required: true,
      type: Boolean
    }
  },
  methods: {
    carrinhoClickOut(){
      this.$emit('closeCarrinho');
      this.carrinhoDrawer = false;
    }
  },
  watch: {
    '$props.active'(){
      this.carrinhoDrawer = this.$props.active;
    }
  },
  emits: ['closeCarrinho']
}
</script>

<style scoped>
.item-lista {
  cursor: default;
  background: none;
  transition: 300ms ease-in-out;
}

.item-lista:hover {
  background-color: #393939;
}
</style>