import Vue from 'vue'
import VueRouter from 'vue-router'
import Grandpa from '../views/Grandpa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Grandpa
  }
]

const router = new VueRouter({
  routes
})

export default router
