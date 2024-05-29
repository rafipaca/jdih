<template>
    <div
      class="w-[29.188rem] shrink-0 flex flex-col items-start justify-start gap-[2.125rem] text-left text-[1rem] text-powderblue font-montserrat"
    >
      <div
        class="self-stretch flex flex-row items-start justify-start max-w-full"
      >
        <div
          class="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.687rem] box-border relative gap-[0.593rem] max-w-full"
        >
          <img
            class="self-stretch h-[16.375rem] relative rounded-t-xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-42@2x.png"
          />
          <textarea
            class="[border:none] bg-white h-[10.125rem] w-full [outline:none] absolute !m-[0] right-[0rem] bottom-[0rem] left-[0rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-t-xl rounded-b-none"
            rows="8"
            cols="23"
          />
          <div
            class="flex flex-row items-start justify-start py-[0rem] px-[1.125rem]"
          >
            <b class="relative whitespace-pre-wrap z-[1]">2 Mei 2024 | Video</b>
          </div>
          <div
            class="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.062rem] box-border max-w-full text-gray-200"
          >
            <div
              class="flex-1 flex flex-col items-start justify-start gap-[1.187rem] max-w-full"
            >
              <div class="self-stretch relative capitalize font-semibold z-[1]">
                Pelantikan PJ Bupati Tulang Bawang Barat dan Pengukuhan kembali PJ
                Bupati Pringsewu dan Mesuji
              </div>
              <b class="relative font-semibold text-gray-100 z-[1]"
                >selengkapnya ...</b
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full"
      >
        <div class="flex-1 flex flex-row items-start justify-start max-w-full">
          <div
            class="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.687rem] box-border relative gap-[0.593rem] max-w-full"
          >
            <img
              class="self-stretch h-[16.375rem] relative rounded-t-xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/rectangle-42@2x.png"
            />
            <textarea
              class="[border:none] bg-white h-[10.125rem] w-full [outline:none] absolute !m-[0] right-[0rem] bottom-[0rem] left-[0rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-t-xl rounded-b-none"
              rows="8"
              cols="23"
            />
            <div
              class="flex flex-row items-start justify-start py-[0rem] px-[1.125rem]"
            >
              <b class="relative whitespace-pre-wrap z-[1]">2 Mei 2024 | Video</b>
            </div>
            <div
              class="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.062rem] box-border max-w-full text-gray-200"
            >
              <div
                class="flex-1 flex flex-col items-start justify-start gap-[1.187rem] max-w-full"
              >
                <p
                  class="m-0 self-stretch relative capitalize font-semibold z-[1]"
                  :style="pelantikanPJBupatiStyle"
                >
                  Pelantikan PJ Bupati Tulang Bawang Barat dan Pengukuhan kembali
                  PJ Bupati Pringsewu dan Mesuji
                </p>
                <b class="relative font-semibold text-gray-100 z-[1]"
                  >selengkapnya ...</b
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
    import { defineComponent } from "vue";
  
    export default defineComponent({
      name: "Frame2",
      props: {
        propMargin: { type: [Object, Array, String, Number, Boolean] },
      },
      computed: {
        pelantikanPJBupatiStyle() {
          return {
            margin: this.propMargin,
          };
        },
      },
    });
  </script>
  