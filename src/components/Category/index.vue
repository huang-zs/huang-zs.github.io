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
        v-for="(article,key) in category.childrens"
        :key="key"
        :title="key"
        :description="article.description"
        :url="this.$route.path+'/'+key"
      ></category-article-item>
    </div>
  </section>
</template>

<script>
import BannerItem from '@/components/Banner'
import CategoryArticleItem from '@/components/Category/Article'
import { getCategory } from '@/api/data'

export default {
  name: "CateogryItem",
  data() {
    return {
      category: getCategory(this.$route.params.category.pop())
    }
  }
  ,
  components: { BannerItem, CategoryArticleItem }
}
</script>
