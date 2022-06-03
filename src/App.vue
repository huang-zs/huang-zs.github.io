<template>
  <right-main>
    <router-view :key="key" />
  </right-main>
  <left-sidebar></left-sidebar>
</template>
<script>
import LeftSidebar from "@/components/Sidebar/index.vue"
import RightMain from "@/components/Main/index.vue"
export default {
  name: 'app',
  components: { LeftSidebar, RightMain },
  computed: {
    key() {
      return this.$route.fullPath + new Date();
    }
  }
}
</script>