import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/home-view.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/ph',
    name: 'ph',
    component: () => import('../views/ph-level.vue')
  
  },

  {
    path: '/dont',
    name: 'dont',
    component: () => import('../views/dont-click.vue')
  
  },

  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about-view.vue')
  },

  {
    path: '/team',
    name: 'team',
    component: () => import('../views/team-view.vue')
  },

  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact-view.vue')

  },

  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/settings-view.vue')
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
