import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatsView from '../views/CatsView.vue'
import DogsView from '../views/DogsView.vue'
import PetView from '../views/PetView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cats',
    name: 'cats',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: CatsView
  },
  {
    path: '/dogs',
    name: 'dogs',
    component: DogsView
  },
  {
    path: '/pets/:species/:id',
    name: 'pet',
    component: PetView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
