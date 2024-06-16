<template>
  <DecorFeed>
    <div class="container mx-auto mt-8 grid grid-cols-3 gap-8">
      <div class="col-span-2">
        <div class="bg-white p-8 rounded shadow">
          <nav class="text-sm mb-4 text-gray-600">
            <router-link to="/feed-detail" class="text-blue-500 hover:underline">Feed / Detail Feed</router-link>
          </nav>
          <h1 class="text-2xl font-semibold mb-4">Selamat Hari Kebangkitan Nasional</h1>
          <p class="text-gray-600 mb-6">20 Mei 2024 | 29 kali dilihat | Berita</p>
          <img src="@/assets/Hari Kebangkitan.png" alt="Kebangkitan Nasional" class="mb-4 w-full" />
        </div>
      </div>
      <FeedSidebar />
    </div>
  </DecorFeed>
  </template>
  
  <script>
  import DecorFeed from '@/components/feed/DecorFeed.vue';
  import FeedSidebar from '@/components/feed/FeedSidebar.vue'
  
  export default {
    name: 'FeedDetailView',
    components: {
      FeedSidebar,
      DecorFeed
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  