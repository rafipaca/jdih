<template>
  <div class="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
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
      <li
        @click="selectComponent('SOPPelayanan')"
        class="font-semibold text-center cursor-pointer mb-3 mt-3 hover:text-teal-500"
      >
        SOP Pelayanan
      </li>
      <div class="border flex-col items-center justify-center border-teal-500 w-50"></div>
      <li
        @click="selectComponent('TautanLain')"
        class="font-semibold text-center cursor-pointer mb-3 mt-3 hover:text-teal-500"
      >
        Tautan Lain
      </li>
      <div class="border flex-col items-center justify-center border-teal-500 w-50"></div>
      <li
        @click="selectComponent('Kontak')"
        class="font-semibold text-center cursor-pointer mb-3 mt-3 hover:text-teal-500"
      >
        Kontak
      </li>
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

<style scoped></style>
