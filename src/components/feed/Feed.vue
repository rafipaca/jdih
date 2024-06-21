<template>
  <div class="ml-10 feed-container grid">
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

.feed-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  margin: 15px;
  /* Gaya lainnya untuk kartu */
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
