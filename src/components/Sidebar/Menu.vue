<template>
  <nav id="menu">
    <header class="major">
      <h2>Menu</h2>
    </header>
    <ul>
      <li v-for="(item,index) in menuArray" :key="index">
        <!-- 一级标题 -->
        <template v-if="item.subMenus==null">
          <router-link :to="item.url">
            <a href="#">{{item.name}}</a>
          </router-link>
        </template>
        <!-- 二级标题 -->
        <template v-else>
          <span class="opener">{{item.name}}</span>
          <ul>
            <li v-for=" (subMenu,index) in item.subMenus" :key="index">
              <router-link :to="subMenu.url">
                <a href="#">{{subMenu.name}}</a>
              </router-link>
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </nav>
</template>

<script>
import menu from '@/api/menu'
export default {
  name: 'SidebarMenu',
  data() {
    return {
      menuArray: menu
    }
  },
}
</script>
