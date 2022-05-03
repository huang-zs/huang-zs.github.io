<template>
  <div id="main">
    <div class="inner">
      <!-- Header -->
      <main-header></main-header>

      <slot></slot>
    </div>
  </div>
</template>

<script>
import MainHeader from './Header'

export default {
  name: 'RightMain',
  components: { MainHeader }
}
</script>

<style>
</style>