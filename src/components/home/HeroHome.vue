<template>
  <div class="flex h-[900px]">
    <div
      class="sm:w-5/12 bg-ternary mx-auto flex text-center sm:text-start justify-center items-center flex-col w-full"
    >
      <div class="-mt-20">
        <img class="sm:mr-60 mb-2" src="@/assets/hero-siger.png" alt="" />
      </div>
      <div class="">
        <h1 class="text-4xl text-white font-bold">JDIH</h1>
        <h1 class="mt-2 text-4xl text-white font-bold">Pemerintah</h1>
        <h1 class="mt-2 text-4xl text-white font-bold">Provinsi Lampung</h1>
      </div>
      <div class="flex w-96 sm:ml-12 mt-10">
        <div class="hidden sm:block h-44 w-1 bg-[#2D9596]"></div>
        <p class="w-screen sm:w-96 ml-7 text-white font-normal">
          Jaringan Dokumentasi dan Informasi Hukum Nasional (JDIHN) adalah wadah pendayagunaan
          bersama atas dokumen hukum secara tertib terpadu, dan berkesinambungan, serta sarana
          pemberian pelayanan informasi hukum secara lengkap, akurat, mudah, dan cepat.
        </p>
      </div>
      <div>
        <img
          class="mt-10 hover:scale-110 cursor-pointer"
          src="@/assets/down-arrow.png"
          alt=""
          @click="scrollDown"
        />
      </div>
    </div>
    <div
      class="flex-auto h-full bg-black bg-fixed hidden sm:block"
      :style="{ backgroundImage: `url(${homeHero5})` }"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import homeHero5 from '@/assets/home-hero-5.png'

// Function to scroll down
const scrollDown = () => {
  window.scroll({
    top: window.innerHeight, // Adjust this value to scroll to a specific position
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
