<template>
  <right-main>
    <router-view :key="$route.fullPath" />
  </right-main>
  <left-sidebar></left-sidebar>
</template>
<script>
import LeftSidebar from "./components/Sidebar"
import RightMain from "./components/Main"
export default {
  name: 'app',
  components: { LeftSidebar, RightMain }
}
</script>