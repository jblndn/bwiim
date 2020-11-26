import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Bets from '../views/Bets.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bets',
    name: 'Bets',
    component: Bets
  },
  {
    path: '/sports/:sport_name',
    name: 'Sport',
    component: () => import('../views/Sport.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
