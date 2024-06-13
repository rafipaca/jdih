<template>
  <div>
    <div class="text-4xl text-center mt-10 font-bold">Tentang Kami</div>
    <div class="border-t-2 border-teal-500 w-[10%] mx-auto mb-2 mt-2"></div>
    
    <!-- Breadcrumb -->
    <div class="text-sm italic font-light flex justify-center mb-5 text-[#2D9596]">
      <ul class="flex">
        <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
          <a v-if="crumb.url" :href="crumb.url">{{ crumb.text }}</a>
          <span v-else>{{ crumb.text }}</span>
          <span v-if="index < breadcrumbs.length - 1" class="mx-2">/</span>
        </li>
      </ul>
    </div>

    <section class="flex flex-col lg:flex-row items-start justify-center py-8 px-4">
      <div class="text-center mb-8"></div>
      <div class="flex flex-col lg:flex-row items-start justify-center w-full gap-4">
        <aside class="w-full lg:w-1/4 p-4">
          <Sidebar @changeContent="changeContent" />
        </aside>
        <main class="w-full lg:w-2/4 p-4">
          <component :is="currentComponent" />
        </main>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import Sidebar from '../components/about/SidebarAbout.vue';
import VisiMisi from '../components/about/VisiMisi.vue';
import DasarHukum from '../components/about/DasarHukum.vue';
import LatarBelakang from '../components/about/LatarBelakang.vue';
import StrukturOrganisasi from '../components/about/StrukturOrganisasi.vue';
import SopPelayanan from '../components/about/SopPelayanan.vue';
import TautanLain from '../components/about/TautanLain.vue';
import KontakKami from '../components/about/KontakKami.vue';

export default {
  name: 'AboutView',
  components: {
    Sidebar,
    VisiMisi,
    DasarHukum,
    LatarBelakang,
    StrukturOrganisasi,
    SopPelayanan,
    TautanLain,
    KontakKami,
  },
  setup() {
    const currentComponent = ref('VisiMisi');
    const breadcrumbs = ref([
      { text: 'Tentang', url: '/tentang' },
      { text: 'Visi Misi' }
    ]);

    const changeContent = (componentName) => {
      currentComponent.value = componentName;
      updateBreadcrumbs(componentName);
    };

    const updateBreadcrumbs = (componentName) => {
      const breadcrumbMap = {
        VisiMisi: 'Visi Misi',
        DasarHukum: 'Dasar Hukum',
        LatarBelakang: 'Latar Belakang',
        StrukturOrganisasi: 'Struktur Organisasi',
        SopPelayanan: 'SOP Pelayanan',
        TautanLain: 'Tautan Lain',
        KontakKami: 'Kontak'
      };
      breadcrumbs.value = [
        { text: 'Tentang', url: '/tentang' },
        { text: breadcrumbMap[componentName] }
      ];
    };

    return {
      currentComponent,
      changeContent,
      breadcrumbs,
    };
  },
};
</script>

<style scoped>
.custom-shadow {
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
}
</style>
