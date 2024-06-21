<template>
  <div class="keputusan-home bg-ternary  p-10">
    <div class="flex gap-3 justify-center">
      <div
        class="text-center text-white px-6 py-3 rounded-full border-2 hover:bg-secondary border-secondary cursor-pointer">
        populer
      </div>
      <div
        class="text-center text-white px-6 py-3 rounded-full border-2 hover:bg-secondary border-secondary cursor-pointer">
        terbaru
      </div>
    </div>
    <div class="flex flex-col items-center sm:flex-row sm:flex-wrap gap-8 justify-center mt-10">
      <DocumentItem
        v-for="document in topDocuments"
        :key="document.id"
        :document="document"
        @card-click="handleCardClick"
        class="document-item-custom"
      />
    </div>
    <div class="w-full flex justify-center mt-10 mb-5">
      <router-link to="/dokumen" class="bg-primary py-3 px-6 text-white rounded-full hover:bg-secondary">
        Lihat Semua
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { allDocuments } from '@/components/data.js'
import DocumentItem from '@/components/document/DocumentItem.vue'

export default {
  name: 'KeputusanHome',
  components: {
    DocumentItem
  },
  setup() {
    const router = useRouter()
    const documents = allDocuments

    // Computed property untuk mendapatkan 4 dokumen teratas berdasarkan views
    const topDocuments = computed(() => {
      return documents.value
        .slice()
        .sort((a, b) => b.views - a.views)
        .slice(0, 4)
    })

    const handleCardClick = (id) => {
      console.log('Card clicked, document id:', id)
      router.push({ name: 'detailcard', params: { id } })
    }

    return {
      topDocuments,
      handleCardClick
    }
  }
}
</script>

<style scoped>
.keputusan-home .document-item-custom {
  width: 43%;
  height: 14rem;
  /* background-color: #006859; */
  /* color: white; */
  border: 0;
  /* display: flex; */
}

@media (max-width: 640px) {
  .keputusan-home .document-item-custom {
    width: 90%;
    height: fit-content;
  }
}

.keputusan-home .document-item-custom .btn-aja {
  background-color: #000;
  /* margin-bottom: 2px; */
}

.keputusan-home .document-item-custom:hover {
  background-color: #9AD0C2;
  color: #000;
}
</style>
