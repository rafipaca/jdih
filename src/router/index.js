import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocView from '../views/DocView.vue'
import CardDetailView from '../views/CardDetailView.vue'

/* Tempat path kayak page2 dari website tarok disini */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dokumen',
      name: 'document',
      component: DocView
    },
    {
      path: '/cardview',
      name: 'detailcard',
      component: CardDetailView
    }
  ]
})

export default router
