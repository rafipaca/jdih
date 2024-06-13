<template>
    <div class="keputusan-home bg-primary p-10">
      <div class="flex gap-3 justify-center">
        <div class="w-28 text-center text-white p-2 rounded-full border-2 hover:bg-secondary border-secondary">populer</div>
        <div class="w-28 text-center text-white p-2 rounded-full border-2 hover:bg-secondary border-secondary">terbaru</div>
      </div>
      <div class="flex flex-wrap gap-8 justify-center mt-10">
        <DocumentItem
          v-for="document in topDocuments"
          :key="document.id"
          :document="document"
          @card-click="handleCardClick"
          class="document-item-custom"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import { allDocuments } from '@/components/data.js'; // Import data dari data.js
  import DocumentItem from '@/components/document/DocumentItem.vue';
  
  export default {
    name: 'KeputusanHome',
    components: {
      DocumentItem
    },
    setup() {
      const documents = allDocuments; // Ambil data dokumen
  
      // Computed property untuk mendapatkan 4 dokumen teratas berdasarkan views
      const topDocuments = computed(() => {
        return documents.value
          .slice()
          .sort((a, b) => b.views - a.views)
          .slice(0, 4);
      });
  
      const handleCardClick = (id) => {
        // Tangani logika ketika card diklik
        console.log('Card clicked, document id:', id);
      };
  
      return {
        topDocuments,
        handleCardClick
      };
    }
  };
  </script>
  
  <style scoped>
  .keputusan-home .document-item-custom {
    width: 40%;
    background-color: #006859;
    color: white;
    border: 0;
  }
  
  .keputusan-home .document-item-custom .btn-aja {
    background-color: #000;
  }
  
  .keputusan-home .document-item-custom:hover {
    background-color: #e0e0e0;
    color: #000;
  }
  </style>
  