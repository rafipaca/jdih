import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocView from '../views/DocView.vue'
import CardDetailView from '../views/CardDetailView.vue'
import FeedView from '../views/FeedView.vue'
import FeedDetailView from '../views/FeedDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home - JDIH Lampung'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About - JDIH Lampung'
      }
    },
    {
      path: '/dokumen',
      name: 'document',
      component: DocView,
      meta: {
        title: 'Dokumen - JDIH Lampung'
      }
    },
    {
      path: '/dokumen/cardview/:id',
      name: 'detailcard',
      component: CardDetailView,
      meta: {
        title: 'Detail Dokumen - JDIH Lampung'
      }
    },
    {
      path: '/feed',
      name: 'Feed',
      component: FeedView,
      meta: {
        title: 'Feed - JDIH Lampung'
      }
    },
    {
      path: '/feed-detail',
      name: 'feed-detail',
      component: FeedDetailView,
      meta: {
        title: 'Feed Detail - JDIH Lampung'
      }
    }
  ]
})

// Set document title based on route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'JDIH Lampung';
  next();
});

export default router
