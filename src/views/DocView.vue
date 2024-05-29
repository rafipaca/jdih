<script setup>
import DocumentFilter from '../components/document/DocumentFilter.vue'
import DocumentList from '../components/document/DocumentList.vue'
import SidebarCheckbox from '../components/document/SidebarCheckbox.vue'

// Data dokumen yang akan ditampilkan
const documents = [
  {
    id: 1,
    date: '13',
    month: 'DES',
    title: 'KEPUTUSAN GUBERNUR Nomor 324 Tahun 2024',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas Kesehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2024,
    downloads: 2,
    views: 4
  },
  {
    id: 2,
    date: '13',
    month: 'DES',
    title: 'KEPUTUSAN GUBERNUR Nomor 324 Tahun 2024',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2024,
    downloads: 2,
    views: 4
  },
  {
    id: 3,
    date: '13',
    month: 'DES',
    title: 'KEPUTUSAN GUBERNUR Nomor 324 Tahun 2024',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2024,
    downloads: 2,
    views: 4
  }
  // Tambahkan data dokumen lainnya
]
</script>

<template>
  <div class="p-4">
    <p class="text-red-600">Ini halaman dokumen</p>
    <DocumentFilter />
    <div class="flex">
      <!-- Section 1: Sidebar Checkbox -->
      <SidebarCheckbox class="w-1/4" />
      <!-- Section 2: Document Filter and List -->
      <div class="w-3/4">
        <DocumentList :documents="documents" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add additional styles if needed */
</style>
