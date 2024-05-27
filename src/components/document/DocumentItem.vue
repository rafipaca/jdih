<template>
    <div class="card shadow-lg mb-4 p-4 border">
      <div class="flex items-center mb-2">
        <div class="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
          <span class="text-xl font-bold">{{ document.date }}</span>
        </div>
        <div class="ml-4">
          <h3 class="text-lg font-bold">{{ document.title }}</h3>
          <p class="text-sm">{{ document.description }}</p>
          <div class="flex space-x-4 mt-2 text-gray-600">
            <span>{{ document.year }}</span>
            <span>{{ document.downloads }}</span>
            <span>{{ document.views }}</span>
          </div>
        </div>
      </div>
      <button class="btn btn-outline btn-secondary">Unduh</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DocumentItem',
    props: {
      document: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  /* Tambahkan style jika diperlukan */
  </style>
  