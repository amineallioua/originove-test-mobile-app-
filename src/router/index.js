import { createRouter, createWebHistory } from '@ionic/vue-router';
import openPage from '../views/openinig/index.vue'
import loGin from '../views/login & signup/login.vue'
import signUp from '../views/login & signup/signup.vue'
import intRests from '../views/intrests/index.vue'

const routes = [
  {
    path: '/',
    component: openPage
  },
  {
    path:'/login',
    component:loGin
  },
  {
    path:'/signup',
    component:signUp
  },
  {
    path:'/intrests',
    component:intRests
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
