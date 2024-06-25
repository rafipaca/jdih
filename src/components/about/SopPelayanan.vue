<template>
  <div class="flex flex-col gap-4 p-6 bg-white rounded-lg custom-shadow">
    <!-- SOP Pelayanan -->
    <div class="flex flex-col my-4 border-white rounded-lg p-4">
        <div class="border-gray-100 border-2 rounded-xl px-8 py-5">
        <h2 class="text-2xl font-semibold text-center warna-font mb-5 -mt-9 bg-white px-2 mx-auto w-fit">SOP Pelayanan</h2>
    <div class="w-full">
      <img
        src="@/assets/sop1.png"
        alt="sop1"
        class="w-full rounded-lg border border-gray-200 mb-4"
      />
    </div>
    <div class="w-full">
      <img
        src="@/assets/sop2.png"
        alt="sop2"
        class="w-full rounded-lg border border-gray-200 mb-4"
      />
    </div>
    <div class="w-full">
      <img
        src="@/assets/sop3.png"
        alt="sop3"
        class="w-full rounded-lg border border-gray-200 mb-4"
      />
    </div>
    <div class="w-full">
      <img
        src="@/assets/sop4.png"
        alt="sop4"
        class="w-full rounded-lg border border-gray-200 mb-4"
      />
    </div>
    <div class="w-full">
      <img src="@/assets/sop5.png" alt="sop5" class="w-full rounded-lg border border-gray-200" />
    </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SopPelayanan'
}
</script>

<style scoped>
.custom-shadow {
  box-shadow:
    0 1px 20px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
}

img {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

@media (min-width: 768px) {
  .flex {
    margin: 0 auto;
  }
}
.warna-font {
  color: #2D9596;
}
</style>
