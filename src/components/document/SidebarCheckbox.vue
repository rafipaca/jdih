<template>
  <div>
    <h3 class="font-bold mb-2">Kategori</h3>
    <label for="showAll" class="block mb-2 text-sm">
      <input type="checkbox" id="showAll" v-model="filters.showAll" class="mr-1"> Tampilkan Semua
    </label>
    <label for="perda" class="block mb-2 text-sm">
      <input type="checkbox" id="perda" v-model="filters.perda" class="mr-1"> Peraturan Daerah
    </label>
    <label for="pergub" class="block mb-2 text-sm">
      <input type="checkbox" id="pergub" v-model="filters.pergub" class="mr-1"> Peraturan Gubernur
    </label>
    <label for="kepgub" class="block mb-2 text-sm">
      <input type="checkbox" id="kepgub" v-model="filters.kepgub" class="mr-1"> Keputusan Gubernur
    </label>
    <label for="intruksiGub" class="block mb-2 text-sm">
      <input type="checkbox" id="intruksiGub" v-model="filters.intruksiGub" class="mr-1"> Intruksi Gubernur
    </label>
    <label for="skGub" class="block mb-2 text-sm">
      <input type="checkbox" id="skGub" v-model="filters.skGub" class="mr-1"> Surat Keputusan Gubernur
    </label>
    <label for="perjanjian" class="block mb-2 text-sm">
      <input type="checkbox" id="perjanjian" v-model="filters.perjanjian" class="mr-1"> Perjanjian Kerjasama
    </label>
    <label for="uuRI" class="block mb-2 text-sm">
      <input type="checkbox" id="uuRI" v-model="filters.uuRI" class="mr-1"> Undang-Undang RI
    </label>
    <label for="perpresRI" class="block mb-2 text-sm">
      <input type="checkbox" id="perpresRI" v-model="filters.perpresRI" class="mr-1"> Peraturan Presiden RI
    </label>
    <label for="permen" class="block mb-2 text-sm">
      <input type="checkbox" id="permen" v-model="filters.permen" class="mr-1"> Peraturan Menteri
    </label>
    <label for="skSekda" class="block mb-2 text-sm">
      <input type="checkbox" id="skSekda" v-model="filters.skSekda" class="mr-1"> SK Sekda Provinsi Lampung
    </label>
    <label for="perpu" class="block mb-2 text-sm">
      <input type="checkbox" id="perpu" v-model="filters.perpu" class="mr-1"> PERPU
    </label>
    <label for="se" class="block mb-2 text-sm">
      <input type="checkbox" id="se" v-model="filters.se" class="mr-1"> Surat Edaran
    </label>
    <label for="intruksiPres" class="block mb-2 text-sm ">
      <input type="checkbox" id="intruksiPres" v-model="filters.intruksiPres" class="mr-1"> Intruksi Presiden
    </label>
    <label for="kepPres" class="block mb-2 text-sm">
      <input type="checkbox" id="kepPres" v-model="filters.kepPres" class="mr-1"> Keputusan Presiden
    </label>
    <label for="kepDPRD" class="block mb-2 text-sm">
      <input type="checkbox" id="kepDPRD" v-model="filters.kepDPRD" class="mr-1"> Keputusan DPRD Provinsi
    </label>
    <label for="dokLangka" class="block mb-2 text-sm">
      <input type="checkbox" id="dokLangka" v-model="filters.dokLangka" class="mr-1"> Dokumen Langka
    </label>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// Definisikan props dan ref untuk filters
const filters = ref({
  showAll: true,
  perda: false,
  pergub: false,
  // Daftar properti lainnya
});

// Tambahkan listener untuk setiap perubahan pada filters
watch(filters, (newFilters) => {
  // Emit event ke parent component (DocView.vue) dengan nilai filters baru
  emit('filter-change', newFilters);
});
</script>

<style scoped>
/* Tambahkan style jika diperlukan */
</style>
