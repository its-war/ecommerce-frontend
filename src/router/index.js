import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomeView.vue";
import InicioComponent from "@/components/pages/InicioPage.vue";
import AtendimentoComponent from "@/components/pages/AtendimentoPage.vue";
import MaisVendidosPage from "@/components/pages/MaisVendidosPage.vue";
import LancamentosPage from "@/components/pages/LancamentosPage.vue";
import PromocoesPage from "@/components/pages/PromocoesPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        {
          path: '',
          name: 'Página Inicial',
          component: InicioComponent
        },
        {
          path: 'atendimento',
          name: 'Atendimento',
          component: AtendimentoComponent
        },
        {
          path: 'maisVendidos',
          name: 'Mais Vendidos',
          component: MaisVendidosPage
        },
        {
          path: 'lancamentos',
          name: 'Lançamentos',
          component: LancamentosPage
        },
        {
          path: 'promocoes',
          name: 'Promoções',
          component: PromocoesPage
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})

export default router
