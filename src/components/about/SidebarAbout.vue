<template>
  <div class="flex flex-col gap-4 p-4 bg-white rounded-lg custom-shadow">
    <ul class="list-none p-0 m-0">
      <li
        @click="selectComponent('VisiMisi')"
        class="font-semibold text-center cursor-pointer mb-3 mt-3 hover:text-teal-500"
      >
        Visi & Misi
      </li>
      <div class="border flex-col items-center justify-center border-teal-500 w-50"></div>
      <li
        @click="selectComponent('DasarHukum')"
        class="font-semibold text-center cursor-pointer mb-3 mt-3 hover:text-teal-500"
      >
        Dasar Hukum
      </li>
      <div class="border flex-col items-center justify-center border-teal-500 w-50"></div>
      <li
        @click="selectComponent('LatarBelakang')"
        class="font-semibold text-center cursor-pointer mb-3 mt-3 hover:text-teal-500"
      >
        Latar Belakang
      </li>
      <div class="border flex-col items-center justify-center border-teal-500 w-50"></div>
      <li
        @click="selectComponent('StrukturOrganisasi')"
        class="font-semibold text-center cursor-pointer mb-3 mt-3 hover:text-teal-500"
      >
        Struktur Organisasi
      </li>
      <div class="border flex-col items-center justify-center border-teal-500 w-50"></div>
      <li @click="selectComponent('SopPelayanan')" class="font-semibold text-center cursor-pointer mb-3 mt-3 hover:text-teal-500">SOP Pelayanan</li>
      <div class="border flex-col items-center justify-center border-teal-500 w-50"></div>
      <li
        @click="selectComponent('TautanLain')"
        class="font-semibold text-center cursor-pointer mb-3 mt-3 hover:text-teal-500"
      >
        Tautan Lain
      </li>
      <div class="border flex-col items-center justify-center border-teal-500 w-50"></div>
      <li @click="selectComponent('KontakKami')" class="font-semibold text-center cursor-pointer mb-3 mt-3 hover:text-teal-500">Kontak</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarAbout',
  methods: {
    selectComponent(componentName) {
      this.$emit('changeContent', componentName)
    }
  }
}
</script>

<style scoped>

  .custom-shadow {
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  }

</style>
