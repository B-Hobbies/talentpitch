import { createRouter, createWebHashHistory } from 'vue-router'
import OffersView from '../views/OffersView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/offers',
      name: 'offers',
      component: OffersView
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('../views/CompanyView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/offers'
    }
  ],
  linkActiveClass: 'route-link-active'
})

export default router

