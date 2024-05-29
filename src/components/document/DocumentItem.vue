<template>
  <div class="card card-side bg-base-100 shadow-xl mb-4 h-52">
    <!-- Left section for the date and month (1/6 of the card) -->
    <div class="flex flex-col items-center justify-center text-center text-black w-1/6 rounded-l-lg">
        <span class="text-2xl font-bold">{{ document.date }}</span>
        <div class="rounded-lg bg-green-500 p-1">
        <span class="text-sm text-white">{{ document.month }}</span>
      </div>
    </div>
    <!-- Right section for the content (5/6 of the card) -->
    <div class="card-body w-5/6">
      <h2 class="card-title">{{ document.title }}</h2>
      <p class="text-xs">{{ document.description }}</p>
      <div class="absolute bottom-4 flex items-center space-x-4 text-gray-600 mb-2">
        <div class="flex items-center">
          <span class="material-icons">event</span>
          <span class="ml-1">{{ document.year }}</span>
        </div>
        <div class="flex items-center">
          <span class="material-icons">file_download</span>
          <span class="ml-1">{{ document.downloads }}</span>
        </div>
        <div class="flex items-center">
          <span class="material-icons">visibility</span>
          <span class="ml-1">{{ document.views }}</span>
        </div>
      </div>
      <div class="card-actions justify-end">
        <button class="btn text-slate-50 bg-[#ffc067] shadow-lg w-auto">Unduh</button>
      </div>
    </div>
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
.material-icons {
  font-size: 16px;
}
.btn-outline {
  @apply border border-gray-300 text-gray-600;
}
.btn-secondary {
  @apply bg-transparent hover:bg-gray-100;
}
</style>
