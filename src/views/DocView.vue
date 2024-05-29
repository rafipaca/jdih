<template>
  <div class="p-4">
    <div class="text-sm font-bold breadcrumbs">
      <ul>
        <li><a>Documents</a></li> 
        <li></li>
      </ul>
    </div>
    <DocumentFilter @search="handleSearch" />
    <div class="flex">
      <!-- Section 1: Sidebar Checkbox -->
      <SidebarCheckbox class="w-1/4" :filters="filters" />
      <!-- Section 2: Document Filter and List -->
      <div class="w-3/4">
        <DocumentList :documents="filteredDocuments" :currentPage="currentPage" :pageSize="pageSize" :filters="filters" />
        <Pagination @page-change="handlePageChange" :totalPages="totalPages" :currentPage="currentPage" />
      </div>
    </div>
  </div>
</template>

<script setup>
import DocumentFilter from '../components/document/DocumentFilter.vue';
import DocumentList from '../components/document/DocumentList.vue';
import SidebarCheckbox from '../components/document/SidebarCheckbox.vue';
import Pagination from '../components/document/Pagination.vue';
import { ref, computed } from 'vue';
const allDocuments = ref([
  {
    id: 1,
    date: '13',
    month: 'DES',
    number: 324,
    title: 'KEPUTUSAN GUBERNUR Nomor 324 Tahun 2024',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas Kesehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2024,
    downloads: 2,
    views: 4,
    kategori: 'Keputusan Gubernur'
  },
  {
    id: 2,
    date: '13',
    month: 'DES',
    number: 326,
    title: 'KEPUTUSAN GUBERNUR Nomor 324 Tahun 2024',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2024,
    downloads: 2,
    views: 4,
    kategori: 'Keputusan Gubernur'
  },
  {
    id: 3,
    date: '13',
    month: 'DES',
    number: 326,
    title: 'KEPUTUSAN GUBERNUR Nomor 324 Tahun 2024',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2024,
    downloads: 2,
    views: 4,
    kategori: 'Keputusan Gubernur'
  },
  {
    id: 4,
    date: '13',
    month: 'DES',
    number: 326,
    title: 'KEPUTUSAN GUBERNUR Nomor 324 Tahun 2024',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2024,
    downloads: 2,
    views: 4,
    kategori: 'Keputusan Gubernur'
  },
  {
    id: 5,
    date: '13',
    month: 'DES',
    number: 326,
    title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2023,
    downloads: 2,
    views: 4,
    kategori: 'Peraturan Daerah'
  },
  {
    id: 6,
    date: '13',
    month: 'DES',
    number: 326,
    title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2023,
    downloads: 2,
    views: 4,
    kategori: 'Peraturan Daerah'
  },
  {
    id: 7,
    date: '13',
    month: 'DES',
    number: 326,
    title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2023,
    downloads: 2,
    views: 4,
    kategori: 'Peraturan Daerah'
  },
  {
    id: 8,
    date: '13',
    month: 'DES',
    number: 326,
    title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2023,
    downloads: 2,
    views: 4
  },
  {
    id: 9,
    date: '13',
    month: 'DES',
    number: 326,
    title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2023,
    downloads: 2,
    views: 4
  },
  {
    id: 10,
    date: '13',
    month: 'DES',
    number: 326,
    title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2023,
    downloads: 2,
    views: 4
  },
  {
    id: 11,
    date: '13',
    month: 'DES',
    number: 326,
    title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2023,
    downloads: 2,
    views: 4
  },
  {
    id: 12,
    date: '13',
    month: 'DES',
    number: 326,
    title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2023,
    downloads: 2,
    views: 4
  },
  {
    id: 13,
    date: '13',
    month: 'DES',
    number: 326,
    title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2023,
    downloads: 2,
    views: 4
  },
  {
    id: 14,
    date: '13',
    month: 'DES',
    number: 326,
    title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2023,
    downloads: 2,
    views: 4
  },
  {
    id: 15,
    date: '13',
    month: 'DES',
    number: 326,
    title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2023,
    downloads: 2,
    views: 4
  },
  {
    id: 16,
    date: '13',
    month: 'DES',
    number: 326,
    title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
    description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
    year: 2023,
    downloads: 2,
    views: 4
  }
  // Tambahkan data dokumen lainnya sesuai kebutuhan
]);

const filteredDocuments = ref([...allDocuments.value]);

const currentPage = ref(1);
const pageSize = 5; // Jumlah dokumen per halaman

const totalPages = computed(() => {
  return Math.ceil(filteredDocuments.value.length / pageSize);
});

const handleSearch = (searchTerms) => {
  const titleKeywords = searchTerms.title ? searchTerms.title.toLowerCase().split(' ') : [];
  
  filteredDocuments.value = allDocuments.value.filter(doc => {
    const matchesTitle = !searchTerms.title || titleKeywords.every(keyword => doc.title.toLowerCase().includes(keyword));
    const matchesNumber = !searchTerms.number || doc.number === parseInt(searchTerms.number);
    const matchesYear = !searchTerms.year || doc.year === parseInt(searchTerms.year);
    return matchesTitle && matchesNumber && matchesYear;
  });
};

const handlePageChange = (page) => {
  currentPage.value = page;
};
</script>

<style scoped>
/* Tambahkan gaya sesuai kebutuhan */
</style>
