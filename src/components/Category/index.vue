<template>
  <banner-item
    :title="category.title"
    :subTitle="category.subTitle"
    :description="category.description"
    :img="category.img"
    :doc="category.doc"
  ></banner-item>
  <article-list :articles="articles"></article-list>
</template>

<script>
import BannerItem from '@/components/Common/Banner.vue'
import ArticleList from '@/components/Article/ArticleList.vue'
import { getCategory } from '@/api/article'

export default {
  name: "CateogryItem",
  data() {
    return {
      category: {},
      articles: []
    }
  }
  ,
  components: { BannerItem, ArticleList },
  mounted() {
    this.category = getCategory(this.$route.params.category.pop());
    for (const articleKey in this.category.childrens) {
      this.articles.push(this.category.childrens[articleKey])
    }
  }
}
</script>
