<template>
  <v-row no-gutters style="margin-top: 25px">
    <v-col cols="12" sm="6">
      <v-sheet width="100%" class="pa-8">
        <h3>Enviar mensagem através do E-Mail</h3>
        <v-form>
          <v-text-field variant="outlined" label="Nome"></v-text-field>
          <v-text-field variant="outlined" label="E-Mail"></v-text-field>
          <v-textarea variant="outlined" label="Mensagem" rows="2" auto-grow></v-textarea>
          <v-btn block variant="tonal" append-icon="mdi-send">Enviar</v-btn>
        </v-form>
      </v-sheet>
    </v-col>
    <v-col cols="12" sm="6">
      <v-sheet width="100%" class="pa-1">
        <v-alert style="margin-top: 55px">
          <template v-slot:prepend>
            <v-icon icon="mdi-whatsapp" color="green"></v-icon>
          </template>
          Fale conosco através do telefone <a href="#" target="_blank">+55 (88) 9 7735-4575</a>
        </v-alert>
        <v-alert style="margin-top: 15px">
          <template v-slot:prepend>
            <v-icon icon="mdi-comment-account" color="green"></v-icon>
          </template>
          Você também pode falar conosco através do nosso Chat, basta clicar no botão abaixo.<br/>
          <v-btn variant="tonal" color="blue" append-icon="mdi-comment-text">
            Abrir Chat
            <v-dialog activator="parent" v-model="dialog" width="300px">
              <v-btn @click="dialog = false" icon="mdi-close" style="position: absolute; top: 0; right: 0"></v-btn>
              <ChatComponent/>
            </v-dialog>
          </v-btn>
        </v-alert>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import ChatComponent from "@/components/atendimentoComponents/ChatComponent.vue";
export default {
  name: "AtendimentoComponent",
  components: {ChatComponent},
  data: () => ({
    dialog: false
  })
}
</script>

<style scoped>

</style>