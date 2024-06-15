<template>
  <DecorContainer>
    <div class="p-4 mt-8 w-[70%]">
      <div class="text-sm italic font-light flex justify-center text-[#2D9596]">
        <ul class="flex items-center">
          <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
            <a v-if="crumb.url" :href="crumb.url">{{ crumb.text }}</a>
            <span v-else>{{ crumb.text }}</span>
            <span v-if="index < breadcrumbs.length" class="mx-1">/</span>
          </li>
        </ul>
      </div>
      <h1 class="text-center text-2xl font-bold mb-2 mt-4">{{ document.title }}</h1>
      <h2 class="italic text-center text-sm mb-2">
        dirilis pada {{ document.date }} {{ document.month }} {{ document.year }}
      </h2>
      <p class="text-center ml-25 mr-25 mt-10">{{ document.description }}</p>
      <div class="mt-20 text-center">
        <button @click="handleDownload" class="bg-[#006859] btn text-white">unduh dokumen</button>
      </div>
      <div class="rounded-xl border shadow-lg m-8">
        <h1 class="text-center text-xl font-bold mt-4">Metadata</h1>
        <div class="mt-6 mr-20 mb-14 ml-20">
          <MetadataSection :document="document" />
        </div>
      </div>
      <div>
        <RelatedDocuments :kategori="document.kategori" :currentDocumentId="document.id" />
      </div>
      <div class="text-center mt-8">
        <a href="/dokumen" class="btn text-slate-50 bg-[#006859] shadow-lg hover:bg-white">Kembali</a>
      </div>
    </div>
  </DecorContainer>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { allDocuments } from '../components/data'
import MetadataSection from '../components/carddetail/MetadataSection.vue'
import RelatedDocuments from '../components/carddetail/RelatedDocuments.vue'
import DecorContainer from '../components/DecorContainer.vue';

const route = useRoute()
const documentId = ref(parseInt(route.params.id))
const document = computed(() => allDocuments.value.find((doc) => doc.id === documentId.value))

// Watch for changes in route.params.id
watch(
  () => route.params.id,
  (newId) => {
    documentId.value = parseInt(newId)
  }
)

// Define breadcrumbs
const breadcrumbs = ref([{ text: 'Documents', url: '/dokumen' }])

// Handle download
const handleDownload = () => {
  if (document.value && document.value.link) {
    window.open(document.value.link, '_blank')
  } else {
    console.log('No download link available for this document')
  }
}
</script>

<style scoped>
/* Tambahkan gaya sesuai kebutuhan */
</style>
