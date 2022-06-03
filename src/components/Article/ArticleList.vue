<template>
  <section>
    <div class="posts">
      <article-item v-for="article,key in articles" :key="key" :article="article"></article-item>
    </div>
  </section>
</template>

<script>
import ArticleItem from '@/components/Article/ArticleItem.vue'
export default {
  name: "ArticleListItem",
  props: {
    articles: {
      require: true
    }
  },
  components: { ArticleItem }
}
</script>

<style>
</style>