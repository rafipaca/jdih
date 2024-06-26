<template>
  <component :is="currentContainer">
    <div class="content p-4 w-full lg:w-[70%] mx-auto">
      <div class="text-sm italic font-light flex justify-left mb-5 text-[#2D9596]">
        <ul class="flex">
          <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
            <a v-if="crumb.url" :href="crumb.url">{{ crumb.text }}</a>
            <span v-else>{{ crumb.text }}</span>
            <span v-if="index < breadcrumbs.length" class="mx-2">/</span>
          </li>
        </ul>
      </div>
      <DocumentFilter @search="handleSearch" :resultCount="resultCount" :searchTime="searchTime" />
      <div class="flex flex-col lg:flex-row">
        <!-- Section 1: Sidebar Checkbox -->
        <SidebarCheckbox
          class="w-full lg:w-1/4 mb-4 lg:mb-0"
          :filters="availableFilters"
          :documentCounts="documentCounts"
          :resultCount="resultCount"
          :searchTime="searchTime"
          @filter-change="handleFilterChange"
        />
        <!-- Section 2: Document Filter and List -->
        <div class="w-full lg:w-3/4">
          <DocumentList
            :documents="paginatedDocuments"
            :currentPage="currentPage"
            :pageSize="pageSize"
            @card-click="goToDetail"
          />
          <Pagination
            @page-change="handlePageChange"
            :totalPages="totalPages"
            :currentPage="currentPage"
          />
        </div>
      </div>
      <!-- Tambahkan komponen LoadingSpinner -->
      <LoadingSpinner v-if="isLoading" />
    </div>
  </component>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import DocumentFilter from '../components/document/DocumentFilter.vue'
import DocumentList from '../components/document/DocumentList.vue'
import SidebarCheckbox from '../components/document/SidebarCheckbox.vue'
import Pagination from '../components/document/Pagination.vue'
import DecorContainer from '../components/DecorContainer.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import DecorResponsive from '../components/document/DecorResponsive.vue'
import { allDocuments } from '../components/data'

const filteredDocuments = ref([...allDocuments.value])
const currentPage = ref(1)
const pageSize = 5
const isLoading = ref(false)
const router = useRouter()
const breadcrumbs = ref([{ text: 'Documents', url: '/dokumen' }])

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
      { value: 17, label: 'Dokumen Langka' }
    ]
  }
])

const resultCount = ref(0)
const searchTime = ref(0)

const paginatedDocuments = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize
  const endIndex = startIndex + pageSize
  return filteredDocuments.value.slice(startIndex, endIndex)
})

const totalPages = computed(() => Math.ceil(filteredDocuments.value.length / pageSize))

const documentCounts = computed(() => {
  const counts = {}
  allDocuments.value.forEach(doc => {
    counts[doc.kategori] = (counts[doc.kategori] || 0) + 1
  })
  return counts
})

const handleSearch = (searchTerms) => {
  isLoading.value = true
  const startTime = performance.now()
  const titleKeywords = searchTerms.title ? searchTerms.title.toLowerCase().split(' ') : []

  filteredDocuments.value = allDocuments.value.filter((doc) => {
    const matchesTitle =
      !searchTerms.title ||
      titleKeywords.every((keyword) => doc.title.toLowerCase().includes(keyword))
    const matchesNumber = !searchTerms.number || doc.number === parseInt(searchTerms.number)
    const matchesYear = !searchTerms.year || doc.year === parseInt(searchTerms.year)
    return matchesTitle && matchesNumber && matchesYear
  })

  const endTime = performance.now()
  const actualSearchTime = ((endTime - startTime) / 1000).toFixed(2)
  searchTime.value = actualSearchTime
  resultCount.value = filteredDocuments.value.length
  currentPage.value = 1
  isLoading.value = false
}

const handleFilterChange = (selectedFilters) => {
  isLoading.value = true
  const startTime = performance.now()

  if (selectedFilters.kategori.includes('all')) {
    filteredDocuments.value = [...allDocuments.value]
  } else {
    filteredDocuments.value = allDocuments.value.filter((doc) => {
      const matchesKategori =
        !selectedFilters.kategori.length || selectedFilters.kategori.includes(doc.kategori)
      return matchesKategori
    })
  }

  const endTime = performance.now()
  const actualFilterTime = ((endTime - startTime) / 1000).toFixed(2)
  searchTime.value = actualFilterTime
  resultCount.value = filteredDocuments.value.length
  currentPage.value = 1
  isLoading.value = false
}

const handlePageChange = (page) => {
  currentPage.value = page
}

const goToDetail = (id) => {
  router.push({ name: 'detailcard', params: { id } })
}

const isMobile = ref(window.innerWidth <= 1280)
const currentContainer = computed(() => (isMobile.value ? DecorResponsive : DecorContainer))

const handleResize = () => {
  isMobile.value = window.innerWidth <= 1280
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  const startTime = performance.now()
  handleFilterChange({ kategori: [] })
  const endTime = performance.now()
  const actualLoadTime = ((endTime - startTime) / 1000).toFixed(2)
  searchTime.value = actualLoadTime
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
