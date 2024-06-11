<template>
  <div>
    <header class="bg-base-200 p-4 text-center">
      <h1 class="text-3xl font-bold">Feed</h1>
      <div class="border border-teal-500 w-[7%] mx-auto mb-12 mt-2"></div>
    </header>
    <Feed />
    <footer class="bg-base-200 p-4 text-center">
      <div class="text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Feed from '../components/feed/Feed.vue'

export default {
  name: 'FeedView',
  components: {
    Feed
  }
}
</script>
