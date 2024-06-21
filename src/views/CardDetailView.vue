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
      <p class="text-center font-normal mx-32 mt-10">{{ document.description }}</p>
      
      <!-- Added Metrics Section -->
      <div class="flex justify-center mt-20">
        <div class="mx-2 text-center">
          <i class="material-icons">event</i> <!-- icon for year -->
          <span>{{ document.year }}</span>
        </div>
        <div class="mx-2 text-center">
          <i class="material-icons">download</i> <!-- icon for download -->
          <span>{{ document.downloads }}</span>
        </div>
        <div class="mx-2 text-center">
          <i class="material-icons">visibility</i> <!-- icon for views -->
          <span>{{ document.views }}</span>
        </div>
      </div>
      
      <div class="mt-4 text-center">
        <button @click="handleDownload" class="bg-[#006859] btn text-white hover:bg-slate-300">Unduh Dokumen</button>
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
        <a href="/dokumen" class="btn text-slate-50 bg-[#006859] shadow-lg hover:bg-white"
          >Kembali</a
        >
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
import DecorContainer from '../components/DecorContainer.vue'

const route = useRoute()
const documentId = ref(parseInt(route.params.id))
const document = computed(() => allDocuments.value.find((doc) => doc.id === documentId.value))

watch(
  () => route.params.id,
  (newId) => {
    documentId.value = parseInt(newId)
  }
)

const breadcrumbs = ref([{ text: 'Documents', url: '/dokumen' }])

const handleDownload = () => {
  if (document.value && document.value.link) {
    window.open(document.value.link, '_blank')
  } else {
    console.log('No download link available for this document')
  }
}
</script>

<style scoped>
.material-icons {
  font-size: 24px; /* Icon size */
  vertical-align: middle;
}
</style>
