<template>
    <div>
      <h2 class="text-xl font-bold mb-4">Produk Hukum Serupa</h2>
      <div class="grid grid-cols-1 gap-4">
        <div class="card bg-base-100 shadow-xl" v-for="product in products" :key="product.id">
          <div class="card-body">
            <h3 class="card-title">{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Unduh</button>
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
            title: 'KEPUTUSAN GUBERNUR Nomor 324 Tahun 2024',
            description: 'Tentang Penunjukan Kuasa Pengguna Anggaran, Pejabat Pembuat Komitmen, Pejabat Penandatanganan Surat Perintah Membayar, Bendahara Pengeluaran Pada Dana Kesehatan Provinsi Lampung Tahun Anggaran 2024.'
          },
          {
            id: 2,
            title: 'KEPUTUSAN GUBERNUR Nomor 324 Tahun 2024',
            description: 'Tentang Penunjukan Kuasa Pengguna Anggaran, Pejabat Pembuat Komitmen, Pejabat Penandatanganan Surat Perintah Membayar, Bendahara Pengeluaran Pada Dana Kesehatan Provinsi Lampung Tahun Anggaran 2024.'
          },
          {
            id: 3,
            title: 'KEPUTUSAN GUBERNUR Nomor 324 Tahun 2024',
            description: 'Tentang Penunjukan Kuasa Pengguna Anggaran, Pejabat Pembuat Komitmen, Pejabat Penandatanganan Surat Perintah Membayar, Bendahara Pengeluaran Pada Dana Kesehatan Provinsi Lampung Tahun Anggaran 2024.'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any scoped styles if necessary */
  </style>
  