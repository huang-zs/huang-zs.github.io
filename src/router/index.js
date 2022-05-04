import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/:category+',
    name: 'category',
    component: () => import('@/components/Category')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router