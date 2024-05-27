<!-- <template>
  <div class="mb-4">
    <h2 class="text-2xl font-bold">Cari dokumen hukum!</h2>
    <div class="flex space-x-4 mt-4">
      <input type="text" placeholder="Judul" class="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Nomor" class="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Tahun" class="input input-bordered w-full max-w-xs" />
      <button class="btn btn-primary">Temukan!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentFilter'
}
</script>

<style scoped>
/* Tambahkan style jika diperlukan */
</style> -->

<!-- Ini adalah batas -->

<template>
  <div class="mb-4">
    <h2 class="text-2xl font-bold">Cari dokumen hukum!</h2>
    <div class="flex space-x-4 mt-4">
      <div class="relative flex items-center">
        <!-- Tambahkan class relative dan flex di sini -->
        <img src="@/assets/book.png" alt="Icon" class="absolute left-0 w-5 h-5" />
        <input type="text" placeholder="Judul" class="input input-bordered pl-8 w-full max-w-xs" />
      </div>
      <div class="relative flex items-center">
        <!-- Tambahkan class relative dan flex di sini -->
        <img src="@/assets/neraca.png" alt="Icon" class="absolute left-0 w-5 h-5" />
        <input type="text" placeholder="Nomor" class="input input-bordered pl-8 w-full max-w-xs" />
      </div>
      <div class="relative flex items-center">
        <!-- Tambahkan class relative dan flex di sini -->
        <img src="@/assets/calendar.png" alt="Icon" class="absolute left-0 w-5 h-5" />
        <input type="text" placeholder="Tahun" class="input input-bordered pl-8 w-full max-w-xs" />
      </div>
      <button class="btn btn-primary">Temukan!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentFilter'
}
</script>

<style scoped>
/* Tambahkan style jika diperlukan */
</style>
