<template>
  <section class="absolute top-[1903px] left-[0px] w-full flex flex-row items-start justify-start max-w-full z-[1] text-left text-13xl text-gray1-200 font-montserrat">
    <div class="flex-1 flex flex-col items-start justify-start pt-[106px] px-0 pb-0 box-border relative gap-[69px] max-w-full mq750:gap-[17px] mq1050:gap-[34px]">
      <div class="w-full h-[467px] absolute !m-[0] top-[0px] right-[0px] left-[0px] bg-whitesmoke"></div>
      <div class="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div class="w-[1598px] flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
          <!-- Media Sosial -->
          <div class="w-[633px] flex flex-col items-start justify-start gap-[21px] max-w-full">
            <h1 class="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-lgi mq1050:text-7xl">Media Sosial</h1>
            <div class="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border max-w-full text-base text-gray1-100">
              <p class="m-0 flex-1 relative inline-block max-w-full z-[1]">
                Silakan kunjungi media sosial kami untuk mengetahui kegiatan JDIH terkini
              </p>
            </div>
            <div class="flex flex-row items-start justify-start gap-[26px]">
              <img class="h-[38px] w-[38px] relative min-h-[38px] z-[1]" loading="lazy" alt="" />
              <img class="h-[38px] w-[38px] relative min-h-[38px] z-[1]" loading="lazy" alt="" />
              <img class="h-[38px] w-[38px] relative min-h-[38px] z-[1]" loading="lazy" alt="" />
              <img class="self-stretch w-[53px] relative max-h-full min-h-[38px] z-[1]" loading="lazy" alt="" />
            </div>
          </div>
          <!-- Hubungi Kami -->
          <div class="w-[472px] flex flex-col items-start justify-start gap-[21px] max-w-full text-base">
            <h1 class="m-0 relative text-13xl font-semibold font-inherit z-[1] mq450:text-lgi mq1050:text-7xl">Hubungi Kami</h1>
            <div class="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-gray1-100">
              <p class="m-0 flex-1 relative inline-block max-w-full z-[1]">
                <span class="block">Sekretariat Daerah Provinsi Lampung</span>
                <span class="block">Jl. WR.Mongonsidi No.69 Teluk Betung </span>
                <span class="block">Bandar Lampung</span>
              </p>
            </div>
            <div class="w-[310px] flex flex-col items-start justify-start gap-[16px]">
              <div class="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <!-- Nomor Telepon -->
                <div class="flex flex-row items-start justify-start gap-[21px]">
                  <img class="h-[27px] w-[27px] relative min-h-[27px] z-[1]" loading="lazy" alt="" />
                  <div class="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div class="relative font-medium inline-block min-w-[104px] z-[1]">(0721) 481107</div>
                  </div>
                </div>
                <!-- Email -->
                <div class="self-stretch flex flex-row items-start justify-start gap-[18px]">
                  <img class="self-stretch w-[30px] relative max-h-full min-h-[22px] z-[1]" loading="lazy" alt="" />
                  <div class="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div class="relative font-medium whitespace-nowrap z-[1]">birohukum@lampungprov.go.id</div>
                  </div>
                </div>
              </div>
              <!-- Jam Kerja -->
              <div class="flex flex-row items-start justify-start gap-[18px]">
                <img class="h-[30px] w-[30px] relative min-h-[30px] z-[1]" loading="lazy" alt="" />
                <div class="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                  <div class="relative font-medium whitespace-nowrap z-[1]">Senin - Jumat, 08:00 - 15:30 WIB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <footer class=" bg-[#004E43] self-stretch h-[147px] relative bg-darkslategray z-[1]"></footer>
      <div class="absolute !m-[0] bottom-[73px] left-[calc(50%_-_461px)] text-base font-medium text-powderblue text-center z-[2] text-[#9AD0C2]">
        Jaringan Dokumentasi dan Informasi Hukum | Kantor Biro Hukum Provinsi Lampung © 2024. All Rights Reserved.
      </div>
    </div>
  </section>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FooterComponent",
  });
</script>

<style scoped>
/* Tambahkan gaya khusus di sini jika diperlukan */
</style>