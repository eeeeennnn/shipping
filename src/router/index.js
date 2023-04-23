import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../views/ServiceScope.vue')
  },
  {
    path: '/fleet',
    name: 'fleet',
    component: () => import('../views/FleetInformation.vue')
  },
  {
    path: '/cargo',
    name: 'cargo',
    component: () => import('../views/CargoType.vue')
  },
  {
    path: '/line',
    name: 'line',
    component: () => import('../views/RouteOverview.vue')
  },
  {
    path: '/partners',
    name: 'partners',
    component: () => import('../views/Partners.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactUs.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
