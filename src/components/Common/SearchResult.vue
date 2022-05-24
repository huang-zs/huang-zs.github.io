<template>
  <article-list :articles="articles"></article-list>
</template>

<script>
import { searchArticles } from "@/api/article";
import ArticleList from '@/components/Article/ArticleList'
export default {
  name: 'SearchResult',
  components: { ArticleList },
  data() {
    return {
      articles: searchArticles(this.$route.query.q)
    }
  }
}
</script>

<style>
</style>