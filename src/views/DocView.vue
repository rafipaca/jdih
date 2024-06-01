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
      <SidebarCheckbox class="w-1/4" :filters="availableFilters" @filter-change="handleFilterChange" />
      <!-- Section 2: Document Filter and List -->
      <div class="w-3/4">
        <DocumentList :documents="paginatedDocuments" :currentPage="currentPage" :pageSize="pageSize" />
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
    kategori: 1
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
    kategori: 2
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
    kategori: 3
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
    kategori: 4
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
    kategori: 5
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
    kategori: 6
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
    kategori: 7
  }
  ]);
  // {
  //   id: 8,
  //   date: '13',
  //   month: 'DES',
  //   number: 326,
  //   title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
  //   description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
  //   year: 2023,
  //   downloads: 2,
  //   views: 4
  // },
  // {
  //   id: 9,
  //   date: '13',
  //   month: 'DES',
  //   number: 326,
  //   title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
  //   description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
  //   year: 2023,
  //   downloads: 2,
  //   views: 4
  // },
  // {
  //   id: 10,
  //   date: '13',
  //   month: 'DES',
  //   number: 326,
  //   title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
  //   description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
  //   year: 2023,
  //   downloads: 2,
  //   views: 4
  // },
  // {
  //   id: 11,
  //   date: '13',
  //   month: 'DES',
  //   number: 326,
  //   title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
  //   description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
  //   year: 2023,
  //   downloads: 2,
  //   views: 4
  // },
  // {
  //   id: 12,
  //   date: '13',
  //   month: 'DES',
  //   number: 326,
  //   title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
  //   description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
  //   year: 2023,
  //   downloads: 2,
  //   views: 4
  // },
  // {
  //   id: 13,
  //   date: '13',
  //   month: 'DES',
  //   number: 326,
  //   title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
  //   description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
  //   year: 2023,
  //   downloads: 2,
  //   views: 4
  // },
  // {
  //   id: 14,
  //   date: '13',
  //   month: 'DES',
  //   number: 326,
  //   title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
  //   description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
  //   year: 2023,
  //   downloads: 2,
  //   views: 4
  // },
  // {
  //   id: 15,
  //   date: '13',
  //   month: 'DES',
  //   number: 326,
  //   title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
  //   description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
  //   year: 2023,
  //   downloads: 2,
  //   views: 4
  // },
  // {
  //   id: 16,
  //   date: '13',
  //   month: 'DES',
  //   number: 326,
  //   title: 'KEPUTUSAN GUBERNUR Nomor 320 Tahun 2023',
  //   description: 'Tentang Penunjukan Kuasa Penguna Anggara, Pejabat Pembuat Komitmen, Peabat Pendatanganan Surat Perintah Membatar dan Bendahara Pengeluaran Anggaran Pendapatan dan Belanja Negara/Dekonsentrasi Pada Dinas KEsehatan Provinsi Lampung Tahun Anggara 2024',
  //   year: 2023,
  //   downloads: 2,
  //   views: 4
  // }
  // Tambahkan data dokumen lainnya sesuai kebutuhan


const filteredDocuments = ref([...allDocuments.value]);
const currentPage = ref(1);
const pageSize = 5; // Jumlah dokumen per halaman

const availableFilters = ref([
  {
    name: 'kategori',
    label: 'Kategori',
    options: [
      { value: 1, label: 'Peraturan Daerah' },
      { value: 2, label: 'Peraturan Gubernur' },
      { value: 3, label: 'Keputusan Gubernur' },
      { value: 4, label: 'Instruksi Gubernur' },
      { value: 5, label: 'Surat Keputusan Gubernur' },
      { value: 6, label: 'Perjanjian Kerjasama' },
      { value: 7, label: 'Undang-Undang RI' },
      { value: 8, label: 'Peraturan Pemerintah RI' },
      { value: 9, label: 'Peraturan Kemendagri' },
      { value: 10, label: 'SK Sekda Provinsi Lampung' },
      { value: 11, label: 'PERPU' },
      { value: 12, label: 'Peraturan Presiden' },
      { value: 13, label: 'Surat Edaran' },
      { value: 14, label: 'Instruksi Presiden' },
      { value: 15, label: 'Keputusan Presiden' },
      { value: 16, label: 'Keputusan DPRD Provinsi' },
      { value: 17, label: 'Dokumen Langka' },
    ]
  },
  // Tambahkan filter lain jika diperlukan...
]);

const paginatedDocuments = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return filteredDocuments.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(filteredDocuments.value.length / pageSize));

const handleSearch = (searchTerms) => {
  const titleKeywords = searchTerms.title ? searchTerms.title.toLowerCase().split(' ') : [];

  filteredDocuments.value = allDocuments.value.filter(doc => {
    const matchesTitle = !searchTerms.title || titleKeywords.every(keyword => doc.title.toLowerCase().includes(keyword));
    const matchesNumber = !searchTerms.number || doc.number === parseInt(searchTerms.number);
    const matchesYear = !searchTerms.year || doc.year === parseInt(searchTerms.year);
    return matchesTitle && matchesNumber && matchesYear;
  });
};

const handleFilterChange = (selectedFilters) => {
  if (selectedFilters.kategori.includes('all')) {
    filteredDocuments.value = [...allDocuments.value];
  } else {
    filteredDocuments.value = allDocuments.value.filter(doc => {
      const matchesKategori = !selectedFilters.kategori.length || selectedFilters.kategori.includes(doc.kategori);
      // Tambahkan logika pencocokan filter tambahan jika diperlukan...
      return matchesKategori;
    });
  }
  currentPage.value = 1; // Reset to the first page after filtering
};

const handlePageChange = (page) => {
  currentPage.value = page;
};
</script>

<style scoped>
/* Tambahkan gaya sesuai kebutuhan */
</style>