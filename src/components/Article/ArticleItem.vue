<template>
  <article>
    <h3>{{title}}</h3>
    <p>{{description}}</p>
    <ul class="actions">
      <li>
        <router-link :to="{name:title}">
          <a href="#" class="button">More</a>
        </router-link>
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
    }
  }
}
</script>