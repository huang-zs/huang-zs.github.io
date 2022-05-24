<template>
  <section id="search" class="alt">
    <form action="javascript:;">
      <input type="text" v-model="query" placeholder="Search" @keyup.enter="articleQuery" />
    </form>
  </section>
</template>

<script>
export default {
  name: 'SidebarSearch',
  data() {
    return {
      query: null
    }
  },
  methods: {
    articleQuery() {
      this.$router.push({ name: 'search', query: { q: this.query } })
    }
  },
}
</script>