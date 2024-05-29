<template>
    <div
      class="self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[6.125rem] pr-[1.25rem] pl-[1.312rem] box-border max-w-full text-left text-[1rem] text-powderblue font-montserrat"
    >
      <div
        class="w-[92.188rem] flex flex-col items-end justify-start gap-[2.125rem] max-w-full mq750:gap-[1.063rem]"
      >
        <div
          class="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[2.187rem] text-center text-darkcyan"
        >
          <div
            class="w-[6.438rem] flex flex-col items-start justify-start gap-[1.5rem]"
          >
            <div
              class="flex flex-row items-start justify-start py-[0rem] pr-[1.687rem] pl-[1.625rem]"
            >
              <i class="relative inline-block italic min-w-[3.125rem]">Feed /</i>
            </div>
            <div
              class="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.625rem] text-[2.5rem] text-gray-200"
            >
              <h1
                class="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[6.438rem] mq450:text-[1.5rem] mq1050:text-[2rem]"
              >
                Feed
              </h1>
            </div>
            <div
              class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0.062rem]"
            >
              <div
                class="h-[0.25rem] flex-1 relative box-border border-t-[4px] border-solid border-teal"
              />
            </div>
          </div>
        </div>
        <div
          class="w-[92.188rem] overflow-x-auto flex flex-row items-start justify-start gap-[2.312rem] max-w-full mq750:gap-[1.125rem]"
        >
          <Frame2 /><Frame2 propMargin="unset" /><Frame2 propMargin="unset" />
        </div>
        <div
          class="self-stretch grid flex-row items-start justify-start gap-[2.375rem] max-w-full grid-cols-[repeat(3,_minmax(349px,_1fr))] lg:justify-center lg:grid-cols-[repeat(2,_minmax(349px,_606px))] mq750:gap-[1.188rem] mq750:grid-cols-[minmax(349px,_1fr)]"
        >
          <FeedCard /><FeedCard propMargin="unset" /><FeedCard
            propMargin="unset"
          />
        </div>
      </div>
    </div>
  </template>
  <script>
    import { defineComponent } from "vue";
    import Frame2 from "./Frame2.vue";
    import FeedCard from "./FeedCard.vue";
  
    export default defineComponent({
      name: "Frame1",
      components: { Frame2, FeedCard },
    });
  </script>
  