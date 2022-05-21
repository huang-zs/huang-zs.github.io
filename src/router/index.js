import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/:category+',
    name: 'category',
    component: () => import('@/components/Category')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/components/Article')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// 根据文件目录导入article(.vue文件)
const views = require.context('@/views', true, /.*\.vue/)
views.keys().forEach(view => {
  const path = view.match(/\.(.*)\.vue$/)[1]
  router.addRoute({
    'path': path,
    'name': path.substring(path.lastIndexOf('/') + 1),
    'component': () => import(`@/views${path}`)
  })
});

export default router