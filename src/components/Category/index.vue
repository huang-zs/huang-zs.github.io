<template>
  <banner-item
    :title="category.name"
    :description="category.description"
    :img="category.img"
    :doc="category.doc"
  ></banner-item>
  <section>
    <div class="posts">
      <article-item
        v-for="(article,key) in category.childrens"
        :key="key"
        :title="key"
        :description="article.description"
        :img="article.img"
      ></article-item>
    </div>
  </section>
</template>

<script>
import BannerItem from '@/components/Common/Banner'
import ArticleItem from '@/components/Article/ArticleItem.vue'
import { getCategory } from '@/api/article'

export default {
  name: "CateogryItem",
  data() {
    return {
      category: getCategory(this.$route.params.category.pop())
    }
  }
  ,
  components: { BannerItem, ArticleItem }
}
</script>
