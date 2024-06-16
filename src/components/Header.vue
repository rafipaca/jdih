<template>
  <header
    :class="{
      'bg-ternary text-white': !isScrolled,
      'backdrop-blur-sm bg-white/30 text-primary': isScrolled
    }"
    class="p-4 sticky top-0 z-10 transition-colors duration-300"
  >
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
  name: 'HeaderComponent',
  data() {
    return {
      isScrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.isScrolled = window.scrollY > 0;
    }
  }
};
</script>

<style scoped>
/* Tambahkan style jika diperlukan */
</style>
