<template>
  <div class="flex flex-col">
    <div class="bg-white p-8 rounded shadow mb-8">
      <h2 class="text-xl font-semibold mb-4">Caption</h2>
      <p class="caption mb-4">Bangkit dan bersatu, membangun Indonesia!</p>
      <p class="caption">oleh: Agus</p>
    </div>

    <div class="bg-white p-8 rounded shadow mb-8">
      <h2 class="text-xl font-semibold mb-4">Temukan Kategori</h2>
      <ul class="category-list">
        <li v-for="category in categories" :key="category.name" class="mb-2">
          <a href="#" class="text-blue-500">{{ category.name }} ({{ category.count }})</a>
        </li>
      </ul>
    </div>

    <div class="bg-white p-8 rounded shadow mb-8">
      <h2 class="text-xl font-semibold mb-4">Post Terakhir</h2>
      <ul class="post-list">
        <li v-for="post in recentPosts" :key="post.title" class="mb-4">
          <a href="#" class="flex items-center">
            <span class="text-blue-500">{{ post.title }}</span>
            <i class="ml-2 fas fa-arrow-right"></i>
          </a>
        </li>
      </ul>
    </div>

    <div class="bg-white p-8 rounded shadow">
      <h2 class="text-xl font-semibold mb-4">Agenda</h2>
      <p class="text-sm mb-4">08 DESEMBER 2022 (08:00 - 15:00)</p>
      <p class="text-sm mb-4">Selamat Hari Kebangkitan Nasional</p>
      <h2 class="text-xl font-semibold mb-4">Indeks Kepuasan Masyarakat</h2>
      <p class="text-sm">Skor <span class="text-yellow-500">⭐ 5.3</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedSidebar',
  data() {
    return {
      categories: [
        { name: 'Berita', count: 184 },
        { name: 'Artikel', count: 12 },
        { name: 'Kegiatan', count: 82 },
        { name: 'Pengumuman', count: 13 },
        { name: 'Kliping Koran', count: 7 },
        { name: 'Abstrak', count: 12 }
      ],
      recentPosts: [
        { title: 'Selamat Hari Kebangkitan Nasional' },
        { title: 'Selamat Hari Kebangkitan Nasional' },
        { title: 'Selamat Hari Kebangkitan Nasional' }
      ]
    }
  }
}
</script>

<style scoped>
.category-list,
.post-list {
  list-style-type: none;
  padding: 0;
}
.caption {
  font-size: 1rem;
  color: #333;
}
</style>
