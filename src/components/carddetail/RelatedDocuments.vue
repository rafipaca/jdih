<template>
    <div class="related-documents my-4">
      <h2 class="text-xl font-bold mb-2">Produk Hukum Serupa</h2>
      <div v-for="doc in relatedDocuments" :key="doc.id" class="card bg-white shadow-md mb-4">
        <div class="card-body p-4">
          <div class="flex items-center">
            <div class="flex flex-col items-center justify-center text-center text-black w-1/6 rounded-l-lg border-r-2 border-[#006859]">
              <span class="text-5xl font-black text-[#004E43]">{{ doc.date }}</span>
              <div class="rounded-lg bg-[#006859] mt-4 p-1 pr-4 pl-4">
                <span class="text-sm text-white">{{ doc.month }}</span>
              </div>
            </div>
            <div class="w-5/6 pl-4">
              <h3 class="text-lg font-semibold">{{ doc.title }}</h3>
              <p>{{ doc.description }}</p>
              <p class="text-sm text-gray-600">Tahun: {{ doc.year }}</p>
              <p class="text-sm text-gray-600">Views: {{ doc.views }} | Downloads: {{ doc.downloads }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { allDocuments } from '../data';
  
  const props = defineProps({
    kategori: {
      type: Number,
      required: true
    },
    currentDocumentId: {
      type: Number,
      required: true
    }
  });
  
  const relatedDocuments = computed(() => {
    return allDocuments.value.filter(doc => doc.kategori === props.kategori && doc.id !== props.currentDocumentId);
  });
  </script>
  
  <style scoped>
  /* Tambahkan gaya sesuai kebutuhan */
  </style>
  