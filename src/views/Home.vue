<template>
  <banner :img="img" :description="description" :title="title" :subTitle="subTitle"></banner>
  <util-set></util-set>
</template>

<script>
import Banner from '@/components/Common/Banner.vue'
import UtilSet from '@/components/Common/Util/index.vue'
export default {
  name: 'home-view',
  components: { Banner, UtilSet },
  data() {
    return {
      img: '/image/yiquanchaoren.jpeg',
      title: 'Hi,我是huang-zs',
      subTitle: '一个正在变强的java开发',
      description: '欢迎大家来到我的博客，这个网站使用vue编写，交由github page托管。你能看到有关前端、后端、服务器技术的心得和一些遇到的bug的fix，如果帮助到你star是给我最大的鼓励，同样的如果内容有任何问题可以给我提issue。没有最卷，只有更卷，我们要用知识武装自己，脚踏需求，手撕bug，升职加薪迎娶白富美，走向人生巅峰！'
    }
  }
}
</script>

<style>
</style>