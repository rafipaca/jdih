<template>
  <header class="bg-ternary text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <a href="/">
          <img src="@/assets/siger.png" alt="JDIH Logo" class="h-8" />
        </a>
      </div>
      <nav class="space-x-4">
        <a
          href="/"
          class="hover:text-gray-300 text-base font-medium"
          style="font-size: 16px; margin-right: 35px"
          >Beranda</a
        >
        <a
          href="/dokumen"
          class="hover:text-gray-300 text-base font-medium"
          style="font-size: 16px; margin-right: 35px"
          >Dokumen</a
        >
        <a
          href="/feed"
          class="hover:text-gray-300 text-base font-medium"
          style="font-size: 16px; margin-right: 35px"
          >Feed</a
        >
        <a
          href="/about"
          class="hover:text-gray-300 text-base font-medium"
          style="font-size: 16px; margin-right: px"
          >Tentang</a
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
/* Tambahkan style jika diperlukan */
</style>
