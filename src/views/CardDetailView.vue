<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">{{ document.title }}</h1>
    <p>{{ document.description }}</p>
    <p>Tahun: {{ document.year }}</p>
    <p>Download: {{ document.downloads }}</p>
    <p>Views: {{ document.views }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { allDocuments } from '../components/data';

const route = useRoute();
const documentId = parseInt(route.params.id);
const document = ref(allDocuments.value.find(doc => doc.id === documentId));
</script>

<style scoped>
/* Tambahkan gaya sesuai kebutuhan */
</style>
