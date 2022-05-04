<template>
  <section id="banner">
    <div class="content">
      <header>
        <h1>{{title}}</h1>
        <!-- <p>A free and fully responsive site template</p> -->
      </header>
      <p>{{description}}</p>
      <ul class="actions">
        <li>
          <a :href="doc" class="button big" target="_blank">Learn More</a>
        </li>
      </ul>
    </div>
    <span class="image object">
      <img :src="img" />
    </span>
  </section>
</template>

<script>
export default {
  name: 'BannerItem',
  props: {
    title: {
      required: true
    },
    description: {
      default: 'default description'
    },
    img: {
      default: '/image/default.jpg'
    },
    doc: {
      default: '#'
    }
  }
}
</script>