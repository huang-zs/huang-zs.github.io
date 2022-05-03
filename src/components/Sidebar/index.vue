<template>
  <div id="sidebar">
    <div class="inner">
      <!-- Search -->
      <sidebar-search></sidebar-search>

      <!-- Menu -->
      <sidebar-menu></sidebar-menu>

      <!-- Section -->
      <section>
        <header class="major">
          <h2>Ante interdum</h2>
        </header>
        <div class="mini-posts">
          <article>
            <a href="#" class="image">
              <img src="images/pic07.jpg" alt />
            </a>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
          </article>
          <article>
            <a href="#" class="image">
              <img src="images/pic08.jpg" alt />
            </a>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
          </article>
          <article>
            <a href="#" class="image">
              <img src="images/pic09.jpg" alt />
            </a>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
          </article>
        </div>
        <ul class="actions">
          <li>
            <a href="#" class="button">More</a>
          </li>
        </ul>
      </section>

      <!-- Section -->
      <sidebar-get-in-touch></sidebar-get-in-touch>

      <!-- Footer -->
      <sidebar-footer></sidebar-footer>
    </div>
  </div>
</template>

<script>
import SidebarMenu from './Menu'
import SidebarSearch from "./Search";
import SidebarGetInTouch from './GetInTouch'
import SidebarFooter from './Footer'
export default {
  name: 'LeftSidebar',
  components: { SidebarMenu, SidebarSearch, SidebarGetInTouch, SidebarFooter }
}
</script>

<style>
</style>