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
    path: '/:category',
    name: 'articleList',
    component: () => import('@/components/Common/ArticleList')
  },
  {
    path: '/:category/:article',
    name: 'article',
    component: () => import('@/components/Common/Article')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router