<template>
  <section>
    <header class="major">
      <h2>常用网址</h2>
    </header>
    <div class="features">
      <util-item
        v-for="util in utilArray"
        :key="util.title"
        :title="util.title"
        :icon="util.icon"
        :description="util.description"
        :link="util.link"
      ></util-item>
    </div>
  </section>
</template>

<script>
import UtilItem from "@/components/Common/Util/UtilItem.vue";
import utilData from "@/api/website"
export default {
  name: 'UtilSetItem',
  components: { UtilItem },
  data() {
    return {
      utilArray: utilData
    }
  },
}
</script>
