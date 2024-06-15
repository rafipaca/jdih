<template>
  <div class="flex flex-col gap-4 p-6 bg-white rounded-lg custom-shadow">
    <!-- Struktur Organisasi -->
    <div class="flex flex-col my-4">
      <h2 class="text-2xl font-semibold text-center text-teal-500">Struktur Organisasi</h2>
      <div class="w-full max-w-4xl mx-auto">
        <img
          src="@/assets/struktur-organisasi.png"
          alt="Struktur Organisasi"
          class="w-full rounded-lg border border-gray-200"
        />
      </div>
    </div>

    <!-- Tugas Pokok dan Fungsi -->
    <div class="flex flex-col my-4">
      <h2 class="text-2xl font-semibold text-center text-teal-500">Tugas Pokok dan Fungsi</h2>
      <table class="min-w-full bg-white rounded-lg shadow-md mt-4">
        <thead>
          <tr>
            <th class="py-2 px-4 font-semibold text-center">BIRO HUKUM</th>
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

img {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 1rem;
}

th,
td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #e2e8f0;
}

th {
  font-weight: bold;
}

.list-decimal {
  list-style-type: decimal;
}

.list-inside {
  list-style-position: inside;
}
</style>
