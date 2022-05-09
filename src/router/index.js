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
    component: () => import('@/components/Category')
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
    'component': () => import(`@/views${path}`)
  })
});

export default router