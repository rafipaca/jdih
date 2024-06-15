<template>
  <div class="grid grid-cols-3 gap-8 p-8 ml-28">
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
          image: new URL('@/assets/Rectangle 42.png', import.meta.url).href,
          date: '2 Mei 2024',
          title: 'Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji'
        },
        {
          image: new URL('@/assets/Rectangle 42.png', import.meta.url).href,
          date: '2 Mei 2024',
          title: 'Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji'
        },
        {
          image: new URL('@/assets/Rectangle 42.png', import.meta.url).href,
          date: '2 Mei 2024',
          title: 'Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji'
        },
        {
          image: new URL('@/assets/Rectangle 42.png', import.meta.url).href,
          date: '2 Mei 2024',
          title: 'Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji'
        },
        {
          image: new URL('@/assets/Rectangle 42.png', import.meta.url).href,
          date: '2 Mei 2024',
          title: 'Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji'
        },
        {
          image: new URL('@/assets/Rectangle 42.png', import.meta.url).href,
          date: '2 Mei 2024',
          title: 'Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji'
        },
        {
          image: new URL('@/assets/Rectangle 42.png', import.meta.url).href,
          date: '2 Mei 2024',
          title: 'Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji'
        },
        {
          image: new URL('@/assets/Rectangle 42.png', import.meta.url).href,
          date: '2 Mei 2024',
          title: 'Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji'
        },
        {
          image: new URL('@/assets/Rectangle 42.png', import.meta.url).href,
          date: '2 Mei 2024',
          title: 'Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji'
        },
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
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
