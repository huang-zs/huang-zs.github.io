import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/:category+',
    component: () => import('@/components/Category')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 根据文件目录导入article(.vue文件)
const views = require.context('@/views', true, /.*\.vue/)
views.keys().forEach(view => {
  const path = view.match(/\.(.*)\.vue$/)[1]
  router.addRoute({
    'path': path,
    'component': () => import(`@/views${path}`)
  })
});
console.log(router.getRoutes())
export default router