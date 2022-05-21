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
import SidebarMenu from './Menu'
import SidebarSearch from "./Search";
// import SidebarGetInTouch from './GetInTouch'
import SidebarFooter from './Footer'
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