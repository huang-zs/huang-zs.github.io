<template>
  <div id="main">
    <div class="inner">
      <!-- Header -->
      <main-header></main-header>

      <!-- Banner -->
      <main-banner></main-banner>

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