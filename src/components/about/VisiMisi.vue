<template>
  <div class="flex flex-col gap-4 p-6 bg-white rounded-lg custom-shadow">
    <!-- Visi Section -->
    <div class="flex flex-col my-4 border rounded-lg p-4">
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-col -top-4 bg-white px-2">
          <h2 class="text-2xl font-semibold text-center text-teal-500 mt-2">Visi</h2>
        </div>
        <p class="italic text-center mt-2 mb-2">“Lampung Maju dan Sejahtera Tahun 2019”</p>
      </div>
    </div>

    <!-- Misi Section -->
    <div class="flex flex-col my-4 border rounded-lg p-4">
      <div class="flex justify-center items-center flex-col">
        <div class="flex flex-col -top-4 bg-white px-2">
          <h2 class="text-2xl font-semibold text-center text-teal-500">Misi</h2>
        </div>
        <ol class="list-decimal pl-5 mt-4 space-y-2">
          <li>Meningkatkan Pembangunan Ekonomi dan Memperkuat Kemandirian Daerah</li>
          <li>Meningkatkan Infrastruktur Untuk Pengembangan Ekonomi dan Pelayanan Sosial</li>
          <li>
            Meningkatkan Kualitas Pendidikan, Kesehatan, Budaya Masyarakat, dan Toleransi Kehidupan
            Beragama
            <ul class="list-disc pl-5 mt-2 space-y-2">
              <li>Meningkatkan Kualitas Pendidikan dan Kesehatan</li>
              <li>Transformasi Budaya Lampung dan Pemantapan Toleransi Kehidupan Beragama</li>
            </ul>
          </li>
          <li>
            Meningkatkan Pelestarian Sumber Daya Alam dan Kualitas Lingkungan Hidup Yang
            Berkelanjutan
          </li>
          <li>
            Menegakkan Supremasi Hukum, Membangun Peradaban Demokrasi dan Meningkatkan Tata kelola
            Pemerintahan Yang Baik Serta Meningkatkan Kompetensi dan Profesionalisme ASN
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VisiMisi'
}
</script>

<style scoped>
.custom-shadow {
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
}
</style>
