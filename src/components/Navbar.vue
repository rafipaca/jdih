<template>
    <div
      class="absolute top-[0rem] left-[0rem] bg-teal w-full overflow-hidden flex flex-row items-start justify-between py-[1rem] px-[10.062rem] box-border max-w-full gap-[1.25rem] z-[1] text-left text-[2rem] text-white font-league-spartan mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border mq1050:flex-wrap mq1050:pl-[5rem] mq1050:pr-[5rem] mq1050:box-border"
    >
      <div class="flex flex-col items-start justify-start gap-[0.125rem]">
        <div
          class="flex flex-row items-start justify-start py-[0rem] px-[0.875rem]"
        >
          <img
            class="h-[1.063rem] w-[2.125rem] relative object-cover"
            loading="lazy"
            alt=""
            src="/jdih-lampung-1@2x.png"
          />
        </div>
        <a
          class="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[3.875rem] mq450:text-[1.188rem] mq1050:text-[1.625rem]"
          >JDIH</a
        >
      </div>
      <div
        class="w-[39.438rem] flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border max-w-full text-center text-[1rem] font-montserrat"
      >
        <div
          class="self-stretch flex flex-row items-start justify-start gap-[0.562rem] mq750:flex-wrap"
        >
          <a
            class="[text-decoration:none] flex-1 relative font-bold text-[inherit] inline-block min-w-[5.813rem] max-w-[9.438rem] cursor-pointer"
            @click="onBerandaTextClick"
            >Beranda</a
          >
          <a
            class="[text-decoration:none] flex-1 relative font-bold text-[inherit] inline-block min-w-[5.813rem] max-w-[9.438rem] cursor-pointer"
            @click="onDokumenTextClick"
            >Dokumen</a
          >
          <a
            class="[text-decoration:none] flex-1 relative font-bold text-[inherit] inline-block min-w-[5.813rem] max-w-[9.438rem] cursor-pointer"
            @click="onFeedTextClick"
            >Feed</a
          >
          <a
            class="[text-decoration:none] flex-1 relative font-bold text-[inherit] inline-block min-w-[5.813rem] max-w-[9.438rem] cursor-pointer"
            @click="onTentangKamiTextClick"
            >Tentang Kami</a
          >
        </div>
      </div>
    </div>
  </template>
  <script>
    import { defineComponent } from "vue";
  
    export default defineComponent({
      name: "Navbar",
      methods: {
        onBerandaTextClick() {
          // Please sync "Beranda" to the project
        },
        onDokumenTextClick() {
          // Please sync "dokumen" to the project
        },
        onFeedTextClick() {
          this.$router.push("/");
        },
        onTentangKamiTextClick() {
          // Please sync "Tentang Kami" to the project
        },
      },
    });
  </script>
  