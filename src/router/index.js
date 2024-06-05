import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocView from '../views/DocView.vue'
import CardDetailView from '../views/CardDetailView.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dokumen',
      name: 'document',
      component: DocView
    },
    {
      path: '/cardview/:id',
      name: 'detailcard',
      component: CardDetailView
    }
  ]
})

export default router
