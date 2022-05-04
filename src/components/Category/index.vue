<template>
  <section>
    <banner-item
      :title="category.name"
      :description="category.description"
      :img="category.img"
      :doc="category.doc"
    ></banner-item>
  </section>
  <section>
    <div class="posts">
      <category-article-item
        v-for="(article,index) in category.childrens"
        :key="index"
        :title="article.name"
        :description="article.description"
        :url="article.url"
      ></category-article-item>
    </div>
  </section>
</template>

<script>
import data from '@/api/data'
import BannerItem from '@/components/Banner'
import CategoryArticleItem from '@/components/Category/Article'
export default {
  name: "CateogryItem",
  data() {
    return {
      category: data.getCategoryByCategoryUrls(this.$route.params.category)
    }
  },
  components: { BannerItem, CategoryArticleItem }
}
</script>
