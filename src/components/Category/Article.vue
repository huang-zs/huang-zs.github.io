<template>
  <article>
    <h3>{{title}}</h3>
    <p>{{description}}</p>
    <ul class="actions">
      <li>
        <router-link :to="url">
          <a href="#" class="button">More</a>
        </router-link>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'CategoryArticleItem',
  props: {
    title: {
      required: true
    },
    description: {
      default: 'default description'
    },
    url: {
      required: true
    }
  }
}
</script>