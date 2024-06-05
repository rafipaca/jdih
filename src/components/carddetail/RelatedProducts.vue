<template>
  <div class="items-center justify-center mr-44 ml-44">
    <h2 class="text-xl font-bold mb-4 text-center justify-center">Produk Hukum Serupa</h2>
    <div class="grid grid-cols-1 gap-4">
      <div class="card card-side bg-base-100 border shadow-md mb-1 h-52 pt-9 pb-9 hover:bg-[#9AD0C2] transition-colors duration-300" v-for="product in products" :key="product.id">
        <!-- Left section for the date and month (1/6 of the card) -->
        <div class="flex flex-col items-center justify-center text-center text-black w-1/6 rounded-l-lg border-r-2 border-[#006859]">
          <span class="text-5xl font-black text-[#004E43]">{{ product.date }}</span>
          <div class="rounded-lg bg-[#006859] mt-4 p-1 pr-4 pl-4">
            <span class="text-sm text-white">{{ product.month }}</span>
          </div>
        </div>
        <!-- Right section for the content (5/6 of the card) -->
        <div class="card-body justify-center w-5/6">
          <h3 class="card-title">{{ product.title }}</h3>
          <p class="text-sm">{{ product.description }}</p>
          <div class="absolute bottom-4 flex items-center space-x-4 text-gray-600 mb-2">
            <div class="flex items-center">
              <span class="material-icons">event</span>
              <span class="ml-1">{{ product.year }}</span>
            </div>
            <div class="flex items-center">
              <span class="material-icons">file_download</span>
              <span class="ml-1">{{ product.downloads }}</span>
            </div>
            <div class="flex items-center">
              <span class="material-icons">visibility</span>
              <span class="ml-1">{{ product.views }}</span>
            </div>
          </div>
          <div class="card-actions justify-end">
            <button class="btn text-slate-50 bg-[#ffc067] shadow-lg hover:bg-white">Unduh</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RelatedProducts',
  data() {
    return {
      products: [
        {
          id: 1,
          date: '13',
          month: 'Des',
          title: 'KEPUTUSAN GUBERNUR Nomor 324 Tahun 2024',
          description: 'Tentang Penunjukan Kuasa Pengguna Anggaran, Pejabat Pembuat Komitmen, Pejabat Penandatanganan Surat Perintah Membayar, Bendahara Pengeluaran Pada Dana Kesehatan Provinsi Lampung Tahun Anggaran 2024.',
          year: 2024,
          downloads: 24,
          views: 4
        },
        {
          id: 2,
          date: '13',
          month: 'Des',
          title: 'KEPUTUSAN GUBERNUR Nomor 324 Tahun 2024',
          description: 'Tentang Penunjukan Kuasa Pengguna Anggaran, Pejabat Pembuat Komitmen, Pejabat Penandatanganan Surat Perintah Membayar, Bendahara Pengeluaran Pada Dana Kesehatan Provinsi Lampung Tahun Anggaran 2024.',
          year: 2024,
          downloads: 24,
          views: 4
        },
        {
          id: 3,
          date: '13',
          month: 'Des',
          title: 'KEPUTUSAN GUBERNUR Nomor 324 Tahun 2024',
          description: 'Tentang Penunjukan Kuasa Pengguna Anggaran, Pejabat Pembuat Komitmen, Pejabat Penandatanganan Surat Perintah Membayar, Bendahara Pengeluaran Pada Dana Kesehatan Provinsi Lampung Tahun Anggaran 2024.',
          year: 2024,
          downloads: 24,
          views: 4
        }
      ]
    }
  }
}
</script>

<style scoped>
.material-icons {
  font-size: 16px;
}
.btn-outline {
  @apply border border-gray-300 text-gray-600;
}
.btn-secondary {
  @apply bg-transparent hover:bg-gray-100;
}

.card:hover {
  @apply bg-green-100;
}

.card {
  transition: background-color 0.3s ease;
}

.card:hover .btn {
  background-color: white;
  color: black;
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
