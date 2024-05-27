<template>
    <div>
      <document-item
        v-for="document in documents"
        :key="document.id"
        :document="document"
      />
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
      }
    }
  }
  </script>
  
  <style scoped>
  /* Tambahkan style jika diperlukan */
  </style>
  