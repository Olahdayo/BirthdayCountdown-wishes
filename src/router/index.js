import { createRouter, createWebHistory } from 'vue-router'
import BirthdayCountdown from '@/components/BirthdayCountdown.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: BirthdayCountdown
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
