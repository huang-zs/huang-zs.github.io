<template>
  <section>
    <article-item
      v-for="article in articles"
      :key="article.name"
      :title="article.name"
      :description="article.description"
    ></article-item>
  </section>
</template>

<script>
import { searchArticles } from "@/api/data";
import ArticleItem from '@/components/Article/ArticleItem'
export default {
  name: "ArticleListItem",
  data() {
    return {
      articles: searchArticles(this.$route.params.query)
    }
  },
  components: { ArticleItem }
}
</script>

<style>
</style>