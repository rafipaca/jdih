<template>
  <div class="border border-teal-500 w-[40%] mx-auto mb-12 mt-20"></div>
  <div class="related-documents">
    <h2 class="text-xl font-bold mb-2 text-center mb-8">Produk Hukum Serupa</h2>
    <div
      v-for="(doc, index) in limitedDocuments"
      :key="doc.id"
      class="card card-side bg-base-100 border shadow-lg mb-4 h-52 pt-9 pb-9 hover:bg-[#9AD0C2] mx-40 transition-colors duration-300 cursor-pointer"
      @click="handleClick(doc.id)"
    >
      <div class="flex flex-col items-center justify-center text-center text-black w-1/6 rounded-l-lg border-r-2 border-[#006859]">
        <span class="text-5xl font-black text-[#004E43]">{{ doc.date }}</span>
        <div class="rounded-lg bg-[#006859] mt-4 p-1 pr-4 pl-4">
          <span class="text-sm text-white">{{ doc.month }}</span>
        </div>
      </div>
      <!-- Right section -->
      <div class="card-body justify-center w-5/6">
        <h2 class="card-title">{{ doc.title }}</h2>
        <p class="text-sm">{{ truncate(doc.description) }}</p>
        <div class="absolute bottom-4 flex items-center space-x-4 text-gray-600 mb-2">
          <div class="flex items-center">
            <span class="material-icons">event</span>
            <span class="ml-1">{{ doc.year }}</span>
          </div>
          <div class="flex items-center">
            <span class="material-icons">file_download</span>
            <span class="ml-1">{{ doc.downloads }}</span>
          </div>
          <div class="flex items-center">
            <span class="material-icons">visibility</span>
            <span class="ml-1">{{ doc.views }}</span>
          </div>
        </div>
        <div class="card-actions justify-end">
          <button @click.stop="handleDownload" class="btn text-slate-50 bg-[#ffc067] shadow-lg hover:bg-white">Unduh</button>
        </div>
      </div>
    </div>
    <div class="text-center mt-8">
      <button @click="handleBack" class="btn text-slate-50 bg-[#006859] shadow-lg  hover:bg-white">Kembali</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
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

const router = useRouter();

const relatedDocuments = computed(() => {
  return allDocuments.value.filter(doc => doc.kategori === props.kategori && doc.id !== props.currentDocumentId);
});

const limitedDocuments = computed(() => {
  return relatedDocuments.value.slice(0, 3);
});

const handleClick = (id) => {
  router.push({ name: 'detailcard', params: { id } });
};

const handleBack = () => {
  router.push({ name: 'documents' });
};

const truncate = (text, maxWords = 30) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
};
</script>

<style scoped>
.card {
  transition: background-color 0.3s ease;
}

.card:hover {
  background-color: #e6fffa; /* Hijau muda saat hover */
}

.material-icons {
  font-size: 16px;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
}

.btn:hover {
  color: #000;
}
</style>
