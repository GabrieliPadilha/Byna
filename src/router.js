import {
  createRouter,
  createWebHistory,
} from 'vue-router'
import Home from './views/Home.vue'
import Pay from './views/Pay.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/pay',
      component: Pay,
    },
    {
      path: '/',
      component: Home,
    }
  ]
})
