<template>
    <div class="py-20">
      <h1 class="text-center text-4xl font-bold">Feed</h1>
      <div class="w-20 h-1.5 mt-4 bg-ternary mx-auto"></div>
      <div class="sm:p-20 flex gap-10 flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center mt-12 sm:-mt-6">
        <FeedItem
          v-for="(item, index) in topItems"
          :key="index"
          :image="item.image"
          :date="item.date"
          :title="item.title"
          @click="goToDetail"
        />
      </div>
      <div class="w-full flex justify-center mt-12 sm:mt-0">
        <router-link to="/feed" class="py-3 px-6 text-primary font-bold rounded-full hover:text-secondary">Baca Selengkapnya</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import FeedItem from '@/components/feed/FeedItem.vue';
  
  export default {
    name: 'ArtikelHome',
    components: {
      FeedItem
    },
    data() {
      return {
        items: [
          {
          image: new URL('@/assets/Rectangle 25.png', import.meta.url).href,
          date: '20 Mei 2024',
          title: 'Selamat Hari Kebangkitan Nasional'
        },
        {
          image: new URL('@/assets/Rectangle 25.png', import.meta.url).href,
          date: '20 Mei 2024',
          title: 'Selamat Hari Kebangkitan Nasional'
        },
        {
          image: new URL('@/assets/Rectangle 25.png', import.meta.url).href,
          date: '20 Mei 2024',
          title: 'Selamat Hari Kebangkitan Nasional'
        },
        {
          image: new URL('@/assets/Rectangle 25.png', import.meta.url).href,
          date: '20 Mei 2024',
          title: 'Selamat Hari Kebangkitan Nasional'
        },
        {
          image: new URL('@/assets/Rectangle 25.png', import.meta.url).href,
          date: '20 Mei 2024',
          title: 'Selamat Hari Kebangkitan Nasional'
        },
        {
          image: new URL('@/assets/Rectangle 25.png', import.meta.url).href,
          date: '20 Mei 2024',
          title: 'Selamat Hari Kebangkitan Nasional'
        },
        {
          image: new URL('@/assets/Rectangle 25.png', import.meta.url).href,
          date: '20 Mei 2024',
          title: 'Selamat Hari Kebangkitan Nasional'
        },
        {
          image: new URL('@/assets/Rectangle 25.png', import.meta.url).href,
          date: '20 Mei 2024',
          title: 'Selamat Hari Kebangkitan Nasional'
        },
        {
          image: new URL('@/assets/Rectangle 25.png', import.meta.url).href,
          date: '20 Mei 2024',
          title: 'Selamat Hari Kebangkitan Nasional'
        }
        ]
      };
    },
    computed: {
      topItems() {
        return this.items
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5);
      }
    },
    methods: {
      goToDetail() {
        this.$router.push({ name: 'feed-detail' });
      }
    }
  };
  </script>
  