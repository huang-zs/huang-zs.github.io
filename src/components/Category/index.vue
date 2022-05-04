<template>
  <section>
    <banner-item
      :title="category.name"
      :description="category.description"
      :img="category.img"
      :doc="category.doc"
    ></banner-item>
  </section>
</template>

<script>
import data from '@/api/data'
import BannerItem from '@/components/Banner.vue'
export default {
  name: "CateogryItem",
  data() {
    return {
      category: data.getCategoryByCategoryUrls(this.$route.params.category)
    }
  },
  components: { BannerItem }
}
</script>
