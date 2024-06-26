<template>
  <div class="feed-container max-w-screen-lg mx-auto">
    <FeedItem
      v-for="(item, index) in items"
      :key="index"
      :image="item.image"
      :date="item.date"
      :title="item.title"
      @click="goToDetail"
    />
  </div>
</template>

<script>
import FeedItem from './FeedItem.vue'

export default {
  name: 'Feed',
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
    }
  },
  methods: {
    goToDetail() {
      this.$router.push({ name: 'feed-detail' });
    }
  }
}
</script>

<style scoped>
.feed-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px;
  justify-content: center;
}

@media (min-width: 1200px) {
  .feed-container {
    grid-template-columns: repeat(3, 1fr); /* 3 kolom pada layar besar */
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .feed-container {
    grid-template-columns: repeat(2, 1fr); /* 2 kolom pada layar sedang */
  }
}

@media (max-width: 767px) {
  .feed-container {
    grid-template-columns: 1fr; /* 1 kolom pada layar kecil */
  }
}
</style>
