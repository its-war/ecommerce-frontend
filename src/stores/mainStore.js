import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => ({
    overlay: false
  }),
  getters: {
    getOverlay: (state) => {
      return state.overlay;
    }
  },
  actions: {
    setOverlay(valor){
      this.overlay = valor;
    }
  }
})
