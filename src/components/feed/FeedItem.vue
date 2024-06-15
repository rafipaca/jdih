<template>
  <div
    class="card w-96 bg-base-100 shadow-xl hover:bg-green-200 transition duration-300 ease-in-out"
    @click="handleClick"
  >
    <figure>
      <img :src="image" alt="VR" />
    </figure>
    <div class="card-body">
      <p class="text-sm" :style="{ color: '#9ad0c2' }">{{ date }} | Video</p>
      <h2 class="card-title text-base">{{ title }}</h2>
      <p class="text-sm">selengkapnya ...</p>
      <div class="card-actions justify-end"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedItem',
  props: {
    image: String,
    date: String,
    title: String
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>
