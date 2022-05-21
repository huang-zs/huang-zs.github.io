<template>
  <article>
    <span class="icon" :class="icon"></span>

    <div class="content">
      <a :href="link">
        <h3>{{title}}</h3>
      </a>
      <p>{{description}}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'UtilItem',
  props: {
    icon: {
      require
    }, title: {
      require
    }, description: {
      require
    },
    link: {
      require
    }
  }
}
</script>
