<template>
  <article>
    <router-link :to="{name:article.name}" class="image">
      <img :src="article.img" />
    </router-link>
    <h2>{{article.title}}</h2>
    <p>{{article.description}}</p>
    <ul class="actions">
      <li>
        <router-link :to="{name:article.name}" class="button">More</router-link>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: {
      required: true
    }
  }
}
</script>