<template>
  <DecorContainer>

    <div class="w-[100vw]">
      <!-- Breadcrumb -->
      <div class="text-sm italic font-light flex justify-center mt-5 text-[#2D9596]">
        <ul class="flex">
          <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
            <a v-if="crumb.url" :href="crumb.url">{{ crumb.text }}</a>
            <span v-else>{{ crumb.text }}</span>
            <span v-if="index < breadcrumbs.length - 1" class="mx-2">/</span>
          </li>
        </ul>
      </div>
      <div class="text-4xl text-center mt-2 font-bold">Tentang Kami</div>
      <div class="border-t-4 border-[#006859] w-[6%] mx-auto mb-2 mt-6"></div>
      <section class="flex flex-col lg:flex-row items-start justify-center py-2 px-4">
        <div class="text-center mb-8"></div>
        <div class="flex flex-col lg:flex-row items-start justify-center w-full">
          <aside class="w-full lg:w-[18%] p-2">
            <Sidebar @changeContent="changeContent" />
          </aside>
          <main class="w-full lg:w-[75%] p-2">
            <component :is="currentComponent" />
          </main>
        </div>
      </section>
    </div>
  </DecorContainer>
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
import DecorContainer from '../components/DecorContainer.vue';

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
    DecorContainer,
  },
  setup() {
    const currentComponent = ref('VisiMisi');
    const breadcrumbs = ref([
      { text: 'Tentang', url: '/about' },
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
        { text: 'Tentang', url: '/about' },
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
