<template>
  <div>
    <div v-if="paginatedDocuments.length === 0" class="text-red-500 mt-4 ml-36 justify-center items-center">
      Tidak ada dokumen yang cocok dengan kriteria pencarian.
    </div>
    <div v-else>
      <document-item
        v-for="document in paginatedDocuments"
        :key="document.id"
        :document="document"
      />
    </div>
  </div>
</template>

<script>
import DocumentItem from './DocumentItem.vue'

export default {
  name: 'DocumentList',
  components: {
    DocumentItem
  },
  props: {
    documents: {
      type: Array,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      required: true
    }
  },
  computed: {
    paginatedDocuments() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.documents.slice(startIndex, endIndex);
    }
  }
}
</script>
