<template>
  <div class="decor-container flex flex-col items-center min-h-screen pb-5">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DecorContainer'
}
</script>

<style scoped>
.decor-container {
  background:
    url('@/assets/decor-left.png') left top repeat-y,
    url('@/assets/decor-right.png') right top repeat-y;
  background-size: 142px 1412.67px;
}
</style>
