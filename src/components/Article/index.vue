<template>
  <section class="article">
    <article-banner></article-banner>
    <hr class="major" />
    <slot></slot>
  </section>
</template>

<script>
import ArticleBanner from '@/components/Article/ArticleBanner.vue'
export default {
  name: 'ArticleInfoItem',
  components: { ArticleBanner }
}
</script>

<style>
</style>