<template>
  <div class="py-20 mb-10">
    <h1 class="text-center text-4xl font-bold">Koleksi Kami</h1>
    <div class="w-20 h-1.5 mt-4 bg-ternary mx-auto"></div>
    <div class="mx-auto mt-10 w-9/12 p-5 flex gap-6 justify-center flex-wrap">
      <div
        v-for="(item, index) in koleksiData"
        :key="index"
        :class="['w-72', 'h-36', 'rounded-2xl', 'py-9']"
        :style="{ backgroundColor: item.warna }"
      >
        <h1 class="text-center text-4xl font-bold">{{ item.jumlah }}</h1>
        <h1 class="text-center text-xl font-bold mt-1">{{ item.judul }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { koleksiData } from '@/data/dataKoleksi.js';

export default {
  name: 'KoleksiHome',
  setup() {
    return {
      koleksiData,
    };
  },
};
</script>
