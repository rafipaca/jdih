<template>
  <header
    :class="{
      'bg-ternary text-white': !isScrolled,
      'backdrop-blur-sm bg-white/30 text-primary': isScrolled
    }"
    class="sm:h-16 sticky top-0 z-10 transition-colors duration-300"
  >
    <div class="container mx-auto -mb-4 sm:mb-0 flex justify-between items-center">
      <div class="flex items-center space-x-2 m-4 sm:m-0">
        <a href="/">
          <img src="@/assets/siger.png" alt="JDIH Logo" class="h-8" />
        </a>
      </div>
      <nav :class="['space-x-4', { 'hidden lg:flex': !isMobileMenuOpen }]" class="hidden lg:space-x-4">
        <a
          href="/"
          class="hover:text-gray-300 text-base font-medium"
          style="font-size: 16px; margin-right: 35px"
        >Beranda</a>
        <a
          href="/dokumen"
          class="hover:text-gray-300 text-base font-medium"
          style="font-size: 16px; margin-right: 35px"
        >Dokumen</a>
        <a
          href="/feed"
          class="hover:text-gray-300 text-base font-medium"
          style="font-size: 16px; margin-right: 35px"
        >Feed</a>
        <a
          href="/about"
          class="hover:text-gray-300 text-base font-medium"
          style="font-size: 16px"
        >Tentang</a>
      </nav>
      <div class="mr-6 sm:mr-0 lg:hidden">
        <button @click="toggleMobileMenu" class="focus:outline-none">
          <svg
            :class="{ 'hidden': isMobileMenuOpen, 'block': !isMobileMenuOpen }"
            class="w-7 h-7 mt-1.5 sm:mt-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <svg
            :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }"
            class="w-7 h-7 mt-1.5 sm:mt-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div v-if="isMobileMenuOpen" class="lg:hidden">
      <nav class="mt-5 bg-white shadow-lg mobile-menu">
        <a
          href="/"
          class="p-4 block hover:text-gray-700 text-base font-bold text-slate-950"
        >Beranda</a>
        <a
          href="/dokumen"
          class="p-4 block hover:text-gray-700 text-base font-bold text-slate-950"
        >Dokumen</a>
        <a
          href="/feed"
          class="p-4 block hover:text-gray-700 text-base font-bold text-slate-950"
        >Feed</a>
        <a
          href="/about"
          class="p-4 block hover:text-gray-700 text-base font-bold text-slate-950"
        >Tentang</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
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
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<style scoped>
.mobile-menu {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
</style>
