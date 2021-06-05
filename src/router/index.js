import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: Tabs,
  },
]

const router = createRouter({
  history: createWebHistory('/mpay-link-builder/'),
  routes,
})

export default router
