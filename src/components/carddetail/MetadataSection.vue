<template>
  <div class="overflow-x-auto mb-4">
    <table class="table-auto w-full border border-white">
      <tbody>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#D4D4D4]">
            <button>Abstrak</button>
          </td>
          <td class="w-1/2 border-b-2 border-white p-2 text-center bg-[#F6F6F6]">
            <a :href="document.abstrak" target="_blank" class="button-style text-white">
              Abstrak
            </a>
          </td>
        </tr>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#E5E5E5]">
            File ver Bahasa Asing
          </td>
          <td class="w-1/2 border-b-2 border-white p-2 text-center">
            <span v-if="document.fileverasing === ''" class="text-red-600 font-bold">File belum tersedia</span>
            <a v-else :href="document.fileverasing" target="_blank" class="button-style">Download</a>
          </td>
        </tr>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#D4D4D4]">
            Jenis Peraturan
          </td>
          <td class="w-1/2 border-b-2 border-white p-2 text-center bg-[#F6F6F6]">
            {{ getCategoryLabel(document.kategori) }}
          </td>
        </tr>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#E5E5E5]">
            Nomor
          </td>
          <td class="w-1/2 border-b-2 border-white p-2 text-center">{{ document.singkatan }}</td>
        </tr>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#D4D4D4]">
            Judul
          </td>
          <td class="w-1/2 border-b-2 border-white p-2 text-center bg-[#F6F6F6]">
            {{ document.title }}
          </td>
        </tr>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#E5E5E5]">
            Tempat Penetapan
          </td>
          <td class="w-1/2 border-b-2 border-white p-2 text-center">{{ document.teu }}</td>
        </tr>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#D4D4D4]">
            Tgl Penetapan
          </td>
          <td class="w-1/2 border-b-2 border-white p-2 text-center bg-[#F6F6F6]">
            {{ document.date }} {{ document.month }} {{ document.year }}
          </td>
        </tr>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#E5E5E5]">
            Tgl Pengundangan
          </td>
          <td class="w-1/2 border-b-2 border-white p-2 text-center">{{ document.tglundang }}</td>
        </tr>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#D4D4D4]">
            Subjek
          </td>
          <td class="w-1/2 border-b-2 border-white p-2 text-center bg-[#F6F6F6]">
            {{ document.subjek }}
          </td>
        </tr>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#E5E5E5]">
            Status Produk Hukum
          </td>
          <td class="w-1/2 border-b-2 border-white p-2 text-center text-green-600 font-bold">{{ document.status }}</td>
        </tr>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#D4D4D4]">
            Sumber
          </td>
          <td class="w-1/2 border-b-2 border-white p-2 text-center bg-[#F6F6F6]">
            {{ document.sumber }}
          </td>
        </tr>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#E5E5E5]">
            Tempat Terbit
          </td>
          <td class="w-1/2 border-b-2 border-white p-2 text-center">{{ document.tptterbit }}</td>
        </tr>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#D4D4D4]">
            Bidang Hukum
          </td>
          <td class="w-1/2 border-b-2 border-white p-2 text-center bg-[#F6F6F6]">
            {{ document.bidang }}
          </td>
        </tr>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#E5E5E5]">
            Bahasa
          </td>
          <td class="w-1/2 border-b-2 border-white p-2 text-center">{{ document.bahasa }}</td>
        </tr>
        <tr>
          <td class="w-1/2 border-r-2 border-white p-2 text-center bg-[#D4D4D4]">Lokasi</td>
          <td class="w-1/2 border-white p-2 text-center bg-[#F6F6F6]">{{ document.lokasi }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MetadataSection',
  props: {
    document: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      categoryOptions: [
        { value: 1, label: 'Peraturan Daerah' },
        { value: 2, label: 'Peraturan Gubernur' },
        { value: 3, label: 'Keputusan Gubernur' },
        { value: 4, label: 'Instruksi Gubernur' },
        { value: 5, label: 'Surat Keputusan Gubernur' },
        { value: 6, label: 'Perjanjian Kerjasama' },
        { value: 7, label: 'Undang-Undang RI' },
        { value: 8, label: 'Peraturan Pemerintah RI' },
        { value: 9, label: 'Peraturan Kemendagri' },
        { value: 10, label: 'SK Sekda Provinsi Lampung' },
        { value: 11, label: 'PERPU' },
        { value: 12, label: 'Peraturan Presiden' },
        { value: 13, label: 'Surat Edaran' },
        { value: 14, label: 'Instruksi Presiden' },
        { value: 15, label: 'Keputusan Presiden' },
        { value: 16, label: 'Keputusan DPRD Provinsi' },
        { value: 17, label: 'Dokumen Langka' }
      ]
    }
  },
  methods: {
    getCategoryLabel(value) {
      const category = this.categoryOptions.find(option => option.value === value);
      return category ? category.label : 'Unknown';
    }
  }
}
</script>

<style scoped>
.button-style {
  display: inline-block;
  padding: 8px 16px;
  background-color: #006859;
  color: white;
  text-align: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
.button-style:hover {
  background-color: darkgray;
}
.text-red-600 {
  color: #e3342f;
}
.font-bold {
  font-weight: bold;
}
</style>
