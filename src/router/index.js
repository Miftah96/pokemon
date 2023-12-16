import { createRouter, createWebHistory } from 'vue-router'
import Pokemon from '../views/Pokemon.vue'
import PokemonDetail from '../views/PokemonDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Pokemon
    },
    {
      path: '/:id',
      name: 'detail',
      component: PokemonDetail,
      props: true  
    }
  ]
})

export default router
