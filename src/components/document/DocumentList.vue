<template>
  <div>
    <div v-if="documents.length === 0" class="text-red-500 mt-4 ml-36 justify-center items-center">
      Tidak ada dokumen yang cocok dengan kriteria pencarian.
    </div>
    <div v-else>
      <document-item
        v-for="document in documents"
        :key="document.id"
        :document="document"
        @card-click="handleCardClick"
      />
    </div>
  </div>
</template>

<script>
import DocumentItem from './DocumentItem.vue';

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
  methods: {
    handleCardClick(id) {
      this.$emit('card-click', id);
    }
  }
}
</script>
