<template>
  <div
    class="w-full h-[312.5rem] relative bg-white overflow-hidden leading-[normal] tracking-[normal] mq450:h-auto mq450:min-h-[5000]"
  >
    <img
      class="absolute top-[0rem] left-[0rem] w-[120rem] h-[12.063rem] object-contain"
      alt=""
      src="/group-34@2x.png"
    />
    <section
      class="absolute top-[13.813rem] left-[0rem] w-full flex flex-col items-start justify-start gap-[2.125rem] max-w-full text-left text-[1.5rem] text-teal font-montserrat mq750:gap-[1.063rem]"
    >
      <Frame1 />
      <div
        class="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.75rem] pl-[1.25rem] box-border max-w-full"
      >
        <div
          class="flex flex-row items-start justify-center gap-[1.125rem] max-w-full mq450:flex-wrap"
        >
          <div class="h-[2.438rem] w-[2.438rem] relative rounded-mini bg-powderblue">
            <div
              class="absolute top-[0rem] left-[0rem] rounded-mini bg-powderblue w-full h-full hidden"
            />
            <img
              class="absolute top-[0.75rem] left-[0.938rem] w-[0.631rem] h-[0.975rem] object-contain z-[1]"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div class="flex flex-row items-start justify-start gap-[0.562rem]">
            <div
              class="bg-teal flex flex-row items-start justify-start py-[0.312rem] pr-[0.875rem] pl-[0.937rem] text-white"
            >
              <div class="h-[2.438rem] w-[2.438rem] relative bg-teal hidden" />
              <b
                class="relative font-bold inline-block min-w-[0.625rem] z-[1] mq450:text-[1.188rem]"
                >1</b
              >
            </div>
            <div
              class="bg-white flex flex-row items-start justify-start py-[0.312rem] px-[0.75rem]"
            >
              <div class="h-[2.438rem] w-[2.438rem] relative bg-white hidden" />
              <b
                class="relative font-bold inline-block min-w-[0.938rem] z-[1] mq450:text-[1.188rem]"
                >2</b
              >
            </div>
            <div
              class="bg-white flex flex-row items-start justify-start py-[0.312rem] px-[0.75rem]"
            >
              <div class="h-[2.438rem] w-[2.438rem] relative bg-white hidden" />
              <b
                class="relative font-bold inline-block min-w-[0.938rem] z-[1] mq450:text-[1.188rem]"
                >3</b
              >
            </div>
            <div
              class="bg-white flex flex-row items-start justify-start py-[0.312rem] px-[0.687rem]"
            >
              <div class="h-[2.438rem] w-[2.438rem] relative bg-white hidden" />
              <b
                class="relative font-bold inline-block min-w-[1.063rem] z-[1] mq450:text-[1.188rem]"
                >4</b
              >
            </div>
            <div
              class="bg-white flex flex-row items-start justify-start py-[0.312rem] px-[0.75rem]"
            >
              <div class="h-[2.438rem] w-[2.438rem] relative bg-white hidden" />
              <b
                class="relative font-bold inline-block min-w-[0.938rem] z-[1] mq450:text-[1.188rem]"
                >5</b
              >
            </div>
            <div
              class="h-[2.438rem] w-[2.438rem] relative rounded-mini bg-powderblue"
            >
              <div
                class="absolute top-[0rem] left-[0rem] rounded-mini bg-powderblue w-full h-full hidden"
              />
              <img
                class="absolute top-[0.75rem] left-[0.938rem] w-[0.631rem] h-[0.975rem] z-[1]"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <Frame1 />
    </section>
    <div
      class="absolute top-[106.188rem] left-[63.5rem] w-[6.25rem] h-[6.25rem] overflow-hidden hidden"
    />
    <Navbar/>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Frame1 from "../components/Frame1.vue";
  import Frame from "../components/Frame.vue";
  import Navbar from "../components/Navbar.vue";

  export default defineComponent({
    name: "Feed",
    components: { Frame1, Frame, Navbar },
  });
</script>