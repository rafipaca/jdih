<template>
  <div class="p-4">
    <div class="text-sm font-bold breadcrumbs">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dokumen">Documents</a></li>
        <li>{{ document.title }}</li>
      </ul>
    </div>
    <h1 class="text-2xl font-bold my-4">{{ document.title }}</h1>
    <p>{{ document.description }}</p>
    <div class="my-4">
      <button class="btn btn-primary">Unduh Dokumen</button>
    </div>
    <MetadataSection :document="document" />
    <RelatedDocuments :kategori="document.kategori" :currentDocumentId="document.id" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { allDocuments } from '../components/data';
import MetadataSection from '../components/carddetail/MetadataSection.vue';
import RelatedDocuments from '../components/carddetail/RelatedDocuments.vue';

const route = useRoute();
const documentId = parseInt(route.params.id);
const document = ref(allDocuments.value.find(doc => doc.id === documentId));
</script>

<style scoped>
/* Tambahkan gaya sesuai kebutuhan */
</style>
