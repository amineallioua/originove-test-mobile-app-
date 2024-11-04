import { createRouter, createWebHistory } from '@ionic/vue-router';
import openPage from '../views/openinig/index.vue'

const routes = [
  {
    path: '/',
    component: openPage
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
