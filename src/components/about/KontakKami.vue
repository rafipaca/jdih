<template>
  <div class="flex flex-col gap-4 p-6 bg-white rounded-lg custom-shadow">
    <h2 class="text-2xl font-semibold text-center text-teal-500">Kontak Kami</h2>
    <div class="flex flex-row justify-between">
      <div>
        <h2 class="text-lg font-semibold text-teal-500">Pelayanan</h2>
        <p class="text-sm font-semibold">Telepon</p>
        <p class="text-sm mb-4">(0721) 481107</p>
        <p class="text-sm font-semibold">Jam Pelayanan Kantor</p>
        <p class="text-sm">Senin - Jumat 08:00 - 15:30 WIB</p>
      </div>
      <div>
        <h2 class="text-lg font-semibold text-teal-500">Alamat dan Email</h2>
        <p class="text-sm font-semibold">Alamat</p>
        <p class="text-sm mb-4">Jl. WR.Mongonsidi No.69 Teluk Betung</p>
        <p class="text-sm font-semibold">Email</p>
        <p class="text-sm"><a href="mailto:birohukum@lampungprov.go.id">birohukum@lampungprov.go.id</a></p>
      </div>
    </div>
    <div class="w-full h-64">
      <iframe
        class="w-full h-full rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15887.527811355905!2d105.2543164!3d-5.4348949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40da3a7e599511%3A0x18dcf72b55822e21!2sSekretariat%20Daerah%20Provinsi%20Lampung!5e0!3m2!1sen!2sid!4v1718260257401!5m2!1sen!2sid"
        width="100%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KontakKami',
};
</script>

<style scoped>
.custom-shadow {
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
}
</style>
