<template>
    <div>
      <h3 class="font-bold mb-2">Kategori</h3>
      <label for="showAll" class="block mb-1">
        <input type="checkbox" id="showAll" v-model="filters.showAll" class="mr-1"> Tampilkan Semua
      </label>
      <label for="perda" class="block mb-1">
        <input type="checkbox" id="perda" v-model="filters.perda" class="mr-1"> Peraturan Daerah
      </label>
      <label for="pergub" class="block mb-1">
        <input type="checkbox" id="pergub" v-model="filters.pergub" class="mr-1"> Peraturan Gubernur
      </label>
      <label for="kepgub" class="block mb-1">
        <input type="checkbox" id="kepgub" v-model="filters.kepgub" class="mr-1"> Keputusan Gubernur
      </label>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const filters = ref({
    showAll: true,
    perda: false,
    pergub: false,
    kepgub: false
  });
  </script>
  
  <style scoped>
  /* Tambahkan style jika diperlukan */
  </style>
  