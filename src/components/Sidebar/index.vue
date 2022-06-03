<template>
  <div id="sidebar">
    <div class="inner">
      <!-- Search -->
      <sidebar-search></sidebar-search>

      <!-- Menu -->
      <sidebar-menu></sidebar-menu>

      <!-- Get in touch -->
      <!-- <sidebar-get-in-touch></sidebar-get-in-touch> -->

      <!-- Footer -->
      <sidebar-footer></sidebar-footer>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '@/components/Sidebar/Menu.vue'
import SidebarSearch from "@/components/Sidebar/Search.vue";
// import SidebarGetInTouch from './GetInTouch'
import SidebarFooter from '@/components/Sidebar/Footer.vue'
export default {
  name: 'LeftSidebar',
  components: {
    SidebarMenu, SidebarSearch,
    // SidebarGetInTouch,
    SidebarFooter
  }
}
</script>

<style>
</style>