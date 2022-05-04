<template>
  <article>
    <h3>{{title}}</h3>
    <p>{{description}}</p>
    <ul class="actions">
      <li>
        <a :href="url" class="button">More</a>
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