<template>
  <v-btn icon>
    <v-icon icon="mdi-account"></v-icon>
    <v-dialog activator="parent" v-model="accountPanel" width="350px" open-delay="300" close-delay="300">
      <v-card theme="dark">
        <v-card-text>
          <v-tabs v-model="accountPanelTab" fixed-tabs>
            <v-tab value="login">Login</v-tab>
            <v-tab value="cadastro">Cadastro</v-tab>
          </v-tabs>
          <v-window v-model="accountPanelTab">
            <v-window-item value="login">
              <v-form>
                <v-text-field label="E-Mail" style="margin-top: 10px" variant="outlined"></v-text-field>
                <v-text-field label="Senha" variant="outlined"></v-text-field>
                <v-btn variant="tonal">Entrar</v-btn>
              </v-form>
              <p style="text-align: center; margin-top: 17px"><a href="#">Esqueceu sua senha?</a></p>
            </v-window-item>
            <v-window-item value="cadastro">
              <v-form>
                <v-text-field label="CPF" variant="outlined" style="margin-top: 10px"></v-text-field>
                <v-text-field label="E-Mail" variant="outlined"></v-text-field>
                <v-text-field label="Senha" variant="outlined"></v-text-field>
                <v-text-field label="Digite sua senha novamente" variant="outlined"></v-text-field>
                <v-btn variant="tonal">Cadastrar</v-btn>
              </v-form>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script>
export default {
  name: "AccountComponent",
  data: () => ({
    accountPanel: false,
    accountPanelTab: null
  })
}
</script>

<style scoped>

</style>