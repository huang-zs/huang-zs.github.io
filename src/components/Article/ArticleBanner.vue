<template>
  <span class="image main">
    <img :src="article.img" />
  </span>
  <header class="main">
    <h1>{{article.title}}</h1>
  </header>
  <p>{{article.description}}</p>
</template>

<script>
import { getArticle } from "@/api/article";
export default {
  name: 'ArticleBanner',
  data() {
    return {
      article: {}
    }
  },
  mounted() {
    const splits = this.$route.path.split('/')
    this.article = getArticle(splits[splits.length - 2], splits[splits.length - 1])
  }
}
</script>