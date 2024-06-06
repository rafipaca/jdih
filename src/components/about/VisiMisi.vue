<template>
  <div class="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
    <!-- Visi Section -->
    <div class="relative my-4">
      <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1130 87" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="1128" height="85" rx="9" fill="white" stroke="#E5E5E5" stroke-width="2"/>
      </svg>
      <div class="relative p-4 flex justify-center items-center flex-col">
        <div class="absolute -top-4 bg-white px-2">
          <h2 class="text-2xl font-semibold text-center text-teal-500 mt-2">Visi</h2>
        </div>
        <p class="italic text-center mt-2 mb-2">“Lampung Maju dan Sejahtera Tahun 2019”</p>
      </div>
    </div>

    <!-- Misi Section -->
    <div class="relative my-4">
      <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1130 87" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="1128" height="85" rx="9" fill="white" stroke="#E5E5E5" stroke-width="2"/>
      </svg>
      <div class="relative p-4 flex justify-center items-center flex-col">
        <div class="absolute -top-4 bg-white px-2">
          <h2 class="text-2xl font-semibold text-center text-teal-500">Misi</h2>
        </div>
        <ol class="list-decimal pl-5 mt-4">
          <li>Meningkatkan Pembangunan Ekonomi dan Memperkuat Kemandirian Daerah</li>
          <li>Meningkatkan Infrastruktur Untuk Pengembangan Ekonomi dan Pelayanan Sosial</li>
          <li>Meningkatkan Kualitas Pendidikan, Kesehatan, Budaya Masyarakat, dan Toleransi Kehidupan Beragama</li>
          <li>Meningkatkan Pelestarian Sumber Daya Alam dan Kualitas Lingkungan Hidup Yang Berkelanjutan</li>
          <li>Menegakkan Supremasi Hukum, Membangun Peradaban Demokrasi dan Meningkatkan Tata kelola Pemerintahan Yang Baik Serta Meningkatkan Kompetensi dan Profesionalisme ASN</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VisiMisi',
};
</script>

<style scoped>
.relative {
  position: relative;
}

.relative svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.relative .p-4 {
  position: relative;
  z-index: 1;
}

.absolute .bg-white {
  background-color: white;
}
</style>
