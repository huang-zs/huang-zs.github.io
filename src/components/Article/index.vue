<template>
  <section>
    <div class="posts">
      <article-item
        v-for="article in articles"
        :key="article.name"
        :title="article.name"
        :description="article.description"
        :img="article.img"
      ></article-item>
    </div>
  </section>
</template>

<script>
import { searchArticles } from "@/api/article";
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