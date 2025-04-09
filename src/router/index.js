import { createRouter, createWebHistory } from 'vue-router'
import BirthdayPage from '@/views/BirthdayPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: BirthdayPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
