import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue') // set home as path '/'
  },
  {
    path: '/signup',
    name: 'signUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/signin',
    name: 'signIn',
    component: () => import('../views/SignIn.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router