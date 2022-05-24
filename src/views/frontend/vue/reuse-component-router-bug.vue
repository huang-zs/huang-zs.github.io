<template>
  <article-info>
    <h2>
      <a
        href="https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96"
        target="_blank"
      >1. 官方文档提供的解决方案</a>
    </h2>
    <p>
      使用
      <a
        href="https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#watch"
        target="_blank"
      >watch</a> api 监听
      <code>$route</code> 对象上的任意属性，如
      <code>$route.params</code>:
    </p>
    <highlightjs autodetect :code="code1" />
    <p>
      使用
      <a
        href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html"
        target="_blank"
      >beforeRouteUpdate</a> 导航守卫 ：
    </p>
    <highlightjs autodetect :code="code2" />
    <hr class="major" />
    <h2>2. 网上的解决方案</h2>
    <p>
      给
      <code>&lt;router-view/&gt;</code>加上key属性:
    </p>
    <highlightjs autodetect :code="code3" />
    <p>
      上面的解决方案在使用带查询参数的路由无效，如:
      <code>{ path: '/register', query: { plan: 'private' } }</code>，应该改为:
    </p>
    <highlightjs autodetect :code="code4" />
  </article-info>
</template>

<script>
import ArticleInfo from '@/components/Article'
export default {
  name: 'reuse-component-router-bug-item',
  components: { ArticleInfo },
  data() {
    return {
      code1: `const User = {
  template: '...',
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // 对路由变化做出响应...
      }
    )
  },
}`,
      code2: `const User = {
  template: '...',
  async beforeRouteUpdate(to, from) {
    // 对路由变化做出响应...
  },
}`,
      code3: `<router-view :key="$route.fullPath" /> `,
      code4: `<router-view :key="key" />
      
const User = {
  template: '...',
  computed: {
    key() {
      return this.$route.fullPath + new Date();
    }
  }
}`
    }
  },
}
</script>