import { createRouter, createWebHistory } from 'vue-router'
import Pokemon from '../views/Pokemon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Pokemon
    }
  ]
})

export default router
