<template>
  <div class="text-4xl text-center mt-10 font-bold">Tentang Kami</div>
  <div class="border-t-4 border-teal-500 w-60 mx-auto mt-2"></div>
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
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../components/about/SidebarAbout.vue'
import VisiMisi from '../components/about/VisiMisi.vue'
import DasarHukum from '../components/about/DasarHukum.vue'

export default {
  name: 'AboutView',
  components: {
    Sidebar,
    VisiMisi,
    DasarHukum
  },
  setup() {
    const currentComponent = ref('VisiMisi')

    const changeContent = (componentName) => {
      currentComponent.value = componentName
    }

    return {
      currentComponent,
      changeContent
    }
  }
}
</script>

<style scoped>
/* @import 'tailwindcss/tailwind.css'; */
</style>
