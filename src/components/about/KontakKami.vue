<template>
  <div class="flex flex-col gap-4 p-6 bg-white rounded-lg custom-shadow">
    <div class="flex flex-col border-white rounded-lg p-4">
      <div class="border-gray-100 border-2 rounded-xl px-4 py-5 sm:px-8 sm:py-5">
        <h2 class="text-2xl font-semibold text-center warna-font mb-5 -mt-9 bg-white px-2 mx-auto w-fit">Kontak Kami</h2>
        <div class="flex flex-col sm:flex-row justify-between">
          <div class="text-center mb-4 sm:mb-0 sm:ml-10 sm:mr-5 md:ml-20">
            <h2 class="text-lg font-semibold warna-font">Pelayanan</h2>
            <p class="text-sm font-semibold">Telepon</p>
            <p class="text-sm mb-4">(0721) 481107</p>
            <p class="text-sm font-semibold">Jam Pelayanan Kantor</p>
            <p class="text-sm">Senin - Jumat 08:00 - 15:30 WIB</p>
          </div>
          <div class="text-center sm:ml-5 sm:mr-10 md:mr-20">
            <h2 class="text-lg font-semibold warna-font">Alamat dan Email</h2>
            <p class="text-sm font-semibold">Alamat</p>
            <p class="text-sm mb-4">Jl. WR.Mongonsidi No.69 Teluk Betung</p>
            <p class="text-sm font-semibold">Email</p>
            <p class="text-sm hover-teal">
              <a href="mailto:birohukum@lampungprov.go.id">birohukum@lampungprov.go.id</a>
            </p>
          </div>
        </div>
        <div class="w-full h-64 mt-5">
          <iframe
            class="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15887.527811355905!2d105.2543164!3d-5.4348949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40da3a7e599511%3A0x18dcf72b55822e21!2sSekretariat%20Daerah%20Provinsi%20Lampung!5e0!3m2!1sen!2sid!4v1718260257401!5m2!1sen!2sid"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KontakKami'
}
</script>

<style scoped>
.custom-shadow {
  box-shadow:
    0 1px 20px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
}
.hover-teal a:hover {
  color: #38b2ac; /* Mengatur warna teks saat hover ke teal-500 */
}
.warna-font {
  color: #2D9596;
}
</style>
