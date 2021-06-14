import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tabs from '../views/Tabs.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home Page', // Used in router.afterEach()
      listable: true,
    },
  },
  {
    path: '/about',
    name: 'Info',
    component: About,
    meta: {
      title: 'Informazioni',
      listable: true,
    },
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: Tabs,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHashHistory('/mpay-link-builder/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: document.getElementById(to.hash) }
    } else {
      return { top: 0 }
    }
  },
})

export const mainMenuRoutes = router
  .getRoutes()
  .filter(({ meta }) => meta.listable)

export default router
