<template>
  <div class="px-6 py-10 bg-white rounded-xl custom-shadow ">
    <div class="flex flex-col gap-4 p-6 bg-white rounded-lg border-gray-100 border-2">
      <div class="flex flex-col">
        <h2 class="text-2xl font-semibold text-center text-teal-500 mb-5 -mt-10 bg-white px-2 mx-auto w-fit">Struktur Organisasi</h2>
        <div class="w-full max-w-4xl mx-auto">
          <img
            src="@/assets/struktur-organisasi.png"
            alt="Struktur Organisasi"
          />
        </div>
      </div>
    </div>

    <div class="mt-16 border-gray-100 border-0 rounded-xl">
      <!-- Tugas Pokok dan Fungsi -->
      <div class="flex flex-col my-4">
        <h2 class="text-2xl font-semibold text-center text-teal-500 mb-5 -mt-8 bg-white px-2 mx-auto w-fit">Tugas Pokok dan Fungsi</h2>
        <table class="min-w-full bg-white rounded-lg">
          <thead>
            <tr>
              <th class="py-2 px-4 font-semibold text-center bg-[#BAB9B9]">BIRO HUKUM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4 border-b">
                Biro Hukum mempunyai tugas menyiapkan bahan perumusan penyusunan produk hukum daerah
                provinsi; Pembinaan dan pengawasan produk hukum kabupaten/kota, bantuan hukum,
                dokumentasi dan informasi hukum, penyuluhan hukum dan pemajuan Hak Azazi Manusia (HAM)
                di daerah serta Tata usaha Biro.
                <br />
                Untuk menyelenggarakan tugas sebagaimana dimaksud dalam ayat (1), Biro Hukum mempunyai
                fungsi:
                <ol class="list-decimal list-inside ml-4">
                  <li>pelaksanaan penyusunan perumusan produk hukum provinsi;</li>
                  <li>pelaksanaan penyusunan perumusan bahan kebijakan daerah;</li>
                  <li>pelaksanaan pembinaan dan pengawasan mediasi dan bantuan hukum;</li>
                  <li>pelaksanaan penyiapan bahan pertimbangan mediasi dan bantuan hukum;</li>
                  <li>pelaksanaan pengelolaan dokumentasi dan informasi hukum;</li>
                  <li>
                    pelaksanaan penyuluhan hukum dan pemajuan Hak Asasi Manusia (HAM) di daerah;
                  </li>
                  <li>pelaksanaan penatausahaan Biro;</li>
                  <li>pelaksanaan tugas lainnya yang diberikan oleh atasan</li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StrukturOrganisasi'
}
</script>

<style scoped>
.custom-shadow {
  box-shadow:
    0 1px 20px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 1rem;
}

td {
  text-align: justify;
  padding: 18px 28px;
  border: 1px solid #e2e8f0;
}

.list-decimal {
  list-style-type: decimal;
}

.list-inside {
  list-style-position: inside;
}
</style>
