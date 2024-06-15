<template>
  <div class="overflow-x-auto mb-4">
    <table class="table-auto w-full border border-white">
      <tbody>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#D4D4D4]">
            Abstrak
          </td>
          <td class="w-1/2 border-b-2 border-white p-2 text-center bg-[#F6F6F6]">
            {{ document.abstrak }}
          </td>
        </tr>
        <tr>
          <td class="w-1/2 border-r-2 border-b-2 border-white p-2 text-center bg-[#E5E5E5]">
            Jenis Peraturan
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
          <td class="w-1/2 border-b-2- border-white p-2 text-center">{{ document.teu }}</td>
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
          <td class="w-1/2 border-b-2 border-white p-2 text-center">{{ document.status }}</td>
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
  }
}
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>
