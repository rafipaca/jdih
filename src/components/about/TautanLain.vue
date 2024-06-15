<template>
  <div>
    <!-- Div pertama -->
    <div class="flex flex-col gap-4 p-4 bg-white rounded-lg custom-shadow mb-8">
    <h2 class="text-2xl font-semibold text-center text-teal-500">Tautan Lain</h2>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div class="flex items-center p-4 bg-gray-50 rounded-lg shadow-md">
          <img src="@/assets/logojdih.png" alt="Portal JDIHN" class="w-10 h-10 mr-4" />
          <a href="#" class="text-lg font-medium text-gray-700">Portal JDIHN</a>
        </div>
        <div class="flex items-center p-4 bg-gray-50 rounded-lg shadow-md">
          <img src="@/assets/logoppid.png" alt="Portal PPID" class="w-10 h-10 mr-4" />
          <a href="#" class="text-lg font-medium text-gray-700">Portal PPID</a>
        </div>
        <div class="flex items-center p-4 bg-gray-50 rounded-lg shadow-md">
          <img src="@/assets/logojdih.png" alt="Perpustakaan JDIH" class="w-10 h-10 mr-4" />
          <a href="#" class="text-lg font-medium text-gray-700">Perpustakaan JDIH</a>
        </div>
        <div class="flex items-center p-4 bg-gray-50 rounded-lg shadow-md">
          <img src="@/assets/logoplaystore.png" alt="Aplikasi Mobile" class="w-10 h-10 mr-4" />
          <a href="#" class="text-lg font-medium text-gray-700">Aplikasi Mobile</a>
        </div>
    </div>

    </div>

    <!-- Div kedua -->
    <div class="flex flex-col gap-4 p-4 bg-white rounded-lg custom-shadow">
      <h2 class="text-xl font-semibold text-center text-teal-500">
        Berikut ini merupakan Anggota JDIH Provinsi Lampung serta alamat Website JDIH masing-masing
      </h2>
      <div class="overflow-y-auto max-h-64">
        <table class="min-w-full mt-4 table-auto">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-4 py-2">Nomor</th>
              <th class="px-4 py-2">Instansi</th>
              <th class="px-4 py-2">Alamat Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">1</td>
              <td class="border px-4 py-2">Kota Bandarlampung</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.bandarlampungkota.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.bandarlampungkota.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">2</td>
              <td class="border px-4 py-2">Kota Metro</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.metrokota.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.metrokota.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">3</td>
              <td class="border px-4 py-2">Kabupaten Lampung Selatan</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.lampungselatankab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.lampungselatankab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">4</td>
              <td class="border px-4 py-2">Kabupaten Lampung Tengah</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.lampungtengahkab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.lampungtengahkab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">5</td>
              <td class="border px-4 py-2">Kabupaten Lampung Utara</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.lampungutarakab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.lampungutarakab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">6</td>
              <td class="border px-4 py-2">Kabupaten Lampung Barat</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.lampungbaratkab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.lampungbaratkab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">7</td>
              <td class="border px-4 py-2">Kabupaten Lampung Timur</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.lampungtimurkab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.lampungtimurkab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">8</td>
              <td class="border px-4 py-2">Kabupaten Tulang Bawang</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.tulangbawangkab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.tulangbawangkab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">9</td>
              <td class="border px-4 py-2">Kabupaten Tulang Bawang Barat</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.tulangbawangbaratkab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.tulangbawangbaratkab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">10</td>
              <td class="border px-4 py-2">Kabupaten Tanggamus</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.tanggamuskab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.tanggamuskab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">11</td>
              <td class="border px-4 py-2">Kabupaten Waykanan</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.waykanankab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.waykanankab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">12</td>
              <td class="border px-4 py-2">Kabupaten Pesisir Barat</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.pesisirbaratkab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.pesisirbaratkab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">13</td>
              <td class="border px-4 py-2">Kabupaten Mesuji</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.mesujikab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.mesujikab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">14</td>
              <td class="border px-4 py-2">Kabupaten Pringsewu</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.pringsewukab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.pringsewukab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">15</td>
              <td class="border px-4 py-2">Kabupaten Pesawaran</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.pesawarankab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.pesawarankab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">16</td>
              <td class="border px-4 py-2">DPRD Provinsi Lampung</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.setwan-dprd.lampungprov.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.setwan-dprd.lampungprov.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">17</td>
              <td class="border px-4 py-2">DPRD Kota Bandarlampung</td>
              <td class="border px-4 py-2">
                <a
                  href="https://jdih.bandarlampungkota.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.bandarlampungkota.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">18</td>
              <td class="border px-4 py-2">DPRD Kota Metro</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih-drpd.metrokota.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih-drpd.metrokota.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">19</td>
              <td class="border px-4 py-2">DPRD Kabupaten Lampung Selatan</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih-drpd.lampungselatankab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih-drpd.lampungselatankab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">20</td>
              <td class="border px-4 py-2">DPRD Kabupaten Lampung Tengah</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih-drpd.lampungtengahkab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih-drpd.lampungtengahkab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">21</td>
              <td class="border px-4 py-2">DPRD Kabupaten Lampung Utara</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih-drpd.lampungutarakab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih-drpd.lampungutarakab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">22</td>
              <td class="border px-4 py-2">DPRD Kabupaten Lampung Barat</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih-drpd.lampungbaratkab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih-drpd.lampungbaratkab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">23</td>
              <td class="border px-4 py-2">DPRD Kabupaten Lampung Timur</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih-drpd.lampungtimurkab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih-drpd.lampungtimurkab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">24</td>
              <td class="border px-4 py-2">DPRD Kabupaten Tulang Bawang</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih-drpd.tulangbawangkab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih-drpd.tulangbawangkab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">25</td>
              <td class="border px-4 py-2">DPRD Kabupaten Tulang Bawang Barat</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih-drpd.tulangbawangbaratkab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih-drpd.tulangbawangbaratkab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">26</td>
              <td class="border px-4 py-2">DPRD Kabupaten Tanggamus</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih-drpd.tanggamuskab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih-drpd.tanggamuskab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">27</td>
              <td class="border px-4 py-2">DPRD Kabupaten Waykanan</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih-drpd.waykanankab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih-drpd.waykanankab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">28</td>
              <td class="border px-4 py-2">DPRD Kabupaten Pesisir Barat</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih-drpd.pesisirbaratkab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih-drpd.pesisirbaratkab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">29</td>
              <td class="border px-4 py-2">DPRD Kabupaten Mesuji</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih-drpd.mesujikab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih-drpd.mesujikab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">30</td>
              <td class="border px-4 py-2">DPRD Kabupaten Pringsewu</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih-drpd.pringsewukab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih-drpd.pringsewukab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">31</td>
              <td class="border px-4 py-2">DPRD Kabupaten Pesawaran</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih-drpd.pesawarankab.go.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih-drpd.pesawarankab.go.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">32</td>
              <td class="border px-4 py-2">Sekolah Tinggi Ilmu Hukum Muhammadiyah Kalianda</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.umkalianda.ac.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.umkalianda.ac.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">33</td>
              <td class="border px-4 py-2">Universitas Muhammadiyah Kotabumi</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.umko.ac.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.umko.ac.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">34</td>
              <td class="border px-4 py-2">Universitas Bandar Lampung</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.ubl.ac.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.ubl.ac.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">35</td>
              <td class="border px-4 py-2">Universitas Lampung</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.unila.ac.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.unila.ac.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">36</td>
              <td class="border px-4 py-2">Universitas Malahayati</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.malayahati.ac.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.malayahati.ac.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">37</td>
              <td class="border px-4 py-2">Universitas Muhammadiyah Lampung</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.uml.ac.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.uml.ac.id</a
                >
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">38</td>
              <td class="border px-4 py-2">Universitas Muhammadiyah Metro</td>
              <td class="border px-4 py-2">
                <a
                  href="http://jdih.ummetro.ac.id"
                  class="text-teal-500 hover:underline"
                  target="_blank"
                  >jdih.ummetro.ac.id</a
                >
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
  name: 'TautanLain'
}
</script>

<style scoped>
.custom-shadow {
  box-shadow:
    0 1px 20px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
}
</style>
