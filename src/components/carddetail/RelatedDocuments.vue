<template>
  <div class="border border-teal-500 w-[40%] mx-auto mb-12 mt-20"></div>
  <div class="related-documents">
    <h2 class="text-xl font-bold text-center mb-8">Produk Hukum Serupa</h2>
    <div
      v-for="doc in limitedDocuments"
      :key="doc.id"
      class="relative flex flex-col sm:mx-32 items-center sm:flex-row card card-side bg-base-100 border shadow-lg sm:mb-4 sm:h-52 sm:pt-9 sm:pb-9 mb-5 sm:mb-4 hover:bg-[#9AD0C2] transition-colors duration-300 cursor-pointer"
      @click="handleClick(doc.id)"
    >
      <div
        class="flex flex-row sm:flex-col sm:ml-5 mt-10 sm:mt-0 items-center justify-center text-center text-black w-1/6 rounded-l-lg sm:border-r-2 sm:border-[#006859]"
      >
        <span class="text-5xl font-black text-[#004E43]">{{ doc.date }}</span>
        <div class="rounded-lg bg-[#006859] h-10 flex items-center sm:h-full ml-4 sm:mt-4 sm:ml-0 p-1 pr-4 pl-4">
          <span class="text-sm text-white">{{ doc.month }}</span>
        </div>
      </div>
      <div class="sm:hidden w-2/6 sm:h-0.5 sm:mt-4 sm:-mb-3  bg-primary rounded"></div>
        <!-- Right section -->
      <div class="card-body justify-center text-center sm:text-left w-full">
        <h2 class="card-title">{{ doc.title }}</h2>
        <p class="text-sm">{{ truncate(doc.description) }}</p>
        <div class="relative card-actions justify-center mt-4 my-5 my-0 sm:justify-end">
          <button
            @click.stop="handleDownload"
            class="btn relative z-10 text-slate-50 bg-[#ffc067] shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffc067]"
          >
            Unduh
          </button>
        </div>
        <div class="hidden sm:block sm:flex items-center gap-2 justify-center sm:justify-start sm:-mt-12 text-gray-600">
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { allDocuments } from '../data'

const props = defineProps({
  kategori: {
    type: Number,
    required: true
  },
  currentDocumentId: {
    type: Number,
    required: true
  }
})

const router = useRouter()

const relatedDocuments = computed(() => {
  return allDocuments.value.filter(
    (doc) => doc.kategori === props.kategori && doc.id !== props.currentDocumentId
  )
})

const limitedDocuments = computed(() => {
  return relatedDocuments.value.slice(0, 3)
})

const handleClick = (id) => {
  window.scrollTo(0, 0)
  router.push({ name: 'detailcard', params: { id } })
}

const truncate = (text, maxWords = 30) => {
  const words = text.split(' ')
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...'
  }
  return text
}
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
