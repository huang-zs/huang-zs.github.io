<template>
  <article>
    <a href="#" class="image">
      <img :src="img" />
    </a>
    <h3>{{title}}</h3>
    <p>{{description}}</p>
    <ul class="actions">
      <li>
        <router-link :to="{name:title}" class="button">More</router-link>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    title: {
      required: true
    },
    description: {
      default: 'default description'
    },
    img: {
      default: '/image/default.jpg'
    }
  }
}
</script>