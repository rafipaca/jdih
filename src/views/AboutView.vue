<template>
  <section class="flex flex-col lg:flex-row items-start justify-center py-8 px-4">
    <aside class="w-full lg:w-1/4 p-4">
      <Sidebar />
    </aside>
    <main class="flex-1 p-4">
      <VisiMisi />
    </main>
    <aside class="w-full lg:w-1/4 p-4">
      <DasarHukum />
    </aside>
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
