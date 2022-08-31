import {
  createRouter,
  createWebHistory,
} from 'vue-router'
import Home from './views/Home.vue'
import Pay from './views/Pay.vue'
import PaymentFinished from './views/PaymentFinished.vue'
import Bills from './views/Bills.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/pay',
      component: Pay,
    },
    {
      path: '/pagamento-concluido',
      component: PaymentFinished,
    },
    {
      path: '/bills',
      component: Bills,
    },
    {
      path: '/',
      component: Home,
    },
  ]
})
