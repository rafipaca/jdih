<template>
  <div
    class="card bg-base-100 shadow-xl hover:bg-green-200 transition duration-300 ease-in-out p-4 ml-0 mx-auto"
    @click="handleClick"
  >
    <figure class="mb-4">
      <img :src="image" alt="VR" class="w-full h-auto rounded-lg" />
    </figure>
    <div class="card-body p-4">
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
  margin: 5px;
  width: 410px;
  height: 424px;
}
/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .card {
    width: 80%;
    height: auto;
  }
}

@media (max-width: 480px) {
  .card {
    width: 100%;
    height: auto;
  }
}
</style>
