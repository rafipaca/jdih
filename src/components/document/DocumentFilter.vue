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
<style>
  .placeholder-center {
    text-align: center;
  }
</style>

<template>
  <div class="mb-4 w-full">
    <h2 class="text-2xl font-bold">Cari dokumen hukum!</h2>
    <div class="flex space-x-2 mt-4 w-full">
      <!-- Bagian pertama untuk input "Judul" -->
      <div class="relative flex items-center w-1/2">
        <img src="@/assets/book.png" alt="Icon" class="absolute left-0 w-5 h-5 ml-4" />
        <input type="text" placeholder="Judul" class="input shadow-lg input-bordered pl-12 w-full placeholder-center" style="height: 55px;" />
      </div>
      <!-- Bagian kedua untuk input "Nomor", "Tahun", dan button -->
      <div class="flex space-x-2 w-1/2">
        <!-- Input "Nomor" -->
        <div class="relative flex items-center w-1/3">
          <img src="@/assets/neraca.png" alt="Icon" class="absolute left-0 w-5 h-5 ml-4" />
          <input type="text" placeholder="Nomor" class="input shadow-lg input-bordered pl-12 w-full placeholder-center" style="height: 55px;" />
        </div>
        <!-- Input "Tahun" -->
        <div class="relative flex items-center w-1/3">
          <img src="@/assets/calendar.png" alt="Icon" class="absolute left-0 w-5 h-5 ml-4" />
          <input type="text" placeholder="Tahun" class="input shadow-lg input-bordered pl-12 w-full placeholder-center" style="height: 55px;" />
        </div>
        <!-- Button -->
        <div class="flex justify-items-end justify-end w-1/3">
          <button class="btn w-full text-slate-50 bg-[#ffc067] shadow-lg" style="height: 55px;">Temukan!</button>
        </div>
      </div>
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
