<template>
  <header class="bg-base-200 p-4 text-center">
    <h1 class="text-3xl font-bold">Feed</h1>
    <div class="border-t-4 border-[#006859] w-[4.5%] mx-auto mb-12 mt-6"></div>
  </header>
  <Feed />
  <footer class="bg-base-200 p-4 text-center">
    <div class="text-center">
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </div>
  </footer>
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
