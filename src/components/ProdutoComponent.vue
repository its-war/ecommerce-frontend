<template>
  <div style="width: 25%; padding: 10px">
    <v-sheet class="folha-produto">
      <v-img
          aspect-ratio="1/1"
          src="https://static.natura.com/cdn/ff/Ksbf8svSfv2MNwNccsJW99mxJGM8cVhRUv56DDMXGN8/1677652248/public/products/69195_1_8.jpg"
      ></v-img>
      <span style="position: absolute; top: 5px; left: 5px; color: red">Esgotado</span>
      <span style="position: absolute; top: 5px; right: 5px">4,8 <v-icon icon="mdi-star" color="yellow"></v-icon></span>
      <h5>Sève</h5>
      <h3 class="ma-auto">Óleo Desodorante Corporal Sève Peônia e Amêndoas</h3>
      <span class="text-green">R$ 46,40</span> <span style="text-decoration: line-through; color: black">R$ 92,90</span> <span style="color: red">(-50%)</span>
      <v-row no-gutters>
        <v-col cols="12" sm="2" style="padding-top: 8px">
          <v-btn @click="diminuir" :disabled="quantidade <= 0" variant="plain" icon size="x-small"><v-icon icon="mdi-minus"></v-icon></v-btn>
        </v-col>
        <v-col cols="12" sm="8" class="pa-1">
          <v-text-field v-model="quantidade" density="compact" variant="outlined" type="number" label="Quantidade"></v-text-field>
        </v-col>
        <v-col cols="12" sm="2" style="padding-top: 8px; padding-left: 5px">
          <v-btn @click="aumentar" variant="plain" icon size="x-small"><v-icon icon="mdi-plus"></v-icon></v-btn>
        </v-col>
      </v-row>
      <v-btn variant="outlined" append-icon="mdi-cart-plus">Adicionar ao Carrinho</v-btn>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "ProdutoComponent",
  data: () => ({
    quantidade: 1
  }),
  methods: {
    aumentar(){
      this.quantidade = this.quantidade + 1;
    },
    diminuir(){
      this.quantidade = this.quantidade - 1;
    }
  }
}
</script>

<style scoped>
.folha-produto {
  padding: 5px 8px 8px 8px;
  position: relative;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: 300ms ease-in-out;
}

.folha-produto:hover {
  border-color: #000000 !important;
}
</style>