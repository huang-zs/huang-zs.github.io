<template>
  <nav id="menu">
    <header class="major">
      <h2>Menu</h2>
    </header>
    <ul>
      <li v-for="(menu,index) in menuArray" :key="index">
        <!-- 一级标题 -->
        <template v-if="menu.childrens==null">
          <router-link :to="menu.url">{{menu.name}}</router-link>
        </template>
        <!-- 二级标题 -->
        <template v-else>
          <span class="opener">{{menu.name}}</span>
          <ul>
            <li v-for=" (subMenu,index) in menu.childrens" :key="index">
              <router-link :to="subMenu.url">{{subMenu.name}}</router-link>
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </nav>
</template>

<script>
import { menus } from "@/api/menu";

export default {
  name: 'SidebarMenu',
  data() {
    return {
      menuArray: menus
    }
  },
}
</script>
