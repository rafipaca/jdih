<template>
  <div class="text-4xl text-center mt-10 font-bold">Tentang Kami</div>
      <div class="border-t-4 border-teal-500 w-60 mx-auto mt-2"></div>
  <section class="flex flex-col lg:flex-row items-start justify-center py-8 px-4">
    <div class="text-center mb-8">
    </div>
    <div class="flex flex-col lg:flex-row items-start justify-center w-full gap-4">
    <aside class="w-full lg:w-1/4 p-4">
      <Sidebar />
    </aside>
    <main class="w-full lg:w-1/4 p-4">
      <VisiMisi />
    </main>
    <aside class="w-full lg:w-1/4 p-4">
      <DasarHukum />
    </aside>
  </div>
  </section>
</template>

<script>
import Sidebar from '../components/about/SidebarAbout.vue';
import VisiMisi from '../components/about/VisiMisi.vue';
import DasarHukum from '../components/about/DasarHukum.vue';


export default {
  name: 'AboutView',
  components: {
    Sidebar,
    VisiMisi,
    DasarHukum,
  },
};
</script>

<style scoped>
/* @import 'tailwindcss/tailwind.css'; */
</style>
